import { type ReactElement } from 'react';

import { SubPage } from '../components/SubPage';
import { contactEmail } from '../data/content';

export function Support(): ReactElement {
  return (
    <SubPage eyebrow="// support · contact" title="Support">
      <div className="rounded border border-line/60 bg-bg-elev/40 p-5">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
          Direct contact
        </div>
        <p>
          Have a question, issue, or feedback? We&apos;d love to hear from you.
        </p>
        <p className="mt-3">
          <strong>Email:</strong> <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
        <p className="mt-3 text-sm text-fg-dim/80">
          We typically respond within 1–2 business days.
        </p>
      </div>

      <h2>General information</h2>
      <p>
        <strong>Superstition Labs, LLC</strong>
        <br />
        3101 N. Central Ave, Ste 183
        <br />
        Phoenix, AZ 85012
      </p>
    </SubPage>
  );
}
