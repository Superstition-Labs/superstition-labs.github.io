import { type ReactElement } from 'react';

import { SubPageLayout } from '../components/SubPageLayout';

import styles from './Support.module.css';

export function Support(): ReactElement {
  return (
    <SubPageLayout title="Support">
      <div className={styles.contactCard}>
        <h3>Contact Us</h3>
        <p>Have a question, issue, or feedback? We&apos;d love to hear from you.</p>
        <p>
          <strong>Email:</strong>{' '}
          <a className={styles.link} href="mailto:support@superstitionlabs.com">
            support@superstitionlabs.com
          </a>
        </p>
        <p>We typically respond within 1-2 business days.</p>
      </div>

      <h2>General Information</h2>
      <p>
        <strong>Superstition Labs, LLC</strong>
        <br />
        3101 N. Central Ave, Ste 183
        <br />
        Phoenix, AZ 85012
      </p>
    </SubPageLayout>
  );
}
