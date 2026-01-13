import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

const CodeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const columns = Math.floor(width / 20);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start at random positions above
    }

    const chars = '0123456789ABCDEF<>{}/[];=+-*const let var function return import export';
    
    const draw = () => {
      // Fade effect trail
      ctx.fillStyle = theme === 'dark' ? 'rgba(10, 10, 15, 0.05)' : 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = '15px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Color based on theme
        if (theme === 'dark') {
            // Neon matrix style
            ctx.fillStyle = Math.random() > 0.95 ? '#fff' : '#00f3ff'; // Occasional white flash
        } else {
            // Light mode tech style
            ctx.fillStyle = Math.random() > 0.95 ? '#000' : '#4f46e5'; // Indigo
        }

        ctx.fillText(text, i * 20, drops[i] * 20);

        // Reset drop to top randomly
        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    let animationFrameId: number;
    const animate = () => {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
    />
  );
};

export default CodeBackground;
