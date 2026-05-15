import { type ReactElement } from 'react';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { Approach } from '../sections/Approach';
import { Capabilities } from '../sections/Capabilities';
import { Contact } from '../sections/Contact';
import { Hero } from '../sections/Hero';
import { SelectedWork } from '../sections/SelectedWork';
import { WhatWeDo } from '../sections/WhatWeDo';

export function Home(): ReactElement {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main>
        <Hero />
        <WhatWeDo />
        <Capabilities />
        <SelectedWork />
        <Approach />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
