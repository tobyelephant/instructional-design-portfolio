import { Link } from "react-router-dom";
import LearningJourney from "../components/LearningJourney";
import ArtifactGallery from "../components/ArtifactGallery";
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
} from "lucide-react";

const artifactGallery = [
  {
    title: "Leadership Playbook",
    description:
      "Leader-facing adoption guide showing how leaders sponsor IDP adoption, reinforce quality standards, and support follow-up.",
    src: "/images/portfolio/idp-leadership-playbook.png",
  },
  {
    title: "Manager & Employee Workshop Flow",
    description:
      "Application-based workshop structure moving learners from understanding IDPs to practice, documentation, and commitment.",
    src: "/images/portfolio/idp-manager-workshop-flow.png",
  },
  {
    title: "IDP Quality Checklist",
    description:
      "Practical worksheet used to help managers and employees improve vague development goals into specific, actionable IDPs.",
    src: "/images/portfolio/idp-quality-checklist.png",
  },
];



const programTracks = [
  {
    title: "Leader Track",
    purpose:
      "Equip leaders to sponsor IDP adoption, communicate the purpose, reinforce expectations, remove barriers, and interpret adoption data across regions.",
    focus: [
      "Leadership message",
      "Roles and responsibilities",
      "IDP quality standards",
      "Common barriers",
      "Follow-up rhythm",
      "Success measures",
    ],
    artifacts: [
      "IDP Leadership Playbook",
      "Standard leadership message",
      "Barrier-response guide",
      "Dashboard interpretation standard",
      "Implementation checklist",
    ],
  },
  {
    title: "Manager & Employee Track",
    purpose:
      "Prepare managers and employees to create, discuss, document, and follow up on meaningful IDPs through a practical application-based workshop.",
    focus: [
      "IDP journey",
      "Role clarity",
      "Strong IDP goals",
      "Weak IDP revision",
      "Conversation model",
      "System practice",
      "Follow-up commitment",
    ],
    artifacts: [
      "Detailed lesson plan",
      "Participant workbook",
      "IDP Quality Checklist",
      "Fix the Weak IDP worksheet",
      "Conversation model",
      "CRM/system practice",
      "Follow-up commitment card",
    ],
  },
];

const previews = [
  {
    title: "Leader Track Slide Preview",
    description:
      "Selected slides showing the strategic framing, talent development logic, and leadership alignment components.",
    src: "/previews/idp-leader-slide-preview.pdf",
  },
  {
    title: "Manager & Employee Workshop Preview",
    description:
      "Selected pages showing the 2-hour application-based workshop flow, IDP journey, strong IDP examples, weak IDP revision, conversation model, and system practice.",
    src: "/previews/idp-manager-slide-preview.pdf",
  },
  {
    title: "Worksheet / Toolkit Preview",
    description:
      "Selected pages showing IDP quality checklist, Fix the Weak IDP worksheet, conversation question bank, CRM practice, IDP draft worksheet, peer review, and follow-up commitment tools.",
    src: "/previews/idp-worksheet-preview.pdf",
  },
];

const downloads = [
  {
    title: "IDP Leadership Playbook",
    description: "Standard sample for leader track.",
    href: "/downloads/idp/idp-leader-playbook.pdf",
  },
  {
    title: "Manager Track Slide Deck",
    description: "Full slide deck for the manager-facing IDP training track.",
    href: "/downloads/idp/idp-manager-slide-deck.pdf",
  },
  {
    title: "Trainer Guide",
    description:
      "Facilitation notes, timing, prompts, activity instructions, and debrief guidance.",
    href: "/downloads/idp/idp-trainer-guide.pdf",
  },
  {
    title: "Worksheet Packet",
    description:
      "Learner-facing worksheets for reflection, goal mapping, action planning, and follow-up.",
    href: "/downloads/idp/idp-worksheet-packet.pdf",
  },
  {
    title: "Needs Analysis Report",
    description:
      "Analysis of learner needs, stakeholder expectations, performance gaps, and design implications.",
    href: "/downloads/idp/idp-needs-analysis-report.pdf",
  },
  {
    title: "Design Document",
    description:
      "Instructional strategy, learning objectives, course structure, activities, and assessment approach.",
    href: "/downloads/idp/idp-design-document.pdf",
  },
  {
    title: "Detailed Lesson Plan",
    description:
      "Detailed timing, facilitator actions, learner activities, materials, and transition points.",
    href: "/downloads/idp/idp-detailed-lesson-plan.pdf",
  },
];

