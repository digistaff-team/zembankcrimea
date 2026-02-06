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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Top Tagline */}
          <h2 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4 tracking-wide">
            Ваш надёжный проводник <br className="hidden sm:inline" />
            в мире земельных сделок
          </h2>

          {/* Main Massive Title */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white uppercase">
            ЗЕМЕЛЬНЫЙ <br />
            БАНК КРЫМА
          </h1>
          
          {/* List Description */}
          <div className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            <p className="mb-4 font-medium text-white">Первая цифровая платформа, где можно:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-emerald-500 rounded-full mr-3"></span>
                <span>Найти участок мечты без рисков</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-emerald-500 rounded-full mr-3"></span>
                <span>Проверить историю собственности за 2 минуты</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-emerald-500 rounded-full mr-3"></span>
                <span>Купить землю с гарантией чистоты сделки</span>
              </li>
            </ul>
          </div>
          
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