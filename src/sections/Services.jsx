import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    Globe, Database, Building2, Users, Wrench,
    GraduationCap, BookOpen, ShoppingCart, Briefcase,
    Code2, Palette, Server, Zap, ChevronRight, Check
} from 'lucide-react';
import VerticalCutReveal from '../components/VerticalCutReveal';
import './Services.css';

const serviceCategories = [
    {
        id: 'websites',
        icon: Globe,
        title: 'Website Development',
        description: 'From simple landing pages to complex web applications',
        services: [
            {
                name: 'Static Website',
                desc: 'Clean, fast-loading websites for businesses needing an online presence.',
                features: ['Home, About, Services, Contact pages', 'Responsive design', 'SEO-friendly structure', 'Contact form integration'],
                bestFor: 'Small businesses, local services'
            },
            {
                name: 'Dynamic Website',
                desc: 'Feature-rich websites with admin panels and content management.',
                features: ['Custom admin dashboard', 'Database integration', 'Blog/News system', 'Secure architecture'],
                bestFor: 'Growing businesses, startups'
            },
            {
                name: 'Corporate Website',
                desc: 'Professional websites designed to build trust and brand authority.',
                features: ['Premium UI/UX design', 'Lead generation forms', 'Analytics setup', 'Performance optimization'],
                bestFor: 'Enterprises, agencies'
            }
        ]
    },
    {
        id: 'crm',
        icon: Users,
        title: 'CRM Solutions',
        description: 'Custom CRM systems tailored to your business workflow',
        services: [
            {
                name: 'Custom CRM Development',
                desc: 'Tailor-made CRM systems designed for your specific needs.',
                features: ['Customer & lead management', 'Sales pipeline tracking', 'Invoice & billing', 'Reports & analytics'],
                bestFor: 'Sales teams, manufacturers'
            },
            {
                name: 'CRM Customization',
                desc: 'Enhance existing CRM systems to fit your operations.',
                features: ['Feature upgrades', 'Third-party API integration', 'Automation workflows', 'UI improvements'],
                bestFor: 'Existing CRM users'
            }
        ]
    },
    {
        id: 'projects',
        icon: Code2,
        title: 'Project Development',
        description: 'Full-stack applications from concept to deployment',
        services: [
            {
                name: 'Full-Stack Development',
                desc: 'Complete applications using modern technologies.',
                features: ['Frontend (React, Flutter)', 'Backend (Django, Node.js)', 'Database (PostgreSQL, MongoDB)', 'Deployment support'],
                bestFor: 'Startups, businesses'
            },
            {
                name: 'Academic Projects',
                desc: 'Complete project development with documentation.',
                features: ['Full source code', 'Database design', 'Project report & PPT', 'Viva support'],
                bestFor: 'Final-year students'
            },
            {
                name: 'Startup Projects',
                desc: 'Convert your idea into a working digital product.',
                features: ['Requirement analysis', 'MVP development', 'Scalable architecture', 'Post-launch support'],
                bestFor: 'Entrepreneurs, startups'
            }
        ]
    },
    {
        id: 'thesis',
        icon: GraduationCap,
        title: 'Thesis & Research',
        description: 'End-to-end support for academic research',
        services: [
            {
                name: 'Thesis Development',
                desc: 'Complete support for research and documentation.',
                features: ['Topic selection', 'Implementation support', 'Plagiarism-free content', 'University formatting'],
                bestFor: 'UG, PG, PhD students'
            },
            {
                name: 'Research Paper Support',
                desc: 'High-quality assistance for journals and conferences.',
                features: ['Paper writing & editing', 'Code implementation', 'IEEE/Springer formatting', 'Revision support'],
                bestFor: 'Researchers, academics'
            }
        ]
    },
    {
        id: 'ecommerce',
        icon: ShoppingCart,
        title: 'E-Commerce Solutions',
        description: 'Scalable online stores with seamless experiences',
        services: [
            {
                name: 'E-Commerce Website',
                desc: 'Complete online stores with all essential features.',
                features: ['Product management', 'Cart & checkout', 'Payment gateway', 'Order management'],
                bestFor: 'Retailers, D2C brands'
            },
            {
                name: 'Custom E-Commerce',
                desc: 'Advanced solutions for unique business models.',
                features: ['Multi-vendor marketplace', 'Subscription models', 'Custom pricing logic', 'Admin analytics'],
                bestFor: 'Large retailers, platforms'
            }
        ]
    },
    {
        id: 'portfolio',
        icon: Briefcase,
        title: 'Portfolio Development',
        description: 'Modern portfolios that showcase your work',
        services: [
            {
                name: 'Personal Portfolio',
                desc: 'Clean portfolios that showcase your skills.',
                features: ['About, Skills, Projects sections', 'Resume download', 'GitHub/LinkedIn integration', 'SEO optimization'],
                bestFor: 'Developers, students'
            },
            {
                name: 'Professional Portfolio',
                desc: 'Brand-focused websites to impress clients.',
                features: ['Custom UI/UX', 'Case studies', 'Testimonials', 'Domain & hosting guidance'],
                bestFor: 'Freelancers, agencies'
            }
        ]
    }
];

const additionalServices = [
    { icon: Wrench, name: 'Website Maintenance' },
    { icon: Palette, name: 'UI/UX Design' },
    { icon: Zap, name: 'SEO Optimization' },
    { icon: Server, name: 'Hosting & Deployment' },
    { icon: Database, name: 'API Development' },
    { icon: Code2, name: 'Automation Solutions' }
];

const Services = () => {
    const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const activeData = serviceCategories.find(cat => cat.id === activeCategory);

    return (
        <section className="services section" id="services" ref={ref}>
            <div className="container">
                {/* Header */}
                <div className="services__header">
                    <motion.span
                        className="section-label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <VerticalCutReveal
                            splitBy="words"
                            staggerDuration={0.15}
                            staggerFrom="first"
                            delay={0.3}
                        >
                            What We Deliver
                        </VerticalCutReveal>
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Comprehensive digital solutions tailored to your needs
                    </motion.p>
                </div>

                {/* Category Tabs */}
                <motion.div
                    className="services__tabs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {serviceCategories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`services__tab ${activeCategory === cat.id ? 'services__tab--active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            <cat.icon size={18} />
                            <span>{cat.title}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Active Category Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        className="services__content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Category Header */}
                        <div className="services__category-header">
                            <div className="services__category-icon">
                                {activeData && <activeData.icon size={28} />}
                            </div>
                            <div>
                                <h3 className="services__category-title">{activeData?.title}</h3>
                                <p className="services__category-desc">{activeData?.description}</p>
                            </div>
                        </div>

                        {/* Service Cards */}
                        <div className="services__grid">
                            {activeData?.services.map((service, index) => (
                                <motion.div
                                    key={service.name}
                                    className="services__card glass-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <h4 className="services__card-title">{service.name}</h4>
                                    <p className="services__card-desc">{service.desc}</p>

                                    <ul className="services__features">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="services__feature">
                                                <Check size={14} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="services__best-for">
                                        <span className="services__best-for-label">Best for:</span>
                                        <span className="services__best-for-text">{service.bestFor}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Additional Services */}
                <motion.div
                    className="services__additional"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <h3 className="services__additional-title">Additional Services</h3>
                    <div className="services__additional-grid">
                        {additionalServices.map((service, index) => (
                            <motion.div
                                key={service.name}
                                className="services__additional-item"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                            >
                                <service.icon size={20} />
                                <span>{service.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="services__cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <a href="#contact" className="btn btn-primary">
                        Get a Quote
                        <ChevronRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
