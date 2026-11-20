import { createFileRoute, Link } from "@tanstack/react-router";
import { collections } from "../lib/site-data";

export const Route = createFileRoute("/products/$category/$product")({
  head: ({ params }) => {
    const cat = collections.find((c) => c.slug === params.category);
    return {
      meta: [
        {
          title: `${cat?.title ?? "Products"} — Tip Top Blinds`,
        },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { category, product } = Route.useParams();
  const cat = collections.find((c) => c.slug === category);
  const productName = product
    .split("-")
    .map((w) => (w[0] ?? "").toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link
          to="/products"
          className="text-sm text-accent font-medium hover:underline mb-4 inline-block"
        >
          ← All Products
        </Link>
        <span className="label-uppercase mb-4 block mt-6">
          {cat?.subtitle}
        </span>
        <h1 className="heading-section text-foreground mb-6">{productName}</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
          {productName} custom-made in our Clayton factory. Free measure &amp;
          quote, professional installation, 5-year warranty.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {cat && (
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
              <img
                src={cat.image}
                alt={productName}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Features
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent">✦</span> Made to the millimetre
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✦</span> 200+ fabrics, 80+ colours
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✦</span> Professional installation
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✦</span> 5-year warranty
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
