
import { JSX } from 'react';

import ChildrenType from '@/types/ChildrenType';

import styles from './Main.module.scss';

interface Props {
  children?: ChildrenType;
}

const Main = ({ children }: Props): JSX.Element => (
  <div className={styles.main}>
    {children}
  </div>
);

export default Main;
