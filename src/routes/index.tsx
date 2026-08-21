import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import pSaijai from "../assets/p-saijai.jpg";
import pMyais from "../assets/p-myais.jpg";
import pKbtg from "../assets/p-kbtg.jpg";
import pBrand from "../assets/p-brand.jpg";
import pInterior from "../assets/p-interior.jpg";
import pProduct from "../assets/p-product.jpg";
import portrait from "../assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thuspapha Methakittipob — UX/UI & Graphic Designer" },
      {
        name: "description",
        content:
          "พอร์ตโฟลิโอของ ถัสปภา เมธากิตติภพ นักออกแบบ UX/UI และกราฟิก จากกรุงเทพฯ — ผลงาน UX/UI, Branding, Interior 3D และ Product Design",
      },
      { property: "og:title", content: "Thuspapha Methakittipob — UX/UI & Graphic Designer" },
      {
        property: "og:description",
        content: "ผลงานออกแบบ UX/UI, กราฟิก, และงานคราฟต์ โดย Thuspapha Methakittipob จากกรุงเทพฯ",
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
  desc: string;
  detail: string;
  role: string;
  tools: string[];
  image: string;
  award?: string;
};

const FILTERS = ["ทั้งหมด", "UX·UI", "Branding", "Interior·3D", "Product"] as const;

const PROJECTS: Project[] = [
  {
    id: "saijai",
    title: "Saijai — Sustainable Packaging",
    category: "Branding",
    desc: "แพ็กเกจจิ้งกระดาษเพื่อผู้ป่วยติดเตียง ที่ออกแบบให้ใช้ซ้ำได้",
    detail:
      "โปรเจกต์ประกวด SCGP Packaging Speak Out 2024 ออกแบบแพ็กเกจจิ้งกระดาษที่พับต่อเป็นอุปกรณ์ช่วยดูแลผู้ป่วยได้ ลดขยะและเพิ่มคุณค่าให้กับกล่องหลังการใช้งาน ได้รับรางวัล Honorable Mention",
    role: "Concept, Structural design, Graphic & Mockup",
    tools: ["Illustrator", "Photoshop", "Rhinoceros"],
    image: pSaijai,
    award: "Honorable Mention",
  },
  {
    id: "myais",
    title: "myAIS Loyalty Experience",
    category: "UX·UI",
    desc: "ปรับประสบการณ์สะสมแต้มและแลกรางวัลบนแอป myAIS",
    detail:
      "ระหว่างฝึกงานกับทีม Loyalty และ myAIS Digital Creative ได้ร่วมออกแบบ flow การแลกสิทธิ์ ทำ UI component ตาม design system และทดสอบกับผู้ใช้จริงเพื่อลด step ในการแลกรางวัล",
    role: "UX/UI Design Intern",
    tools: ["Figma", "Illustrator", "Photoshop"],
    image: pMyais,
  },
  {
    id: "kbtg",
    title: "The Product — Fintech Case Study",
    category: "UX·UI",
    desc: "โจทย์ออกแบบบริการการเงินสำหรับผู้ใช้กลุ่มเริ่มต้นทำงาน",
    detail:
      "ผลงานจากโปรแกรม The Product UX/UI Design Program โดย Kasikorn Business Technology Group ทำตั้งแต่ user research, service blueprint, wireframe จนถึง high-fidelity prototype และ usability test",
    role: "UX Research, UI Design, Prototyping",
    tools: ["Figma", "FigJam"],
    image: pKbtg,
  },
  {
    id: "brand",
    title: "Cafe Identity System",
    category: "Branding",
    desc: "ระบบอัตลักษณ์คาเฟ่ขนาดเล็ก ตั้งแต่โลโก้ถึงของใช้จริง",
    detail:
      "ออกแบบโลโก้ ชุดสี ตัวอักษร และ touchpoint ต่าง ๆ ทั้งแก้ว ถุงผ้า และนามบัตร เน้นความอบอุ่นเป็นกันเองแต่ยังดูสะอาดตา",
    role: "Brand identity, Graphic, Mockup",
    tools: ["Illustrator", "Photoshop", "Lightroom"],
    image: pBrand,
  },
  {
    id: "interior",
    title: "Warm Corner — Interior 3D",
    category: "Interior·3D",
    desc: "งานเรนเดอร์มุมคาเฟ่ไม้อบอุ่นด้วยแสงธรรมชาติ",
    detail:
      "ศึกษาสัดส่วนพื้นที่ วัสดุ และแสงธรรมชาติ ก่อนขึ้นโมเดลและเรนเดอร์เพื่อสื่อสารบรรยากาศให้ลูกค้าเห็นภาพก่อนก่อสร้างจริง",
    role: "Space planning, Modeling, Rendering",
    tools: ["SketchUp", "Enscape", "V-ray", "Photoshop"],
    image: pInterior,
  },
  {
    id: "product",
    title: "Modular Desk Organizer",
    category: "Product",
    desc: "ชุดจัดระเบียบโต๊ะทำงานแบบต่อขยายได้ วัสดุเซรามิก",
    detail:
      "งาน Industrial Design ที่เริ่มจากพฤติกรรมการใช้โต๊ะของนักศึกษา แล้วออกแบบชิ้นส่วนที่ต่อกันได้หลายรูปแบบ ขึ้นโมเดล 3D และเรนเดอร์เพื่อนำเสนอ",
    role: "Product design, 3D modeling, Rendering",
    tools: ["Rhinoceros", "Keyshot", "Blender"],
    image: pProduct,
  },
];

