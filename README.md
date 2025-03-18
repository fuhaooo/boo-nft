
<div align="center">
  <h1>🎃 Boo NFT Project 🎃</h1>
  <p>A spooky NFT collection built with Next.js and thirdweb</p>
  
  ![Boo NFT Banner](https://github.com/thirdweb-example/next-starter/assets/57885104/20c8ce3b-4e55-4f10-ae03-2fe4743a5ee8)
</div>

## 📋 Overview

Boo NFT is a Halloween-themed NFT collection project built on the blockchain. This project allows users to mint, view, and trade unique spooky NFTs with various traits and rarities.

### ✨ Key Features

- Mint unique Halloween-themed NFTs
- Connect with various wallets (MetaMask, Coinbase Wallet, etc.)
- Responsive design for all devices
- Interactive UI with spooky animations
- Real-time blockchain interactions

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (React framework)
- **Blockchain Integration**: [thirdweb](https://thirdweb.com/)
- **Styling**: Tailwind CSS
- **Animations**: Custom React components

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn or npm
- MetaMask or other Web3 wallet

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/boo-nft.git
cd boo-nft
```

2. Install dependencies

```bash
yarn install
# or
npm install
```

3. Set up environment variables

Create a `.env.local` file in the root directory and add:

```
NEXT_PUBLIC_CLIENT_ID=your_thirdweb_client_id
```

To create a client ID, refer to the [thirdweb client documentation](https://portal.thirdweb.com/typescript/v5/client).

### Development

Start the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

Build for production:

```bash
yarn build
# or
npm run build
```

Run the production build:

```bash
yarn start
# or
npm start
```

## 🧪 Testing

Run tests with:

```bash
yarn test
# or
npm test
```

## 📁 Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── app/         # Next.js app router
│   ├── components/  # React components
│   ├── hooks/       # Custom React hooks
│   ├── lib/         # Utility functions
│   └── styles/      # Global styles
├── .env.example     # Example environment variables
└── README.md        # Project documentation
```

## 🔗 Resources

- [thirdweb Documentation](https://portal.thirdweb.com/typescript/v5)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [thirdweb Templates](https://thirdweb.com/templates)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support

For questions, feedback, or support, please [open an issue](https://github.com/fuhaooo/boo-nft/issues) or contact the team at example@email.com.

---

<div align="center">
  <p>Built with 💜 by the Boo NFT Team</p>
</div>

## 📚 详细教程 (Tutorial in Chinese)

### 实用工具
- [OpenZeppelin](https://www.openzeppelin.com/solidity-contracts) - 智能合约库，有很多现成的ERC合约模板
- [Alchemy](https://www.alchemy.com/) - 区块链开发平台，为开发者提供区块链节点服务和API接口，帮助开发者快速接入区块链网络，无需自行搭建和维护节点
- [Thirdweb](https://thirdweb.com/) - 全栈式的 Web3 开发平台，旨在简化去中心化应用的构建、部署和管理过程
- [NFTGenerator](https://nftgenerator.ai/) - NFT生成器，能够自动编排多层级的NFT集合
- [Pinata](https://pinata.cloud/) - IPFS存储平台

### 构建 NFT Minting 页面

- 官方文字教程：[NFT Minting Website Guide](https://blog.thirdweb.com/guides/nft-minting-website/)
- 视频教程：[YouTube Tutorial](https://www.youtube.com/watch?v=EI-nm1sLe3U)
- GitHub 仓库：[https://github.com/fuhaooo/boo-nft](https://github.com/fuhaooo/boo-nft)

#### 一、前期准备

1、 安装MetaMask插件（Chrome浏览器插件），同时创建自己的钱包，保护好“助记词”和“私钥”，除了自己以外的任何人都不要告诉！

2、 下载多层级、不同稀有度、不同特征的无聊猿NFT素材，[立即下载](https://pan.quark.cn/s/6b2ae8e8ce25)。

3、 点击`Add to MetaMask`按钮，添加Monad测试网，并在OpenBuild的[领水界面](https://faucet.openbuild.xyz/monad?code=231d66aa-384b-4354-b0f8-5fedce06b56e)输入钱包地址，点击`Get Testnet MON`进行领水，需要绑定github账号。

![faucet](/thirdweb/faucet.png)

#### 二、Thirdweb 0代码部署合约

1、借助[thirdweb](https://thirdweb.com/) 实现一个简单的NFT Minting页面，不需要手动写智能合约代码，首先在官网完成注册。
![注册](/thirdweb/0.png)

2、注册账号后，确认钱包已连接，点击`NFT Drop`
![nft drop](/thirdweb/1.png)

3、会看到NFT Drop页面和详细介绍，点击`Deploy Now`开始部署
![deploy now](/thirdweb/2.png)

4、填写NFT相关元数据，同时可以设置NFT发生二次销售时，收取的版税。这里的两个钱包地址均是自动填写的，即为自己的钱包地址。
![meta data](/thirdweb/3.png)

往下滑，还需要设置合约部署的区块链网络，一般我们部署demo，就选择测试网即可，常用的测试网有Sepolia等。本节课我们使用Monad Testnet，因为已经在前面通过Openbuild网站进行领水，所以我们拥有了在Monad Testnet上部署合约和交易的Gas费。
![chain](/thirdweb/4.png)

5、点击部署，MetaMask钱包会弹出一个交易请求的小窗口，我们点击确认
![transaction](/thirdweb/5.png)

等待一小段时间后，可能会看到交易成功，这代表我们的NFT合约已经成功部署到Monad Testnet的区块链网络上了
![success](/thirdweb/6.png)

6、我们点击`View Contract`按钮，会跳转到另一个页面，同时我们也会看到一个Checklist，这是一个引导我们，必须按照顺序完成的步骤列表。在NFT的名称下面，我们也可以查看当前合约的地址和详细信息。
![view contract](/thirdweb/7.png)

7、接着我们在左边Extensions下面，点击`NFTs`的Tab页，可以上传我们的NFT图片。可以上传单个NFT图片，也可以批量进行上传。
![nft](/thirdweb/8.png)

> 这里批量上传的情况下，我们可能需要借助其他IPFS存储服务，如Pinata等。IPFS是一个分布式文件存储系统，可以将文件存储到网络上，同时也可以通过URL直接访问。我们一般看到的NFT图片，本质上是IPFS存储的文件，区块链只负责存储和分发，不负责存储文件的完整性。
![pinata](/thirdweb/9.png)

8、由于这里我想要实现多层级，不同特征和稀有度的NFT，所以我们选择批量上传，同时上传的Metadata元数据已经替大家打包好了，可以[下载使用](https://pan.quark.cn/s/6b2ae8e8ce25)。注意需要上传的是Json文件，Json文件内包含了NFT的元数据。
![batch upload](/thirdweb/10.png)

9、往下翻点击`Next`，我们需要选择是否延迟Reveal NFT的元数据。延迟揭示，就是类似盲盒，我们需要再上传一个封面，以及设置具体揭示的时间。这样大家一开始Mint的时候，在未揭示之前看到的都是相同的，只有揭示后才能看到不同的NFT。
![delay reveal](/thirdweb/11.png)

10、接着我们在左边Extensions下面，点击`Claim Conditions`的Tab页，点击`Add Phase`按钮，可以添加多个不同的销售阶段
![add phase](/thirdweb/13.png)

同时在具体的销售阶段内，我们可以设置NFT的销售价格、发行量、每个钱包地址的可Mint的数量等信息。
![claim conditions](/thirdweb/12.png)

#### 三、AI开发前端页面

1、在完成上述这一些列设置后，我们就可以开始着手用AI开发，NFT的Minting Page了。这里我们也是需要借助thridweb的cli来实现。
```
npm i -g @thirdweb-dev/cli
```
等待安装好cli后，我们可以用命令开始创建项目。--next代表我们要构建next项目，不加这个参数，可以选择构建其他应用。
```bash
npx thirdweb create app --next
```
![create app](/thirdweb/15.png)

2、初始化项目后，我们就可以使用Windsurf、Cursor等AI IDE工具，开始写代码了。我们首先要在.env文件中配置Thirdweb的Client ID。
![ide](/thirdweb/16.png)

在Thirdweb官网创建项目的时候，会生成这个Client ID，可以在Create Project页面点击具体的项目查看
![client id](/thirdweb/18.png)

3、使用`yarn dev`命令启动项目，会在本地打开一个浏览器页面。
![yarn dev](/thirdweb/17.png)

4、使用下列提示词，进行项目构建，Claude 3.7 Sonnet
```tsx
我正在开发一个 NFT Minting Page，使用 thirdweb 的 TypeScript 钩子函数与我的 ERC721 合约交互。
合约已部署在 Monad Testnet 上，地址为 `0x11111111111111【替换成自己在Thirdweb上部署的合约】`。
我希望你能帮助我构建一个精美的 NFT Claim 页面，展示 NFT 的标题、描述、总供应量、已 Claim 的数量，并实时更新这些信息。此外，页面还需展示 NFT 的价格和图），并允许每个钱包地址只能 Mint 一个 NFT。

请根据以下信息和要求，开发一个完整的 React 组件：

1. **合约和链信息：**
   - 合约地址：`0x01111111111【替换成自己在Thirdweb上部署的合约】`
   - 链：Monad Testnet
     - RPC URL: `https://testnet-rpc.monad.xyz`
     - ChainID: `10143` (十进制), `0x279F` (十六进制)
     - 原生代币：MON
     - Explorers:
       - `https://testnet.monadexplorer.com/`
       - `https://monad-testnet.socialscan.io/`

2. **页面功能：**
   - 从合约中获取并展示 NFT 的标题和描述（使用 getContractMetadata）。
   - 展示 NFT 的总供应量（使用 nextTokenIdToMint）和已 Claim 的数量（使用 getTotalClaimedSupply），并在有人 Mint NFT 后实时更新（考虑使用 useContractEvents 或定期轮询，但优先考虑使用 hooks 提供的实时更新能力）。
   - 展示 NFT 的价格（从 getActiveClaimCondition 获取 pricePerToken 并转换为可读格式，如 MON 单位），并静态显示图片 boo-nft.png（放置在 public 目录下）。
   - 创建一个 Mint NFT 按钮，使用 claimTo 函数实现 Mint 功能，并限制每个钱包地址只能 Mint 一个 NFT（通过 getTotalClaimedSupply 和用户的已 Mint 数量或 ClaimCondition 的 maxClaimablePerWallet 实现，请优先考虑使用 ClaimCondition 的 maxClaimablePerWallet，如果合约配置了，则直接使用其逻辑。如果未配置，则通过前端判断 getTotalClaimedSupply 是否大于 0 来简单限制每个地址 Mint 一个）。
   - 实现 Mint 成功后的提示信息。
   - 新增功能： 在 Mint 成功后，提供一个按钮或提示，允许用户将 NFT 添加到他们的钱包的资产列表中（使用 account?.watchAsset 方法，需要构造正确的 WatchAssetParams）。

3. **技术要求：**
   - 使用 thirdweb 的 TypeScript 钩子函数，如 useReadContract、useActiveAccount、TransactionButton 等。
   - 使用 defineChain 配置 Monad Testnet，并通过 getContract 初始化合约对象。请确保 defineChain 的配置正确，包括 rpcUrls 和 nativeCurrency。
   - 项目中已配置好 client 对象（Client ID 在 .env 文件中定义为 NEXT_PUBLIC_TEMPLATE_CLIENT_ID），请直接使用。
   - 使用 Tailwind CSS 类来美化页面，使其简洁美观。
   - 确保代码可运行并与 Monad Testnet 上的合约交互正常。

4. 避免之前遇到的问题：
   - 确保 defineChain 函数的参数格式正确。
   - 使用 useActiveAccount() 获取当前连接的钱包地址，而不是尝试使用 useWatchAccount()。
   - 正确处理 useReadContract 返回的 data 和 isLoading 状态。
   - 在 TransactionButton 的 transaction 函数中使用正确的参数调用 claimTo。
   - 在实现每个钱包地址只能 Mint 一个 NFT 的逻辑时，优先检查 claimCondition?.maxClaimablePerWallet，如果存在且大于 0，则 thirdweb 会自动处理限制。如果 maxClaimablePerWallet 未配置或为 0，则可以通过判断 claimedSupply.data 是否大于 0 来简单限制（但这并非完美方案，仅作为无 maxClaimablePerWallet 配置时的简单限制）。   

5. **参考代码：**
   - 请参考以下代码片段的结构和逻辑，调整链、合约地址和功能以满足我的需求：
   
   ```tsx
   use client';

   import Image from "next/image";
   import { ConnectButton, MediaRenderer, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
   import { client } from "./client";
   import { defineChain, getContract, toEther } from "thirdweb";
   import { getContractMetadata } from "thirdweb/extensions/common";
   import { claimTo, getActiveClaimCondition, getTotalClaimedSupply, nextTokenIdToMint } from "thirdweb/extensions/erc721";
   import { useState } from "react";

   export default function Home() {
     const account = useActiveAccount();
     const chain = defineChain(sepolia);
     const contract = getContract({
       client: client,
       chain: chain,
       address: "0xBb1d78c8799b33c5791ED6e49B84429c7106759E"
     });

     const { data: contractMetadata } = useReadContract(getContractMetadata, { contract });
     const { data: claimedSupply } = useReadContract(getTotalClaimedSupply, { contract });
     const { data: totalNFTSupply } = useReadContract(nextTokenIdToMint, { contract });
     const { data: claimCondition } = useReadContract(getActiveClaimCondition, { contract });

     const getPrice = (quantity: number) => {
       const total = quantity * parseInt(claimCondition?.pricePerToken.toString() || "0");
       return toEther(BigInt(total));
     };

     return (
       <main>
         <ConnectButton client={client} chain={chain} />
         <div>
           <MediaRenderer client={client} src={contractMetadata?.image} />
           <h2>{contractMetadata?.name}</h2>
           <p>{contractMetadata?.description}</p>
           <p>Total NFT Supply: {claimedSupply?.toString()}/{totalNFTSupply?.toString()}</p>
           <TransactionButton
             transaction={() => claimTo({
               contract: contract,
               to: account?.address || "",
               quantity: BigInt(1),
             })}
             onTransactionConfirmed={() => alert("NFT Claimed!")}
           >
             {`Claim NFT (${getPrice(1)} ETH)`}
           </TransactionButton>
         </div>
       </main>
     );
   }

期望输出：
- 一个完整的 React 组件（Home.tsx），包含所有功能的实现。
- 使用 Tailwind CSS 或类似样式美化页面。
- 确保代码可运行并与 Monad Testnet 上的合约交互正常。
- 请根据以上信息，帮助我开发这个 NFT Minting Page 组件。
```

5、如果有bug简单修改后，就可以使用`yarn dev`命令，看到前端页面了
![yarn dev](/thirdweb/19.png)

我们可以选择连接钱包来进行Mint NFT的操作。
> 这里NFT图片没有正常显示出来，应该是跟Thirdweb的IPFS服务有关系，但是当我们揭示的时候，使用的是Pinata的服务，应该不会有问题
![connect wallet](/thirdweb/20.png)

20、使用Vercel部署你的第一个Web3服务
![deploy service](/thirdweb/21.png)

21、分享你的页面，让更多人来Mint NFT吧

Demo展示环节：[Alfred's Boo NFT](https://boo-c7b30oe45-fuhaooos-projects.vercel.app/) 2025年4月1日揭示

![share page](/thirdweb/22.png)