"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ConnectButton,
  MediaRenderer,
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import { client } from "./client";
import {
  defineChain,
  getContract,
  toEther,
  toUnits,
} from "thirdweb";
import { getContractMetadata } from "thirdweb/extensions/common";
import {
  claimTo,
  getActiveClaimCondition,
  getTotalClaimedSupply,
  nextTokenIdToMint,
  balanceOf,
} from "thirdweb/extensions/erc721";

// Type definitions for watchAsset function
type WatchAssetParams = {
  type: 'ERC20';
  options: {
    address: string;
    symbol?: string;
    decimals?: number;
    image?: string;
  };
};

// Define Monad Testnet chain configuration
const monadTestnet = {
  id: 10143,
  name: "Monad Testnet",
  network: "monad-testnet",
  nativeCurrency: {
    name: "MON",
    symbol: "MON",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.monad.xyz"],
    },
    public: {
      http: ["https://testnet-rpc.monad.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Monad Explorer",
      url: "https://testnet.monadexplorer.com",
    },
    etherscan: {
      name: "SocialScan",
      url: "https://monad-testnet.socialscan.io",
    },
  },
  testnet: true,
};

// Contract address
const NFT_CONTRACT_ADDRESS = "0x06654B8F8B7B4707836dd28260c13a59fFEa67D3";

