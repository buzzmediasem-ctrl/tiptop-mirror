import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Tip Top Blinds" },
      {
        name: "description",
        content: "Terms of service for Tip Top Blinds.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl prose prose-lg">
        <h1 className="heading-section text-foreground mb-6">Terms of Service</h1>
        <p className="text-muted-foreground leading-relaxed">
          All quotes are obligation-free. Products are custom-made to the millimetre and are
          non-refundable once manufactured. Installation is included in all quotes. Our 5-year
          warranty covers parts and labour.
        </p>
      </div>
    </div>
  );
}
