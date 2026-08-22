import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import pSaijai from "../assets/p-saijai-real.png";
import pSaijaiWater from "../assets/p-saijai-water.jpg";
import saijaiGalleryProcess from "../assets/saijai-gallery-process.jpg";
import saijaiGalleryAward from "../assets/saijai-gallery-award.jpg";
import saijaiStructure from "../assets/saijai-structure.jpg";
import saijaiLightComparison from "../assets/saijai-light-comparison.png";
import pMyais from "../assets/p-myais.jpg";
import pKbtg from "../assets/p-kbtg.jpg";
import pBrand from "../assets/p-brand.jpg";
import pInterior from "../assets/p-interior.jpg";
import pProduct from "../assets/p-product.jpg";
import portrait from "../assets/portrait.jpg";
import figmaLogo from "../assets/figma-logo.png";
import procreateLogo from "../assets/procreate-logo.png";
import illustratorLogo from "../assets/software-illustrator.svg";
import lightroomLogo from "../assets/software-lightroom.svg";
import canvaLogo from "../assets/canva-logo.png";
import rhinocerosLogo from "../assets/software-rhinoceros.svg";
import sketchupLogo from "../assets/software-sketchup.svg";
import blenderLogo from "../assets/software-blender.svg";
import vrayLogo from "../assets/software-vray.png";
import enscapeLogo from "../assets/software-enscape.png";
import capcutLogo from "../assets/software-capcut.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thuspapha Methakittipob — UX/UI & Graphic Designer" },
      {
        name: "description",
        content:
          "Portfolio of Thuspapha Methakittipob, a UX/UI and graphic designer based in Bangkok — featuring UX/UI, branding, interior 3D, and product design work.",
      },
      { property: "og:title", content: "Thuspapha Methakittipob — UX/UI & Graphic Designer" },
      {
        property: "og:description",
        content: "UX/UI, graphic design, and handcrafted work by Thuspapha Methakittipob in Bangkok.",
      },
    ],
  }),
  component: HomePage,
});

/* ---------------- data ---------------- */

type Project = {
  id: string;
  title: string;
  category: "UX·UI" | "Branding" | "Interior·3D" | "Product";
  displayCategory?: string;
  desc: string;
  detail: string;
  role: string;
  tools: string[];
  image: string;
  award?: string;
  timeline?: string;
  team?: string;
  problem?: string;
  problemImage?: string;
};

const FILTERS = ["All", "UX·UI", "Branding", "Interior·3D", "Product"] as const;

