import React, { useEffect, useRef } from 'react';

interface FireworksProps {
  isActive: boolean;
}

const Fireworks: React.FC<FireworksProps> = ({ isActive }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!isActive || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasDimensions();
    window.addEventListener('resize', updateCanvasDimensions);
    
    // Firework particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor(x: number, y: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = color;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.1;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create fireworks
    let particles: Particle[] = [];
    const colors = ['#FF5252', '#FFD740', '#64FFDA', '#448AFF', '#E040FB', '#FF4081'];
    
    const createFirework = (x: number, y: number) => {
      const particleCount = 100;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(x, y, Math.random() * 2 + 1, color));
      }
    };
    
    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        // Remove particles that are too small
        if (particle.size <= 0.1) {
          particles.splice(index, 1);
        }
      });
      
      // Create new fireworks randomly
      if (Math.random() < 0.05) {
        createFirework(
          Math.random() * canvas.width,
          Math.random() * canvas.height * 0.6
        );
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Initial fireworks
    for (let i = 0; i < 5; i++) {
      createFirework(
        Math.random() * canvas.width,
        Math.random() * canvas.height * 0.5
      );
    }
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);
  
  if (!isActive) return null;
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default Fireworks;
