import SectionHeading from "@/components/SectionHeading";
import { experience, profile } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-y border-black/10 bg-black/[0.03] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Professional Experience"
          title={`${profile.experienceYears} Years of Impact`}
          subtitle={experience.summary}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {experience.roles.map((role) => (
            <article
              key={role.type}
              className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-brand-500/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-black">{role.type}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                {role.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
