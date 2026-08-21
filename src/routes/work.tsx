import { createFileRoute } from "@tanstack/react-router";
import komorebiImage from "../assets/project-komorebi.jpg";
import urbanImage from "../assets/project-urban.jpg";
import chronosImage from "../assets/project-chronos.jpg";
import symmetryImage from "../assets/project-symmetry.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Works — Thuspapha M." },
      { name: "description", content: "Selected design works by Thuspapha M., including brand identity, packaging, digital interfaces, and editorial design." },
      { property: "og:title", content: "Selected Works — Thuspapha M." },
      { property: "og:description", content: "Selected design works by Thuspapha M." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

const projects = [
  {
    id: "komorebi",
    title: "Komorebi Identity",
    category: "Art Direction, Packaging",
    image: komorebiImage,
    span: "md:col-span-8",
    aspect: "aspect-[16/10]",
    overlay: true,
  },
  {
    id: "urban-monolith",
    title: "Urban Monolith",
    category: "Photography, Print",
    image: urbanImage,
    span: "md:col-span-4",
    aspect: "aspect-square",
    overlay: false,
  },
  {
    id: "chronos-digital",
    title: "Chronos Digital",
    category: "Interface Design",
    image: chronosImage,
    span: "md:col-span-4",
    aspect: "aspect-square",
    overlay: false,
  },
  {
    id: "symmetry-annual",
    title: "Symmetry Annual",
    category: "Editorial Design",
    image: symmetryImage,
    span: "md:col-span-8",
    aspect: "aspect-[16/10]",
    overlay: true,
  },
];

function WorkPage() {
  return (
    <section className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex items-end justify-between">
          <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
            Selected Works
          </h1>
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            2022 &mdash; 2024
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`group relative overflow-hidden rounded-[min(1vw,16px)] bg-card ring-1 ring-border ${project.span}`}
            >
              <div className={`relative ${project.aspect} w-full overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  width={project.span === "md:col-span-8" ? 1200 : 800}
                  height={project.span === "md:col-span-8" ? 800 : 800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {project.overlay && (
                  <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/30 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                      <h2 className="font-serif text-2xl text-white">{project.title}</h2>
                      <p className="text-sm text-white/80">{project.category}</p>
                    </div>
                  </div>
                )}
              </div>
              {!project.overlay && (
                <div className="p-6">
                  <h2 className="text-sm font-medium font-sans">{project.title}</h2>
                  <p className="mt-1 text-xs text-muted-foreground">{project.category}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
