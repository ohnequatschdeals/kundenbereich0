export function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="6" fill="rgb(var(--surface-2))" stroke="rgb(var(--brand-500))" />
      <circle cx="12" cy="12" r="6" fill="rgb(var(--brand-500))" />
      <text x="28" y="16" fontFamily="ui-sans-serif, system-ui" fontSize="12" fill="rgb(var(--text-1))">OQD</text>
    </svg>
  );
}
