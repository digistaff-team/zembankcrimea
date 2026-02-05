import React from 'react';
import { Landmark, Phone, Mail, MapPin, Instagram, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-600 p-1.5 rounded text-white mr-2">
                <Landmark size={20} />
              </div>
              <span className="text-xl font-bold text-white">ЗемБанк</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Первая цифровая платформа в Крыму для безопасной покупки земельных участков. Гарантия чистоты и защита рисков.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#catalog" onClick={(e) => handleScroll(e, '#catalog')} className="hover:text-emerald-400 transition-colors">Каталог участков</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-emerald-400 transition-colors">Проверка документов</a></li>
              <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-emerald-400 transition-colors">О компании</a></li>
              <li><a href="#blog" onClick={(e) => handleScroll(e, '#blog')} className="hover:text-emerald-400 transition-colors">Блог</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-emerald-500 mt-0.5" />
                <span>г. Симферополь,<br/>ул. Карла Маркса, 1</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-emerald-500" />
                <span>+7 (978) 000-00-00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-emerald-500" />
                <span>info@zembankcrimea.ru</span>
              </li>
            </ul>
          </div>

          {/* Social / Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://t.me/ZemBankCrimea_bot" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-emerald-600 transition-colors text-white" aria-label="Telegram Bot">
                <Send size={18} />
              </a>
              <a 
                href="#footer"
                onClick={(e) => handleScroll(e, '#footer')}
                className="bg-slate-800 p-2 rounded-full hover:bg-emerald-600 transition-colors text-white" 
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a href="https://vk.com/ZemBankCrimea" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-emerald-600 transition-colors text-white" aria-label="VK">
                 <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.162 18.994c.609 0 .858-.406.851-.584 0-.248-.053-2.281.838-2.281.852 0 2.219 1.568 2.659 2.225.179.268.456.64.974.64h2.564c.979 0 .976-.646.622-1.126-.276-.376-1.536-1.84-1.876-2.182-.452-.453-.635-.61.022-1.486.675-.9 2.456-3.41 2.34-4.21-.061-.419-.597-.475-.597-.475l-2.905.025c-.243 0-.528.016-.806.273-.08.074-.326.398-.636.794-1.092 1.396-1.42 1.547-1.638 1.547-.218 0-.274-.309-.274-1.157 0-1.047.163-3.694-1.213-3.98-.38-.079-.675-.125-1.26-.135-2.254-.038-2.616.549-2.28.855.334.305.518.777.518 2.091 0 1.258-.231 2.03-.74 2.03-.509 0-1.875-1.92-2.651-3.645-.257-.573-.503-1.014-1.127-1.014l-2.915.025c-.563 0-.663.26-.663.536 0 .343.344.976 1.485 2.585 2.284 3.222 5.099 5.894 8.756 5.894z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Земельный Банк Крыма. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;