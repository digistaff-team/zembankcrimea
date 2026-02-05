import React from 'react';
import { MOCK_LANDS } from '../../constants';
import { MapPin, Ruler, Tag } from 'lucide-react';

const LandList: React.FC = () => {
  const handleScrollToFooter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const typeTranslations: Record<string, string> = {
    'IJS': 'ИЖС',
    'SNT': 'СНТ',
    'Prom': 'Промназначение'
  };

  return (
    <section id="catalog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-2">Актуальные предложения</h2>
            <p className="text-slate-600">Проверенные участки от собственников</p>
          </div>
          <a 
            href="#footer"
            onClick={handleScrollToFooter}
            className="hidden sm:block text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
          >
            Смотреть все предложения &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_LANDS.map((land) => (
            <a 
              key={land.id} 
              href="#footer"
              onClick={handleScrollToFooter}
              className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={land.imageUrl} 
                  alt={land.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-800 uppercase tracking-wide">
                  {typeTranslations[land.type] || land.type}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                    {land.title}
                  </h3>
                </div>
                
                <div className="flex items-center text-slate-500 text-sm mb-4">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="truncate">{land.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-slate-50 rounded p-2 flex items-center justify-center text-xs font-medium text-slate-700">
                    <Ruler className="h-3 w-3 mr-1 text-emerald-500" />
                    {land.area}
                  </div>
                  <div className="bg-slate-50 rounded p-2 flex items-center justify-center text-xs font-medium text-slate-700">
                     <Tag className="h-3 w-3 mr-1 text-emerald-500" />
                     Собственность
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xl font-bold text-emerald-600">
                    {land.price.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <a 
            href="#footer"
            onClick={handleScrollToFooter}
            className="inline-block w-full py-3 bg-white border border-gray-300 rounded-lg text-slate-700 font-medium hover:bg-gray-50 text-center"
          >
             Смотреть все предложения
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandList;