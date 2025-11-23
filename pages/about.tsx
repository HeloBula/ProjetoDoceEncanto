import React from 'react';

export const about: React.FC = () => {
  return (
    <div className="animate-fade-in min-h-screen bg-fuchsia-50">
      {/* Hero/Header Section of About Page */}
      <div className="bg-white py-12 shadow-sm">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-zinc-800">
            Nossa História
          </h1>
          <p className="mt-4 text-zinc-500">Conheça o amor por trás de cada receita</p>
        </div>
      </div>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
          {/* Image Column */}
          <div className="order-2 lg:order-1 relative">
            {/* Decorative background element */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-fuchsia-200 rounded-2xl transform -rotate-2 z-0"></div>
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/429/800/1000" 
                alt="A fundadora da Confeitaria na cozinha preparando um bolo" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 font-serif leading-tight">
              Olá, eu sou a Nathascha! A mente criativa por trás da Doce Encanto.
            </h2>
            
            <div className="space-y-4 text-lg text-zinc-700 leading-relaxed">
            <p>Eu descobri um mundo bem diferente da minha formação acadêmica na saúde. Tudo começou alguns anos atrás, quando decidi fazer os próprios doces das festas da minha filha. 
            Foi um desafio grande, onde me encantei pelo que ali criava.</p>
            <p>Com o passar dos tempos, fui criando doces com temas diversificados para festas dos filhos de amigos e até mesmo para os amigos. 
            E daí pra frente a Doce Encanto virou a fonte de doces das pessoas.</p>
            </div>

            <div className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-fuchsia-200"></div>
                <span className="font-serif italic text-fuchsia-800 text-xl">Com carinho, Doce Encanto</span>
                <div className="h-px flex-1 bg-fuchsia-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold font-serif text-zinc-800 mb-12">Nossos Pilares</h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6">
                    <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🍯</div>
                    <h4 className="font-bold text-lg mb-2">Ingredientes de Qualidade</h4>
                    <p className="text-zinc-600">Selecionamos os melhores ingredientes para garantir sabor e frescor em cada doce.</p>
                </div>
                <div className="p-6">
                    <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">❤️</div>
                    <h4 className="font-bold text-lg mb-2">Feito à Mão</h4>
                    <p className="text-zinc-600">Produção artesanal, garantindo frescor e sabor único.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default about;