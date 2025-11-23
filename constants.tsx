
import React from 'react';
import type { Product, SocialLink } from './types';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => {
    return React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className
    }, React.createElement('path', {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    }));
};

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => {
    return React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className
    }, 
    React.createElement('rect', { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
    React.createElement('path', { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
    React.createElement('line', { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
    );
};

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => {
    return React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className
    }, React.createElement('path', {
        d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    }));
};
export const products: Product[] = [
  {
    id: 1,
    image: 'paoDeMel.png',
    title: 'Pão de Mel - Doce de Leite',
    description: 'Um bolo saborizado com mel, recheado com doce de leite e coberto com chocolate.',
  },
  {
    id: 2,
    image: 'brigadeiro.png',
    title: 'Brigadeiro',
    description: 'Docinhos feitos com leite condensado e chocolate em pó.',
  },
  {
    id: 3,
    image: 'docesPersonalizados.png',
    title: 'Doces personalizados',
    description: 'Personalize doces com formatos e temas para cada ocasião.',
  },
];

export const socialLinks: SocialLink[] = [
    {
        id: 'whatsapp',
        Icon: WhatsAppIcon,
        href: 'https://wa.me/5517992612002?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido.',
        bgClass: 'bg-green-500',
    },
    {
        id: 'instagram',
        Icon: InstagramIcon,
        href: 'https://www.instagram.com/doceencanto1321?igsh=Z2huajd2NjdtcWNl',
        bgClass: 'bg-gradient-to-br from-purple-500 to-pink-500',
    },
    {
        id: 'phone',
        Icon: PhoneIcon,
        href: 'tel:+5517992612002',
        bgClass: 'bg-green-400',
    }
]
