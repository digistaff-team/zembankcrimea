import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Золотая нива: инвестиции в сельхозземли Степного Крыма",
    excerpt: "Черноземы и каштановые почвы идеально подходят для зерновых культур. Разбираем рентабельность агробизнеса и доступные программы субсидирования в Джанкойском районе.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
    category: "Сельское хозяйство",
    date: "12 Окт 2023",
    author: "Агро-Эксперт"
  },
  {
    id: 2,
    title: "Дом для семьи: комфорт пригорода или престиж Южнобережья?",
    excerpt: "Сравнение жизни на Южном берегу Крыма и в уютных предгорных районах. Где лучше климат, инфраструктура и цены для строительства семейного дома.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    category: "ИЖС",
    date: "15 Окт 2023",
    author: "Мария Петрова"
  },
  {
    id: 3,
    title: "Отельный бизнес: строим гостиницу на первой линии",
    excerpt: "Анализ туристического потока. Почему земли рекреационного назначения в Алуште и Евпатории показывают максимальный рост капитализации.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1000&auto=format&fit=crop",
    category: "Бизнес",
    date: "20 Окт 2023",
    author: "Алексей Инвест"
  },
  {
    id: 4,
    title: "Агрокемпинг: тренд на экотуризм среди клубничных полей",
    excerpt: "Как совместить выращивание ягод и гостиничный бизнес. Кейс создания популярного глэмпинга в Бахчисарайском районе с минимальными вложениями.",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1000&auto=format&fit=crop",
    category: "Стартап",
    date: "25 Окт 2023",
    author: "Елена Эко"
  },
  {
    id: 5,
    title: "Крымский Прованс: земля под лаванду и эфироносы",
    excerpt: "Эфиромасличный бизнес переживает ренессанс. Особенности выбора участков для выращивания лаванды и производства натуральной косметики и масел.",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=80&w=1000&auto=format&fit=crop",
    category: "Агробизнес",
    date: "01 Ноя 2023",
    author: "Ботаник-Крым"
  }
];

const Blog: React.FC = () => {
  const handleScrollToFooter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Блог о земле</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Полезные статьи, аналитика рынка и идеи для инвестиций в крымскую недвижимость.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-600 uppercase tracking-wide">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-slate-400 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3 text-sm flex-grow">
                  {post.excerpt}
                </p>
                <a 
                  href="#footer" 
                  onClick={handleScrollToFooter}
                  className="inline-flex items-center text-emerald-600 font-semibold text-sm hover:text-emerald-700 mt-auto group"
                >
                  Читать статью <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#footer"
            onClick={handleScrollToFooter}
            className="inline-block px-8 py-3 bg-white border border-gray-300 rounded-lg text-slate-700 font-medium hover:bg-gray-50 transition-colors"
          >
             Все статьи
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;