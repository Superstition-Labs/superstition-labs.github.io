export interface Pillar {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly tags: readonly string[];
}

export const pillars: readonly Pillar[] = [
  {
    id: 'software',
    summary:
      'Production systems from prototype to scale. Real-time pipelines, on-device models, mission tooling, and the operator interfaces around them.',
    tags: ['systems', 'real-time', 'tooling'],
    title: 'Software',
  },
  {
    id: 'hardware',
    summary:
      'Boards, firmware, and sensors. We make the silicon and the software speak the same language — and we own the bring-up.',
    tags: ['firmware', 'PCB', 'integration'],
    title: 'Hardware integration',
  },
  {
    id: 'ai',
    summary:
      'Models that run where the data is. Sensor fusion, on-device inference, and decision-making at the edge — not the cloud.',
    tags: ['inference', 'fusion', 'edge'],
    title: 'AI · sensor systems',
  },
];

export interface Capability {
  readonly code: string;
  readonly title: string;
}

export const capabilities: readonly Capability[] = [
  { code: 'CAP-01', title: 'Sensor fusion & signal processing' },
  { code: 'CAP-02', title: 'On-device ML & edge inference' },
  { code: 'CAP-03', title: 'Embedded firmware & RTOS' },
  { code: 'CAP-04', title: 'Computer vision & multi-modal AI' },
  { code: 'CAP-05', title: 'Ground-station & telemetry tooling' },
  { code: 'CAP-06', title: 'Hardware-in-the-loop test harnesses' },
  { code: 'CAP-07', title: 'Encrypted comms & secure pipelines' },
  { code: 'CAP-08', title: 'Custom PCB & integration design' },
];

export interface WorkEntry {
  readonly client: string;
  readonly domain: string;
  readonly id: string;
  readonly summary: string;
  readonly tags: readonly string[];
  readonly year: string;
}

export const work: readonly WorkEntry[] = [
  {
    client: 'Defense Prime',
    domain: 'ISR',
    id: 'sl-001',
    summary: 'Multi-spectral sensor fusion pipeline for a fielded reconnaissance platform.',
    tags: ['Fusion', 'CV', 'Edge'],
    year: '2024',
  },
  {
    client: 'Aerospace OEM',
    domain: 'Unmanned',
    id: 'sl-002',
    summary: 'On-device ML inference stack for an autonomous platform, fully air-gapped.',
    tags: ['ML', 'Embedded', 'RTOS'],
    year: '2024',
  },
  {
    client: 'Defense Integrator',
    domain: 'T&E',
    id: 'sl-003',
    summary: 'Hardware-in-the-loop test harness with synthetic sensor injection.',
    tags: ['HIL', 'Firmware', 'Tooling'],
    year: '2023',
  },
  {
    client: 'Tier-1 Subcontractor',
    domain: 'C2',
    id: 'sl-004',
    summary: 'Encrypted telemetry, ground tooling, and operator console for a classified program.',
    tags: ['Crypto', 'Telemetry', 'UI'],
    year: '2023',
  },
];

export const tagline = 'We build the systems that sense, decide, and act.';
export const wordmark = 'Superstition Labs';
export const contactEmail = 'support@superstitionlabs.com';
