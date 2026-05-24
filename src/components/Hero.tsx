import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
            <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
            Born in {profile.location}
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-accent bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="mt-2 text-xl font-medium text-stone-300 sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-1 text-lg text-stone-500">{profile.subtitle}</p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-400">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500"
            >
              Contact me
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#experience"
              className="inline-flex rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-brand-400/50 hover:bg-white/5"
            >
              View experience
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Education", value: "Harvard · SUA" },
            { label: "Experience", value: `${profile.experienceYears}+ Years` },
            { label: "Focus", value: "Economics & Finance" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <p className="text-sm text-stone-400">{stat.label}</p>
              <p className="mt-1 text-lg font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
