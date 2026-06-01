import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Layers,
  Users,
  LineChart,
  FileText,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "RailCore Growth Pathway Program: IDP Leader + Manager & Employee Tracks",
  category: "Talent Development / IDP Adoption / Leadership Enablement",
  audience: "Senior leaders, managers, employees, and HR/L&D partners",
  problem:
    "A dual-track IDP adoption program designed to help leaders sponsor the system, managers coach meaningful development conversations, and employees create practical development plans with clear actions and follow-up.",
  status: "Live Case Study",
  link: "/projects/idp-training",
  active: true,
  },
    {
  title: "Communicating Up: Building Confidence Across Generations",
  category: "Intern Onboarding / Workplace Communication / Communication Challenge Lab",
  audience: "New graduate interns entering NorthStar Rail",
  problem:
    "A 90-minute onboarding workshop designed to help interns communicate clearly, professionally, and confidently with senior managers through realistic communication challenges, the CLEAR framework, message rewriting, role-play, and a 30-day action plan.",
  status: "Live Case Study",
  link: "/projects/generational-communication",
  active: true,
},
  {
  title: "EuroBridge Financial Sales Training & Talent Development System",
  category: "Performance Consulting / Sales Enablement / Talent Development",
  audience: "New hires, existing sales employees, managers, and high performers",
  problem:
    "A financial sales learning system designed to standardize onboarding, build sales capability, enable manager coaching, capture high performer expertise, and strengthen trust in the company growth platform.",
  status: "Live Case Study",
  link: "/projects/eurobridge-training-system",
  active: true,
},
];

const skills = [
  {
    icon: Layers,
    title: "ADDIE & Learning Strategy",
    text: "Structured analysis, design, development, implementation, and evaluation.",
  },
  {
    icon: Users,
    title: "Stakeholder-Centered Design",
    text: "Training solutions aligned with learner needs and business priorities.",
  },
  {
    icon: BookOpen,
    title: "Scenario-Based Learning",
    text: "Realistic practice activities that support workplace transfer.",
  },
  {
    icon: LineChart,
    title: "Performance Evaluation",
    text: "Learning outcomes connected to behavior change and business impact.",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold text-teal-700">
            {project.category}
          </p>
          <h3 className="text-2xl font-black tracking-tight text-slate-950">
            {project.title}
          </h3>
        </div>

        <div className="rounded-2xl bg-teal-50 p-3 text-teal-700">
          <FileText size={22} />
        </div>
      </div>

      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <div>
          <p className="font-semibold text-slate-900">Audience</p>
          <p>{project.audience}</p>
        </div>

        <div>
          <p className="font-semibold text-slate-900">Project Focus</p>
          <p>{project.problem}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            project.active
              ? "bg-teal-50 text-teal-800 ring-1 ring-teal-100"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {project.status}
        </span>

        {project.active ? (
          <Link
            to={project.link}
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900"
          >
            View case study <ArrowRight size={16} />
          </Link>
        ) : (
          <span className="text-sm font-bold text-slate-400">
            In progress
          </span>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fbfa] text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-[#eefaf7] to-[#f8f5ee]">
        <div className="absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />

        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
              <Sparkles size={20} />
            </div>

            <div>
              <p className="text-sm font-bold tracking-tight">Toby Zhang</p>
              <p className="text-xs text-slate-500">
                Instructional Design Portfolio
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#projects" className="hover:text-slate-950">
              Projects
            </a>
            <a href="#approach" className="hover:text-slate-950">
              Approach
            </a>
            <a href="#contact" className="hover:text-slate-950">
              Contact
            </a>
          </div>
        </nav>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:pb-28 lg:pt-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-4 py-2 text-sm font-medium text-teal-800 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              Corporate Learning · Onboarding · Leadership Development
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              Designing learning experiences that move people from knowing to
              doing.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A focused portfolio of instructional design projects built around
              business problems, learner needs, practical application, and
              measurable workplace performance.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Explore projects <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5"
              >
                Contact
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-700">
              Portfolio Snapshot
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
              3 instructional design case studies
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Each project is presented as a case study with the final learning solution first, followed by the performance problem, design rationale, learning architecture, and supporting documents.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "Needs Analysis",
                "Design Document",
                "Slide Decks",
                "Trainer Guides",
                "Worksheets",
                "Evaluation Strategy",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm"
                >
                  <span className="font-semibold text-slate-700">{item}</span>
                  <span className="rounded-full bg-teal-50 px-2 py-1 text-xs font-bold text-teal-700">
                    Included
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
            Selected Work
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Instructional design case studies
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            These projects show my process from performance gap analysis to
            learning strategy, materials development, and evaluation planning.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="approach" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
              My Approach
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Learning design with a business lens.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              I design training by first clarifying the performance problem,
              then building practical learning experiences that help employees
              apply new behaviors in real work situations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="rounded-3xl border border-slate-200 bg-[#f7fbfa] p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-black text-slate-950">
                    {skill.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {skill.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-300">
                Portfolio Positioning
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight">
                From training materials to learning systems.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                My work focuses on making learning practical, structured, and
                connected to how people actually perform at work.
              </p>
            </div>

            <div className="grid gap-3 text-sm">
              {[
                "Performance gap analysis",
                "Role-based learning journeys",
                "Manager reinforcement tools",
                "Scenario-based practice",
                "Evaluation and improvement planning",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-slate-950">Toby Zhang</p>
            <p className="text-sm text-slate-500">
              Instructional Designer · Corporate Learning · Training Development
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-600">
            <a
              href="tobyzjx@gmail.com"
              className="rounded-full border border-slate-200 px-4 py-2 hover:bg-slate-50"
            >
              Email
            </a>

            <a
              href="#"
              className="rounded-full border border-slate-200 px-4 py-2 hover:bg-slate-50"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="rounded-full border border-slate-200 px-4 py-2 hover:bg-slate-50"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}