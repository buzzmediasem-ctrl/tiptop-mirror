import { createFileRoute } from "@tanstack/react-router";
import { testimonials } from "../lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Tip Top Blinds" },
      {
        name: "description",
        content: "Read what Melbourne homeowners say about Tip Top Blinds.",
      },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <span className="label-uppercase mb-4 block">Testimonials</span>
        <h1 className="heading-section text-foreground mb-12">
          What Our Customers <em className="text-accent not-italic">Say</em>
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-lg p-6 shadow-soft">
              <div className="flex gap-1 text-accent mb-4">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-lg">"{t.quote}"</p>
              <div className="text-sm">
                <div className="font-medium text-foreground">{t.name}</div>
                <div className="text-muted-foreground">
                  {t.location} · {t.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
