import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maryam Naeem — Creative Designer & Content Maker',
  description: 'Graphic design, visual storytelling, video editing, and creative content by Maryam Naeem.',
  openGraph: { title: 'Maryam Naeem — Creative Studio', description: 'Design with a little more nerve.', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
