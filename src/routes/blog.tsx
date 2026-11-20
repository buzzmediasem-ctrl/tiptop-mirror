import { createFileRoute } from "@tanstack/react-router";
import { blogPosts } from "../lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Tips & Inspiration | Tip Top Blinds" },
      {
        name: "description",
        content: "Expert advice and design inspiration for your window furnishing project.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <span className="label-uppercase mb-4 block">From Our Blog</span>
        <h1 className="heading-section text-foreground mb-12">
          Tips &amp; <em className="text-accent not-italic">Inspiration</em>
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-lg bg-card border border-border shadow-soft hover:shadow-large transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <div className="text-xs text-muted-foreground mb-2">
                  <span className="text-accent font-medium">{post.category}</span>
                  {" · "}
                  {post.date} · {post.readTime}
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {post.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
