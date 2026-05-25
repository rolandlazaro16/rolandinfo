import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="border-y border-stone-200 bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Education"
          title="My Academic Journey"
          subtitle="From St. Hellen Primary School in Mwanza to Harvard University."
        />

        <ol className="relative mt-14 space-y-8">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-brand-500 via-brand-600/50 to-transparent md:left-1/2 md:block md:-translate-x-px" />

          {education.map((item, index) => (
            <li
              key={item.institution}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden w-1/2 md:block" />
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                }`}
              >
                <article
                  className={`rounded-2xl border p-6 transition hover:border-brand-500/40 ${
                    "highlight" in item && item.highlight
                      ? "border-brand-500/50 bg-brand-500/10 shadow-lg shadow-brand-500/10"
                      : "border-white/10 bg-stone-950/80"
                  }`}
                >
                  <span className="inline-block rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-300">
                    {item.level}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {item.institution}
                  </h3>
                  {"field" in item && (
                    <p className="mt-1 text-sm font-medium text-accent">
                      {item.field}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-stone-400">{item.description}</p>
                </article>
              </div>
              <div
                className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-brand-500 bg-white md:left-1/2 md:block"
                aria-hidden
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
