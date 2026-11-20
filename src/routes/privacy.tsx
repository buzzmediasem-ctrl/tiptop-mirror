import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Tip Top Blinds" },
      {
        name: "description",
        content: "How Tip Top Blinds collects, uses and protects your information.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl prose prose-lg">
        <h1 className="heading-section text-foreground mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground leading-relaxed">
          Tip Top Blinds respects your privacy. We only collect information
          necessary to provide our measure, quote and installation services. We
          do not sell or share your personal information with third parties.
        </p>
      </div>
    </div>
  );
}
