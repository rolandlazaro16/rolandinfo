import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-stone-500 sm:flex-row sm:text-left">
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <p>
          Built with <span className="text-brand-400">Next.js</span> &amp;{" "}
          <span className="text-brand-400">TypeScript</span>
        </p>
      </div>
    </footer>
  );
}
