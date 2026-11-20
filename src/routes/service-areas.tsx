import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas — Tip Top Blinds" },
      {
        name: "description",
        content: "Free in-home measure and quote across all Melbourne suburbs.",
      },
    ],
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  const suburbs = [
    "Clayton",
    "Glen Iris",
    "Malvern",
    "South Yarra",
    "Toorak",
    "Camberwell",
    "Kew",
    "Balwyn",
    "Doncaster",
    "Box Hill",
    "Ringwood",
    "Croydon",
    "Nunawading",
    "Waverley",
    "Chadstone",
    "Oakleigh",
    "Murrumbeena",
    "Carnegie",
    "Murrumbeena",
    "Bentleigh",
  ];
  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <span className="label-uppercase mb-4 block">Service Areas</span>
        <h1 className="heading-section text-foreground mb-6">
          Melbourne <em className="text-accent not-italic">Wide</em>
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Free in-home measure and quote across every Melbourne suburb — no obligation, no
          high-pressure sales.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {suburbs.map((s) => (
            <div
              key={s}
              className="bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground text-center"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
