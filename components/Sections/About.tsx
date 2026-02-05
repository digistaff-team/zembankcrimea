import React from 'react';
import { CheckCircle2, History, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
              Первая цифровая платформа недвижимости в Крыму
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              «Земельный Банк Крыма» меняет представление о покупке земли. Мы отказались от устаревших схем работы в пользу прозрачности, скорости и безопасности.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Наш сервис объединяет базу проверенных собственников с современными технологиями юридической проверки. Мы не просто продаем участки — мы гарантируем безопасность вашего будущего владения.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600">
                    <History size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Проверка за 2 минуты</h4>
                  <p className="mt-1 text-slate-600">Мгновенный анализ истории владения и правоустанавливающих документов.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600">
                    <Smartphone size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Цифровой формат</h4>
                  <p className="mt-1 text-slate-600">Выбор, проверка и подготовка к сделке происходит онлайн, экономя ваше время.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Гарантия безопасности</h4>
                  <p className="mt-1 text-slate-600">Полная финансовая и юридическая защита покупателя на всех этапах.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern Office" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="text-4xl font-bold mb-1">500+</div>
                <div className="text-sm font-medium opacity-90">Успешных сделок за последний год</div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;