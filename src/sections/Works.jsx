import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, X, ArrowUpRight } from 'lucide-react';
import VerticalCutReveal from '../components/VerticalCutReveal';
import './Works.css';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'E-Commerce', 'Portfolio', 'CRM'];

const projects = [
    // E-Commerce
    {
        id: 1,
        title: 'Tiyara',
        category: 'E-Commerce',
        description: 'Modern e-commerce platform with seamless shopping experience and secure payment integration.',
        image: '/tiyara.png',
        link: 'https://tiyara-shopify.vercel.app/',
        technologies: ['Shopify', 'React', 'Tailwind CSS'],
    },
    {
        id: 2,
        title: 'Lumina Botanical',
        category: 'E-Commerce',
        description: 'Elegant botanical e-commerce store featuring natural products with beautiful UI design.',
        image: '/lumina botanical.png',
        link: 'https://lumina-botanical.vercel.app/',
        technologies: ['Next.js', 'Stripe', 'Framer Motion'],
    },
    {
        id: 3,
        title: 'Neon Suture',
        category: 'E-Commerce',
        description: 'Contemporary fashion e-commerce platform with dynamic product showcase and cart management.',
        image: '/neon suture.png',
        link: 'https://neon-suture.vercel.app/',
        technologies: ['React', 'Commerce.js', 'GSAP'],
    },
    {
        id: 4,
        title: 'Nirvana Timeless',
        category: 'E-Commerce',
        description: 'Luxury e-commerce experience for timeless products with premium design aesthetics.',
        image: '/nirvana.png',
        link: 'https://nirvana-timeless-luxury.vercel.app/',
        technologies: ['Next.js', 'Sanity CMS', 'Stripe'],
    },
    {
        id: 5,
        title: 'Inferno i300',
        category: 'E-Commerce',
        description: 'Gaming headphone product showcase with immersive 3D visuals and interactive features.',
        image: '/Inferno i300.png',
        link: '#',
        technologies: ['React', 'Three.js', 'WebGL'],
    },
    {
        id: 6,
        title: 'Air Jordan',
        category: 'E-Commerce',
        description: 'Premium sneaker e-commerce platform with stunning product displays and smooth animations.',
        image: '/air jordan.png',
        link: 'https://air-jordan-plum.vercel.app/',
        technologies: ['React', 'GSAP', 'Tailwind CSS'],
    },
    // Portfolio
    {
        id: 7,
        title: 'Vantage Architectural',
        category: 'Portfolio',
        description: 'Architectural excellence portfolio showcasing stunning projects with elegant presentation.',
        image: '/vantage.png',
        link: 'https://vantage-architectural-excellence.vercel.app/',
        technologies: ['Next.js', 'GSAP', 'Tailwind CSS'],
    },
    {
        id: 8,
        title: 'Inspire Engineering',
        category: 'Portfolio',
        description: 'Engineering portfolio website highlighting innovative solutions and technical expertise.',
        image: '/inspire engineering.png',
        link: 'https://inspire-engineering.vercel.app/',
        technologies: ['React', 'Framer Motion', 'CSS3'],
    },
    {
        id: 9,
        title: 'Neo Brutalist Portfolio',
        category: 'Portfolio',
        description: 'Bold personal portfolio with neo-brutalist design principles and striking visual elements.',
        image: '/personal portfolio neo brutatist.png',
        link: 'https://neo-brutalist-portfolio-pearl.vercel.app/',
        technologies: ['Next.js', 'TypeScript', 'Styled Components'],
    },
    // CRM
    {
        id: 10,
        title: 'TAFE CRM',
        category: 'CRM',
        description: 'Comprehensive CRM solution for educational institutions with student management features.',
        image: '/tafe.png',
        link: '#',
        technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
        id: 11,
        title: 'Task Tracker CRM',
        category: 'CRM',
        description: 'Efficient task management and customer relationship platform with real-time collaboration.',
        image: '/task tracker crm.png',
        link: '#',
        technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    },
    {
        id: 12,
        title: 'NE CRM',
        category: 'CRM',
        description: 'Advanced customer relationship management system with analytics and automation capabilities.',
        image: '/ne crm.png',
        link: '#',
        technologies: ['React', 'Python', 'MySQL'],
    },
];

const Works = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = projects.filter(
        (project) => activeCategory === 'All' || project.category === activeCategory
    );

    return (
        <section className="works section" id="work">
            <div className="container">
                <div className="section-header">
                    <motion.span
                        className="section-label"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Portfolio
                    </motion.span>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <VerticalCutReveal
                            splitBy="words"
                            staggerDuration={0.15}
                            staggerFrom="first"
                            delay={0.3}
                        >
                            Selected Work
                        </VerticalCutReveal>
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        A showcase of our recent projects and digital experiences
                    </motion.p>
                </div>

                {/* Filters */}
                <motion.div
                    className="works__filters"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`works__filter ${activeCategory === category ? 'works__filter--active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <div className="works__grid">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project-card__image-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-card__image"
                                    loading="lazy"
                                />
                                <div className="project-card__overlay">
                                    <span className="project-card__view-text">View Details</span>
                                </div>
                            </div>
                            <div className="project-card__content">
                                <span className="project-card__category">{project.category}</span>
                                <h3 className="project-card__title">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Visit More Button */}
                <motion.div
                    className="works__cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <a 
                        href="https://design-by-abhay.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-large"
                    >
                        Visit More UI/UX Projects
                        <ExternalLink size={20} />
                    </a>
                </motion.div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            className="project-modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                className="project-modal__content"
                                initial={{ scale: 0.9, y: 30 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 30 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="project-modal__close"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    <X size={20} />
                                </button>

                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="project-modal__image"
                                />

                                <div className="project-modal__info">
                                    <span className="project-modal__category">{selectedProject.category}</span>
                                    <h3 className="project-modal__title">{selectedProject.title}</h3>
                                    <p className="project-modal__description">{selectedProject.description}</p>

                                    <div className="project-modal__tech">
                                        {selectedProject.technologies.map((tech) => (
                                            <span key={tech} className="project-modal__tech-tag">{tech}</span>
                                        ))}
                                    </div>

                                    <div className="project-modal__actions">
                                        {selectedProject.link !== '#' && (
                                            <a 
                                                href={selectedProject.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="btn btn-primary"
                                            >
                                                Visit Site
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                        <a href="#contact" className="btn btn-secondary">
                                            Start Similar Project
                                            <ArrowUpRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Works;
