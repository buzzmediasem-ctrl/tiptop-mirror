import { createFileRoute } from "@tanstack/react-router";
import { collections } from "../lib/site-data";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Our Products — Tip Top Blinds" },
      {
        name: "description",
        content:
          "Browse our full range of custom blinds, curtains, shutters and awnings manufactured in Melbourne.",
      },
      { property: "og:title", content: "Our Products — Tip Top Blinds" },
      {
        property: "og:description",
        content: "Custom blinds, curtains, shutters and awnings Melbourne.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <span className="label-uppercase mb-4 block">Collections</span>
        <h1 className="heading-section text-foreground mb-12">
          Shop Our <em className="text-accent not-italic">Range</em>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {collections.map((c) => (
            <a
              key={c.slug}
              href={`/products/${c.slug}`}
              className="group relative block overflow-hidden aspect-[3/4] shadow-soft hover:shadow-large transition-shadow duration-700"
            >
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover animate-ken-burns"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/15 to-transparent group-hover:from-charcoal/85 transition-all" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <span className="block text-white/40 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-1">
                  {c.subtitle}
                </span>
                <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-white">{c.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
