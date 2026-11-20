import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Ruler,
  Factory,
  Store,
  ShieldCheck,
  Award,
  ArrowRight,
  Play,
  Star,
  Quote,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

import {
  images,
  collections,
  features,
  stats,
  testimonials,
  blogPosts,
  customBlindsFaqs,
  comparisonTable,
  site,
} from "../lib/site-data";

const iconMap = {
  ruler: Ruler,
  factory: Factory,
  store: Store,
  shield: ShieldCheck,
  award: Award,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tip Top Blinds — Custom Blinds, Curtains & Awnings Melbourne" },
      {
        name: "description",
        content:
          "Custom-made blinds, curtains, shutters and awnings from Tip Top Blinds. Melbourne manufacturer with 70+ years experience. Free measure & quote, factory-direct prices.",
      },
      {
        property: "og:title",
        content: "Tip Top Blinds — Custom Blinds, Curtains & Awnings Melbourne",
      },
      {
        property: "og:description",
        content:
          "Custom-made blinds, curtains, shutters and awnings.70+ years experience, factory-direct prices.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: images.heroMobile },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.heroMobile },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CollectionsSection />
      <VideoSection />
      <ShowroomSection />
      <StatsSection />
      <TestimonialSection />
      <BlogSection />
      <CustomBlindsSection />
      <CtaSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0" style={{ transform: "scale(1.08)" }}>
        <img
          src={images.heroMobile}
          alt="Tip Top Blinds Melbourne"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 text-center px-6 animate-fade-up">
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-[0.2em] uppercase">
          Blinds, Curtains &amp; Awnings
        </h1>
        <p className="text-sm md:text-base text-white/70 tracking-[0.15em] uppercase mt-4">
          Made for Your Home
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 rounded-sm bg-transparent border border-white/70 text-white hover:bg-white/10 tracking-[0.25em] uppercase font-medium text-xs px-10 transition-colors"
          >
            Book Consult
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-10 lg:gap-8">
          {features.map((f) => {
            const Icon = iconMap[f.icon as keyof typeof iconMap];
            return (
              <div key={f.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full bg-accent/10 mb-2 md:mb-6">
                  {Icon && <Icon className="w-5 h-5 md:w-9 md:h-9 text-accent" />}
                </div>
                <h3 className="font-serif text-sm md:text-2xl font-medium text-foreground mb-1 md:mb-3">
                  {f.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-[240px] mx-auto hidden md:block">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CollectionsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <span className="label-uppercase mb-4 block">Collections</span>
          <div className="flex items-end gap-6">
            <h2 className="heading-section text-foreground">
              Shop Our <em className="text-accent not-italic">Range</em>
            </h2>
            <div className="flex-1 mb-2 hidden md:block">
              <div className="h-px bg-border w-full" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {collections.map((c) => (
            <CollectionCard key={c.slug} collection={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionCard({ collection }: { collection: (typeof collections)[number] }) {
  return (
    <a
      href={`/products/${collection.slug}`}
      className="group relative block w-full overflow-hidden aspect-[3/4] shadow-soft hover:shadow-large transition-shadow duration-700"
    >
      <img
        src={collection.image}
        alt={collection.title}
        loading="lazy"
        className="block w-full h-full object-cover animate-ken-burns transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/15 to-transparent group-hover:from-charcoal/85 transition-all duration-700" />
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <span className="block text-white/40 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-1 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          {collection.subtitle}
        </span>
        <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-white leading-tight group-hover:-translate-y-0.5 transition-transform duration-500">
          {collection.title}
        </h3>
        <div className="overflow-hidden h-0 group-hover:h-6 transition-all duration-500 delay-75">
          <span className="inline-block text-white/60 text-xs tracking-wider uppercase group-hover:text-accent transition-colors duration-500">
            Explore →
          </span>
        </div>
      </div>
      <div className="absolute top-4 left-4 md:top-6 md:left-6 w-8 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-600 delay-150" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 delay-200" />
    </a>
  );
}

function VideoSection() {
  return (
    <section className="py-20 md:py-28 bg-charcoal text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <span className="label-uppercase mb-4 block text-white/50">As Seen On The Block</span>
          <h2 className="heading-section text-white">
            See Our Blinds in <em className="text-accent not-italic">Action</em>
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-charcoal-light rounded-lg overflow-hidden group cursor-pointer">
            <img
              src={images.showroom}
              alt="Tip Top Blinds showroom"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal to-transparent">
              <p className="text-white text-sm font-medium">Explore Tip Top Blinds Showroom</p>
              <p className="text-white/60 text-xs mt-1">
                tiptop blinds Melbourne · 153 subscribers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowroomSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={images.showroom}
              alt="Tip Top Blinds designer showroom in Clayton"
              className="w-full rounded-lg shadow-soft"
            />
          </div>
          <div>
            <span className="label-uppercase mb-4 block">Get Started</span>
            <h2 className="heading-section text-foreground mb-6">
              Consult the Design <em className="text-accent not-italic">Experts</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our Designer Showroom — Clayton, VIC. Experience our full range in person, explore the
              latest trends, touch premium fabrics, and get expert advice.
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-accent pl-4">
                <h3 className="font-serif text-lg font-medium text-foreground">
                  Visit Our Showroom
                </h3>
                <p className="text-sm text-muted-foreground">
                  Experience our full range in person. Explore the latest trends, touch premium
                  fabrics, and get expert advice.
                </p>
                <Link
                  to="/showroom"
                  className="inline-flex items-center gap-1 text-sm text-accent font-medium mt-2 hover:gap-2 transition-all"
                >
                  Book a Showroom Visit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="border-l-2 border-border pl-4">
                <h3 className="font-serif text-lg font-medium text-foreground">We Come to You</h3>
                <p className="text-sm text-muted-foreground">
                  Our designers visit your home with fabric samples and provide a complimentary
                  measure & quote.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-sm text-accent font-medium mt-2 hover:gap-2 transition-all"
                >
                  Request a Home Visit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="border-l-2 border-border pl-4">
                <h3 className="font-serif text-lg font-medium text-foreground">Quote from Plans</h3>
                <p className="text-sm text-muted-foreground">
                  Building or renovating? Send us your plans and our team will prepare a detailed
                  quote.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-sm text-accent font-medium mt-2 hover:gap-2 transition-all"
                >
                  Submit Your Plans
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-3xl md:text-5xl font-medium text-accent">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <span className="label-uppercase mb-4 block">The Tip Top Difference</span>
          <h2 className="heading-section text-foreground">
            Why Discerning Homeowners <em className="text-accent not-italic">Choose Us</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-lg p-6 shadow-soft">
              <Quote className="w-8 h-8 text-accent/40 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                  <span className="font-serif text-accent font-medium">{t.name[0]}</span>
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.location} · {t.project}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <span className="label-uppercase mb-4 block">From Our Blog</span>
          <div className="flex items-end gap-6">
            <h2 className="heading-section text-foreground">
              Latest Tips &amp; <em className="text-accent not-italic">Inspiration</em>
            </h2>
            <div className="flex-1 mb-2 hidden md:block">
              <div className="h-px bg-border w-full" />
            </div>
          </div>
        </div>
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
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="text-accent font-medium">{post.category}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm text-accent font-medium mt-4 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CustomBlindsSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="mb-12 text-center">
          <span className="label-uppercase mb-4 block">Custom Blinds Melbourne</span>
          <h2 className="heading-section text-foreground">
            Custom blinds in Melbourne — what they cost, how long they take, and whether they're{" "}
            <em className="text-accent not-italic">worth it</em>
          </h2>
        </div>

        <div className="prose prose-lg max-w-none mb-10">
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Quick Answer:</strong> Custom blinds in Melbourne
            typically cost $150–$600 per window installed, depending on style (roller, roman,
            venetian, blockout) and motorisation. Tip Top Blinds manufactures every blind to the
            millimetre in our Clayton factory, measures and fits in-house, and delivers in 2–3 weeks
            — backed by a 5-year warranty and 65+ years in business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-4">Key Takeaways</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                Average price per window: $150–$280 (basic roller), $250–$450 (blockout/sunscreen),
                $400–$900 (custom roman or motorised)
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                Whole-home pricing: a 4-bedroom Melbourne home typically lands between $2,400 and
                $6,000 fully measured and installed
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                Lead time: 2–3 weeks standard, 7–10 working days for property-settlement rush jobs
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                Factory-direct pricing — typically 20–30% below retail chains
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-4">
              Custom vs. Ready-Made
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left p-3 font-medium text-foreground">Feature</th>
                    <th className="text-left p-3 font-medium text-accent">Tip Top Blinds</th>
                    <th className="text-left p-3 font-medium text-muted-foreground">
                      Typical Supplier
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row) => (
                    <tr key={row.feature} className="border-t border-border">
                      <td className="p-3 text-foreground">{row.feature}</td>
                      <td className="p-3 text-foreground font-medium">{row.us}</td>
                      <td className="p-3 text-muted-foreground">{row.them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-xl font-medium text-foreground mb-4">Common Questions</h3>
          {customBlindsFaqs.map((faq) => (
            <div key={faq.q} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === faq.q ? null : faq.q)}
                className="flex items-center justify-between w-full p-4 text-left font-medium text-foreground hover:bg-secondary transition-colors"
              >
                {faq.q}
                <ChevronDown
                  className={`w-4 h-4 text-accent transition-transform ${
                    open === faq.q ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === faq.q && (
                <div className="p-4 pt-0 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-charcoal text-white">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <span className="label-uppercase mb-4 block text-white/50">Get Started Today</span>
        <h2 className="heading-section text-white mb-6">
          Ready to Transform <em className="text-accent not-italic">Your Home?</em>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Book your complimentary in-home consultation. Our expert consultants will measure your
          windows, discuss your requirements, and provide a no-obligation quote tailored to your
          needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-sm bg-accent text-accent-foreground uppercase tracking-widest text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book Your Free Consultation
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center h-12 px-8 rounded-sm border border-white/30 text-white uppercase tracking-widest text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Browse Our Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
