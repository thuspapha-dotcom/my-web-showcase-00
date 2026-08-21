import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Thuspapha M." },
      { name: "description", content: "Get in touch with Thuspapha M. for new projects and collaborations." },
      { property: "og:title", content: "Contact — Thuspapha M." },
      { property: "og:description", content: "Get in touch with Thuspapha M. for new projects and collaborations." },
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
          href="mailto:hello@thuspapha.studio"
          className="mt-8 inline-block text-xl font-medium tracking-tight underline underline-offset-8 transition-opacity hover:opacity-70"
        >
          hello@thuspapha.studio
        </a>
      </div>
    </section>
  );
}
