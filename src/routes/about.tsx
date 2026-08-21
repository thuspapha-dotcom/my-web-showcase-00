import { createFileRoute } from "@tanstack/react-router";
import portraitImage from "../assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Thuspapha M." },
      { name: "description", content: "Learn about Thuspapha M.'s design philosophy, services, and select clients." },
      { property: "og:title", content: "About — Thuspapha M." },
      { property: "og:description", content: "Learn about Thuspapha M.'s design philosophy and services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 lg:px-12">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src={portraitImage}
            alt="Thuspapha M. in studio"
            width={1008}
            height={1200}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[min(1vw,12px)] bg-secondary object-cover"
          />
        </div>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="font-serif text-4xl leading-tight text-balance md:text-5xl">
            Design is a search for <span className="italic text-primary">essential truths</span>{" "}
            within the noise.
          </h1>
          <div className="mt-12 space-y-8">
            <p className="max-w-[56ch] text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
              I believe that the best solutions are often the most invisible. My practice is built
              on a foundation of rigorous research and a deep appreciation for craft, whether I'm
              working on a global identity system or a local exhibition catalog.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Services
                </h2>
                <ul className="mt-4 space-y-2 text-sm font-sans">
                  <li>Creative Direction</li>
                  <li>Identity Systems</li>
                  <li>Digital Design</li>
                  <li>Type Design</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Select Clients
                </h2>
                <ul className="mt-4 space-y-2 text-sm font-sans">
                  <li>Studio Velo</li>
                  <li>Hana Skincare</li>
                  <li>Urban Architecture Lab</li>
                  <li>Museum of Objects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
