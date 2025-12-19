
import { JSX } from 'react';

import styles from './Footer.module.scss';

const Header = (): JSX.Element => (
  <footer className={styles.Footer}>
    <div className={styles.content}>
      © {(new Date()).getFullYear()} Высший колледж информатики НГУ
    </div>
  </footer>
);

export default Header;
