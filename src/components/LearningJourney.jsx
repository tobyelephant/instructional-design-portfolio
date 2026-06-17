export default function LearningJourney({
  eyebrow = "Learning Journey",
  title,
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {items.map((item, index) => (
          <div
            key={item.stage}
            className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-sm font-black text-teal-800 ring-1 ring-teal-100">
                {index + 1}
              </div>

              {index < items.length - 1 && (
                <span className="hidden text-2xl font-black text-slate-200 lg:block">
                  →
                </span>
              )}
            </div>

            <h3 className="text-lg font-black text-slate-950">
              {item.stage}
            </h3>

            <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
              {item.purpose}
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {item.activity}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}