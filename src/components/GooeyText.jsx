import { useRef, useEffect } from 'react';
import './GooeyText.css';

const GooeyText = ({
    texts,
    morphTime = 1.5,
    cooldownTime = 0.5,
    className = '',
    textClassName = ''
}) => {
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    useEffect(() => {
        if (!texts || texts.length === 0) return;

        let textIndex = texts.length - 1;
        let time = new Date();
        let morph = 0;
        let cooldown = cooldownTime;
        let animationId;

        const setMorph = (fraction) => {
            if (text1Ref.current && text2Ref.current) {
                text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
                text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

                const inverseFraction = 1 - fraction;
                text1Ref.current.style.filter = `blur(${Math.min(8 / inverseFraction - 8, 100)}px)`;
                text1Ref.current.style.opacity = `${Math.pow(inverseFraction, 0.4) * 100}%`;
            }
        };

        const doCooldown = () => {
            morph = 0;
            if (text1Ref.current && text2Ref.current) {
                text2Ref.current.style.filter = '';
                text2Ref.current.style.opacity = '100%';
                text1Ref.current.style.filter = '';
                text1Ref.current.style.opacity = '0%';
            }
        };

        const doMorph = () => {
            morph -= cooldown;
            cooldown = 0;
            let fraction = morph / morphTime;

            if (fraction > 1) {
                cooldown = cooldownTime;
                fraction = 1;
            }

            setMorph(fraction);
        };

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            const newTime = new Date();
            const shouldIncrementIndex = cooldown > 0;
            const dt = (newTime.getTime() - time.getTime()) / 1000;
            time = newTime;

            cooldown -= dt;

            if (cooldown <= 0) {
                if (shouldIncrementIndex) {
                    textIndex = (textIndex + 1) % texts.length;
                    if (text1Ref.current && text2Ref.current) {
                        text1Ref.current.textContent = texts[textIndex % texts.length];
                        text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
                    }
                }
                doMorph();
            } else {
                doCooldown();
            }
        };

        // Initialize text content
        if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[textIndex % texts.length];
            text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
        }

        animate();

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [texts, morphTime, cooldownTime]);

    return (
        <div className={`gooey-text ${className}`}>
            <svg className="gooey-text__filter" aria-hidden="true" focusable="false">
                <defs>
                    <filter id="gooey-threshold">
                        <feColorMatrix
                            in="SourceGraphic"
                            type="matrix"
                            values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
                        />
                    </filter>
                </defs>
            </svg>

            <div className="gooey-text__container" style={{ filter: 'url(#gooey-threshold)' }}>
                <span ref={text1Ref} className={`gooey-text__text ${textClassName}`} />
                <span ref={text2Ref} className={`gooey-text__text ${textClassName}`} />
            </div>
        </div>
    );
};

export default GooeyText;
