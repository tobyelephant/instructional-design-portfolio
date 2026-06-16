import ArtifactGallery from "../components/ArtifactGallery";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  FileText,
  Layers,
  CheckCircle2,
  Target,
  Users,
  MessageSquareText,
  LineChart,
  BookOpen,
  Network,
  BriefcaseBusiness,
} from "lucide-react";

const previews = [
  {
    title: "Talent Development Architecture Preview",
    description:
      "A visual overview of the five-layer learning and talent development architecture, including competency model, role-based paths, manager enablement, SME knowledge capture, and evaluation.",
    src: "/previews/eurobridge-project-reflection-talent-architecture.pdf",
  },
  {
    title: "Sales Growth Path Preview",
    description:
      "Selected pages from the existing employee growth path, showing advanced client communication, sales case review, cross-product thinking, and career growth conversation.",
    src: "/previews/eurobridge-sales-growth-preview.pdf",
  },
  {
    title: "Trainer Guide / Manager Support Preview",
    description:
      "A preview of facilitator and manager support materials designed to turn training into coaching, feedback, and workplace follow-through.",
    src: "/previews/eurobridge-trainer-guide.pdf",
  },
  {
    title: "Training Needs Analysis Preview",
    description:
      "Selected pages from the needs analysis report showing business context, learner groups, performance gaps, and recommended learning strategy.",
    src: "/previews/eurobridge-training-needs-analysis-report.pdf",
  },
];

const downloads = [
  {
    title: "Training Needs Analysis Report",
    description:
      "Full analysis of business context, target learners, performance gaps, training and non-training needs, learning strategy, and evaluation metrics.",
    href: "/downloads/eurobridge-training-system/eurobridge-training-needs-analysis-report.pdf",
  },
  {
    title: "Learning System Blueprint",
    description:
      "A structured blueprint showing the role-based learning paths, SME knowledge system, manager enablement, and evaluation approach.",
    href: "/downloads/eurobridge-training-system/eurobridge-learning-system-blueprint.pdf",
  },
  {
    title: "New Hire Onboarding Path",
    description:
      "A 30/60/90 onboarding path covering company understanding, product basics, sales process, compliance awareness, and action planning.",
    href: "/downloads/eurobridge-training-system/eurobridge-new-hire-onboarding-path.pdf",
  },
  {
    title: "Existing Employee Growth Path",
    description:
      "A growth path for 1–3 year sales employees focused on advanced communication, sales review, cross-product thinking, and career development.",
    href: "/downloads/eurobridge-training-system/eurobridge-existing-employee-growth-path.pdf",
  },
  {
    title: "Manager Coaching Path",
    description:
      "A manager development path focused on coaching, feedback, new hire development, team culture building, and talent retention.",
    href: "/downloads/eurobridge-training-system/eurobridge-manager-coaching-path.pdf",
  },
  {
    title: "Manager Coaching Workbook Toolkit",
    description:
      "A practical toolkit for manager coaching conversations, performance feedback, follow-up routines, and employee development support.",
    href: "/downloads/eurobridge-training-system/eurobridge_manager_coaching_workbook.pdf",
  },
];

const learningPaths = [
  {
    title: "New Hire Onboarding Path",
    audience: "New Hires",
    purpose:
      "Help new employees understand the company, product lines, sales process, compliance expectations, and 30/60/90-day development goals.",
    modules: [
      "Company & Market Overview",
      "Product Line Map",
      "Sales Process Basics",
      "Compliance & Risk Language",
      "Culture in Action",
      "30/60/90-Day Action Plan",
    ],
  },
  {
    title: "Existing Employee Growth Path",
    audience: "1–3 Year Sales Employees",
    purpose:
      "Help existing sales employees improve sales maturity, client communication, cross-product thinking, professional standards, and career growth.",
    modules: [
      "Advanced Client Communication",
      "Sales Case Review",
      "Cross-Product Selling",
      "Professionalism in Financial Sales",
      "Personal Sales Review",
      "Career Growth Conversation",
    ],
  },
  {
    title: "Manager Coaching & Leadership Path",
    audience: "Managers / Product-Line Leaders",
    purpose:
      "Help managers move from individual sales performers to people developers who can coach, give feedback, support new hires, and retain talent.",
    modules: [
      "From Sales Performer to People Manager",
      "Coaching for Sales Performance",
      "New Hire Development",
      "Performance Feedback",
      "Team Culture Building",
      "Talent Retention",
    ],
  },
];

