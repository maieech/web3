import { Geist, Geist_Mono } from 'next/font/google';
import { dehydrate } from '@tanstack/react-query';

import TanStackQuery from '@/containers/TanStackQuery';
import queryClient from '@/api/reactQueryClient';

import type { Metadata } from 'next';
import '@/styles/globals.scss';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Вэб технологии ВКИ - Next.js шаблон',
  description: 'Шаблон для веб-разработки с использованием Next.js, React Hook Form, Yup, SCSS, Eslint, TanStack Query (React Query)',
};

const RootLayout = async ({ children }: Readonly<{children: React.ReactNode}>) => {  
  // let stations: StationsInterface;

  // выполняется на сервере - загрузка станций
  // await queryClient.prefetchQuery({
  //   queryKey: ['stations'], 
  //   queryFn: async () => {
  //     stations = await getStations(0, 100);
  //     console.log('Stations', stations);
  //     return stations;
  //   }
  // });

  const state = dehydrate(queryClient, { shouldDehydrateQuery: () => true });

  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackQuery state={state}>
          {children}
        </TanStackQuery>
      </body>
    </html>
  );
};

export default RootLayout;