const SOFTWARE = [
  "Figma",
  "Illustrator",
  "Photoshop",
  "Lightroom",
  "Procreate",
  "Rhinoceros",
  "SketchUp",
  "Blender",
  "Keyshot",
  "V-ray",
  "Enscape",
  "CapCut",
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
    role: "UX/UI Design Intern",
    org: "AIS · Loyalty Team, myAIS Digital Creative",
    date: "พ.ค. – ก.ค. 2025",
  },
  {
    role: 'SCGP Packaging Speak Out 2024 — Honorable Mention "Saijai"',
    org: "SCG Packaging",
    date: "ก.ย. – พ.ย. 2024",
  },
  {
    role: "The Product UX/UI Design Program",
    org: "Kasikorn Business Technology Group",
    date: "ม.ค. – พ.ค. 2024",
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
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ทั้งหมด");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "ทั้งหมด" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

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
      <header className="sticky top-0 z-40 border-b border-ink/8 bg-canvas/85 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-pink font-display text-lg font-extrabold text-card">
              T
            </span>
            <span className="font-display text-base font-bold tracking-tight">Thuspapha M.</span>
          </a>
          <div className="flex items-center gap-1 sm:gap-5">
            <a href="#work" className="hidden rounded-full px-3 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-pink sm:block">
              Work
            </a>
            <a href="#about" className="hidden rounded-full px-3 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-pink sm:block">
              About
            </a>
            <a href="#contact" className="hidden rounded-full px-3 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-pink sm:block">
              Contact
            </a>
            <a
              href="mailto:thuspapha@gmail.com?subject=Resume%20request"
              className="rounded-full bg-pink px-4 py-2 text-sm font-semibold text-card transition-colors hover:bg-pink-deep"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <Sparkle className="animate-twinkle absolute left-[8%] top-24 h-6 w-6 text-sun" />
        <Sparkle className="animate-twinkle absolute right-[12%] top-16 h-9 w-9 text-pink" />
        <Sparkle className="animate-twinkle absolute right-[24%] bottom-24 h-5 w-5 text-pink-deep" />
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ink/50">
            Portfolio 2026
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.6rem,10vw,5.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
            Thuspapha
            <br />
            <span className="relative inline-block">
              Methakittipob
              <svg
                aria-hidden="true"
                viewBox="0 0 300 16"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-sun"
              >
                <path
                  d="M3 11C60 4 120 13 180 7c40-4 80 2 117 3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <div className="mt-9 flex justify-center">
            <Pill>
              <Sparkle className="h-3.5 w-3.5" />
              UX/UI &amp; Graphic Designer
            </Pill>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink/70 sm:text-lg">
            นักศึกษา Industrial Design ที่หลงรักงาน UX/UI กราฟิก และงานคราฟต์ทำมือ
            กระตือรือร้นที่จะพัฒนาสกิลใหม่ ๆ และเติบโตในฐานะนักออกแบบมืออาชีพ
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-card transition-transform hover:-translate-y-0.5"
            >
              ดูผลงาน
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-ink/15 bg-card px-7 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              ติดต่อฉัน
            </a>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden border-y border-ink/8 py-4">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
            {[...SOFTWARE, ...SOFTWARE].map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="flex items-center gap-10 font-display text-sm font-semibold uppercase tracking-widest text-ink/45"
              >
                {s}
                <Sparkle className="h-3 w-3 text-pink" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="scroll-mt-20 bg-canvas-alt px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink">Work</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold uppercase sm:text-5xl">
                ผลงานที่เลือกมา
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
                      ? "rounded-full bg-pink px-4 py-2 text-sm font-semibold text-card"
                      : "rounded-full border border-ink/12 bg-card px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:border-pink hover:text-pink"
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <article
                key={p.id}
                className="card-lift overflow-hidden rounded-[22px] border border-ink/8 bg-card"
              >
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className="block w-full text-left"
                  aria-label={`ดูรายละเอียด ${p.title}`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <div className="space-y-3 p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-canvas-alt px-3 py-1 text-xs font-semibold text-ink/65">
                        {p.category}
                      </span>
                      {p.award && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-pink px-3 py-1 text-xs font-bold text-card">
                          <Sparkle className="h-3 w-3" />
                          {p.award}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-lg font-bold leading-snug">{p.title}</h3>
                    <p className="text-sm text-ink/65">{p.desc}</p>
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
                      ดูรายละเอียด →
                    </span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,380px)_1fr]">
          <div className="relative mx-auto w-full max-w-[340px]">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[22px] bg-pink" aria-hidden="true" />
            <img
              src={portrait}
              alt="ภาพถ่ายของ Thuspapha Methakittipob"
              loading="lazy"
              width={800}
              height={1000}
              className="relative aspect-[4/5] w-full rounded-[22px] object-cover"
            />
            <span className="animate-float absolute -right-3 -top-3 inline-flex items-center gap-1.5 rounded-full bg-sun px-3.5 py-1.5 text-xs font-bold text-ink shadow-sm">
              <Sparkle className="h-3 w-3" />
              Open to work
            </span>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink">About</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase sm:text-5xl">
              สวัสดีค่ะ เรียกเรา “ทัส” ก็ได้
            </h2>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-ink/70">
              เรียน Industrial Design ที่คณะสถาปัตยกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
              สนใจงาน UX/UI กราฟิก และงานคราฟต์ทำมือ ชอบทำงานที่ได้คุยกับผู้ใช้จริง
              แล้วแปลงสิ่งที่ได้ยินให้กลายเป็นดีไซน์ที่ใช้ได้จริงและดูอบอุ่น
            </p>

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

            <div className="mt-8 rounded-[22px] border border-ink/8 bg-card p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide">Education</h3>
              <p className="mt-2 font-semibold">Bachelor of Industrial Design (B.I.D)</p>
              <p className="text-sm text-ink/65">
                คณะสถาปัตยกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย · 2021 – ปัจจุบัน
              </p>
            </div>

            <h3 className="mt-10 font-display text-lg font-bold uppercase tracking-wide">Software</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {SOFTWARE.map((s) => (
                <Pill key={s} tone="soft">
                  {s}
                </Pill>
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
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20 bg-canvas-alt px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Sparkle className="animate-twinkle mx-auto h-7 w-7 text-pink" />
          <h2 className="mt-6 font-display text-[clamp(2.2rem,7vw,4rem)] font-extrabold uppercase leading-tight">
            มาทำงานด้วยกันไหม
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

      <footer className="px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-ink/55 sm:flex-row">
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
                aria-label="ปิด"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-canvas-alt px-3 py-1 text-xs font-semibold text-ink/65">
                  {active.category}
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
