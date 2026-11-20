import { createFileRoute } from "@tanstack/react-router";
import { site, images } from "../lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tip Top Blinds" },
      {
        name: "description",
        content:
          "For over 70 years, Tip Top Blinds has transformed Australian homes with beautifully crafted window furnishings from our Clayton factory.",
      },
      { property: "og:title", content: "About Us — Tip Top Blinds" },
      {
        property: "og:description",
        content:
          "70+ years of crafting premium blinds, curtains and awnings in Melbourne.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <span className="label-uppercase mb-4 block">About Us</span>
        <h1 className="heading-section text-foreground mb-6">
          The Tip Top <em className="text-accent not-italic">Difference</em>
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg mb-6">
          For over 70 years, we've been transforming Australian homes with
          beautifully crafted window furnishings. Our commitment to quality,
          service, and attention to detail sets us apart.
        </p>
        <ul className="space-y-3 text-muted-foreground mb-10">
          {[
            "Complimentary in-home consultation",
            "Expert design advice tailored to your space",
            "Premium materials and finishes",
            "Professional installation included",
            "Comprehensive product warranties",
            "After-sales support and service",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-accent mt-1">✦</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-10 bg-secondary rounded-lg">
          {[
            { v: "70+", l: "Years Experience" },
            { v: "15,000+", l: "Happy Customers" },
            { v: "100%", l: "Custom Made" },
            { v: "5★", l: "Average Rating" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif text-3xl md:text-4xl font-medium text-accent">
                {s.v}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
