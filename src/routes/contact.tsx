import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { site } from "../lib/site-data";

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

const requestTypes = [
  "Free in-home measure & quote",
  "Showroom visit",
  "Quote from plans",
  "Request a call back",
];

type Status = "idle" | "submitting" | "success" | "error";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const suburb = String(data.get("suburb") ?? "").trim();
    const requestType = String(data.get("requestType") ?? requestTypes[0]);
    const message = String(data.get("message") ?? "").trim();

    if (!name || !phone || !email) {
      setStatus("error");
      setErrorMsg("Please fill in your name, phone and email.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const { error } = await supabase.from("quotes").insert({
      name,
      phone,
      email,
      suburb,
      request_type: requestType,
      message,
    });

    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please call us on " + site.phone + ".");
      return;
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
            <Check className="w-8 h-8 text-accent" />
          </div>
          <h1 className="heading-section text-foreground mb-4">
            Thank You for Your <em className="text-accent not-italic">Enquiry</em>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Your request has been received. One of our consultants will be in touch shortly to
            arrange your free measure and quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center h-12 px-8 rounded-sm bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-charcoal-light transition-colors"
            >
              Call {site.phone}
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-8 rounded-sm border border-border bg-background text-foreground uppercase tracking-widest text-sm font-medium hover:bg-accent/10 transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        <span className="label-uppercase mb-4 block">Get Started Today</span>
        <h1 className="heading-section text-foreground mb-6">
          Book Your Free <em className="text-accent not-italic">Consultation</em>
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Our expert consultants will measure your windows, discuss your requirements, and provide a
          no-obligation quote tailored to your needs. Fill out the form below or call us directly.
        </p>

        {status === "error" && (
          <div className="mb-6 p-4 rounded-sm border border-destructive/30 bg-destructive/5 text-destructive text-sm">
            {errorMsg}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-card border border-border rounded-lg p-6 shadow-soft"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground block mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full h-10 px-3 rounded-sm border border-input bg-background text-foreground"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-foreground block mb-1">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full h-10 px-3 rounded-sm border border-input bg-background text-foreground"
                placeholder="Your phone"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-foreground block mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full h-10 px-3 rounded-sm border border-input bg-background text-foreground"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="suburb" className="text-sm font-medium text-foreground block mb-1">
              Suburb
            </label>
            <input
              id="suburb"
              name="suburb"
              type="text"
              className="w-full h-10 px-3 rounded-sm border border-input bg-background text-foreground"
              placeholder="Your Melbourne suburb"
            />
          </div>
          <div>
            <label htmlFor="requestType" className="text-sm font-medium text-foreground block mb-1">
              What do you need?
            </label>
            <select
              id="requestType"
              name="requestType"
              className="w-full h-10 px-3 rounded-sm border border-input bg-background text-foreground"
              defaultValue={requestTypes[0]}
            >
              {requestTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-foreground block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 rounded-sm border border-input bg-background text-foreground"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full h-12 rounded-sm bg-accent text-accent-foreground uppercase tracking-widest text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Request"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
