import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Tip Top Blinds" },
      {
        name: "description",
        content:
          "Browse our gallery of completed blinds, curtains and awnings projects across Melbourne.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <span className="label-uppercase mb-4 block">Gallery</span>
        <h1 className="heading-section text-foreground mb-12">
          Our <em className="text-accent not-italic">Work</em>
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
          A selection of completed window furnishing projects across Melbourne homes and commercial
          spaces.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "indoor",
            "rollers",
            "outdoor",
            "curtains",
            "awnings",
            "shutters",
            "roof",
            "motorisation",
            "showroom",
          ].map((key) => (
            <div key={key} className="aspect-square overflow-hidden rounded-lg shadow-soft">
              <img
                src={`https://vibe.filesafe.space/1795144699334834390/assets/${key}.webp`}
                alt={key}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
