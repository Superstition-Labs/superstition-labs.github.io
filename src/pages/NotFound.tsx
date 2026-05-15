import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { SubPage } from '../components/SubPage';

export function NotFound(): ReactElement {
  return (
    <SubPage code="ERR.404" eyebrow="Signal Lost" title="No telemetry on that path.">
      <p>The page you&apos;re looking for doesn&apos;t exist — or was never deployed.</p>
      <p>
        <Link to="/">← Return to base station</Link>
      </p>
    </SubPage>
  );
}
