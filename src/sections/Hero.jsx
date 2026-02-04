import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, Play, Code2, Twitter, Linkedin, Instagram } from 'lucide-react';
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

const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/bitbuddiestudio' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/bitbuddies-studio/' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/bitbuddiestudio/' },
    { 
        name: 'Threads', 
        icon: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c1.66 0 3.14-.67 4.22-1.78"/>
                <path d="M16 12c0-2.21-1.79-4-4-4s-4 1.79-4 4"/>
            </svg>
        ), 
        href: 'https://www.threads.com/@bitbuddiestudio' 
    },
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

                    {/* Social Links */}
                    <motion.div
                        className="hero__social"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="hero__social-link"
                                    aria-label={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconComponent size={18} />
                                </a>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
