import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Eye, Target } from 'lucide-react';
import VerticalCutReveal from '../components/VerticalCutReveal';
import './About.css';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="about section" id="about" ref={ref}>
            {/* Background Grid */}
            <div className="about__bg">
                <div className="about__grid-pattern" />
                <div className="about__glow" />
            </div>

            <div className="container about__container">
                {/* Label */}
                <motion.span
                    className="section-label"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    About
                </motion.span>

                {/* Title with Animation */}
                <h2 className="about__title">
                    <VerticalCutReveal
                        splitBy="words"
                        staggerDuration={0.15}
                        staggerFrom="first"
                        delay={0.3}
                        className="about__title-reveal"
                    >
                        A Legacy of Excellence, How Our Dedication Fuels Everything We Do
                    </VerticalCutReveal>
                </h2>

                {/* Description */}
                <motion.p
                    className="about__description"
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                    transition={{ duration: 0.7, delay: 0.8 }}
                >
                    From day one, our mission has been to create solutions that inspire,
                    empower, and make a difference. With a commitment to quality and
                    creativity, we transform ideas into exceptional digital experiences.
                </motion.p>

                {/* Vision & Mission Cards */}
                <div className="about__cards">
                    <motion.div
                        className="about__card glass-card"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <div className="about__card-icon">
                            <Eye size={24} />
                        </div>
                        <h3 className="about__card-title">Our Vision</h3>
                        <p className="about__card-text">
                            To be the leading digital partner for businesses worldwide,
                            setting new standards in innovation, design, and technological excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about__card glass-card"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1.15 }}
                    >
                        <div className="about__card-icon">
                            <Target size={24} />
                        </div>
                        <h3 className="about__card-title">Our Mission</h3>
                        <p className="about__card-text">
                            To deliver exceptional digital solutions that empower businesses
                            to thrive, combining creativity with cutting-edge technology.
                        </p>
                    </motion.div>
                </div>

                {/* CTA Button */}
                <motion.a
                    href="#services"
                    className="btn btn-primary about__cta"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.3 }}
                >
                    Explore Our Services
                    <ArrowRight size={18} />
                </motion.a>
            </div>
        </section>
    );
};

export default About;
