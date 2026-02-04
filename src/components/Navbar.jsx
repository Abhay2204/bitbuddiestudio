import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <nav className="navbar__container container">
                {/* Logo */}
                <a href="/" className="navbar__logo">
                    <img
                        src={theme === 'dark' ? '/dark theme logo.png' : '/light theme logo.png'}
                        alt="Bit Buddies Studio"
                        className="navbar__logo-img"
                    />
                </a>

                {/* Desktop Navigation */}
                <ul className="navbar__links">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                        >
                            <a
                                href={link.href}
                                className="navbar__link"
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Right Section */}
                <div className="navbar__actions">
                    {/* Theme Toggle */}
                    <motion.button
                        className="navbar__theme-toggle"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <AnimatePresence mode="wait">
                            {theme === 'dark' ? (
                                <motion.div
                                    key="sun"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Sun size={18} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="moon"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Moon size={18} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="navbar__cta btn btn-primary"
                        onClick={(e) => handleNavClick(e, '#contact')}
                    >
                        Get Started
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="navbar__mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="navbar__backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            className="navbar__mobile-menu"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        >
                            <div className="navbar__mobile-header">
                                <img
                                    src={theme === 'dark' ? '/dark theme logo.png' : '/light theme logo.png'}
                                    alt="Bit Buddies Studio"
                                    className="navbar__logo-img"
                                />
                                <button
                                    className="navbar__mobile-close"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    aria-label="Close menu"
                                >
                                    <X size={22} />
                                </button>
                            </div>

                            <nav className="navbar__mobile-nav">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        className="navbar__mobile-link"
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </nav>

                            <div className="navbar__mobile-footer">
                                <button
                                    className="navbar__mobile-theme btn btn-secondary"
                                    onClick={toggleTheme}
                                >
                                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                                </button>
                                <a
                                    href="#contact"
                                    className="btn btn-primary"
                                    onClick={(e) => handleNavClick(e, '#contact')}
                                    style={{ width: '100%' }}
                                >
                                    Get Started
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