const architectureLayers = [
  {
    title: "Sales Competency Model",
    text:
      "Defines excellent sales behavior beyond revenue: product knowledge, client discovery, compliant risk language, reflection, coaching, and culture-aligned behavior.",
  },
  {
    title: "Role-Based Learning Paths",
    text:
      "Creates visible development paths for new hires, existing sales employees, and managers instead of relying only on individual product-line leaders.",
  },
  {
    title: "Manager-Enabled Development",
    text:
      "Turns development into daily management practice through coaching conversations, feedback scripts, 30/60/90 check-ins, and action planning.",
  },
  {
    title: "SME & Knowledge Asset System",
    text:
      "Converts product-line leader and high-performer expertise into reusable company assets, including case libraries, talk tracks, and objection responses.",
  },
  {
    title: "Evaluation & Growth Conversations",
    text:
      "Connects training to readiness, behavior change, sales process quality, IDP conversations, and business-relevant development evidence.",
  },
];

const diagnosis = [
  {
    issue: "Training was informal and difficult to scale",
    implication:
      "Convert peer sharing and experience transfer into structured learning assets with objectives, templates, and evaluation.",
  },
  {
    issue: "Onboarding was inconsistent across product teams",
    implication:
      "Create a standardized 30/60/90 onboarding path that reduces overdependence on direct leaders.",
  },
  {
    issue: "Employees may not see training as valuable",
    implication:
      "Make training directly connected to sales performance, client communication, and career development.",
  },
  {
    issue: "Culture training lacked credibility",
    implication:
      "Translate culture into observable behaviors, growth paths, manager actions, and development conversations.",
  },
  {
    issue: "Managers used inconsistent coaching methods",
    implication:
      "Build a manager coaching path, toolkit, feedback scripts, and follow-up routines.",
  },
];

const highPerformerRoles = [
  ["Case Contributor", "Contributes real success and failure cases to build the sales case library."],
  ["Peer Coach", "Supports new hires and developing sales employees through practical communication and objection-handling practice."],
  ["Internal Trainer", "Shares product-line methods using a standard internal trainer template."],
  ["Product Champion", "Helps refine product knowledge, talk tracks, and cross-product sales cases."],
  ["Manager Candidate", "Builds evidence of leadership readiness through coaching, review, and development conversations."],
];

function Chip({ children }) {
  return (
    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 ring-1 ring-teal-100">
      {children}
    </span>
  );
}

function PDFPreview({ title, description, src }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
          <FileText size={21} />
        </div>

        <div>
          <h3 className="text-xl font-black text-slate-950">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-5 h-[520px] overflow-hidden rounded-2xl border border-slate-200">
        <iframe src={src} title={title} className="h-full w-full" />
      </div>

      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white"
      >
        Open Full Preview
      </a>
    </div>
  );
}

const artifactGallery = [
  {
    title: "Talent Development Architecture",
    description:
      "A system-level view connecting onboarding, sales capability building, manager coaching, high performer contribution, and evaluation.",
    src: "/images/portfolio/eurobridge-talent-architecture.png",
  },
  {
    title: "Role-Based Learning Paths",
    description:
      "Learning architecture that separates new hire onboarding, existing employee growth, manager coaching, and SME contribution.",
    src: "/images/portfolio/eurobridge-learning-paths.png",
  },
  {
    title: "Manager Coaching Toolkit",
    description:
      "Manager-facing support tool designed to turn training into coaching conversations, follow-up, and performance reinforcement.",
    src: "/images/portfolio/eurobridge-manager-coaching.png",
  },
];

