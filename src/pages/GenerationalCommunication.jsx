import LearningJourney from "../components/LearningJourney";
import ArtifactGallery from "../components/ArtifactGallery";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  FileText,
  MessageSquareText,
  Users,
  Target,
  Sparkles,
  CheckCircle2,
  LineChart,
  BookOpen,
} from "lucide-react";

const previews = [
  {
    title: "Slide Deck Preview",
    description:
      "Selected slides showing the training flow, workplace scenarios, communication frameworks, and practice activities.",
    src: "/previews/generational-slide-preview.pdf",
  },
  {
    title: "Worksheet Preview",
    description:
      "Learner-facing activities that help interns practice message framing, feedback-seeking, and manager communication.",
    src: "/previews/generational-worksheet-preview.pdf",
  },
  {
    title: "Trainer Guide Preview",
    description:
      "Facilitation notes, timing, activity instructions, discussion prompts, and debrief questions.",
    src: "/previews/generational-trainer-guide-preview.pdf",
  },
];

const downloads = [
  {
    title: "Needs Analysis Report",
    description:
      "Analysis of intern communication challenges, stakeholder expectations, learner needs, and design implications.",
    href: "/downloads/generational-communication/generational-needs-analysis-report.pdf",
  },
  {
    title: "Design Document",
    description:
      "Instructional strategy, objectives, learning flow, engagement design, activity structure, and assessment approach.",
    href: "/downloads/generational-communication/generational-design-document.pdf",
  },
  {
    title: "Lesson Plan",
    description:
      "Session flow, timing, facilitator actions, learner activities, materials, and transition points.",
    href: "/downloads/generational-communication/generational-lesson-plan.pdf",
  },
  {
    title: "Slide Deck",
    description:
      "Full learner-facing presentation deck for the generational communication training session.",
    href: "/downloads/generational-communication/generational-slide-deck.pdf",
  },
  {
    title: "Trainer Guide",
    description:
      "Full facilitator guide with notes, prompts, debrief questions, and activity instructions.",
    href: "/downloads/generational-communication/generational-trainer-guide.pdf",
  },
  {
    title: "Worksheet Packet",
    description:
      "Learner worksheets for reflection, communication practice, scenario response, and action planning.",
    href: "/downloads/generational-communication/generational-worksheet-packet.pdf",
  },
];

const learningFlow = [
  {
    stage: "Reality Check",
    purpose: "Build relevance and psychological safety",
    activity:
      "Opening poll and discussion on what makes communicating with senior managers feel difficult for new interns.",
  },
  {
    stage: "Manager Lens",
    purpose: "Understand what leaders need from intern communication",
    activity:
      "Scenario analysis of a vague message to identify missing context, unclear ask, urgency, and next step.",
  },
  {
    stage: "CLEAR Framework",
    purpose: "Structure updates, requests, questions, and follow-ups",
    activity:
      "Learners build a manager-ready update using Context, Lead with the point, Explain briefly, Ask or action, and Recap next step.",
  },
  {
    stage: "Message Makeover",
    purpose: "Improve tone, clarity, and professionalism",
    activity:
      "Teams rewrite weak email or chat messages into senior-manager-ready communication.",
  },
  {
    stage: "Ask Better Questions",
    purpose: "Practice speaking up and clarifying expectations",
    activity:
      "Pairs role-play how to ask specific questions about audience, format, scope, deadline, and next step.",
  },
  {
    stage: "Feedback + Commitment",
    purpose: "Respond to feedback and transfer learning to work",
    activity:
      "Learners choose the best feedback response and complete a 30-day communication commitment.",
  },
];

const designDecisions = [
  {
    icon: Users,
    title: "Focused on communicating up, not stereotypes",
    text:
      "The training frames generational communication as a shift in expectations, context, and role rather than labeling people by age group.",
  },
  {
    icon: MessageSquareText,
    title: "Used the CLEAR framework for structure",
    text:
      "Interns practice a repeatable structure for emails, chats, verbal updates, questions, and follow-ups: Context, Lead, Explain, Ask/Action, and Recap.",
  },
  {
    icon: Sparkles,
    title: "Built the session as a challenge lab",
    text:
      "The workshop uses polls, scenario analysis, message rewriting, pair role-play, and action planning so learners do something every 7–10 minutes.",
  },
  {
    icon: LineChart,
    title: "Designed for 30-day transfer",
    text:
      "The session ends with a personal 30-day communication commitment and manager check-in prompt to support workplace application.",
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
    title: "Workshop Slide Deck",
    description:
      "Opening visual for the Communication Challenge Lab, positioning the session as practical, interactive, and confidence-building.",
    src: "/images/portfolio/communication-slide-cover.png",
  },
  {
    title: "CLEAR Framework",
    description:
      "A simple communication structure interns can use for updates, questions, requests, and follow-ups with senior managers.",
    src: "/images/portfolio/communication-clear-framework.png",
  },
  {
    title: "Message Makeover Activity",
    description:
      "Scenario-based practice where interns rewrite unclear or overly casual messages into manager-ready communication.",
    src: "/images/portfolio/communication-message-makeover.png",
  },
];

