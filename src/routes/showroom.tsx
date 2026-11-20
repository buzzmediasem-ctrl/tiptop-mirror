import { createFileRoute } from "@tanstack/react-router";
import { images, site } from "../lib/site-data";

export const Route = createFileRoute("/showroom")({
  head: () => ({
    meta: [
      { title: "Showroom — Clayton VIC | Tip Top Blinds" },
      {
        name: "description",
        content:
          "Visit our designer showroom in Clayton, VIC to see our full range of blinds, curtains and awnings.",
      },
    ],
  }),
  component: ShowroomPage,
});

function ShowroomPage() {
  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <span className="label-uppercase mb-4 block">Showroom</span>
        <h1 className="heading-section text-foreground mb-6">
          Visit Our <em className="text-accent not-italic">Showroom</em>
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={images.showroom}
            alt="Tip Top Blinds showroom Clayton"
            className="w-full rounded-lg shadow-soft"
          />
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Experience our full range in person. Explore the latest trends, touch premium fabrics,
              and get expert advice in our designer showroom in Clayton.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="text-accent font-medium">Address:</span>
                <span className="text-foreground">
                  {site.address.line1}, {site.address.line2}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-accent font-medium">Phone:</span>
                <a href={site.phoneHref} className="text-foreground hover:underline">
                  {site.phone}
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-accent font-medium">Hours:</span>
                <span className="text-foreground">7 days a week, 9am–5pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
