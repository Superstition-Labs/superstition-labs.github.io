import { type ReactElement, type ReactNode } from 'react';

import { SiteFooter } from './SiteFooter';
import { SubPageHeader } from './SubPageHeader';
import styles from './SubPageLayout.module.css';

interface SubPageLayoutProps {
  readonly children: ReactNode;
  readonly title: string;
}

export function SubPageLayout({ children, title }: SubPageLayoutProps): ReactElement {
  return (
    <div className={styles.page}>
      <SubPageHeader title={title} />
      <main className={styles.container}>{children}</main>
      <SiteFooter variant="light" />
    </div>
  );
}
