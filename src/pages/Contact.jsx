import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white text-black font-sans">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-bold">Contact Me</h1>
            </main>
        </div>
    );
};

export default Contact;
