import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, Play, Code2 } from 'lucide-react';
import GooeyText from '../components/GooeyText';
import VerticalCutReveal from '../components/VerticalCutReveal';
import BinaryRain from '../components/BinaryRain';
import './Hero.css';

const morphingTexts = [
    'Websites',
    'CRM Systems',
    'eCommerce',
    'Digital Products',
    'Experiences'
];

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.hero__content',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    delay: 0.2,
                }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <section ref={heroRef} className="hero" id="hero">
            {/* Background Effects */}
            <div className="hero__bg">
                <BinaryRain />
                <div className="hero__gradient hero__gradient--1" />
                <div className="hero__gradient hero__gradient--2" />
                <div className="hero__vignette" />
            </div>

            <div className="container hero__container">
                <div className="hero__content">
                    {/* Badge */}
                    <motion.div
                        className="hero__badge"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Code2 size={14} className="hero__badge-icon" />
                        <span>Design Develop Deliver</span>
                    </motion.div>

                    {/* Main Title with GooeyText */}
                    <h1 className="hero__title">
                        <span className="hero__title-line">
                            <VerticalCutReveal
                                splitBy="words"
                                staggerDuration={0.15}
                                staggerFrom="first"
                                delay={0.3}
                            >
                                We Build Premium
                            </VerticalCutReveal>
                        </span>
                        <div className="hero__gooey-wrapper">
                            <GooeyText
                                texts={morphingTexts}
                                morphTime={1.5}
                                cooldownTime={1}
                                className="hero__gooey"
                                textClassName="hero__gooey-text"
                            />
                        </div>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        className="hero__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        From stunning websites to powerful CRM systems and scalable eCommerce stores —
                        we transform your vision into exceptional digital products that drive results.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="hero__cta-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn btn-primary hero__cta"
                        >
                            Start Your Project
                            <ArrowRight size={18} />
                        </button>
                        <button
                            onClick={() => scrollToSection('work')}
                            className="btn btn-secondary hero__cta"
                        >
                            <Play size={16} />
                            View Our Work
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="hero__stats"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <div className="hero__stat">
                            <span className="hero__stat-number">50+</span>
                            <span className="hero__stat-label">Projects</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <span className="hero__stat-number">5+</span>
                            <span className="hero__stat-label">Years</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <span className="hero__stat-number">100%</span>
                            <span className="hero__stat-label">Satisfaction</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="hero__scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <span className="hero__scroll-text">Scroll</span>
                <div className="hero__scroll-line" />
            </motion.div>
        </section>
    );
};

export default Hero;
