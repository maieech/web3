
import { JSX } from 'react';

import Menu from '../Menu/Menu';

import styles from './Header.module.scss';

const Header = (): JSX.Element => (
  <header className={styles.Header}>
    <div className={styles.content}>
      <div className={styles.title}>Вэб разработка</div>
      <Menu />
    </div>
  </header>
);

export default Header;
