import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { SubPage } from '../components/SubPage';

export function NotFound(): ReactElement {
  return (
    <SubPage eyebrow="404" title="Page not found.">
      <p>The page you&apos;re looking for doesn&apos;t exist — or was never deployed.</p>
      <p>
        <Link to="/">← Back to home</Link>
      </p>
    </SubPage>
  );
}
