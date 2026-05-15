import {
  Cpu,
  Crosshair,
  Gauge,
  Headphones,
  Layers,
  LayoutDashboard,
  type LucideIcon,
  ScanLine,
} from 'lucide-react';

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
  { code: 'CAP-05', title: 'Operator tooling & dashboards' },
  { code: 'CAP-06', title: 'Test harnesses & CI infrastructure' },
  { code: 'CAP-07', title: 'Encrypted comms & secure pipelines' },
  { code: 'CAP-08', title: 'Custom PCB & integration design' },
];

export interface WorkEntry {
  readonly client: string;
  readonly domain: string;
  readonly icon: LucideIcon;
  readonly id: string;
  readonly summary: string;
  readonly tags: readonly string[];
  readonly year: string;
}

export const work: readonly WorkEntry[] = [
  {
    client: 'Defense wearable OEM',
    domain: 'Wearable',
    icon: Headphones,
    id: 'sl-001',
    summary:
      'AI-augmented tactical headset with on-device audio classification and operator cueing.',
    tags: ['Embedded', 'Audio AI', 'Edge'],
    year: '2024',
  },
  {
    client: 'Aerospace prime',
    domain: 'Targeting',
    icon: Crosshair,
    id: 'sl-002',
    summary: 'Targeting system for a rotary-wing weapons platform.',
    tags: ['Targeting', 'Optics', 'Real-time'],
    year: '2022',
  },
  {
    client: 'Defense OEM',
    domain: 'Embedded',
    icon: Cpu,
    id: 'sl-003',
    summary:
      'Embedded predictive-maintenance computer with on-device anomaly models for a crew-served weapon platform.',
    tags: ['Embedded', 'Predictive ML', 'RTOS'],
    year: '2021',
  },
  {
    client: 'Precision-rifle OEM',
    domain: 'Mobile CV',
    icon: ScanLine,
    id: 'sl-004',
    summary:
      'Phone-based computer-vision app that detects and scores shot groups from target images — fully offline.',
    tags: ['CV', 'Mobile', 'On-device ML'],
    year: '2026',
  },
  {
    client: 'Firearms manufacturer',
    domain: 'QC',
    icon: Layers,
    id: 'sl-005',
    summary:
      'Multi-sensor fusion platform for manufacturers to detect performance drift across production runs.',
    tags: ['Fusion', 'QC', 'Telemetry'],
    year: '2022',
  },
  {
    client: 'Industrial manufacturer',
    domain: 'Industrial',
    icon: LayoutDashboard,
    id: 'sl-006',
    summary:
      'Manufacturing telemetry dashboard with built-in anomaly detection across measurements and QC checks.',
    tags: ['Dashboard', 'Anomaly ML', 'Telemetry'],
    year: '2025',
  },
  {
    client: 'Aerospace integrator',
    domain: 'Life support',
    icon: Gauge,
    id: 'sl-007',
    summary: 'In-flight CO₂ / O₂ monitoring for pressurized oxygen systems.',
    tags: ['Sensors', 'Aviation', 'Real-time'],
    year: '2021',
  },
];

export const tagline = 'We engineer scaled systems that sense, decide, and act.';
export const wordmark = 'Superstition Labs';
export const contactEmail = 'hello@superstitionlabs.com';
export const foundedYear = 2019;
