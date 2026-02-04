import { useEffect, useRef } from 'react';
import './BinaryRain.css';

const BinaryRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;
        let columns = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initColumns();
        };

        const initColumns = () => {
            const fontSize = 16;
            const spacing = 45; // Closer spacing for more columns
            const numColumns = Math.floor(canvas.width / spacing);
            columns = [];

            for (let i = 0; i < numColumns; i++) {
                // Each column has a trail of 4-7 characters
                const trailLength = 4 + Math.floor(Math.random() * 4);
                const chars = [];

                for (let j = 0; j < trailLength; j++) {
                    chars.push(Math.random() > 0.5 ? '1' : '0');
                }

                columns.push({
                    x: i * spacing + Math.random() * 20,
                    y: Math.random() * -200, // Start above screen at different heights
                    speed: 0.4 + Math.random() * 0.4, // Slow: 0.4 to 0.8
                    fontSize,
                    chars,
                    trailLength
                });
            }
        };

        const getTheme = () => {
            return document.documentElement.getAttribute('data-theme') || 'dark';
        };

        const draw = () => {
            const theme = getTheme();

            // Clear with theme background
            if (theme === 'light') {
                ctx.fillStyle = '#fafafa';
            } else {
                ctx.fillStyle = '#0a0a0a';
            }
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = '16px monospace';

            // Draw each column
            columns.forEach((col) => {
                // Draw each character in the trail with fading opacity
                col.chars.forEach((char, i) => {
                    const charY = col.y - (i * col.fontSize * 1.2);

                    if (charY > -20 && charY < canvas.height + 20) {
                        // Fade from bottom (bright) to top (dim)
                        const opacity = 1 - (i / col.trailLength);
                        const adjustedOpacity = opacity * 0.35; // Max 35% opacity

                        if (theme === 'light') {
                            ctx.fillStyle = `rgba(0, 0, 0, ${adjustedOpacity})`;
                        } else {
                            ctx.fillStyle = `rgba(255, 255, 255, ${adjustedOpacity})`;
                        }

                        ctx.fillText(char, col.x, charY);
                    }
                });

                // Move column down
                col.y += col.speed;

                // Reset when fully off screen
                if (col.y - (col.trailLength * col.fontSize * 1.2) > canvas.height) {
                    col.y = Math.random() * -100 - 50;
                    col.speed = 0.4 + Math.random() * 0.4;
                    // Generate new characters
                    for (let j = 0; j < col.trailLength; j++) {
                        col.chars[j] = Math.random() > 0.5 ? '1' : '0';
                    }
                }
            });

            animationId = requestAnimationFrame(draw);
        };

        resizeCanvas();
        draw();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className="binary-rain" aria-hidden="true" />;
};

export default BinaryRain;