const PROJECTS: Project[] = [
  {
    id: "saijai",
    title: "Saijai — Sustainable Packaging",
    category: "Branding",
    displayCategory: "BRANDING · PACKAGING",
    desc: "Recycled packaging that transforms into a reusable clothes hanger — protection that becomes a second product, not waste.",
    detail:
      "SAIJAI is an eco-conscious clothing brand dedicated to promoting sustainability. We intentionally designed our packaging not only to protect the clothes but also to enhance the post-purchase experience. By transforming into reusable hangers, the packaging extends its functionality, reduces waste, and reinforces a commitment to sustainability.",
    role: "Concept · Structural design · Graphic · Mockup",
    tools: ["Illustrator", "Photoshop"],
    image: pSaijai,
    award: "Honorable Mention — SCGP Packaging Speak Out 2024",
    timeline: "Sep – Nov 2024",
    team: "5 members from the Department of Industrial Design, Faculty of Architecture, Chulalongkorn University",
    problem:
      "Making clothes is staggeringly water-intensive — a single cotton T-shirt takes about 2,700 litres of water, roughly 2.5 years of one person’s drinking water — and textile production drives around 20% of global water pollution, mainly from dyeing. At end of life, only ~12% of textiles are recycled, ~73% are landfilled or burned, and less than 1% becomes new clothing. Most clothing packaging only adds to that waste — used once, thrown away.",
    problemImage: pSaijaiWater,
  },
  {
    id: "myais",
    title: "myAIS Loyalty Experience",
    category: "UX·UI",
    desc: "Redesigning the points and rewards experience in the myAIS app.",
    detail:
      "During my internship with the Loyalty and myAIS Digital Creative teams, I helped redesign the rewards redemption flow, created UI components within the design system, and tested with real users to reduce the number of steps needed to redeem a reward.",
    role: "UX/UI Design Intern",
    tools: ["Figma", "Illustrator", "Photoshop"],
    image: pMyais,
  },
  {
    id: "kbtg",
    title: "Fintech Experience — KBTG UX/UI Program",
    category: "UX·UI",
    desc: "A financial service concept for people at the beginning of their careers.",
    detail:
      "Developed through The Product UX/UI Design Program by Kasikorn Business Technology Group, covering the complete process from user research, service blueprints, and wireframes to a high-fidelity prototype and usability testing.",
    role: "UX Research, UI Design, Prototyping",
    tools: ["Figma", "FigJam"],
    image: pKbtg,
  },
  {
    id: "brand",
    title: "Cafe Identity System",
    category: "Branding",
    desc: "A complete identity system for a small café, from its logo to physical touchpoints.",
    detail:
      "Designed the logo, color palette, typography, and touchpoints including cups, tote bags, and business cards, balancing a warm, welcoming personality with a clean visual style.",
    role: "Brand identity, Graphic, Mockup",
    tools: ["Illustrator", "Photoshop", "Lightroom"],
    image: pBrand,
  },
  {
    id: "interior",
    title: "Warm Corner — Interior 3D",
    category: "Interior·3D",
    desc: "A warm café corner rendered with soft, natural light.",
    detail:
      "Studied spatial proportions, materials, and natural lighting before modeling and rendering the space, helping the client visualize its atmosphere before construction.",
    role: "Space planning, Modeling, Rendering",
    tools: ["SketchUp", "Enscape", "V-ray", "Photoshop"],
    image: pInterior,
  },
  {
    id: "product",
    title: "Modular Desk Organizer",
    category: "Product",
    desc: "An expandable modular desk organizer made from ceramic.",
    detail:
      "An industrial design project inspired by how students use their desks. The modular pieces can be arranged in multiple configurations and were developed through 3D modeling and presentation renders.",
    role: "Product design, 3D modeling, Rendering",
    tools: ["Rhinoceros", "Keyshot", "Blender"],
    image: pProduct,
  },
];

const PROJECT_ORDER = ["myais", "kbtg", "saijai", "brand", "interior", "product"];

const CASE_STUDY_META: Record<string, { label: string; focus: string }> = {
  myais: { label: "Featured case study · 01", focus: "UX flow · Design system · User testing" },
  kbtg: { label: "Featured case study · 02", focus: "Research · Service blueprint · Prototyping" },
  saijai: { label: "", focus: "Branding · Packaging · Sustainability" },
  brand: { label: "Selected project · 04", focus: "Brand identity · Visual system · Touchpoints" },
  interior: { label: "Selected project · 05", focus: "Space planning · 3D modeling · Rendering" },
  product: { label: "Selected project · 06", focus: "Product thinking · Prototyping · Rendering" },
};

const SOFTWARE: { name: string; mark: string; icon?: string }[] = [
  { name: "Figma", mark: "Fi", icon: figmaLogo },
  { name: "Illustrator", mark: "Ai", icon: illustratorLogo },
  { name: "Lightroom", mark: "Lr", icon: lightroomLogo },
  { name: "Canva", mark: "Ca", icon: canvaLogo },
  { name: "Procreate", mark: "Pr", icon: procreateLogo },
  { name: "Rhinoceros", mark: "Rh", icon: rhinocerosLogo },
  { name: "SketchUp", mark: "Su", icon: sketchupLogo },
  { name: "Blender", mark: "Bl", icon: blenderLogo },
  { name: "V-ray", mark: "Vr", icon: vrayLogo },
  { name: "Enscape", mark: "En", icon: enscapeLogo },
  { name: "CapCut", mark: "Cc", icon: capcutLogo },
];