export default function Home() {
  // Get active wallet account
  const account = useActiveAccount();
  
  // State for fireworks effect

  // Define chain and contract
  const chain = defineChain(monadTestnet);
  const contract = getContract({
    client: client,
    chain: chain,
    address: NFT_CONTRACT_ADDRESS,
  });

  // Read contract data
  const { data: contractMetadata, isLoading: isLoadingMetadata } = useReadContract(getContractMetadata, { contract });
  const { data: claimedSupply, isLoading: isLoadingClaimed } = useReadContract(getTotalClaimedSupply, { contract });
  const { data: totalNFTSupply, isLoading: isLoadingSupply } = useReadContract(nextTokenIdToMint, { contract });
  const { data: claimCondition, isLoading: isLoadingClaimCondition } = useReadContract(getActiveClaimCondition, { contract });
  
  // Check if current wallet has already claimed an NFT
  const { data: walletBalance, isLoading: isLoadingBalance } = useReadContract(
    balanceOf, 
    { 
      contract,
      owner: account?.address || "0x0000000000000000000000000000000000000000",
    }
  );

  // Calculate price in MON
  const getPrice = () => {
    if (!claimCondition?.pricePerToken) return "0";
    return toEther(claimCondition.pricePerToken);
  };

  // Check if user can claim (hasn't already claimed)
  const canClaim = account && walletBalance !== undefined && walletBalance < 1n;

  // Error state management
  const [error, setError] = useState<string | null>(null);
  const [mintSuccess, setMintSuccess] = useState(false);
  const [watchAssetSuccess, setWatchAssetSuccess] = useState(false);

  // Reset error and success messages when account changes
  useEffect(() => {
    setError(null);
    setMintSuccess(false);
    setWatchAssetSuccess(false);
  }, [account]);

  return (
    <main className="min-h-[100vh] bg-gradient-to-br from-purple-900 to-indigo-800 flex items-center justify-center p-4 relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0 opacity-10">
        <Image 
          src="/1.png" 
          alt="Boo Background" 
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
      </div>
      
      <div className="max-w-4xl w-full bg-zinc-900 rounded-xl overflow-hidden shadow-2xl relative z-10">
        {/* Twitter Button in top right corner */}
        <div className="absolute top-4 right-4 z-20">
          <a 
            href="https://x.com/Alfredfuuu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 px-4 bg-[#1DA1F2] hover:bg-[#1a91da] text-white rounded-full transition-colors shadow-lg text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Follow @Alfredfuuu
          </a>
        </div>
        {/* Header - NFT Image and Connect Wallet */}
        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-[320px] aspect-square rounded-lg overflow-hidden">
              {contractMetadata?.image ? (
                <div className="w-full h-full">
                  <MediaRenderer
                    client={client}
                    src={contractMetadata?.image}
                    alt={contractMetadata?.name || "Boo NFT"}
                  />
                </div>
              ) : (
                <Image
                  src="/boo-nft.png"
                  alt="Boo NFT"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {isLoadingMetadata ? "Loading..." : contractMetadata?.name || "Boo NFT Collection"}
            </h1>
            <p className="text-zinc-300">
              {isLoadingMetadata ? "Loading..." : contractMetadata?.description || "A spooky NFT collection on Monad Testnet"}
            </p>

            <div className="mt-2 flex justify-center">
              <ConnectButton
                client={client}
                chain={chain}
                appMetadata={{
                  name: "Boo NFT Minting",
                  url: "https://boo-nft.vercel.app",
                }}
              />
            </div>
          </div>
        </div>

        {/* NFT Details & Mint Section */}
        <div className="border-t border-zinc-800 p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
            <div className="flex-1">
              <h3 className="text-zinc-400 text-sm font-medium mb-2">COLLECTION STATUS</h3>
              <p className="text-2xl font-bold text-white">
                {isLoadingClaimed || isLoadingSupply
                  ? "Loading..."
                  : `${claimedSupply?.toString() || "0"}/${totalNFTSupply?.toString() || "0"}`}
              </p>
              <p className="text-zinc-400 text-sm mt-1">NFTs claimed</p>
            </div>

            <div className="flex-1">
              <h3 className="text-zinc-400 text-sm font-medium mb-2">PRICE</h3>
              <p className="text-2xl font-bold text-white">
                {isLoadingClaimCondition ? "Loading..." : `${getPrice()} MON`}
              </p>
              <p className="text-zinc-400 text-sm mt-1">Per NFT</p>
            </div>

            <div className="flex-1">
              <h3 className="text-zinc-400 text-sm font-medium mb-2">LIMIT</h3>
              <p className="text-2xl font-bold text-white">1 NFT</p>
              <p className="text-zinc-400 text-sm mt-1">Per wallet</p>
            </div>
          </div>

          {error && (
            <div className="bg-red-900/30 border border-red-500 rounded-lg p-4 mb-6 text-red-200">
              {error}
            </div>
          )}

          {mintSuccess && (
            <div className="bg-green-900/30 border border-green-500 rounded-lg p-4 mb-6 text-green-200">
              Successfully minted your Boo NFT! 👻
              {account && !watchAssetSuccess && (
                <div className="mt-3 flex justify-center">
                  <button 
                    onClick={async () => {
                      try {
                        if (account.watchAsset) {
                          const success = await account.watchAsset({
                            type: 'ERC20',
                            options: {
                              address: NFT_CONTRACT_ADDRESS,
                              symbol: 'BOO',
                              decimals: 0
                              // 注意：由于类型限制，我们无法直接添加 tokenId
                              // 但这样至少可以将合约添加到钱包中
                            }
                          });
                          setWatchAssetSuccess(success);
                        } else {
                          setError('Your wallet does not support adding tokens');
                        }
                      } catch (err) {
                        console.error('Watch asset error:', err);
                        setError(typeof err === 'string' ? err : 
                                err instanceof Error ? err.message : 'Failed to add NFT to wallet');
                      }
                    }}
                    className="py-2 px-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg transition-colors text-white text-sm font-medium shadow-lg"
                  >
                    Add NFT to Wallet
                  </button>
                </div>
              )}
              {watchAssetSuccess && (
                <div className="mt-3 flex justify-center">
                  <p className="py-2 px-4 bg-green-800/50 rounded-lg text-green-200 text-sm flex items-center">
                    <span className="mr-1">✅</span> NFT added to your wallet
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-center">
            {!account ? (
              <div className="py-3 px-8 text-lg font-bold text-white rounded-lg shadow-lg bg-zinc-700 cursor-not-allowed">
                Connect Wallet to Mint
              </div>
            ) : isLoadingBalance ? (
              <div className="py-3 px-8 text-lg font-bold text-white rounded-lg shadow-lg bg-zinc-700">
                Checking Wallet...
              </div>
            ) : walletBalance !== undefined && walletBalance >= 1n ? (
              <div className="py-3 px-8 text-lg font-bold text-white rounded-lg shadow-lg bg-zinc-700 cursor-not-allowed">
                You Already Claimed an NFT
              </div>
            ) : (
              <TransactionButton
                  className="py-3 px-8 text-lg font-bold text-white rounded-lg shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
                  transaction={async () => {
                    if (!account) {
                      throw new Error("Please connect your wallet");
                    }

                    if (walletBalance !== undefined && walletBalance >= 1n) {
                      throw new Error("You have already claimed a Boo NFT");
                    }
                    
                    try {
                      setError(null);
                      const result = await claimTo({
                        contract: contract,
                        to: account.address,
                        quantity: 1n,
                      });
                      
                      // 处理成功状态
                      setMintSuccess(true);
                      setError(null);
                      
                      return result;
                    } catch (err) {
                      // 处理错误状态
                      console.error("Transaction error:", err);
                      setError(typeof err === "string" ? err : err instanceof Error ? err.message : "Failed to mint NFT");
                      setMintSuccess(false);
                      throw err; // 重新抛出错误，让 TransactionButton 知道交易失败
                    }
                  }}
                >
                  Mint Boo NFT for {getPrice()} MON
                </TransactionButton>
            )}
          </div>

          <div className="mt-6 text-center text-zinc-500 text-sm">
            <p>
              Contract: <a href={`https://testnet.monadexplorer.com/address/${NFT_CONTRACT_ADDRESS}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-400 transition-colors">{`${NFT_CONTRACT_ADDRESS.slice(0, 6)}...${NFT_CONTRACT_ADDRESS.slice(-4)}`}</a>
            </p>
          </div>
          

        </div>
      </div>
    </main>
  );
}