export default function GenerationalCommunication() {
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
              NorthStar Rail · Intern Onboarding · Communication Challenge Lab
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
              Communicating Up: Building Confidence Across Generations
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A 90-minute NorthStar Rail intern onboarding workshop designed to help new graduate interns communicate clearly, professionally, and confidently with senior managers and leaders through realistic workplace communication challenges.
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
  {[
    ["Project Type", "New intern onboarding communication workshop"],
    ["Case Company", "NorthStar Rail"],
    ["Audience", "New graduate interns"],
    ["Format", "Interactive instructor-led workshop"],
    ["Core Focus", "Communicating up with clarity, confidence, and professionalism"],
    ["My Role", "Instructional Designer / Learning Experience Designer"],
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
  title="Key Artifacts from the Communication Challenge Lab"
  description="These visuals show how the session was designed as an active communication lab rather than a passive lecture, using frameworks, scenarios, rewriting, and practice."
  items={artifactGallery}
/>

<LearningJourney
  eyebrow="Learning Flow"
  title="From communication anxiety to manager-ready practice"
  description="The workshop moves interns through a practical sequence: recognize communication challenges, understand the manager lens, apply the CLEAR framework, rewrite messages, practice asking better questions, and commit to a workplace action."
  items={learningFlow}
/>

      <section className="mx-auto max-w-7xl px-6 py-18">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
            Design Challenge
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
            The training needed to build confidence through practice, not lecture.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            New graduate interns often need support communicating with senior managers, especially when asking questions, clarifying expectations, reporting progress, and requesting feedback. The client also wanted the session to avoid the feel of a typical low-participation training.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            NorthStar Rail needed an onboarding communication session for new graduate interns who were technically capable but still developing confidence in corporate, leader-facing communication. Common challenges included asking unclear questions, writing overly casual messages, hesitating to speak in meetings, and feeling unsure about how to respond to feedback.

The design therefore reframed the session as a Communication Challenge Lab: a practical, scenario-based workshop where interns choose, rewrite, practice, and commit to stronger communication behaviors instead of passively listening to communication theory.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
              Learner Context
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Designed around real intern communication moments
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
  {[
    "Asking clear questions without sounding unprepared",
    "Turning vague updates into manager-ready messages",
    "Adapting tone across email, chat, meetings, and feedback conversations",
    "Responding to feedback with ownership and a next step",
  ].map((item) => (
    <div
      key={item}
      className="rounded-3xl border border-slate-200 bg-[#f7fbfa] p-6 shadow-sm"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
        <CheckCircle2 size={21} />
      </div>

      <p className="text-sm font-semibold leading-6 text-slate-700">
        {item}
      </p>
    </div>
  ))}
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

        <div className="grid gap-8">
          {previews.map((preview) => (
            <PDFPreview key={preview.title} {...preview} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
              Learning Experience Flow
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              How the session moves from confidence gap to practice
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {learningFlow.map((step, index) => (
              <div
                key={step.stage}
                className="rounded-3xl border border-slate-200 bg-[#f7fbfa] p-6 shadow-sm"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-100 text-sm font-black text-teal-800">
                  {index + 1}
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  {step.stage}
                </h3>

                <p className="mt-2 text-sm font-semibold text-slate-700">
                  {step.purpose}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {step.activity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18">
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
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
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
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-18">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
                Evaluation & Reflection
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
                How success would be measured
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The training is designed to be measured through participation, confidence, scenario performance, and workplace application after onboarding.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
  ["Reaction", "Post-session survey on relevance, confidence, usefulness, and psychological safety."],
  ["Learning", "Scenario-based message rewrite, CLEAR update practice, role-play quality, and best-response activity."],
  ["Behavior", "Manager observation after 30–60 days and use of CLEAR in real intern communication."],
  ["Results", "Faster onboarding, fewer communication misunderstandings, stronger intern engagement, and clearer manager-intern relationships."],
].map(([level, text]) => (
                <div
                  key={level}
                  className="rounded-3xl border border-slate-200 bg-[#f7fbfa] p-6 shadow-sm"
                >
                  <p className="text-sm font-black text-teal-700">{level}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
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
              These files show the final training solution and the instructional design process behind it.
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