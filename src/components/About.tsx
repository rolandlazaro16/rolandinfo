import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          subtitle="An economist and educator from Mwanza, dedicated to financial excellence and academic leadership."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-stone-400">
            <p>
              I am <strong className="text-white">{profile.name}</strong>, originally
              from <strong className="text-white">{profile.location}</strong>. I hold a
              Bachelor&apos;s in Agribusiness &amp; Accounting from Sokoine University of
              Agriculture (SUA) and a Master&apos;s from Harvard University.
            </p>
            <p>
              As a <strong className="text-white">university lecturer in economics</strong>{" "}
              and related fields, I combine rigorous academic training with practical
              experience in government organizations and NGOs.
            </p>
            <p>
              My expertise spans economics, financial management, and budgeting — helping
              institutions make sound economic decisions and empowering the next generation
              of professionals.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-stone-900 to-stone-950 p-8">
            <h3 className="text-lg font-semibold text-white">Quick Facts</h3>
            <dl className="mt-6 space-y-4">
              {[
                { term: "Full Name", detail: profile.name },
                { term: "Birthplace", detail: profile.location },
                { term: "Bachelor's", detail: "Agribusiness & Accounting — SUA" },
                { term: "Master's", detail: "Harvard University" },
                { term: "Role", detail: "University Lecturer — Economics" },
                { term: "Experience", detail: `${profile.experienceYears} years — Government & NGOs` },
              ].map((item) => (
                <div
                  key={item.term}
                  className="flex flex-col gap-0.5 border-b border-white/5 pb-4 last:border-0 last:pb-0 sm:flex-row sm:justify-between"
                >
                  <dt className="text-sm text-stone-500">{item.term}</dt>
                  <dd className="text-sm font-medium text-stone-200 sm:max-w-[60%] sm:text-right">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
