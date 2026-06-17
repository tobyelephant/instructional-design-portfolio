import { ExternalLink } from "lucide-react";

export default function ArtifactGallery({
  eyebrow = "Design Solution",
  title = "Artifact Gallery",
  description,
  items = [],
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
          {eyebrow}
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {description}
          </p>
        )}
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <a
            key={item.src}
            href={item.href || item.src}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 p-3">
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-bold text-slate-950">
                  {item.title}
                </h3>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}