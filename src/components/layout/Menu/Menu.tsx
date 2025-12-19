'use client';
 
import { usePathname  } from 'next/navigation';
import Link from 'next/link';
import { JSX } from 'react';

import styles from './Menu.module.scss';


const Menu = (): JSX.Element => {
  const pathname = usePathname ();
  return (
    <nav className={styles.Menu}>
      <div className={pathname === '/' ? styles.linkActive : ''}>
        <Link href="/">Главная</Link>
      </div>
      <div className={pathname === '/groups' ? styles.linkActive : ''}>
        <Link href="/groups">Группы</Link>
      </div>
    </nav>
  );
};

export default Menu;
