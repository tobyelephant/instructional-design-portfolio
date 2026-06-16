import { ExternalLink } from "lucide-react";

export default function ArtifactGallery({
  title = "Artifact Gallery",
  description,
  items = [],
}) {
  return (
    <section className="mx-auto mt-12 max-w-6xl px-6">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
          Visual Evidence
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
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
            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
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