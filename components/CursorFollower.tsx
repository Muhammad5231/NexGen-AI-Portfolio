import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useTheme } from './ThemeContext';

const CursorFollower: React.FC = () => {
  const { theme } = useTheme();
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference ${
           theme === 'dark' ? 'border-neon-blue' : 'border-blue-600'
        }`}
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.5 : 1,
        }}
      >
        <div className={`w-1 h-1 rounded-full ${theme === 'dark' ? 'bg-neon-blue' : 'bg-blue-600'}`} />
      </motion.div>
    </>
  );
};

export default CursorFollower;
