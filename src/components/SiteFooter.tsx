import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import styles from './SiteFooter.module.css';

interface SiteFooterProps {
  readonly variant?: 'dark' | 'light';
}

export function SiteFooter({ variant = 'dark' }: SiteFooterProps): ReactElement {
  const year = new Date().getFullYear();
  const className = variant === 'dark' ? styles.footerDark : styles.footerLight;

  return (
    <footer className={className}>
      {variant === 'dark' && (
        <div className={styles.links}>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/support">Support</Link>
        </div>
      )}
      <p>&copy; {year} Superstition Labs, LLC. All rights reserved.</p>
      <p>3101 N. Central Ave, Ste 183, Phoenix, AZ 85012</p>
    </footer>
  );
}
