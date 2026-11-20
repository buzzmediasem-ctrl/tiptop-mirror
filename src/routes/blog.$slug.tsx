import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "../lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: `${post?.title ?? "Article"} — Tip Top Blinds` },
        {
          name: "description",
          content: post?.excerpt ?? "Blog article from Tip Top Blinds.",
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <p className="text-muted-foreground">Article not found.</p>
        <Link to="/blog" className="text-accent hover:underline mt-4 inline-block">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        <Link
          to="/blog"
          className="text-sm text-accent font-medium hover:underline mb-6 inline-block"
        >
          ← All Articles
        </Link>
        <div className="aspect-[16/9] overflow-hidden rounded-lg mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-xs text-muted-foreground mb-4">
          <span className="text-accent font-medium">{post.category}</span> ·{" "}
          {post.date} · {post.readTime}
        </div>
        <h1 className="heading-section text-foreground mb-6">{post.title}</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
          <p>{post.excerpt}</p>
          <p>
            When choosing window furnishings for your home, the right option
            depends on the room, your light and privacy needs, and your style.
            Our consultants can visit your home with samples and provide tailored
            advice — completely free and with no obligation.
          </p>
          <p>
            Tip Top Blinds manufactures every order to the millimetre in our
            Clayton factory. Free measure and quote, professional installation,
            and a 5-year warranty on every product.
          </p>
        </div>
        <div className="mt-10 p-6 bg-secondary rounded-lg">
          <h3 className="font-serif text-xl font-medium text-foreground mb-2">
            Need advice for your project?
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-accent font-medium hover:gap-2 transition-all"
          >
            Book a free consultation →
          </Link>
        </div>
      </div>
    </div>
  );
}
