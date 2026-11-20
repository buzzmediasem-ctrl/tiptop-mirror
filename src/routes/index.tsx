import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Ruler,
  Factory,
  Store,
  ShieldCheck,
  Award,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPin,
  FileText,
  CheckCircle2,
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
      { title: "Blinds, Curtains & Shutters Melbourne | Tip Top Blinds" },
      {
        name: "description",
        content:
          "Custom-made blinds, curtains, shutters and awnings from Tip Top Blinds. Melbourne manufacturer with 70+ years experience. Free measure & quote, factory-direct prices.",
      },
      {
        property: "og:title",
        content: "Blinds, Curtains & Shutters Melbourne | Tip Top Blinds",
      },
      {
        property: "og:description",
        content:
          "Custom-made blinds, curtains, shutters and awnings. 70+ years experience, factory-direct prices.",
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
      <WhyChooseSection />
      <TestimonialCarousel />
      <BlogSection />
      <CustomBlindsSection />
      <CtaSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
      <div className="absolute inset-0" style={{ transform: "scale(1.08)" }}>
        <img
          src={images.heroMobile}
          alt="Tip Top Blinds Melbourne"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative z-10 text-center px-6 animate-fade-up">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-[0.2em] uppercase">
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
    <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-10 lg:gap-8">
          {features.map((f) => {
            const Icon = iconMap[f.icon as keyof typeof iconMap];
            return (
              <div key={f.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/10 mb-2 md:mb-6">
                  {Icon && <Icon className="w-5 h-5 md:w-9 md:h-9 text-accent" strokeWidth={1.5} />}
                </div>
                <h3 className="text-sm md:text-xl font-medium text-secondary-foreground mb-1 md:mb-3">
                  {f.title}
                </h3>
                <p className="text-xs md:text-sm text-secondary-foreground/70 leading-relaxed max-w-[240px] mx-auto hidden md:block">
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
              Shop Our <span className="text-muted-foreground">Range</span>
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
        <h3 className="text-xl md:text-2xl lg:text-3xl text-white leading-tight group-hover:-translate-y-0.5 transition-transform duration-500">
          {collection.title}
        </h3>
        <div className="overflow-hidden h-0 group-hover:h-6 transition-all duration-500 delay-75">
          <span className="inline-block text-white/60 text-xs tracking-wider uppercase group-hover:text-accent transition-colors duration-500">
            Explore →
          </span>
        </div>
      </div>
      <div className="absolute top-4 left-4 md:top-6 md:left-6 w-8 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-150" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 delay-200" />
    </a>
  );
}

function VideoSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <span className="label-uppercase mb-4 block">As Seen On The Block</span>
          <h2 className="heading-section text-foreground">See Our Blinds in Action</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/VVGVinom1B8"
              title="Explore tiptop blinds Showroom"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
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
        <div className="text-center mb-12 md:mb-16">
          <span className="label-uppercase mb-4 block">Get Started</span>
          <h2 className="heading-section text-foreground">
            Consult the Design <span className="text-muted-foreground">Experts</span>
          </h2>
        </div>
        <img
          src={images.showroom}
          alt="Tip Top Blinds designer showroom in Clayton"
          loading="lazy"
          className="w-full rounded-lg shadow-soft mb-12"
        />
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <MapPin className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-foreground mb-3">Visit Our Showroom</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Experience our full range in person. Explore the latest trends, touch premium fabrics,
              and get expert advice in our designer showroom in Clayton.
            </p>
            <Link
              to="/showroom"
              className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-foreground font-semibold hover:text-accent transition-colors"
            >
              Book a Showroom Visit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div>
            <Store className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-foreground mb-3">We Come to You</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Our designers visit your home with fabric samples and provide a complimentary measure
              &amp; quote — tailored advice in the comfort of your own space.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-foreground font-semibold hover:text-accent transition-colors"
            >
              Request a Home Visit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div>
            <FileText className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-foreground mb-3">Quote from Plans</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Building or renovating? Send us your plans and our team will prepare a detailed quote
              for all your window furnishing needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-foreground font-semibold hover:text-accent transition-colors"
            >
              Submit Your Plans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const points = [
    "Complimentary in-home consultation",
    "Expert design advice tailored to your space",
    "Premium materials and finishes",
    "Professional installation included",
    "Comprehensive product warranties",
    "After-sales support and service",
  ];
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="label-uppercase mb-4 block">The Tip Top Difference</span>
            <h2 className="heading-section text-foreground mb-6">
              Why Discerning Homeowners Choose Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              For over 70 years, we've been transforming Australian homes with beautifully crafted
              window furnishings. Our commitment to quality, service, and attention to detail sets
              us apart.
            </p>
            <ul className="space-y-3 mb-10">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-sm bg-primary text-primary-foreground text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition-opacity"
            >
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-card border border-border rounded-lg p-8 text-center"
              >
                <div className="text-3xl md:text-5xl font-medium text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-3">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const t: (typeof testimonials)[number] = testimonials[idx] ?? testimonials[0]!;
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  return (
    <section className="py-20 md:py-28 bg-charcoal text-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
        <blockquote className="text-lg md:text-2xl font-light leading-relaxed mb-8">
          "{t.quote}"
        </blockquote>
        <div className="font-medium text-sm">{t.name}</div>
        <div className="text-xs text-white/50 mt-1 uppercase tracking-widest">
          {t.location} · {t.project}
        </div>
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === idx ? "bg-accent" : "bg-white/25"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <span className="label-uppercase mb-4 block">From Our Blog</span>
          <h2 className="heading-section text-foreground mb-3">Latest Tips &amp; Inspiration</h2>
          <p className="text-sm text-muted-foreground">
            Expert advice and design inspiration for your window furnishing project.
          </p>
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
                <div className="text-[10px] text-accent font-semibold uppercase tracking-widest mb-2">
                  {post.category}
                </div>
                <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-foreground font-semibold mt-4 group-hover:text-accent transition-colors">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-sm border border-border bg-card text-xs uppercase tracking-widest font-semibold text-foreground hover:border-accent transition-colors"
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
            Custom blinds in Melbourne — what they cost, how long they take, and whether they're
            worth it
          </h2>
        </div>

        <div className="bg-muted border-l-2 border-accent p-6 mb-10">
          <span className="label-uppercase mb-3 block">Quick Answer</span>
          <p className="text-muted-foreground leading-relaxed">
            Custom blinds in Melbourne typically cost $150–$600 per window installed, depending on
            style (roller, roman, venetian, blockout) and motorisation. Tip Top Blinds manufactures
            every blind to the millimetre in our Clayton factory, measures and fits in-house, and
            delivers in 2–3 weeks — backed by a 5-year warranty and 65+ years in business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">Key Takeaways</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                Average price per window: $150–$280 (basic roller), $250–$450 (blockout/sunscreen),
                $400–$900 (custom roman or motorised)
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                Whole-home pricing: a 4-bedroom Melbourne home typically lands between $2,400 and
                $6,000 fully measured and installed
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                Lead time: 2–3 weeks standard, 7–10 working days for property-settlement rush jobs
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                Factory-direct pricing — typically 20–30% below retail chains
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">Custom vs. Ready-Made</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3 font-medium text-foreground">Feature</th>
                    <th className="text-left p-3 font-medium text-foreground">Tip Top Blinds</th>
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
          <h3 className="text-xl font-medium text-foreground mb-4">Common Questions</h3>
          {customBlindsFaqs.map((faq) => (
            <div key={faq.q} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === faq.q ? null : faq.q)}
                className="flex items-center justify-between w-full p-4 text-left font-medium text-foreground hover:bg-muted transition-colors"
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

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-10">
          <Star className="w-4 h-4 text-accent" />
          <span>4.3 Google rating · 65+ years in business · Factory-direct prices ·</span>
          <Link to="/showroom" className="underline hover:text-accent">
            Visit our Clayton showroom
          </Link>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <span className="label-uppercase mb-4 block">Get Started Today</span>
        <h2 className="heading-section text-foreground mb-6">Ready to Transform Your Home?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Book your complimentary in-home consultation. Our expert consultants will measure your
          windows, discuss your requirements, and provide a no-obligation quote tailored to your
          needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-sm bg-primary text-primary-foreground uppercase tracking-widest text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            Book Your Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center h-12 px-8 rounded-sm border border-border bg-card text-foreground uppercase tracking-widest text-xs font-semibold hover:border-accent transition-colors"
          >
            Browse Our Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
