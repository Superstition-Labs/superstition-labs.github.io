import { type ReactElement, useEffect, useState } from 'react';

import { cn } from '../lib/cn';

const lines: readonly string[] = [
  '> systems.link --bring-up',
  '  [ok] kernel loaded',
  '  [ok] sensor bus enumerated  (12 devices)',
  '  [ok] fusion pipeline armed',
  '  [ok] inference engine warm  (37ms cold start)',
  '  [ok] uplink established      AES-256',
  '> superstition_labs --status',
  '  PROGRAM:  active',
  '  PROFILE:  classified',
  '  READY.',
];

export function TerminalBoot({ className }: { readonly className?: string }): ReactElement {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (revealed >= lines.length) return;
    const id = window.setTimeout(
      () => {
        setRevealed((r) => r + 1);
      },
      revealed === 0 ? 280 : 260,
    );
    return () => {
      window.clearTimeout(id);
    };
  }, [revealed]);

  return (
    <pre
      className={cn(
        'whitespace-pre-wrap font-mono text-[12px] leading-relaxed text-fg-dim',
        className,
      )}
    >
      {lines.slice(0, revealed).map((l) => (
        <div className={l.startsWith('>') ? 'text-accent' : ''} key={l}>
          {l}
        </div>
      ))}
      {revealed < lines.length && (
        <span aria-hidden className="inline-block h-3 w-2 animate-pulse-soft bg-accent" />
      )}
    </pre>
  );
}
