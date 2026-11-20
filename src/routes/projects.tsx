import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Tip Top Blinds" },
      {
        name: "description",
        content:
          "Residential and commercial window furnishing projects by Tip Top Blinds across Melbourne.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <span className="label-uppercase mb-4 block">Projects</span>
        <h1 className="heading-section text-foreground mb-12">
          Our <em className="text-accent not-italic">Projects</em>
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Residential Projects",
              desc: "Custom blinds and curtains for Melbourne homes — from single windows to whole-home fitouts.",
            },
            {
              title: "Commercial Projects",
              desc: "Window furnishings for offices, restaurants, retail and hospitality across Victoria.",
            },
          ].map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-lg p-8 shadow-soft">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-3">{p.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