export default function EuroBridgeTrainingSystem() {
  return (
    <main className="min-h-screen bg-[#f7fbfa] text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-[#eefaf7] to-[#f8f5ee]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-950"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-bold text-teal-800 shadow-sm">
              Financial Sales · Talent Development · Learning System Architecture
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
              EuroBridge Financial Sales Training & Talent Development System
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A performance-focused learning system designed to support new hire onboarding, sales growth, manager coaching, SME knowledge capture, and high performer adoption.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#previews"
                className="inline-flex justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg"
              >
                View System Preview
              </a>

              <a
                href="#downloads"
                className="inline-flex justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-sm"
              >
                Download Artifacts
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-700">
              Project Snapshot
            </p>

            <div className="mt-5 grid gap-3">
              {[
                ["Project Type", "Training Needs Analysis + Learning System Blueprint"],
                ["Case Company", "EuroBridge Capital Solutions"],
                ["Audience", "New Hires, Existing Sales Employees, Managers"],
                ["Industry Context", "Financial sales / European market products"],
                ["Core Challenge", "Training trust, leader dependence, inconsistent development"],
                ["My Role", "Instructional Designer / Learning System Designer"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

<ArtifactGallery
  title="Key Artifacts from the Sales Training System"
  description="These artifacts show the project as a broader talent development system, not just a single sales training course."
  items={artifactGallery}
/>

      <section className="mx-auto max-w-7xl px-6 py-18">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
            Business Context
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
            The issue was not simply a course gap. It was a talent development and trust problem.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            EuroBridge needed a structured learning system for a financial sales organization where performance, product expertise, client communication, and compliance all mattered. Because income was strongly connected to sales outcomes, training had to prove practical value rather than feel like extra corporate messaging.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            The deeper challenge was reducing overdependence on individual product-line leaders by building company-level standards, role-based learning paths, manager coaching routines, and reusable knowledge assets.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
              Performance Diagnosis
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              What the needs analysis revealed
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              The recommended solution had to separate training problems from business system problems, then design learning interventions that could realistically support behavior change.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-5">
            {diagnosis.map((item, index) => (
              <div
                key={item.issue}
                className="rounded-3xl border border-slate-200 bg-[#f7fbfa] p-6 shadow-sm"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-100 text-sm font-black text-teal-800">
                  {index + 1}
                </div>
                <h3 className="text-lg font-black text-slate-950">
                  {item.issue}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.implication}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
            Talent Development Architecture
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
            A five-layer system for turning individual expertise into company capability
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {architectureLayers.map((layer, index) => (
            <div
              key={layer.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                {index + 1}
              </div>
              <h3 className="text-lg font-black text-slate-950">{layer.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{layer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
              Three Learning Paths
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Role-based learning paths for different development needs
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {learningPaths.map((path) => (
              <div
                key={path.title}
                className="rounded-3xl border border-slate-200 bg-[#f7fbfa] p-6 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                  <Layers size={23} />
                </div>

                <p className="text-sm font-bold text-teal-700">{path.audience}</p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                  {path.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {path.purpose}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {path.modules.map((module) => (
                    <Chip key={module}>{module}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
              High Performer Adoption Strategy
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Reframing training as performance, recognition, influence, and career capital
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              High-performing sales employees were unlikely to be convinced by culture messaging alone. The design therefore positioned them not as passive learners, but as contributors to company capability and future leadership potential.
            </p>
          </div>

          <div className="grid gap-3">
            {highPerformerRoles.map(([role, contribution]) => (
              <div
                key={role}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-950">{role}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {contribution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="previews" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
              Final Solution Previews
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Preview the learning system and training outputs
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              The previews show the system architecture, sales growth path, manager support materials, and needs analysis evidence behind the project.
            </p>
          </div>

          <div className="grid gap-8">
            {previews.map((preview) => (
              <PDFPreview key={preview.title} {...preview} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
              Evaluation Framework
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Measuring more than completion
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The evaluation approach connects training to practical business indicators, including new hire ramp-up, product knowledge consistency, sales communication quality, manager coaching behavior, cultural trust, and knowledge asset creation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Reaction", "Usefulness, relevance, participation, and learner confidence."],
              ["Learning", "Knowledge checks, scenario judgment, role-play quality, and tool completion."],
              ["Behavior", "Manager observation, sales talk-track use, coaching records, and review quality."],
              ["Results", "New hire ramp-up, first effective client conversation, conversion quality, retention, and team stability."],
            ].map(([level, text]) => (
              <div
                key={level}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-black text-teal-700">{level}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="downloads" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-18">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-300">
              Supporting Documents
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Download the project artifacts
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              These files show the analysis, system blueprint, role-based learning paths, and manager coaching toolkit behind the project.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {downloads.map((doc) => (
              <div
                key={doc.title}
                className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-400/20 text-teal-200">
                  <BookOpen size={21} />
                </div>

                <h3 className="text-xl font-black">{doc.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {doc.description}
                </p>

                <a
                  href={doc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 hover:bg-teal-50"
                >
                  Open PDF <Download size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            © Toby Zhang · Instructional Design Portfolio
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900"
          >
            <ArrowLeft size={15} />
            Back to homepage
          </Link>
        </div>
      </footer>
    </main>
  );
}