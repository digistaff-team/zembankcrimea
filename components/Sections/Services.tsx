import React from 'react';
import { Map, Shield, FileSearch, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Map className="h-10 w-10 text-white" />,
      title: "Продажа участков",
      description: "Помощь в покупке земли с полной гарантией юридической чистоты. Мы отбираем только проверенные объекты без скрытых проблем.",
      color: "bg-blue-600",
      link: "#catalog"
    },
    {
      icon: <FileSearch className="h-10 w-10 text-white" />,
      title: "Проверка истории",
      description: "Цифровая верификация правоустанавливающих документов и полной истории объекта всего за 2 минуты. Знайте, что покупаете.",
      color: "bg-emerald-600",
      link: "#footer"
    },
    {
      icon: <Shield className="h-10 w-10 text-white" />,
      title: "Минимизация рисков",
      description: "Обеспечение финансовой безопасности сделок и защита от юридических проблем. Страхование титула и правовая поддержка.",
      color: "bg-indigo-600",
      link: "#footer"
    }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Наши услуги</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Мы объединили технологии и юридическую экспертизу для создания безопасной среды рынка недвижимости.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center p-3 rounded-xl ${service.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a 
                href={service.link}
                onClick={(e) => handleScroll(e, service.link)}
                className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700"
              >
                Подробнее <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;