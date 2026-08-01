export const authInputClass =
  "w-full rounded-xl border border-line bg-surface px-4 py-3.5 text-sm outline-none transition-colors focus:border-gold";

export function AuthField({ label, error, children }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#9A9A9A]">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-500">{error.message}</p>}
    </div>
  );
}
