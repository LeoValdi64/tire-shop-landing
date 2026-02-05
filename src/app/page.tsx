"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  ChevronRight,
  Star,
  Shield,
  Wrench,
  RotateCcw,
  Target,
  CircleDot,
  Snowflake,
  Tag,
  Menu,
  X,
  Facebook,
  Instagram,
  Send,
  CheckCircle,
} from "lucide-react";

/* ---------- Header / Navigation ---------- */

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Brands", href: "#brands" },
    { label: "Offers", href: "#offers" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-brand-800 bg-brand-950/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <CircleDot className="h-8 w-8 text-accent-500" strokeWidth={2.5} />
          <span className="text-xl font-bold tracking-tight text-white">
            Road<span className="text-accent-500">Grip</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+15557428473"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-500"
          >
            <Phone className="h-4 w-4" />
            (555) 742-8473
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-brand-300 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-brand-800 bg-brand-950 px-4 pb-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-brand-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+15557428473"
            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-accent-600 px-4 py-2 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            (555) 742-8473
          </a>
        </nav>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-brand-950 pt-16">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(220,38,38,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(220,38,38,0.08)_0%,_transparent_50%)]" />
      {/* Diagonal tire-tread pattern lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 20px)" }} />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-600/30 bg-accent-600/10 px-4 py-1.5 text-sm font-medium text-accent-400">
            <Shield className="h-4 w-4" />
            Trusted by 10,000+ drivers in Springfield
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Tires.{" "}
            <span className="text-accent-500">Our Expertise.</span>
            <br />
            Back on the Road Fast.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-300 sm:text-xl">
            From premium tire sales to precision alignment, RoadGrip Tire Center delivers reliable
            service you can count on &mdash; every mile, every season.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-500 hover:shadow-accent-500/30"
            >
              Get a Free Quote
              <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href="tel:+15557428473"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-700 bg-brand-900 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:border-brand-600 hover:bg-brand-800"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-brand-400">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent-500" />
              Same-Day Service
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent-500" />
              Price Match Guarantee
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent-500" />
              All Major Brands
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */

const services = [
  {
    icon: Tag,
    title: "Tire Sales",
    description:
      "Huge selection of all-season, performance, truck, and specialty tires from top brands at competitive prices.",
  },
  {
    icon: Wrench,
    title: "Tire Installation",
    description:
      "Professional mounting and balancing with state-of-the-art equipment. Includes valve stems and a courtesy inspection.",
  },
  {
    icon: RotateCcw,
    title: "Tire Rotation",
    description:
      "Extend tire life with regular rotation service. We follow manufacturer-recommended patterns for even wear.",
  },
  {
    icon: Target,
    title: "Wheel Alignment",
    description:
      "Precision 4-wheel alignment using laser technology. Improve handling, fuel economy, and tire longevity.",
  },
  {
    icon: CircleDot,
    title: "Flat Tire Repair",
    description:
      "Fast, reliable flat repairs following industry safety standards. Get back on the road in under 30 minutes.",
  },
  {
    icon: Snowflake,
    title: "Seasonal Changeover",
    description:
      "Hassle-free summer-to-winter and winter-to-summer tire swaps. Includes tire storage options.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-brand-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-500">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Complete Tire Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-400">
            Everything your vehicle needs under one roof &mdash; from new tires to expert
            maintenance, we&apos;ve got you covered.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-brand-800 bg-brand-950/60 p-6 transition-all hover:border-accent-600/40 hover:bg-brand-950"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent-600/10 p-3 text-accent-500 transition-colors group-hover:bg-accent-600/20">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-brand-400">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Brands ---------- */

const brands = [
  "Michelin",
  "Bridgestone",
  "Goodyear",
  "Continental",
  "Pirelli",
  "Firestone",
  "BFGoodrich",
  "Hankook",
  "Cooper Tires",
  "Yokohama",
  "Toyo Tires",
  "General Tire",
];

function Brands() {
  return (
    <section id="brands" className="bg-brand-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-500">
            Trusted Names
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Premium Tire Brands
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-400">
            We carry a full range of top-tier tire brands so you get the perfect fit for your
            vehicle and driving style.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((b) => (
            <div
              key={b}
              className="flex items-center justify-center rounded-lg border border-brand-800 bg-brand-900/50 px-4 py-6 text-center text-sm font-semibold text-brand-200 transition-all hover:border-accent-600/30 hover:text-white"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Special Offers ---------- */

const offers = [
  {
    badge: "Most Popular",
    title: "Buy 3, Get 4th 50% Off",
    description:
      "Purchase any three tires from our premium selection and get the fourth at half price. Mix and match across brands.",
    cta: "Shop Tires",
  },
  {
    badge: "Seasonal",
    title: "Free Alignment Check",
    description:
      "Book any tire service this month and receive a complimentary alignment inspection &mdash; a $49 value.",
    cta: "Book Now",
  },
  {
    badge: "New Customers",
    title: "15% Off First Visit",
    description:
      "First time at RoadGrip? Enjoy 15% off any service. Just mention this offer when you call or visit.",
    cta: "Claim Offer",
  },
];

function Offers() {
  return (
    <section id="offers" className="bg-brand-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-500">
            Save More
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Special Offers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-400">
            Take advantage of our current deals and keep your vehicle road-ready for less.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((o) => (
            <div
              key={o.title}
              className="relative overflow-hidden rounded-xl border border-accent-600/20 bg-gradient-to-br from-brand-950 to-brand-900 p-6"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent-600/10" />
              <span className="relative inline-block rounded-full bg-accent-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                {o.badge}
              </span>
              <h3 className="relative mt-4 text-xl font-bold text-white">{o.title}</h3>
              <p
                className="relative mt-3 text-sm leading-relaxed text-brand-400"
                dangerouslySetInnerHTML={{ __html: o.description }}
              />
              <a
                href="#contact"
                className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent-400 transition-colors hover:text-accent-300"
              >
                {o.cta}
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

const testimonials = [
  {
    name: "Marcus D.",
    text: "Best tire shop in Springfield, hands down. They replaced all four tires on my truck and had me out in under an hour. Fair pricing and the staff really knows their stuff.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    text: "I came in with a flat on a Saturday afternoon and they patched it right away. No appointment needed. I've been coming back for every tire service since. Highly recommend!",
    rating: 5,
  },
  {
    name: "James W.",
    text: "Got a wheel alignment and new Michelins installed. The difference in handling is night and day. Professional service from start to finish. Will definitely be back.",
    rating: 5,
  },
  {
    name: "Linda P.",
    text: "RoadGrip saved me hundreds by recommending the right tires for my commute instead of upselling me. Honest and dependable — exactly what you want from a tire shop.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section id="reviews" className="bg-brand-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-500">
            Real Reviews
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            What Our Customers Say
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-white">4.8</span>
            <span className="text-brand-400">from 347 reviews</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-brand-800 bg-brand-900/50 p-6"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-brand-300">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-white">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Location / Hours ---------- */

function Location() {
  return (
    <section id="location" className="bg-brand-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-500">
            Visit Us
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Location &amp; Hours
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Map embed placeholder */}
          <div className="overflow-hidden rounded-xl border border-brand-800">
            <iframe
              title="RoadGrip Tire Center Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.63!2d-89.6501!3d39.7817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzU0LjEiTiA4OcKwMzknMDAuNCJX!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-brand-800 bg-brand-950/60 p-6">
              <div className="mb-3 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent-500" />
                <h3 className="text-lg font-semibold text-white">Address</h3>
              </div>
              <p className="text-brand-300">
                1247 Industrial Blvd<br />
                Springfield, IL 62701
              </p>
            </div>

            <div className="rounded-xl border border-brand-800 bg-brand-950/60 p-6">
              <div className="mb-3 flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent-500" />
                <h3 className="text-lg font-semibold text-white">Hours</h3>
              </div>
              <div className="space-y-1.5 text-sm text-brand-300">
                <div className="flex justify-between">
                  <span>Monday &ndash; Friday</span>
                  <span className="font-medium text-white">7:00 AM &ndash; 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-white">8:00 AM &ndash; 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-accent-400">Closed</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-brand-800 bg-brand-950/60 p-6">
              <div className="mb-3 flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-500" />
                <h3 className="text-lg font-semibold text-white">Contact</h3>
              </div>
              <div className="space-y-1.5 text-sm text-brand-300">
                <p>
                  <span className="text-brand-400">Phone:</span>{" "}
                  <a href="tel:+15557428473" className="text-white hover:text-accent-400">
                    (555) 742-8473
                  </a>
                </p>
                <p>
                  <span className="text-brand-400">Email:</span>{" "}
                  <a
                    href="mailto:info@roadgriptirecenter.com"
                    className="text-white hover:text-accent-400"
                  >
                    info@roadgriptirecenter.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact Form ---------- */

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-brand-950 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-500">
            Get In Touch
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Request a Quote
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-400">
            Fill out the form below and we&apos;ll get back to you within one business day. Or call
            us directly for immediate assistance.
          </p>
        </div>

        {submitted ? (
          <div className="mt-14 rounded-xl border border-green-800/40 bg-green-900/20 p-8 text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-green-400" />
            <h3 className="mt-4 text-xl font-bold text-white">Message Sent!</h3>
            <p className="mt-2 text-brand-300">
              Thank you for reaching out. We&apos;ll get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-14 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-300">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-brand-700 bg-brand-900 px-4 py-2.5 text-sm text-white placeholder:text-brand-500 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand-300">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(555) 123-4567"
                  className="w-full rounded-lg border border-brand-700 bg-brand-900 px-4 py-2.5 text-sm text-white placeholder:text-brand-500 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-300">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="w-full rounded-lg border border-brand-700 bg-brand-900 px-4 py-2.5 text-sm text-white placeholder:text-brand-500 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
              />
            </div>

            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-brand-300">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full rounded-lg border border-brand-700 bg-brand-900 px-4 py-2.5 text-sm text-white focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Tire Sales</option>
                <option>Tire Installation</option>
                <option>Tire Rotation</option>
                <option>Wheel Alignment</option>
                <option>Flat Tire Repair</option>
                <option>Seasonal Changeover</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your vehicle and what you need..."
                className="w-full resize-none rounded-lg border border-brand-700 bg-brand-900 px-4 py-2.5 text-sm text-white placeholder:text-brand-500 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-500 hover:shadow-accent-500/30 sm:w-auto"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-brand-800 bg-brand-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2">
              <CircleDot className="h-7 w-7 text-accent-500" strokeWidth={2.5} />
              <span className="text-lg font-bold text-white">
                Road<span className="text-accent-500">Grip</span>
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-brand-400">
              Springfield&apos;s trusted tire professionals since 2008. Quality tires, expert
              service, honest prices.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://facebook.com/roadgriptirecenter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-lg border border-brand-800 p-2 text-brand-400 transition-colors hover:border-accent-600/40 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/roadgriptirecenter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-lg border border-brand-800 p-2 text-brand-400 transition-colors hover:border-accent-600/40 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-brand-400">
              <li><a href="#services" className="hover:text-white">Tire Sales</a></li>
              <li><a href="#services" className="hover:text-white">Installation</a></li>
              <li><a href="#services" className="hover:text-white">Rotation</a></li>
              <li><a href="#services" className="hover:text-white">Wheel Alignment</a></li>
              <li><a href="#services" className="hover:text-white">Flat Repair</a></li>
              <li><a href="#services" className="hover:text-white">Seasonal Changeover</a></li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-brand-400">
              <li><a href="#brands" className="hover:text-white">Tire Brands</a></li>
              <li><a href="#offers" className="hover:text-white">Special Offers</a></li>
              <li><a href="#reviews" className="hover:text-white">Customer Reviews</a></li>
              <li><a href="#location" className="hover:text-white">Location &amp; Hours</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-brand-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <span>1247 Industrial Blvd<br />Springfield, IL 62701</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent-500" />
                <a href="tel:+15557428473" className="hover:text-white">(555) 742-8473</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent-500" />
                <a href="mailto:info@roadgriptirecenter.com" className="hover:text-white">
                  info@roadgriptirecenter.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-accent-500" />
                <span>Mon&ndash;Fri 7&ndash;6 &bull; Sat 8&ndash;4</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-800 pt-6 text-center text-xs text-brand-500">
          &copy; {new Date().getFullYear()} RoadGrip Tire Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Brands />
        <Offers />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
