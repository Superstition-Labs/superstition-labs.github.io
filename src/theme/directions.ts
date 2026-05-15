export const directions = ['c', 'a', 'b'] as const;

export type Direction = (typeof directions)[number];

interface DirectionMeta {
  readonly codename: string;
  readonly description: string;
}

export const directionMeta: Record<Direction, DirectionMeta> = {
  a: { codename: 'ORBITAL', description: 'Mission control · live telemetry' },
  b: { codename: 'CONSOLE', description: 'Terminal · blueprint schematics' },
  c: { codename: 'DEEP SPACE', description: 'Editorial · aerospace minimal' },
};

export function isDirection(value: unknown): value is Direction {
  return typeof value === 'string' && (directions as readonly string[]).includes(value);
}
