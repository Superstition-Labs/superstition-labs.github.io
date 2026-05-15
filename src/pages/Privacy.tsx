import { type ReactElement } from 'react';

import { SubPage } from '../components/SubPage';
import { contactEmail } from '../data/content';

export function Privacy(): ReactElement {
  return (
    <SubPage eyebrow="Legal" title="Privacy Policy">
      <div className="border border-line/20 bg-bg-elev/40 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-dim">
        <div>
          <strong className="text-fg">Effective:</strong> December 28, 2025
        </div>
        <div>
          <strong className="text-fg">Last updated:</strong> December 28, 2025
        </div>
      </div>

      <p>
        Superstition Labs, LLC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed
        to protecting your privacy. This Privacy Policy explains how we handle information in our
        mobile applications.
      </p>

      <h2>Information We Collect</h2>
      <p>
        <strong>We do not collect any personal information.</strong>
      </p>
      <p>
        Our apps are designed to work entirely offline and store all data locally on your device.
        We do not:
      </p>
      <ul>
        <li>Collect personal information</li>
        <li>Track your location</li>
        <li>Use analytics or tracking services</li>
        <li>Send data to external servers</li>
        <li>Share any information with third parties</li>
      </ul>

      <h2>Data Storage</h2>
      <p>
        All data you enter into our apps is stored locally on your device using standard device
        storage mechanisms. This data never leaves your device unless you explicitly choose to
        export or share it using the built-in sharing features of your device.
      </p>

      <h2>Data Export and Sharing</h2>
      <p>
        Our apps may include features that allow you to export data (such as PDF export). When
        you use these features, you are in control of where the data goes. We do not receive or
        have access to any exported data.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Our apps do not integrate with any third-party analytics, advertising, or tracking
        services.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our apps do not collect any personal information from anyone, including children under
        the age of 13.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this
        page with an updated &quot;Last Updated&quot; date.
      </p>

      <h2>Contact</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at:</p>
      <p>
        <strong>Superstition Labs, LLC</strong>
        <br />
        3101 N. Central Ave, Ste 183
        <br />
        Phoenix, AZ 85012
        <br />
        Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </p>
    </SubPage>
  );
}
