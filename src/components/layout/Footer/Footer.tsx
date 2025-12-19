import { JSX } from 'react';

import styles from './Footer.module.scss';

const Header = (): JSX.Element => (
  <footer className={styles.Footer}>
    © {(new Date()).getFullYear()} Высший колледж информатики НГУ
  </footer>
);

export default Header;
