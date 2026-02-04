import { Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './Footer.css';

const footerLinks = {
    services: [
        { name: 'Websites', href: '#services' },
        { name: 'CRM Solutions', href: '#services' },
        { name: 'eCommerce', href: '#services' },
        { name: 'Custom Projects', href: '#services' },
    ],
    company: [
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#work' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact', href: '#contact' },
    ],
};

const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { 
        name: 'Threads', 
        icon: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c1.66 0 3.14-.67 4.22-1.78"/>
                <path d="M16 12c0-2.21-1.79-4-4-4s-4 1.79-4 4"/>
            </svg>
        ), 
        href: '#' 
    },
];

const Footer = () => {
    const { theme } = useTheme();
    const year = new Date().getFullYear();

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <img
                                src={theme === 'dark' ? '/dark theme logo.png' : '/light theme logo.png'}
                                alt="Bit Buddies Studio"
                                className="footer__logo-img"
                            />
                        </div>
                        <p className="footer__description">
                            Crafting exceptional digital experiences that drive results and elevate brands.
                        </p>
                        <div className="footer__social">
                            {socialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="footer__social-link"
                                        aria-label={social.name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconComponent size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="footer__column">
                        <h4 className="footer__heading">Services</h4>
                        <ul className="footer__list">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="footer__link"
                                        onClick={(e) => handleNavClick(e, link.href)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="footer__column">
                        <h4 className="footer__heading">Company</h4>
                        <ul className="footer__list">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="footer__link"
                                        onClick={(e) => handleNavClick(e, link.href)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="footer__column footer__cta-col">
                        <h4 className="footer__heading">Ready to Start?</h4>
                        <p className="footer__cta-text">
                            Let's bring your vision to life.
                        </p>
                        <a href="#contact" className="btn btn-primary footer__cta-btn" onClick={(e) => handleNavClick(e, '#contact')}>
                            Get in Touch
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {year} Bit Buddies Studio. All rights reserved.
                    </p>
                    <div className="footer__legal">
                        <a href="#" className="footer__legal-link">Privacy</a>
                        <a href="#" className="footer__legal-link">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
