import { motion } from 'framer-motion';
import { Check, ArrowRight, Star } from 'lucide-react';
import VerticalCutReveal from '../components/VerticalCutReveal';
import './Pricing.css';

const plans = [
    {
        name: 'Portfolio & Frontend',
        price: '₹2,999',
        originalPrice: '₹4,999',
        period: 'one-time payment',
        description: 'Perfect for portfolios and professional frontend websites with modern design.',
        features: [
            'Professional portfolio design',
            'Responsive frontend websites',
            'Modern UI/UX design',
            'Google Forms integration',
            'WhatsApp & Email connectivity',
            'Mobile-friendly design',
            'Basic SEO optimization',
            'Fast loading performance',
        ],
        popular: false,
        badge: null,
    },
    {
        name: 'E-Commerce Starter',
        price: '₹7,999',
        originalPrice: '₹12,999',
        period: '₹599/month after 1 month',
        description: 'Complete e-commerce solution for startups with essential features and ongoing support.',
        features: [
            'Everything in Portfolio package',
            'More pages & sections',
            'E-commerce website setup',
            'Basic CRM system',
            'Startup portfolio design',
            'Product catalog management',
            'Shopping cart & checkout',
            'Payment gateway integration',
            '1 month free service',
        ],
        popular: true,
        badge: 'Most Popular',
    },
    {
        name: 'Advanced E-Commerce',
        price: '₹12,999',
        originalPrice: '₹18,999',
        period: '₹699/month after 3 months',
        description: 'Premium e-commerce platform with advanced features, analytics, and extended support.',
        features: [
            'Everything in E-Commerce Starter',
            'Advanced e-commerce platform',
            'Full analytics dashboard',
            'Custom admin panel',
            'Advanced CRM system',
            'Inventory management',
            'Order tracking & reports',
            '3 months free service',
        ],
        popular: false,
        badge: null,
    },
];

const Pricing = () => {
    return (
        <section className="pricing section" id="pricing">
            <div className="container">
                <div className="section-header">
                    <motion.span
                        className="section-label"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Pricing
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
                            Simple, Transparent Pricing
                        </VerticalCutReveal>
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Choose the perfect package for your project needs
                    </motion.p>
                </div>

                <div className="pricing__grid">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            className={`pricing-card-wrapper ${plan.popular ? 'pricing-card-wrapper--popular' : ''}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {plan.badge && (
                                <div className="pricing-card__badge-outer">
                                    <Star size={14} fill="currentColor" />
                                    {plan.badge}
                                </div>
                            )}
                            
                            <div className={`pricing-card glass-card ${plan.popular ? 'pricing-card--popular' : ''}`}>
                                <div className="pricing-card__header">
                                    <h3 className="pricing-card__name">{plan.name}</h3>
                                    <div className="pricing-card__price-wrapper">
                                        {plan.originalPrice && (
                                            <span className="pricing-card__original-price">{plan.originalPrice}</span>
                                        )}
                                        <span className="pricing-card__price">{plan.price}</span>
                                        <span className="pricing-card__period">{plan.period}</span>
                                    </div>
                                    <p className="pricing-card__description">{plan.description}</p>
                                </div>

                                <ul className="pricing-card__features">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="pricing-card__feature">
                                            <span className="pricing-card__check">
                                                <Check size={16} strokeWidth={3} />
                                            </span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className={`pricing-card__cta btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                                >
                                    Get Started
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    className="pricing__note"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    💡 <strong>Custom Price Structure:</strong> Pricing is tailored according to project requirements. Value for money guaranteed!{' '}
                    <a href="#contact" className="pricing__note-link">Contact us</a> for a personalized quote.
                </motion.p>

                <motion.div
                    className="pricing__service-info"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <h4 className="pricing__service-title">Monthly Service Charges</h4>
                    <div className="pricing__service-grid">
                        <div className="pricing__service-item">
                            <span className="pricing__service-plan">E-Commerce Starter</span>
                            <span className="pricing__service-price">₹499/month</span>
                            <span className="pricing__service-desc">After 1 month free service</span>
                        </div>
                        <div className="pricing__service-item">
                            <span className="pricing__service-plan">Advanced E-Commerce</span>
                            <span className="pricing__service-price">₹699/month</span>
                            <span className="pricing__service-desc">After 3 months free service</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
