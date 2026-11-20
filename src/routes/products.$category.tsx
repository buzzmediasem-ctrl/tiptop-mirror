import { createFileRoute, Link } from "@tanstack/react-router";
import { collections } from "../lib/site-data";

export const Route = createFileRoute("/products/$category")({
  head: ({ params }) => {
    const cat = collections.find((c) => c.slug === params.category);
    return {
      meta: [
        { title: `${cat?.title ?? "Products"} — Tip Top Blinds` },
        {
          name: "description",
          content: `${cat?.subtitle ?? "Window furnishings"} — custom made in Melbourne.`,
        },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();
  const cat = collections.find((c) => c.slug === category);

  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <Link
          to="/products"
          className="text-sm text-accent font-medium hover:underline mb-4 inline-block"
        >
          ← All Products
        </Link>
        <span className="label-uppercase mb-4 block mt-6">
          {cat?.subtitle}
        </span>
        <h1 className="heading-section text-foreground mb-6">
          {cat?.title ?? "Products"}
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
          {cat?.title} custom-made to the millimetre in our Clayton factory.
          Free in-home measure and quote across Melbourne. Backed by our 5-year
          warranty.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
            {cat && (
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Why choose our {cat?.title.toLowerCase()}?
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent">✦</span> Made to the millimetre for
                your windows
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✦</span> 200+ fabrics and 80+
                colours
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✦</span> Professional installation
                included
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✦</span> 5-year parts &amp; labour
                warranty
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-sm bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-charcoal-light transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
