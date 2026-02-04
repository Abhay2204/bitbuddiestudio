import { motion } from 'framer-motion';
import './TechStack.css';

const technologies = [
    'React', 'Next.js', 'Vue.js', 'Node.js', 'Python', 'TypeScript',
    'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Figma', 'GSAP',
    'Stripe', 'Firebase', 'GraphQL', 'TailwindCSS'
];

const TechStack = () => {
    return (
        <section className="tech-stack section" id="tech">
            <div className="container">
                <div className="section-header">
                    <motion.span
                        className="section-label"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Technologies
                    </motion.span>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Tools We Master
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We use the latest technologies to build fast, scalable, and beautiful products
                    </motion.p>
                </div>
            </div>

            <div className="tech-stack__marquee-wrapper">
                <div className="tech-stack__marquee">
                    <div className="tech-stack__track">
                        {[...technologies, ...technologies].map((tech, index) => (
                            <div key={`${tech}-${index}`} className="tech-stack__item">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="tech-stack__marquee tech-stack__marquee--reverse">
                    <div className="tech-stack__track">
                        {[...technologies.slice().reverse(), ...technologies.slice().reverse()].map((tech, index) => (
                            <div key={`${tech}-rev-${index}`} className="tech-stack__item">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
