import { LandListing } from './types';

// API Configuration for Pro-Talk
export const PRO_TALK_API_URL = 'https://api.pro-talk.ru/api/v1.0';

// Получаем токен из переменных окружения (для Vercel) или используем хардкод (для локальной разработки)
// Используем optional chaining (?.) для безопасного доступа к env, так как в некоторых средах он может быть undefined
// Fix: Cast import.meta to any because types for vite/client are missing in this environment
export const PRO_TALK_BOT_TOKEN = (import.meta as any).env?.VITE_PRO_TALK_BOT_TOKEN || '5ZpR8LPr1IJNwaAA0sIm7qVcX6ZSkHjt'; 

export const PRO_TALK_BOT_ID = 55737;

// Mock Data for Land Listings
export const MOCK_LANDS: LandListing[] = [
  {
    id: 1,
    title: "Участок у моря, ЮБК",
    location: "г. Ялта, пгт. Гурзуф",
    price: 15000000,
    area: "6 соток",
    type: 'IJS',
    imageUrl: "https://picsum.photos/id/10/800/600",
    features: ["Вид на море", "Газ", "Электричество"]
  },
  {
    id: 2,
    title: "Видовой участок в горах",
    location: "Бахчисарайский район",
    price: 3500000,
    area: "10 соток",
    type: 'SNT',
    imageUrl: "https://picsum.photos/id/28/800/600",
    features: ["Лес рядом", "Ровный рельеф", "Вода"]
  },
  {
    id: 3,
    title: "Коммерческая земля",
    location: "г. Симферополь, объездная",
    price: 45000000,
    area: "50 соток",
    type: 'Prom',
    imageUrl: "https://picsum.photos/id/180/800/600",
    features: ["Асфальтированный подъезд", "Все коммуникации", "Промназначение"]
  },
  {
    id: 4,
    title: "Участок под гостиницу",
    location: "г. Алушта",
    price: 22000000,
    area: "8 соток",
    type: 'IJS',
    imageUrl: "https://picsum.photos/id/164/800/600",
    features: ["500м до пляжа", "Разрешение на строительство"]
  }
];

export const NAV_LINKS = [
  { name: 'Каталог', href: '#catalog' },
  { name: 'Услуги', href: '#services' },
  { name: 'О компании', href: '#about' },
  { name: 'Блог', href: '#blog' },
  { name: 'Контакты', href: '#footer' },
];