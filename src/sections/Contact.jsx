import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Loader2, MessageCircle } from 'lucide-react';
import VerticalCutReveal from '../components/VerticalCutReveal';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        
        try {
            const response = await fetch('https://formspree.io/f/mwvqgwre', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', company: '', projectType: '', message: '' });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleWhatsApp = () => {
        const message = `Hello! I'm ${formData.name || '[Name]'}%0A%0AEmail: ${formData.email || '[Email]'}%0ACompany: ${formData.company || 'N/A'}%0AProject Type: ${formData.projectType || 'N/A'}%0A%0AMessage: ${formData.message || '[Message]'}`;
        window.open(`https://wa.me/918421822204?text=${message}`, '_blank');
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="contact__grid">
                    {/* Left */}
                    <div className="contact__info">
                        <motion.span
                            className="section-label"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Contact
                        </motion.span>
                        <motion.h2
                            className="contact__title"
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
                                Let's Build Something Amazing
                            </VerticalCutReveal>
                        </motion.h2>
                        <motion.p
                            className="contact__description"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Ready to transform your digital presence? Send us a message
                            and we'll get back to you within 24 hours.
                        </motion.p>

                        <motion.div
                            className="contact__details"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <span className="contact__detail-label">Email</span>
                                    <a href="mailto:bitbuddiestudio@gmail.com" className="contact__detail-value contact__detail-link">
                                        bitbuddiestudio@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <span className="contact__detail-label">Location</span>
                                    <span className="contact__detail-value">Chandrapur, Maharashtra, India</span>
                                </div>
                            </div>
                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <MessageCircle size={18} />
                                </div>
                                <div>
                                    <span className="contact__detail-label">WhatsApp</span>
                                    <a href="https://wa.me/918421822204" target="_blank" rel="noopener noreferrer" className="contact__detail-value contact__detail-link">
                                        +91 84218 22204
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right - Form */}
                    <motion.div
                        className="contact__form-wrapper glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        {submitted ? (
                            <div className="contact__success">
                                <div className="contact__success-icon">✓</div>
                                <h3 className="contact__success-title">Message Sent!</h3>
                                <p className="contact__success-text">
                                    Thank you for reaching out. We'll be in touch soon.
                                </p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        setSubmitted(false);
                                        setFormData({ name: '', email: '', company: '', projectType: '', message: '' });
                                    }}
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form className="contact__form" onSubmit={handleSubmit} noValidate>
                                <div className="contact__form-row">
                                    <div className="contact__field">
                                        <label htmlFor="name" className="contact__label">Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className={`input ${errors.name ? 'input--error' : ''}`}
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && <span className="contact__error">{errors.name}</span>}
                                    </div>
                                    <div className="contact__field">
                                        <label htmlFor="email" className="contact__label">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className={`input ${errors.email ? 'input--error' : ''}`}
                                            placeholder="you@company.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <span className="contact__error">{errors.email}</span>}
                                    </div>
                                </div>

                                <div className="contact__form-row">
                                    <div className="contact__field">
                                        <label htmlFor="company" className="contact__label">Company</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="input"
                                            placeholder="Your company"
                                            value={formData.company}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="contact__field">
                                        <label htmlFor="projectType" className="contact__label">Project Type</label>
                                        <select
                                            id="projectType"
                                            name="projectType"
                                            className="input select"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select project type</option>
                                            <option value="Portfolio">Portfolio</option>
                                            <option value="CRM">CRM</option>
                                            <option value="Academic Project">Academic Project</option>
                                            <option value="E-Commerce">E-Commerce</option>
                                            <option value="Thesis">Thesis</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="contact__field">
                                    <label htmlFor="message" className="contact__label">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className={`input textarea ${errors.message ? 'input--error' : ''}`}
                                        placeholder="Tell us about your project..."
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                    {errors.message && <span className="contact__error">{errors.message}</span>}
                                </div>

                                <button type="submit" className="btn btn-primary contact__submit" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={18} className="contact__spinner" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={16} />
                                        </>
                                    )}
                                </button>

                                <button 
                                    type="button" 
                                    className="btn btn-secondary contact__whatsapp" 
                                    onClick={handleWhatsApp}
                                >
                                    <MessageCircle size={18} />
                                    Send via WhatsApp
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
