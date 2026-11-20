import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

import appCss from "../styles.css?url";
import { reportVibeError } from "../lib/vibe-error-reporting";
import { site, navLinks, productNav, images } from "../lib/site-data";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-medium text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-4 py-2 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-charcoal-light"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportVibeError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-xl font-medium tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-sm bg-primary px-4 py-2 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-charcoal-light"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-sm border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-promo text-white text-center py-2 px-4 relative overflow-hidden h-12 shadow-md">
      <span className="text-sm sm:text-base font-bold uppercase tracking-wide">
        ☀️ Save $1,000 on Zipscreen Blinds — Install Before Summer
      </span>
    </div>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-xs border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="flex items-center">
            <img
              src={images.logo}
              alt="Tip Top Blinds"
              className="h-20 md:h-24 w-auto object-contain brightness-0"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((l) =>
              l.label === "Showroom" ? (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative px-3 py-1.5 rounded-full border border-accent/40 text-accent bg-accent/5 text-sm font-medium animate-shimmer-pulse"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-full border border-accent/30 animate-ping-slow opacity-40" />
                  <span className="relative">Showroom</span>
                </Link>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              ),
            )}
            <a
              href={site.phoneHref}
              className="flex items-center space-x-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>{site.phone}</span>
            </a>
            <a
              href={site.callbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-sm uppercase tracking-widest font-medium h-9 rounded-sm px-3 bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Request a Call Back
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center text-sm uppercase tracking-widest font-medium h-9 rounded-sm px-3 bg-primary text-primary-foreground hover:bg-charcoal-light transition-colors"
            >
              Book Free Measure
            </Link>
          </nav>

          <div className="lg:hidden flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              className="p-2 text-foreground"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Product category bar */}
      <div className="hidden lg:block bg-charcoal border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-center space-x-1">
            {productNav.map((cat) => (
              <div key={cat.slug} className="relative group">
                <button className="flex items-center gap-1 px-4 py-3 text-sm font-semibold tracking-wide uppercase text-white/75 hover:text-white transition-colors">
                  {cat.label}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block bg-background border border-border shadow-large min-w-[220px] z-50">
                  {cat.items.map((item) => (
                    <a
                      key={item}
                      href={`/products/${cat.slug}/${item}`}
                      className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-accent hover:bg-accent/5 transition-colors"
                    >
                      {item
                        .split("-")
                        .map((w) => (w[0] ?? "").toUpperCase() + w.slice(1))
                        .join(" ")}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <a
              href="/products/shutters"
              className="flex items-center gap-1 px-4 py-3 text-sm font-semibold tracking-wide uppercase text-white/75 hover:text-white transition-colors"
            >
              Shutters
            </a>
            <a
              href="/products/motorisation"
              className="flex items-center gap-1 px-4 py-3 text-sm font-semibold tracking-wide uppercase text-white/75 hover:text-white transition-colors"
            >
              Motorisation
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-charcoal border-t border-white/10 p-4 space-y-1">
          {productNav.map((cat) => (
            <div key={cat.slug} className="py-2">
              <div className="text-white/85 font-semibold uppercase tracking-wide text-sm">
                {cat.label}
              </div>
              <div className="ml-3 mt-1 space-y-1">
                {cat.items.map((item) => (
                  <a
                    key={item}
                    href={`/products/${cat.slug}/${item}`}
                    className="block py-1.5 text-sm text-white/60 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item
                      .split("-")
                      .map((w) => (w[0] ?? "").toUpperCase() + w.slice(1))
                      .join(" ")}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <a
            href="/products/shutters"
            className="block py-2 text-white/85 font-semibold uppercase tracking-wide text-sm"
            onClick={() => setMobileOpen(false)}
          >
            Shutters
          </a>
          <div className="bg-background p-4 mt-2 space-y-1 rounded">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block py-2.5 text-base font-medium text-foreground/80"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border/50 space-y-2">
              <a
                href={site.callbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm uppercase tracking-widest font-medium h-10 px-4 py-2 w-full rounded-sm bg-accent text-accent-foreground"
              >
                Request a Call Back
              </a>
              <Link
                to="/contact"
                className="block text-center text-sm uppercase tracking-widest font-medium h-10 px-4 py-2 w-full rounded-sm bg-primary text-primary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                Book Free Measure & Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <img
              src={images.logo}
              alt="Tip Top Blinds"
              className="h-16 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-sm leading-relaxed">
              Premium window furnishings for exceptional Australian homes. Crafted with care,
              installed with precision.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href={site.social.facebook}
                aria-label="Facebook"
                className="text-white/60 hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href={site.social.instagram}
                aria-label="Instagram"
                className="text-white/60 hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.94.33 4.2.63c-.74.29-1.37.68-2 1.31-.63.63-1.02 1.26-1.31 2-.3.74-.5 1.58-.56 2.85C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.11.56 2.85.29.74.68 1.37 1.31 2 .63.63 1.26 1.02 2 1.31.74.3 1.58.5 2.85.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.11-.26 2.85-.56a5.4 5.4 0 0 0 2-1.31 5.4 5.4 0 0 0 1.31-2c.3-.74.5-1.58.56-2.85.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.11-.56-2.85a5.4 5.4 0 0 0-1.31-2 5.4 5.4 0 0 0-2-1.31c-.74-.3-1.58-.5-2.85-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                </svg>
              </a>
              <a
                href={site.social.linkedin}
                aria-label="LinkedIn"
                className="text-white/60 hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.2.79 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-accent transition-colors">
                  Blinds
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors">
                  Curtains
                </Link>
              </li>
              <li>
                <a href="/products/shutters" className="hover:text-accent transition-colors">
                  Shutters
                </a>
              </li>
              <li>
                <a href="/products/awnings" className="hover:text-accent transition-colors">
                  Awnings
                </a>
              </li>
              <li>
                <a
                  href="/products/custom-solutions"
                  className="hover:text-accent transition-colors"
                >
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/60">Call Us</li>
              <li>
                <a href={site.phoneHref} className="text-accent font-medium hover:underline">
                  {site.phone}
                </a>
              </li>
              <li className="text-white/60 mt-2">Email</li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-accent font-medium hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-white/60 mt-2">Showroom</li>
              <li className="text-white/60">{site.address.line1}</li>
              <li className="text-white/60">{site.address.line2}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">© 2026 Tip Top Blinds. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/50">
            <Link to="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
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
          "Custom-made blinds, curtains, shutters and awnings. Free measure & quote, factory-direct prices, 70+ years experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Karla:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
