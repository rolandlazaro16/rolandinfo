export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold text-black sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-black/60">{subtitle}</p>
    </div>
  );
}
