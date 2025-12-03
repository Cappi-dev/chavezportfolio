import React, { useState } from 'react';
import Reveal from './Reveal';
import FadeIn from './FadeIn';
import contactImg from '../assets/contact_me.png';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
    const [focusedField, setFocusedField] = useState('');

    const maxMessageLength = 500;
    const messageLength = formData.message.length;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate email sending for now
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset status after 3 seconds
            setTimeout(() => setStatus(''), 3000);
        }, 1500);

        // TODO: Integrate EmailJS here
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
        //     .then((result) => {
        //         setStatus('success');
        //     }, (error) => {
        //         setStatus('error');
        //     });
    };
    return (
        <footer id="contact" className="relative">

            {/* Contact Form Section */}
            <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Reveal width="100%">
                    <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-800 text-center">Contact</h3>
                </Reveal>

                <Reveal delay={0.1} width="100%">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-16 tracking-tighter text-center">
                        Let's <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">Connect</span>
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Avatar Image */}
                    <Reveal width="100%" delay={0.2}>
                        <div className="relative w-full max-w-lg mx-auto lg:mx-0 order-2 lg:order-1">
                            {/* Animated gradient glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-blue-400/30 to-pink-400/30 rounded-[3rem] blur-3xl opacity-70 animate-pulse"></div>

                            {/* Floating orbs */}
                            <div className="absolute -top-8 -left-8 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-float-delayed"></div>
                            <div className="absolute top-1/2 -right-12 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-float-slow"></div>

                            {/* Image container with enhanced styling */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-[3rem] opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500"></div>
                                <div className="relative bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm p-6 rounded-[2.5rem] border border-white/60 shadow-2xl overflow-hidden">
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                                    </div>
                                    <img
                                        src={contactImg}
                                        alt="Contact Me"
                                        className="relative z-10 w-full h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>
                            </div>

                            {/* Contact info cards */}
                            <div className="mt-8 space-y-3">
                                <a
                                    href="mailto:chavezjes71@gmail.com"
                                    className="flex items-center gap-3 bg-white/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group/email cursor-pointer"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover/email:scale-110 transition-transform duration-300">
                                        ✉
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Email</p>
                                        <p className="text-sm font-medium text-gray-800 truncate group-hover/email:text-purple-600 transition-colors">chavezjes71@gmail.com</p>
                                    </div>
                                    <div className="text-xs text-gray-500 opacity-0 group-hover/email:opacity-100 transition-opacity">📧</div>
                                </a>

                                <div className="flex items-center gap-3 bg-white/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                                        📍
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Location</p>
                                        <p className="text-sm font-medium text-gray-800">Philippines</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right Column: Form */}
                    <div className="w-full order-1 lg:order-2">
                        <Reveal delay={0.3} width="100%">
                            <div className="mb-6 text-center lg:text-left">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Have a project in mind or just want to chat?
                                    <span className="block mt-1 font-semibold text-gray-900">I'd love to hear from you!</span>
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.4} width="100%">
                            <form onSubmit={handleSubmit} className="space-y-5 bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/50 relative overflow-hidden group">
                                {/* Animated gradient blobs */}
                                <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/15 transition-colors duration-700"></div>
                                <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/15 transition-colors duration-700"></div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold text-gray-700 ml-1 uppercase tracking-wider flex items-center gap-2">
                                            <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${focusedField === 'name' ? 'bg-purple-500 scale-125' : 'bg-purple-500/50'}`}></span>
                                            Name
                                            {formData.name && <span className="ml-auto text-green-500 text-sm">✓</span>}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField('')}
                                            required
                                            className="w-full px-5 py-4 bg-white/70 border-2 border-white/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400/50 focus:bg-white/90 focus:shadow-lg transition-all placeholder:text-gray-400 shadow-md hover:bg-white/85 hover:shadow-lg"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold text-gray-700 ml-1 uppercase tracking-wider flex items-center gap-2">
                                            <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${focusedField === 'email' ? 'bg-blue-500 scale-125' : 'bg-blue-500/50'}`}></span>
                                            Email
                                            {formData.email && <span className="ml-auto text-green-500 text-sm">✓</span>}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField('')}
                                            required
                                            className="w-full px-5 py-4 bg-white/70 border-2 border-white/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400/50 focus:bg-white/90 focus:shadow-lg transition-all placeholder:text-gray-400 shadow-md hover:bg-white/85 hover:shadow-lg"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 relative z-10">
                                    <label htmlFor="message" className="text-xs font-bold text-gray-700 ml-1 uppercase tracking-wider flex items-center gap-2">
                                        <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${focusedField === 'message' ? 'bg-pink-500 scale-125' : 'bg-pink-500/50'}`}></span>
                                        Message
                                        <span className={`ml-auto text-xs font-medium transition-colors ${messageLength > maxMessageLength ? 'text-red-500' :
                                            messageLength > maxMessageLength * 0.8 ? 'text-orange-500' :
                                                'text-gray-500'
                                            }`}>
                                            {messageLength}/{maxMessageLength}
                                        </span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField('')}
                                        required
                                        maxLength={maxMessageLength}
                                        rows="5"
                                        className="w-full px-5 py-4 bg-white/70 border-2 border-white/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-400/50 focus:bg-white/90 focus:shadow-lg transition-all placeholder:text-gray-400 resize-none shadow-md hover:bg-white/85 hover:shadow-lg"
                                        placeholder="Tell me about your project or just say hi! 👋"
                                    ></textarea>
                                </div>

                                <div className="pt-2 relative z-10">
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group/btn relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                                        {status === 'sending' ? (
                                            <>
                                                <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin relative z-10"></div>
                                                <span className="relative z-10">Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="relative z-10">Send Message</span>
                                                <span className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300">✨</span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                {status === 'success' && (
                                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-2xl text-center text-sm font-semibold animate-fade-in border border-green-200 shadow-lg">
                                        ✅ Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 text-red-700 rounded-2xl text-center text-sm font-semibold animate-fade-in border border-red-200 shadow-lg">
                                        ❌ Something went wrong. Please try again later.
                                    </div>
                                )}
                            </form>
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* Dark Footer Section */}
            <div className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                {/* Background Glow */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">

                    {/* Logo */}
                    <FadeIn direction="up">
                        <div className="flex items-center gap-2 mb-16">
                            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-bold tracking-widest text-sm">Cappi</span>
                                <span className="font-bold tracking-widest text-sm">Dev</span>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Social Links */}
                    <FadeIn direction="up" delay={0.2}>
                        <div className="flex flex-wrap justify-center gap-6 mb-20">
                            <a
                                href="https://www.linkedin.com/in/jes-chavez-234434398/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-white transition-all duration-300 text-sm font-medium min-w-[140px] text-center"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://www.facebook.com/JesEmChavez/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-white transition-all duration-300 text-sm font-medium min-w-[140px] text-center"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://github.com/Cappi-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-white transition-all duration-300 text-sm font-medium min-w-[140px] text-center"
                            >
                                GitHub
                            </a>
                        </div>
                    </FadeIn>

                    {/* Copyright */}
                    <FadeIn direction="up" delay={0.4} fullWidth>
                        <div className="w-full border-t border-gray-800 pt-8 text-center">
                            <p className="text-gray-500 text-sm">
                                © Jes Emanuel Chavez. All Rights Reserved.
                            </p>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </footer>
    );
};

export default ContactSection;
