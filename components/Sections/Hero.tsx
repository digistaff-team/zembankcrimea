import React from 'react';
import { ShieldCheck, Search, FileCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/1JYgHZNv/crimea.jpg?q=80&w=2070&auto=format&fit=crop" 
          alt="Crimea Coast Landscape" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Ваш надежный проводник <br />
            <span className="text-emerald-400">в мире земельных сделок</span> Крыма
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Первая цифровая платформа для безопасной покупки земли. 
            Гарантия юридической чистоты.
            Проверка истории собственности за 2 минуты. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#catalog"
              onClick={(e) => handleScroll(e, '#catalog')}
              className="flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-emerald-500/30"
            >
              <Search className="mr-2 h-5 w-5" />
              Найти участок
            </a>
            <a 
              href="#services"
              onClick={(e) => handleScroll(e, '#services')}
              className="flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-lg transition-all"
            >
              <ShieldCheck className="mr-2 h-5 w-5" />
              Проверить документы
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <FileCheck className="text-emerald-400" />
              <span>Юридическая чистота 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-emerald-400" />
              <span>Безопасная сделка</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;