const designDecisions = [
  {
    icon: Target,
    title: "Designed adoption before instruction",
    text:
      "The Leader Track establishes purpose, expectations, barriers, success measures, and follow-up before managers and employees enter the application workshop.",
  },
  {
    icon: MessageSquareText,
    title: "Treated IDPs as conversations, not forms",
    text:
      "The workshop focuses on reflection, discussion, planning, documentation, and follow-up rather than only system completion.",
  },
  {
    icon: Users,
    title: "Built shared ownership across roles",
    text:
      "Leaders reinforce the system, managers coach the conversation, employees own the plan, and HR/L&D provides tools and reporting support.",
  },
  {
    icon: LineChart,
    title: "Focused on IDP quality and follow-up",
    text:
      "The design measures usefulness, quality, manager participation, development themes, and follow-up, not only completion rate.",
  },
];

const learningFlow = [
  {
    stage: "Understand",
    purpose: "Build shared understanding of IDP purpose and roles",
    activity:
      "Welcome, leader standard, IDP journey, and role clarity for employees, managers, leaders, and HR/L&D.",
  },
  {
    stage: "Analyze",
    purpose: "Review strong and weak IDP examples",
    activity:
      "Use the IDP Quality Checklist to compare vague goals with stronger, actionable development plans.",
  },
  {
    stage: "Practice",
    purpose: "Improve goals and conversation language",
    activity:
      "Fix the Weak IDP activity and IDP Conversation Model practice using realistic development statements.",
  },
  {
    stage: "Apply",
    purpose: "Draft or update a real IDP component",
    activity:
      "CRM/system guided practice, IDP draft worksheet, and role-specific manager or employee tasks.",
  },
  {
    stage: "Commit",
    purpose: "Confirm next step and follow-up rhythm",
    activity:
      "Peer review, follow-up commitment card, and post-training reinforcement expectations.",
  },
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
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="border-b border-slate-200 bg-slate-50 p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
            <FileText size={20} />
          </div>

          <div>
            <h3 className="text-lg font-black leading-snug text-slate-950">
              {title}
            </h3>
          </div>
        </div>
      </div>

      <div className="h-[280px] overflow-hidden bg-slate-100">
        <iframe
          src={`${src}#toolbar=0&navpanes=0&scrollbar=0`}
          title={title}
          loading="lazy"
          className="h-full w-full"
        />
      </div>

      <div className="p-4">
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white"
        >
          Open Full Preview
        </a>
      </div>
    </div>
  );
}