const SKILLS = [
  "UX Research",
  "Wireframing",
  "Prototyping",
  "Design System",
  "Visual Identity",
  "Packaging",
  "3D Rendering",
  "Hand Craft",
];

const EXPERIENCE = [
  {
    role: "UX/UI Design Intern — AIS",
    org: "Loyalty Team · myAIS Digital Creative",
    date: "May – Jul 2025",
  },
  {
    role: 'SCGP Packaging Speak Out 2024 — Honorable Mention "Saijai"',
    org: "SCG Packaging",
    date: "Sep – Nov 2024",
  },
  {
    role: "The Product UX/UI Design Program",
    org: "Kasikorn Business Technology Group",
    date: "Jan – May 2024",
  },
];

/* ---------------- bits ---------------- */

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 0c.7 6.2 5.1 10.6 12 12-6.9 1.4-11.3 5.8-12 12-.7-6.2-5.1-10.6-12-12C6.9 10.6 11.3 6.2 12 0z" />
    </svg>
  );
}

function Pill({ children, tone = "pink" }: { children: React.ReactNode; tone?: "pink" | "soft" }) {
  return (
    <span
      className={
        tone === "pink"
          ? "inline-flex items-center gap-2 rounded-full bg-pink px-4 py-1.5 text-sm font-semibold text-card"
          : "inline-flex items-center gap-2 rounded-full border border-ink/12 bg-card px-3.5 py-1.5 text-sm font-medium text-ink/75"
      }
    >
      {children}
    </span>
  );
}

/* ---------------- page ---------------- */

