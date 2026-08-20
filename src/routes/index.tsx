import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arun Ratchada — Multidisciplinary Designer" },
      { name: "description", content: "Portfolio of Arun Ratchada, a multidisciplinary designer based in Bangkok focusing on brand identity, digital experiences, and physical artifacts." },
      { property: "og:title", content: "Arun Ratchada — Multidisciplinary Designer" },
      { property: "og:description", content: "Portfolio of Arun Ratchada, a multidisciplinary designer based in Bangkok." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-24 pb-32 lg:px-12 lg:pt-40">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h1 className="font-serif text-6xl leading-none tracking-tight text-balance md:text-8xl lg:text-9xl">
            Visual stories <br />
            <span className="italic text-muted-foreground">told through</span> <br />
            quiet precision.
          </h1>
        </div>
        <div className="flex flex-col justify-end lg:col-span-4">
          <p className="mb-8 max-w-[40ch] text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            A multidisciplinary designer based in Bangkok, focusing on brand identity, digital experiences, and physical artifacts that endure beyond trends.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/work"
              className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground ring-1 ring-primary transition-transform hover:-translate-y-0.5"
            >
              View Selected Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
