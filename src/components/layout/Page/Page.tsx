
import { JSX } from 'react';

import ChildrenType from '@/types/ChildrenType';

import styles from './Page.module.scss';

interface Props {
  children?: ChildrenType;
}

const Page = ({ children }: Props): JSX.Element => (
  <div className={styles.main}>
    {children}
  </div>
);

export default Page;
