import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
export const metadata: Metadata = {
  title: 'FoodFlow — цифровая платформа для ресторанов',
  description: 'Сайт, приложение, программа лояльности и аналитика для ресторанного бизнеса.',
  openGraph: { title: 'FoodFlow', description: 'Запускайте собственный канал продаж без агрегаторов.', type: 'website' }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body><Providers>{children}</Providers></body></html>;
}
