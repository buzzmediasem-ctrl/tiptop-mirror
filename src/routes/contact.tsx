import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book Free Measure & Quote | Tip Top Blinds" },
      {
        name: "description",
        content:
          "Book your free in-home measure and quote, visit our Clayton showroom, or request a call back from Tip Top Blinds.",
      },
      { property: "og:title", content: "Contact Tip Top Blinds" },
      {
        property: "og:description",
        content: "Book your free measure and quote in Melbourne.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        <span className="label-uppercase mb-4 block">Get Started Today</span>
        <h1 className="heading-section text-foreground mb-6">
          Book Your Free <em className="text-accent not-italic">Consultation</em>
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Our expert consultants will measure your windows, discuss your
          requirements, and provide a no-obligation quote tailored to your
          needs. Fill out the form below or call us directly.
        </p>
        <form className="space-y-4 bg-card border border-border rounded-lg p-6 shadow-soft">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full h-10 px-3 rounded-sm border border-input bg-background text-foreground"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1">
                Phone
              </label>
              <input
                type="tel"
                className="w-full h-10 px-3 rounded-sm border border-input bg-background text-foreground"
                placeholder="Your phone"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full h-10 px-3 rounded-sm border border-input bg-background text-foreground"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-1">
              Suburb
            </label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-sm border border-input bg-background text-foreground"
              placeholder="Your Melbourne suburb"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-1">
              What do you need?
            </label>
            <select className="w-full h-10 px-3 rounded-sm border border-input bg-background text-foreground">
              <option>Free in-home measure & quote</option>
              <option>Showroom visit</option>
              <option>Quote from plans</option>
              <option>Request a call back</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-1">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 rounded-sm border border-input bg-background text-foreground"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 rounded-sm bg-accent text-accent-foreground uppercase tracking-widest text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}
