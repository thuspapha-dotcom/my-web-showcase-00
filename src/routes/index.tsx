import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import pSaijai from "../assets/p-saijai-real.png";
import pSaijaiWater from "../assets/p-saijai-water.jpg";
import saijaiGalleryProcess from "../assets/saijai-gallery-process.jpg";
import saijaiGalleryAward from "../assets/saijai-gallery-award.jpg";
import saijaiStructure from "../assets/saijai-structure.jpg";
import saijaiLightComparison from "../assets/saijai-light-comparison.png";
import saijaiSecondLife from "../assets/saijai-second-life.png";
import saijaiArExperience from "../assets/saijai-ar-experience.png";
import pKbtg from "../assets/p-kbtg.jpg";
import pBrand from "../assets/p-brand.jpg";
import pInterior from "../assets/p-interior.jpg";
import pProduct from "../assets/p-product.jpg";
import portrait from "../assets/portrait-mai.png";
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
import projectCuDormie from "../assets/project-cu-dormie.jpg";
import projectPopFreshFood from "../assets/project-pop-fresh-food.jpg";
import projectWeR from "../assets/project-we-r.jpg";
import projectSaranthai from "../assets/project-saranthai.jpg";
import projectSelfLove from "../assets/project-self-love.jpg";
import projectOohJuicy from "../assets/project-ooh-juicy.jpg";
import projectRockingLife from "../assets/project-rocking-life.jpg";
import projectCircusSweet from "../assets/project-circus-sweet.jpg";
import projectNewsphoter from "../assets/project-newsphoter.jpg";
import projectNami from "../assets/project-nami.jpg";
import projectLandmark from "../assets/project-landmark.jpg";

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
  awardDetail?: string;
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
      "SAIJAI is an eco-conscious clothing brand concept created by our team to promote sustainability. We designed the packaging not only to protect the clothes but also to enhance the post-purchase experience. By transforming into reusable hangers, the packaging extends its functionality, reduces waste, and reinforces the concept's commitment to sustainability.",
    role: "Research | Concept design | Branding design | Packaging Design | Prototype test | Marketing | Product present",
    tools: ["Illustrator", "Photoshop"],
    image: pSaijai,
    award: "Honorable Mention",
    awardDetail: "Honorable Mention — SCGP Packaging Speak Out 2024",
    timeline: "Sep – Nov 2024",
    team: "3 members from the Department of Industrial Design, Faculty of Architecture, Chulalongkorn University",
    problem:
      "Making clothes is staggeringly water-intensive — a single cotton T-shirt takes about 2,700 litres of water, roughly 2.5 years of one person’s drinking water — and textile production drives around 20% of global water pollution, mainly from dyeing. At end of life, only ~12% of textiles are recycled, ~73% are landfilled or burned, and less than 1% becomes new clothing. Most clothing packaging only adds to that waste — used once, thrown away.",
    problemImage: pSaijaiWater,
  },
  {
    id: "kbtg",
    title: "CU Dormie",
    category: "UX·UI",
    desc: "A room-search and rental service designed to help Chulalongkorn University students find compatible roommates.",
    detail:
      "Created during The Product UX/UI Design Program with Kasikorn Business Technology Group, CU Dormie enhances the CU NEX application with room-search and rental services. Our team researched student living challenges and designed a more engaging way to find compatible roommates and reduce potential conflicts. Iterative design and prototype testing helped us refine the concept into a seamless solution.",
    role: "Research | Interview | Usability test | UX design | UI design | Branding design | Illustration | Clickable prototype test",
    tools: ["Illustrator", "Figma", "Procreate"],
    image: projectCuDormie,
    timeline: "Jan – May 2024",
    team: "5 members from the Department of Industrial Design, Faculty of Architecture, Chulalongkorn University",
  },
  {
    id: "brand",
    title: "Pop fresh food",
    category: "Branding",
    desc: "A smart food pickup and vending station at CU POP bus stops for students with busy mornings.",
    detail:
      "Pop Fresh Food gives Chulalongkorn University students quick and convenient access to breakfast from nearby vendors without disrupting their daily commute. The service highlights the importance of a balanced morning meal and encourages healthier, more consistent breakfast habits.",
    role: "Research | Interview | Function design | Usability test | UX design | UI design | Branding design",
    tools: ["Illustrator", "Google Forms", "Procreate"],
    image: projectPopFreshFood,
    team: "5 members from the Department of Industrial Design, Faculty of Architecture, Chulalongkorn University",
  },
  {
    id: "interior",
    title: "Saranthai",
    category: "Interior·3D",
    desc: "Saranthai is a cultural tourism train that takes passengers on a scenic journey from the South to the Northeast and onward to the North of Thailand over the course of two days.",
    detail:
      "Saranthai is a cultural tourism train that takes passengers on a scenic journey from the South to the Northeast and onward to the North of Thailand over the course of two days. The project aims to immerse travelers in Thai culture through onboard experiences and the landscapes along the route, blending contemporary Thai elegance with timeless sophistication.",
    role: "Research | Concept design and development | Circulation & space planning | Furniture design | Space design | 3D modeling & rendering",
    tools: ["SketchUp", "Procreate", "V-ray", "Enscape"],
    image: projectSaranthai,
  },
  {
    id: "product",
    title: "We R",
    category: "Product",
    desc: "An escape-room-style experience that helps people understand each other before starting a relationship.",
    detail:
      "We R is a team project for the New Product Design course. Through research, interviews, brainstorming, and prototype testing, we created an escape-room-style game that simulates emergency situations to reveal participants' personalities naturally. We also designed the booking and game-joining UI to keep the experience fast, subtle, and aligned with the project’s core values.",
    role: "Research | Interview | Concept design and testing | UX design | Branding design | UI design | Visual design | Prototype testing",
    tools: ["Illustrator", "Figma", "Photoshop"],
    image: projectWeR,
    team: "5 members from the Department of Industrial Design, Faculty of Architecture, Chulalongkorn University",
  },
  {
    id: "self-love",
    title: "Self Love",
    category: "Interior·3D",
    desc: "A Memphis-inspired nail salon celebrating individuality, confidence, and self-expression.",
    detail:
      "Inspired by Selena Gomez's song Who Says and the lyric ‘I'm no beauty queen, I'm just beautiful me,’ Self Love translates individuality into a vibrant nail salon. Bold colors, geometric forms, and playful Memphis-style patterns give every part of the space a distinct character while creating an atmosphere that celebrates beauty in all forms.",
    role: "Research | Concept design and development | Circulation & space planning | Furniture design | Space design | 3D graphic design | 3D modeling & rendering",
    tools: ["SketchUp", "Procreate", "V-ray", "Enscape"],
    image: projectSelfLove,
  },
  {
    id: "ooh-juicy",
    title: "Ooh Juicy",
    category: "Branding",
    desc: "A playful fruit brand identity built around freshness, delight, and memorable packaging.",
    detail:
      "Ooh Juicy combines the delighted exclamation ‘Oh’ with ‘Juice’ to create a catchy, friendly name. The identity uses energetic typography, fresh colors, character graphics, and packaging that express the brand's fun and vibrant personality.",
    role: "Research | Concept design | Branding design | Packaging design",
    tools: ["Illustrator", "Photoshop"],
    image: projectOohJuicy,
  },
  {
    id: "rocking-life",
    title: "Rocking Life",
    category: "Product",
    desc: "A balancing vase inspired by resilience and the flower of life.",
    detail:
      "Inspired by the Kaew Jao Jom flower, Rocking Life represents a life that refuses to give up. Its unconventional form combines falling and balance, using a spherical steel counterweight to create a vase that can tip dynamically while remaining stable.",
    role: "Research | Concept design | Experiment | Prototype test | Product design | 3D modeling & rendering",
    tools: ["Illustrator", "Rhinoceros"],
    image: projectRockingLife,
  },
  {
    id: "circus-sweet",
    title: "Circus × Sweet",
    category: "Product",
    desc: "A playful character that combines the energy of a clown with a love of sweets.",
    detail:
      "Circus × Sweet is a personal character-design project shaped by two traits: a playful desire to bring joy to others and an undeniable love of sweets. Familiar circus and dessert elements were reinterpreted into a lively, meaningful 3D character.",
    role: "Research | Character design | Graphic design | 3D modeling & rendering | 3D printing",
    tools: ["Illustrator", "Blender", "Keyshot"],
    image: projectCircusSweet,
  },
  {
    id: "newsphoter",
    title: "Newsphoter Jewelry Series",
    category: "Product",
    desc: "A jewelry collection that transforms Thai newspaper headlines into wearable visual stories.",
    detail:
      "Newsphoter responds to the decline of printed-news readership by asking whether news could become engaging again when transformed into images. The brooch series layers newspaper elements and reinterprets selected Thai headlines as expressive, wearable compositions.",
    role: "Research | Concept design | Jewelry design | Graphic composition",
    tools: [],
    image: projectNewsphoter,
  },
  {
    id: "nami",
    title: "Nami",
    category: "Product",
    desc: "A clear-acrylic vase collection inspired by waves that protect and embrace.",
    detail:
      "Inspired by a scene from Spirited Away, Nami uses fluid forms to cradle and protect flowers. Curves and movement express a nurturing embrace, while light passing through the clear acrylic creates reflective waves that bring unity and harmony to the collection.",
    role: "Research | Concept design | Experiment | Prototype test | Product design | 3D modeling & rendering",
    tools: ["Heat gun", "Acrylic bending"],
    image: projectNami,
  },
  {
    id: "landmark",
    title: "CU-TU Unity in Diversity",
    category: "Branding",
    desc: "Landmark graphics and an interactive photo booth for Supachalasai National Stadium.",
    detail:
      "As part of the landmark-decoration team, I contributed to a vinyl banner for Supachalasai National Stadium and collaborated on the design and installation of an interactive photo booth for the CU-TU event.",
    role: "Area survey & space planning | Graphic design | Event planning | Booth setup",
    tools: [],
    image: projectLandmark,
  },
];

