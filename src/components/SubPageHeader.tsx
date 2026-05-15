import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import styles from './SubPageHeader.module.css';

interface SubPageHeaderProps {
  readonly title: string;
}

export function SubPageHeader({ title }: SubPageHeaderProps): ReactElement {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Link to="/">&larr; Back to Superstition Labs</Link>
    </header>
  );
}
