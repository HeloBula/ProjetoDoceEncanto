
import React from 'react';
import { socialLinks } from '../constants';

export const ContactSection: React.FC = () => {
    return (
        <section className="bg-fuchsia-50 py-16 md:py-24">
            <div className="container mx-auto px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-8">
                    Faça a sua encomenda:
                </h2>
                <div className="flex justify-center items-center space-x-6">
                    {socialLinks.map(({ id, Icon, href, bgClass }) => (
                        <a 
                            key={id}
                            href={href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out ${bgClass}`}
                        >
                           <Icon className="w-8 h-8"/>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