export default function IDPTraining() {
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
              Leadership Development · Talent Architecture · Dual-Track IDP Training
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
              RailCore Growth Pathway Program: IDP Leader + Manager & Employee Tracks
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
             A dual-track IDP adoption program designed for RailCore Transit Solutions to help leaders sponsor the system, managers coach meaningful development conversations, and employees create practical development plans with clear actions and follow-up.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#previews"
                className="inline-flex justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg"
              >
                View Training Preview
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
              {	[
  	["Project Type", "Dual-track IDP adoption and talent development program"],
 	["Case Company", "RailCore Transit Solutions"],
  	["Audience", "Senior leaders, managers, employees, HR/L&D partners"],
  	["Program Structure", "Leader Track + Manager & Employee Track"],
  	["Core Focus", "IDP quality, development conversations, documentation, follow-up"],
  	
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

<section className="mx-auto max-w-7xl px-6 py-16">
  <div className="mb-10 max-w-3xl">
    <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
      Context & Needs Analysis
    </p>

    <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
      Why this became an IDP adoption program, not just system training
    </h2>

    <p className="mt-4 text-lg leading-8 text-slate-600">
      The analysis showed that RailCore did not only need employees to complete
      IDP forms. The real need was to build shared ownership, improve IDP
      quality, support manager conversations, and create a follow-up rhythm that
      made development planning useful after training.
    </p>
  </div>

  <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-700">
        Design Challenge
      </p>

      <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
        The program needed to make IDPs useful, not just completed.
      </h3>

      <p className="mt-4 text-base leading-7 text-slate-600">
        IDPs can easily become a compliance task if leaders only track
        completion. RailCore needed a learning solution that helped people
        understand the purpose of IDPs, improve the quality of goals, and turn
        development planning into practical conversations.
      </p>

      <p className="mt-4 text-base leading-7 text-slate-600">
        The solution therefore had to support both organizational adoption and
        learner application: leaders needed to sponsor the system, while
        managers and employees needed tools to create, discuss, document, and
        follow up on meaningful development plans.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-700">
        Needs Analysis Findings
      </p>

      <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
        What the analysis revealed
      </h3>

      <div className="mt-5 grid gap-4">
        {[
          "Leaders needed a consistent message for why IDPs matter and how they support talent development.",
          "Managers needed a practical coaching structure for meaningful development conversations.",
          "Employees needed examples of specific, actionable IDP goals instead of vague development intentions.",
          "The program needed to focus on IDP quality, not only completion rate.",
          "System documentation had to be connected to real planning and follow-up, not treated as an administrative step.",
          "HR/L&D needed a shared standard for follow-up, adoption data, manager participation, and development themes.",
        ].map((finding) => (
          <div key={finding} className="flex items-start gap-3">
            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 ring-1 ring-teal-100">
              <CheckCircle2 size={14} />
            </div>

            <p className="text-sm leading-6 text-slate-600">{finding}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<LearningJourney
  eyebrow="Design Strategy"
  title="From IDP completion to meaningful development practice"
  description="The learning experience moves participants through a practical sequence: understand the purpose, analyze IDP quality, practice development conversations, apply the system, and commit to follow-up."
  items={learningFlow}
/>

<ArtifactGallery
  eyebrow="Design Solution"
  title="Key artifacts from the IDP adoption program"
  description="These artifacts show how the project moved beyond awareness training into a structured adoption system with leadership sponsorship, manager coaching, employee planning, and follow-up support."
  items={artifactGallery}
/>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18">
          <div className="mb-10 max-w-3xl">
           <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
  Dual-Track Program Architecture
</p>

<h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
  Two connected tracks for role-specific adoption
</h2>

<p className="mt-4 text-lg leading-8 text-slate-600">
  The program separates strategic adoption from workplace application. The
  Leader Track creates sponsorship, standards, and reinforcement, while the
  Manager & Employee Track turns those standards into practical planning,
  conversation, documentation, and follow-up behaviors.
</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {programTracks.map((track) => (
              <div
                key={track.title}
                className="rounded-3xl border border-slate-200 bg-[#f7fbfa] p-6 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                  <Layers size={23} />
                </div>

                <h3 className="text-2xl font-black tracking-tight text-slate-950">
                  {track.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {track.purpose}
                </p>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Key Focus
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {track.focus.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-white p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Main Artifacts
                  </p>

                  <div className="mt-3 grid gap-2">
                    {track.artifacts.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2 size={16} className="text-teal-700" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
              Behind the Design
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Key instructional design decisions
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {designDecisions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-[#f7fbfa] p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      <section id="previews" className="mx-auto max-w-7xl px-6 py-18">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
            Final Training Solution
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
            Preview the finished learning materials
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The previews show selected pages from the final training outputs. Full documents are available in the download section.
          </p>
        </div>

       <div className="grid gap-6 lg:grid-cols-3">
  {previews.map((preview) => (
    <PDFPreview key={preview.title} {...preview} />
  ))}
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
              These files show the full training solution and the instructional design process behind it.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {downloads.map((doc) => (
              <div
                key={doc.title}
                className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-400/20 text-teal-200">
                  <FileText size={21} />
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