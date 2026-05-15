import { type ReactElement } from 'react';

import { SiteFooter } from '../components/SiteFooter';

import styles from './Home.module.css';

export function Home(): ReactElement {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>Superstition Labs</h1>
          <p>A private product development company</p>
        </section>
      </div>
      <SiteFooter variant="dark" />
    </div>
  );
}