function HomePage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(() => {
    const projects = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
    return [...projects].sort(
      (a, b) => PROJECT_ORDER.indexOf(a.id) - PROJECT_ORDER.indexOf(b.id),
    );
  }, [filter]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-soft-blue text-ink">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-ink/35 font-display text-lg font-bold text-ink">
              T
            </span>
            <span className="font-display text-base font-bold tracking-tight">Thuspapha M.</span>
          </a>
          <div className="flex items-center gap-1 sm:gap-5">
            <a href="#work" className="hidden px-3 py-2 text-xs font-semibold uppercase tracking-widest text-ink/70 transition-colors hover:text-pink sm:block">
              Work
            </a>
            <a href="#about" className="hidden px-3 py-2 text-xs font-semibold uppercase tracking-widest text-ink/70 transition-colors hover:text-pink sm:block">
              About
            </a>
            <a href="#contact" className="hidden px-3 py-2 text-xs font-semibold uppercase tracking-widest text-ink/70 transition-colors hover:text-pink sm:block">
              Contact
            </a>
            <a
              href="mailto:thuspapha@gmail.com?subject=Resume%20request"
              className="rounded-full border border-ink/35 bg-card/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-card hover:text-pink"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="border-x-[12px] border-pink bg-card sm:border-x-[28px]">
        <div className="mx-auto grid max-w-6xl border-x border-pink/30 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="retro-stripes p-5 sm:p-10 lg:p-12">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[34px] border-2 border-pink bg-card p-3">
              <img
                src={portrait}
                alt="Portrait of Thuspapha Methakittipob"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full rounded-[24px] object-cover"
              />
              <span className="absolute bottom-6 right-6 grid h-20 w-20 rotate-6 place-items-center rounded-full bg-sun text-center text-[10px] font-bold uppercase leading-tight tracking-wider text-pink">
                Open to<br />work
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pink">
              Hi, I&apos;m Mai · Bangkok
            </p>
            <h1 className="mt-5 font-display text-[clamp(3.2rem,8vw,6.7rem)] font-normal leading-[0.82] tracking-[-0.06em] text-pink">
              Thuspapha
              <br />
              Methakittipob
            </h1>
            <p className="mt-8 max-w-lg text-lg font-semibold uppercase leading-snug tracking-tight text-ink">
              UX/UI designer creating clear, trustworthy digital experiences for everyday services.
            </p>
            <p className="mt-4 max-w-lg text-pretty text-sm leading-relaxed text-ink/65">
              I create thoughtful digital experiences, visual identities, and crafted objects with
              warmth, clarity, and a strong sense of character.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-pink px-7 py-3 text-xs font-bold uppercase tracking-wider text-card transition-transform hover:-translate-y-0.5">
                Explore my work
              </a>
              <a href="mailto:thuspapha@gmail.com?subject=Resume%20request" className="rounded-full border border-pink px-7 py-3 text-xs font-bold uppercase tracking-wider text-pink transition-colors hover:bg-pink hover:text-card">
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="border-y border-pink bg-sun px-5 py-2 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-pink">
          UX/UI Design&nbsp;&nbsp; ✦ &nbsp;&nbsp;Visual Identity&nbsp;&nbsp; ✦ &nbsp;&nbsp;Product &amp; Spatial Design
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="work-pattern scroll-mt-20 px-5 py-20 text-ink sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-pink-deep">
                <Sparkle className="h-4 w-4 shrink-0" />
                Work
              </p>
              <h2 className="mt-3 font-display text-5xl font-normal sm:text-7xl">
                Selected Work
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={
                    filter === f
                      ? "rounded-full bg-sun px-4 py-2 text-sm font-semibold text-pink"
                      : "rounded-full border border-ink/25 bg-card/35 px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:border-pink hover:text-pink"
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
            {visible.map((p, index) => (
              <article
                key={p.id}
                className={`card-lift overflow-hidden rounded-[24px] border border-ink/10 bg-card text-ink ${index < 2 ? "lg:col-span-6" : "lg:col-span-4"}`}
              >
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className="block w-full text-left"
                  aria-label={`View details for ${p.title}`}
                >
                  <div className="relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="aspect-[16/10] w-full object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-card/70 bg-card/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-ink shadow-sm backdrop-blur-sm">
                      {p.displayCategory ?? p.category}
                    </span>
                  </div>
                  <div className="space-y-4 p-6">
                    {CASE_STUDY_META[p.id].label && (
                      <div className="border-b border-ink/10 pb-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-pink">
                          {CASE_STUDY_META[p.id].label}
                        </span>
                      </div>
                    )}
                    <div className="flex flex-wrap items-center gap-2">
                      {p.award && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-sun px-3 py-1 text-xs font-bold text-pink">
                          <Sparkle className="h-3 w-3" />
                          {p.award}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl font-bold leading-tight">{p.title}</h3>
                    <p className="text-sm text-ink/65">{p.desc}</p>
                    <div className="grid gap-3 border-y border-ink/10 py-3 text-xs sm:grid-cols-2">
                      <div>
                        <p className="font-bold uppercase tracking-wider text-ink/40">My role</p>
                        <p className="mt-1 font-medium text-ink/75">{p.role}</p>
                      </div>
                      <div>
                        <p className="font-bold uppercase tracking-wider text-ink/40">Focus</p>
                        <p className="mt-1 font-medium text-ink/75">{CASE_STUDY_META[p.id].focus}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tools.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-ink/10 px-2.5 py-0.5 text-xs text-ink/55"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="inline-block pt-1 text-sm font-semibold text-pink">
                      View details →
                    </span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20 border-x-[12px] border-pink bg-canvas px-5 py-24 sm:border-x-[28px] sm:px-8">
        <div className="mx-auto max-w-5xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-pink">
              <Sparkle className="h-4 w-4 shrink-0" />
              About
            </p>
            <h2 className="mt-3 font-display text-5xl font-normal leading-none text-pink sm:text-7xl">
              How I approach design
            </h2>
            <p className="mt-6 max-w-4xl text-pretty text-lg leading-relaxed text-ink/70">
              I approach design by listening closely to users, identifying the real problem, and
              turning complex information into clear and thoughtful experiences. My Industrial
              Design background helps me consider both digital interactions and the wider context
              in which people use them.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Understand", "Listen to users, business needs, and the context behind the problem."],
                ["02", "Structure", "Turn insights into clear flows, priorities, and testable design decisions."],
                ["03", "Refine", "Prototype, test, and improve the experience with clarity and care."],
              ].map(([number, title, description]) => (
                <div key={number} className="rounded-[22px] border border-ink/10 bg-card p-5">
                  <p className="text-xs font-bold tracking-widest text-pink">{number}</p>
                  <h3 className="mt-5 font-display text-2xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{description}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 font-display text-lg font-bold uppercase tracking-wide">
              Experience
            </h3>
            <ol className="mt-4 space-y-4 border-l-2 border-pink/30 pl-6">
              {EXPERIENCE.map((e) => (
                <li key={e.role} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-pink" aria-hidden="true" />
                  <p className="font-semibold">{e.role}</p>
                  <p className="text-sm text-ink/65">{e.org}</p>
                  <p className="text-xs uppercase tracking-widest text-ink/45">{e.date}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-[24px] border border-pink/45 bg-card p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide">Education</h3>
              <p className="mt-2 font-semibold">Bachelor of Industrial Design (B.I.D)</p>
              <p className="text-sm text-ink/65">
                Faculty of Architecture, Chulalongkorn University · 2021 – Present
              </p>
            </div>

            <h3 className="mt-10 font-display text-lg font-bold uppercase tracking-wide">Software</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {SOFTWARE.map((software) => (
                <span
                  key={software.name}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-card py-1.5 pl-1.5 pr-3.5 text-sm font-medium text-ink/75"
                >
                  {software.icon ? (
                    <img
                      src={software.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-7 w-7 rounded-lg object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="grid h-7 w-7 place-items-center rounded-full bg-pink/12 font-display text-[10px] font-bold uppercase tracking-tight text-pink-deep"
                    >
                      {software.mark}
                    </span>
                  )}
                  {software.name}
                </span>
              ))}
            </div>

            <h3 className="mt-8 font-display text-lg font-bold uppercase tracking-wide">Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-pink/12 px-3.5 py-1.5 text-sm font-medium text-pink-deep"
                >
                  {s}
                </span>
              ))}
            </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="retro-stripes scroll-mt-20 border-x-[12px] border-pink px-5 py-24 sm:border-x-[28px] sm:px-8">
        <div className="mx-auto max-w-4xl rounded-[32px] border-2 border-dashed border-pink bg-card px-6 py-14 text-center sm:px-12">
          <Sparkle className="animate-twinkle mx-auto h-7 w-7 text-sun" />
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-pink">Have a project in mind?</p>
          <h2 className="mt-3 font-display text-[clamp(3rem,8vw,6rem)] font-normal leading-[0.9] text-pink">
            Let&apos;s work together
          </h2>
          <a
            href="mailto:thuspapha@gmail.com"
            className="mt-8 inline-block break-all font-display text-[clamp(1.3rem,5vw,2.5rem)] font-bold text-pink underline decoration-sun decoration-[6px] underline-offset-8 transition-colors hover:text-pink-deep"
          >
            thuspapha@gmail.com
          </a>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="tel:+66835145361">
              <Pill tone="soft">+66 83-514-5361</Pill>
            </a>
            <Pill tone="soft">Bangkok, Thailand</Pill>
            <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
              <Pill tone="soft">Behance</Pill>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <Pill tone="soft">LinkedIn</Pill>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-soft-blue px-5 py-10 text-ink sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-ink/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Thuspapha Methakittipob</p>
          <p className="flex items-center gap-2">
            Designed with <Sparkle className="h-3 w-3 text-pink" /> in Bangkok
          </p>
        </div>
      </footer>

      {/* MODAL */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 p-0 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[22px] bg-card sm:rounded-[22px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={active.image}
                alt={active.title}
                width={1280}
                height={800}
                className="aspect-[16/10] w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-card text-lg font-bold text-ink transition-colors hover:bg-pink hover:text-card"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-canvas-alt px-3 py-1 text-xs font-semibold text-ink/65">
                  {active.displayCategory ?? active.category}
                </span>
                {active.award && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-pink px-3 py-1 text-xs font-bold text-card">
                    <Sparkle className="h-3 w-3" />
                    {active.award}
                  </span>
                )}
              </div>
              <h3 className="font-display text-2xl font-extrabold sm:text-3xl">{active.title}</h3>
              <p className="leading-relaxed text-ink/70">{active.detail}</p>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">Role</p>
                <p className="mt-1 text-sm text-ink/75">{active.role}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">Tools</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {active.tools.map((t) => (
                    <Pill key={t} tone="soft">
                      {t}
                    </Pill>
                  ))}
                </div>
              </div>
              {active.timeline && active.team && (
                <div className="grid gap-4 sm:grid-cols-[0.7fr_1.3fr]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">
                      Timeline
                    </p>
                    <p className="mt-1 text-sm text-ink/75">{active.timeline}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">
                      Team
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/75">{active.team}</p>
                  </div>
                </div>
              )}
              {active.problem && (
                <div className="border-y border-ink/10 py-5">
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-pink">
                    <Sparkle className="h-4 w-4 shrink-0" />
                    The Problem
                  </p>
                  {active.id === "saijai" ? (
                    <>
                      <h4 className="mt-5 font-display text-2xl font-bold text-ink">
                        Fashion&apos;s hidden water cost
                      </h4>
                      <p className="mt-3 leading-relaxed text-ink/70">
                        Making clothes is staggeringly water-intensive — a single cotton T-shirt
                        takes about <strong className="font-semibold text-ink">2,700 litres of water</strong>,
                        roughly <strong className="font-semibold text-ink">2.5 years</strong> of one
                        person&apos;s drinking water — and textile production drives around{" "}
                        <strong className="font-semibold text-ink">20% of global water pollution</strong>,
                        mainly from dyeing.<sup className="ml-0.5 text-[0.7em] font-semibold">1</sup> At end
                        of life, only ~12% of textiles are recycled, <strong className="font-semibold text-ink">
                          ~73% are landfilled or burned
                        </strong>, and <strong className="font-semibold text-ink">less than 1%</strong> becomes
                        new clothing.<sup className="ml-0.5 text-[0.7em] font-semibold">2</sup> Most clothing
                        packaging only adds to that waste — used once, thrown away.
                      </p>
                      {active.problemImage && (
                        <figure className="mt-5">
                          <img
                            src={active.problemImage}
                            alt="The Aral Sea shrinking between 1989 and the present"
                            width={1920}
                            height={1080}
                            className="w-full rounded-[18px] border border-ink/10 object-cover"
                          />
                          <figcaption className="mt-2 text-xs leading-relaxed text-ink/55">
                            The Aral Sea, 1989–present — drained largely by cotton irrigation.
                            Kazakhstan / Uzbekistan.
                          </figcaption>
                          <p className="mt-2 text-[10px] leading-relaxed text-ink/45">
                            <span className="font-semibold">Sources:</span> 1 — European Parliament,
                            “The impact of textile production and waste on the environment” (2020,
                            updated 2024). &nbsp; 2 — Ellen MacArthur Foundation, “A New Textiles
                            Economy: Redesigning Fashion&apos;s Future” (2017).
                          </p>
                        </figure>
                      )}
                    </>
                  ) : (
                    <p className="mt-3 leading-relaxed text-ink/70">{active.problem}</p>
                  )}
                </div>
              )}
              {active.id === "saijai" && (
                <div className="border-b border-ink/10 pb-5">
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-pink">
                    <Sparkle className="h-4 w-4 shrink-0" />
                    Design Challenge
                  </p>
                  <p className="mt-3 leading-relaxed text-ink/70">
                    If making clothes already costs this much water and waste, the packaging
                    shouldn&apos;t add more. <strong className="font-semibold text-ink">How might we
                    turn the package itself into something worth keeping — protection that earns
                    a second life instead of becoming trash?</strong>
                  </p>
                  <div className="mt-5 border-t border-ink/10 pt-5">
                    <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-pink">
                      <Sparkle className="h-4 w-4 shrink-0" />
                      The Concept
                    </p>
                    <h4 className="mt-4 text-2xl font-bold text-ink">
                      One box, a second life
                    </h4>
                    <p className="mt-3 leading-relaxed text-ink/70">
                      Most clothing boxes are thrown away the moment they&apos;re opened. Saijai&apos;s
                      box avoids that: it&apos;s built to{" "}
                      <strong className="font-semibold text-ink">
                        fold into a reusable clothes hanger
                      </strong>, so the packaging stays useful instead of becoming waste.
                    </p>
                    <figure className="mt-5">
                      <img
                        src={saijaiLightComparison}
                        alt="SAIJAI packaging shown with the lights on and in the dark"
                        width={1688}
                        height={934}
                        loading="lazy"
                        className="w-full rounded-[18px] border border-ink/10 object-cover"
                      />
                      <figcaption className="mt-2 text-xs leading-relaxed text-ink/55">
                        Before / after — lights on vs. dark
                      </figcaption>
                    </figure>
                    <div className="mt-5 rounded-[18px] bg-cream/70 p-5">
                      <h4 className="font-display text-xl font-bold text-ink">
                        Structure &amp; materials
                      </h4>
                      <ul className="mt-3 space-y-3 pl-5 text-ink/70 marker:text-pink">
                        <li className="list-disc leading-relaxed">
                          <strong className="font-semibold text-ink">Convertible structure:</strong>{" "}
                          a die-cut box that reconfigures into a functional hanger, with a printed
                          conversion instruction.
                        </li>
                        <li className="list-disc leading-relaxed">
                          <strong className="font-semibold text-ink">Material:</strong> 3-layer
                          recycled corrugated cardboard, KI grade, 0.25 cm flute — strong enough to
                          protect, clean enough to reuse.
                        </li>
                        <li className="list-disc leading-relaxed">
                          <strong className="font-semibold text-ink">Eco printing:</strong> soybean
                          ink, glow-in-the-dark ink (IsuoChem ASG), double water-based coating;
                          single-color print with tonal variation.
                        </li>
                      </ul>
                    </div>
                    <img
                      src={saijaiStructure}
                      alt="SAIJAI packaging dimensions, conversion instructions, and inside and outside layouts"
                      width={1920}
                      height={1080}
                      loading="lazy"
                      className="mt-5 w-full rounded-[18px] border border-ink/10 object-cover"
                    />
                    <div className="mt-5 border-t border-ink/10 pt-5">
                      <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-pink">
                        <Sparkle className="h-4 w-4 shrink-0" />
                        About the Brand
                      </p>
                      <p className="mt-3 leading-relaxed text-ink/70">
                        Saijai is an eco-clothing brand making everyday shirts and trousers from{" "}
                        <strong className="font-semibold text-ink">100% organic cotton</strong> —
                        pieces made to be worn across occasions, produced with an environment-first
                        process. Its long-term goal: to return up to{" "}
                        <strong className="font-semibold text-ink">one billion litres</strong> of
                        clean water to the world.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 border-t border-ink/10 pt-5">
                    <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-pink">
                      <Sparkle className="h-4 w-4 shrink-0" />
                      Gallery
                    </p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:items-start">
                      <div className="aspect-square overflow-hidden rounded-[18px] border border-ink/10">
                        <img
                          src={saijaiGalleryProcess}
                          alt="SAIJAI packaging prototype displayed at Packaging Speak Out"
                          width={1350}
                          height={1800}
                          loading="lazy"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="aspect-square overflow-hidden rounded-[18px] border border-ink/10">
                        <img
                          src={saijaiGalleryAward}
                          alt="SAIJAI team receiving an Honorable Mention at Packaging Speak Out"
                          width={2048}
                          height={2048}
                          loading="lazy"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