const PROJECT_ORDER = [
  "kbtg",
  "saijai",
  "brand",
  "interior",
  "product",
  "self-love",
  "ooh-juicy",
  "rocking-life",
  "circus-sweet",
  "newsphoter",
  "nami",
  "landmark",
];

const CASE_STUDY_META: Record<string, { label: string; focus: string }> = {
  kbtg: { label: "Featured case study · 02", focus: "Roommate matching · UX/UI · Prototyping" },
  saijai: { label: "", focus: "Branding · Packaging · Sustainability" },
  brand: { label: "Selected project · 04", focus: "Service design · Branding · Healthy habits" },
  interior: { label: "Selected project · 05", focus: "Cultural tourism · Space planning · Rendering" },
  product: { label: "Selected project · 06", focus: "Experience design · UX/UI · Prototyping" },
  "self-love": { label: "Selected project · 07", focus: "Interior design · Memphis style · Rendering" },
  "ooh-juicy": { label: "Selected project · 08", focus: "Brand identity · Packaging · Character" },
  "rocking-life": { label: "Selected project · 09", focus: "Product design · Balance · Prototyping" },
  "circus-sweet": { label: "Selected project · 10", focus: "Character design · 3D printing · Rendering" },
  newsphoter: { label: "Selected project · 11", focus: "Jewelry · Storytelling · Graphic composition" },
  nami: { label: "Selected project · 12", focus: "Product design · Acrylic bending · Light" },
  landmark: { label: "Selected project · 13", focus: "Event graphics · Space planning · Installation" },
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
      <header className="sticky top-0 z-40 border-b border-card/15 bg-ink text-card">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-card/55 font-display text-lg font-bold text-card">
              T
            </span>
            <span className="font-display text-base font-bold tracking-tight">Thuspapha M.</span>
          </a>
          <div className="flex items-center gap-1 sm:gap-5">
            <a href="#work" className="hidden px-3 py-2 text-xs font-semibold uppercase tracking-widest text-card/80 transition-colors hover:text-sun sm:block">
              Work
            </a>
            <a href="#about" className="hidden px-3 py-2 text-xs font-semibold uppercase tracking-widest text-card/80 transition-colors hover:text-sun sm:block">
              About
            </a>
            <a href="#contact" className="hidden px-3 py-2 text-xs font-semibold uppercase tracking-widest text-card/80 transition-colors hover:text-sun sm:block">
              Contact
            </a>
            <a
              href="mailto:thuspapha@gmail.com?subject=Resume%20request"
              className="rounded-full border border-sun bg-sun px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-card"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="border-x-[12px] border-ink bg-card sm:border-x-[28px]">
        <div className="mx-auto grid max-w-6xl border-x border-pink/30 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="retro-stripes flex items-center p-5 sm:p-10 lg:p-12">
            <div className="relative ml-0 w-[82%] max-w-sm overflow-hidden rounded-[30px] border-2 border-pink bg-card p-3">
              <img
                src={portrait}
                alt="Portrait of Thuspapha Methakittipob"
                width={1258}
                height={1066}
                className="aspect-[6/5] w-full rounded-[22px] object-cover object-top"
              />
              <span className="absolute bottom-5 right-5 grid h-16 w-16 rotate-6 place-items-center rounded-full bg-sun text-center text-[9px] font-bold uppercase leading-tight tracking-wider text-pink">
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
            {visible.map((p) => (
              <article
                key={p.id}
                className="card-lift overflow-hidden rounded-[20px] border border-ink/10 bg-card text-ink lg:col-span-4"
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
                      className="aspect-[16/9] w-full object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-card/70 bg-card/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-ink shadow-sm backdrop-blur-sm">
                      {p.displayCategory ?? p.category}
                    </span>
                  </div>
                  <div className="space-y-3 p-5">
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
                    <h3 className="font-display text-xl font-bold leading-tight">{p.title}</h3>
                    <p className="text-sm text-ink/65">{p.desc}</p>
                    <div className="grid gap-3 border-y border-ink/10 py-3 text-xs sm:grid-cols-2">
                      <div>
                        <p className="font-bold uppercase tracking-wider text-ink/60">My role</p>
                        <p className="mt-1 line-clamp-2 font-medium text-ink/75">{p.role}</p>
                      </div>
                      <div>
                        <p className="font-bold uppercase tracking-wider text-ink/60">Focus</p>
                        <p className="mt-1 font-medium text-ink/75">{CASE_STUDY_META[p.id].focus}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tools.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-ink/10 px-2.5 py-0.5 text-xs text-ink/65"
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
      <section id="about" className="scroll-mt-20 border-x-[12px] border-ink bg-canvas px-5 py-24 sm:border-x-[28px] sm:px-8">
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
                  <p className="text-xs uppercase tracking-widest text-ink/60">{e.date}</p>
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
      <section id="contact" className="retro-stripes scroll-mt-20 border-x-[12px] border-ink px-5 py-24 sm:border-x-[28px] sm:px-8">
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
                    {active.awardDetail ?? active.award}
                  </span>
                )}
              </div>
              <h3 className="font-display text-2xl font-extrabold sm:text-3xl">{active.title}</h3>
              <p className="leading-relaxed text-ink/70">{active.detail}</p>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/60">Role</p>
                <p className="mt-1 text-sm text-ink/75">{active.role}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/60">Tools</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {active.tools.map((t) => (
                    <Pill key={t} tone="soft">
                      {t}
                    </Pill>
                  ))}
                </div>
              </div>
              {(active.timeline || active.team) && (
                <div className="grid gap-4 sm:grid-cols-[0.7fr_1.3fr]">
                  {active.timeline && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-ink/60">
                        Timeline
                      </p>
                      <p className="mt-1 text-sm text-ink/75">{active.timeline}</p>
                    </div>
                  )}
                  {active.team && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-ink/60">
                        Team
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/75">{active.team}</p>
                    </div>
                  )}
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
                          <figcaption className="mt-2 text-xs leading-relaxed text-ink/65">
                            The Aral Sea, 1989–present — drained largely by cotton irrigation.
                            Kazakhstan / Uzbekistan.
                          </figcaption>
                          <p className="mt-2 text-[10px] leading-relaxed text-ink/60">
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
                    shouldn&apos;t add more.
                  </p>
                  <div className="mt-4 rounded-[18px] border border-pink/25 bg-soft-blue/70 px-5 py-4">
                    <p className="text-lg font-semibold leading-relaxed text-pink-deep">
                      How might we turn the package itself into something worth keeping — protection
                      that earns a second life instead of becoming trash?
                    </p>
                  </div>
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
                    <img
                      src={saijaiSecondLife}
                      alt="SAIJAI packaging transforming into reusable clothes hangers"
                      width={1672}
                      height={941}
                      loading="lazy"
                      className="mt-5 w-full rounded-[18px] border border-ink/10 object-cover"
                    />
                    <div className="mt-5 border-t border-ink/10 pt-5">
                      <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-pink">
                        <Sparkle className="h-4 w-4 shrink-0" />
                        About the Brand
                      </p>
                      <p className="mt-3 leading-relaxed text-ink/70">
                        Saijai is an eco-clothing brand concept created by our team for everyday
                        shirts and trousers made from{" "}
                        <strong className="font-semibold text-ink">100% organic cotton</strong> —
                        pieces made to be worn across occasions, produced with an environment-first
                        process. Its long-term goal: to return up to{" "}
                        <strong className="font-semibold text-ink">one billion litres</strong> of
                        clean water to the world.
                      </p>
                    </div>
                    <div className="mt-5 border-t border-ink/10 pt-5">
                      <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-pink">
                        <Sparkle className="h-4 w-4 shrink-0" />
                        Branding
                      </p>
                      <p className="mt-3 leading-relaxed text-ink/70">
                        <strong className="font-semibold text-ink">Saijai (ใส่ใจ)</strong> means “to
                        care” in Thai — and the brand is built to live up to its name. Every shirt
                        isn&apos;t just a purchase; it&apos;s a way to take part in returning clean water
                        to the world.
                      </p>
                    </div>
                    <div className="mt-5">
                      <h4 className="text-2xl font-bold text-ink">The unboxing experience</h4>
                      <p className="mt-3 leading-relaxed text-ink/70">
                        The packaging tells the story of{" "}
                        <strong className="font-semibold text-ink">
                          returning clean water to the world
                        </strong>. Hidden <strong className="font-semibold text-ink">
                          glow-in-the-dark patterns
                        </strong> of aquatic animals appear only in the dark, so the first reveal
                        feels like a surprise. A <strong className="font-semibold text-ink">QR code</strong>{" "}
                        lets customers see the exact percentage of water their purchase returned.
                      </p>
                    </div>
                    <figure className="mt-5">
                      <img
                        src={saijaiLightComparison}
                        alt="SAIJAI packaging shown with the lights on and in the dark"
                        width={1688}
                        height={934}
                        loading="lazy"
                        className="w-full rounded-[18px] border border-ink/10 object-cover"
                      />
                      <figcaption className="mt-2 text-xs leading-relaxed text-ink/65">
                        Before / after — lights on vs. dark
                      </figcaption>
                    </figure>
                    <img
                      src={saijaiArExperience}
                      alt="SAIJAI augmented reality marine animal experience viewed on a phone"
                      width={1675}
                      height={939}
                      loading="lazy"
                      className="mt-5 w-full rounded-[18px] border border-ink/10 object-cover"
                    />
                    <p className="mt-2 text-xs leading-relaxed text-ink/65">
                      Scan the packaging to unlock{" "}
                      <strong className="font-semibold text-ink/70">AR marine animals</strong> and
                      collect <strong className="font-semibold text-ink/70">Achievements</strong>.
                    </p>
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
                        Who It&apos;s For
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
