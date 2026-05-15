import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { SubPageLayout } from '../components/SubPageLayout';

export function NotFound(): ReactElement {
  return (
    <SubPageLayout title="Page Not Found">
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <p>
        <Link to="/">Return to the home page</Link>
      </p>
    </SubPageLayout>
  );
}
