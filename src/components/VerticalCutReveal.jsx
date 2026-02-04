import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './VerticalCutReveal.css';

const VerticalCutReveal = ({
    children,
    splitBy = 'words',
    staggerDuration = 0.1,
    staggerFrom = 'first',
    delay = 0,
    className = ''
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    // Split text into segments
    const text = typeof children === 'string' ? children : '';
    const segments = splitBy === 'words'
        ? text.split(' ')
        : text.split('');

    // Calculate delay for each segment
    const getDelay = (index) => {
        const baseDelay = delay;
        if (staggerFrom === 'last') {
            return baseDelay + (segments.length - 1 - index) * staggerDuration;
        }
        return baseDelay + index * staggerDuration;
    };

    return (
        <span ref={ref} className={`vertical-cut-reveal ${className}`}>
            {segments.map((segment, index) => (
                <span key={index} className="vertical-cut-reveal__word-wrapper">
                    <motion.span
                        className="vertical-cut-reveal__word"
                        initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
                        animate={isInView ? {
                            y: 0,
                            opacity: 1,
                            filter: 'blur(0px)'
                        } : {}}
                        transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 25,
                            delay: getDelay(index)
                        }}
                    >
                        {segment}
                    </motion.span>
                    {splitBy === 'words' && index < segments.length - 1 && (
                        <span className="vertical-cut-reveal__space">&nbsp;</span>
                    )}
                </span>
            ))}
        </span>
    );
};

export default VerticalCutReveal;
