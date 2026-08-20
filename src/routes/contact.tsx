import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Arun Ratchada" },
      { name: "description", content: "Get in touch with Arun Ratchada for new projects and collaborations." },
      { property: "og:title", content: "Contact — Arun Ratchada" },
      { property: "og:description", content: "Get in touch with Arun Ratchada for new projects and collaborations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <h1 className="font-serif text-5xl md:text-7xl">Let's talk.</h1>
        <p className="mt-6 text-muted-foreground">
          Currently accepting new projects for Q3 2024.
        </p>
        <a
          href="mailto:hello@ratchada.studio"
          className="mt-8 inline-block text-xl font-medium tracking-tight underline underline-offset-8 transition-opacity hover:opacity-70"
        >
          hello@ratchada.studio
        </a>
      </div>
    </section>
  );
}
