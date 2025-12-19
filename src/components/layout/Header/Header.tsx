
import { JSX } from 'react';

import Menu from '../Menu/Menu';

import styles from './Header.module.scss';

const Header = (): JSX.Element => (
  <header className={styles.Header}>
    <div className={styles.title}>Вэб разработка</div>
    <Menu />
  </header>
);

export default Header;
