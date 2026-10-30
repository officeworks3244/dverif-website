import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  FileCheck2,
  LockKeyhole,
  QrCode,
  Settings2,
  ShieldCheck,
  Users,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { RequestAccessModal } from "@/components/request-access-modal";
import { VideoTestimonials } from "@/components/video-testimonials";
import { ReadyToSimplify } from "@/components/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dverif — Trusted Document Verification & HR Operations" },
      {
        name: "description",
        content:
          "Dverif helps organizations verify documents, manage employee records, and simplify daily HR operations from one secure workspace.",
      },
      {
        name: "keywords",
        content:
          "document verification, employee management, HR platform, QR certificates, attendance, leave, payroll, Dverif",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Dverif — Trust every document. Manage every employee." },
      {
        property: "og:description",
        content: "Verify documents and run everyday HR operations from one secure workspace.",
      },
      { property: "og:url", content: "https://dverif.com" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Pillars />
      <VerificationStory />
      <SecurityBand />
      <VideoTestimonials />
      <ReadyToSimplify />
    </SiteLayout>
  );
}

function BrandMark() {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="DVerif">
      <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-[#2f9479] text-white shadow-[0_8px_18px_-9px_#2f9479]">
        <ShieldCheck className="h-5 w-5" strokeWidth={2.3} />
      </span>
      <span className="text-[1.45rem] font-semibold tracking-[-0.055em] text-[#102640]">
        DVerif
      </span>
    </span>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fbfaf7] pb-16 pt-8 sm:pb-24 sm:pt-14 lg:pb-24 lg:pt-20">
      <div className="pointer-events-none absolute -right-16 top-4 h-[430px] w-[430px] rounded-full bg-[#e5f1ea]/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[42%] h-44 w-44 rounded-full bg-[#f0eee7] blur-3xl" />
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[.93fr_1.07fr] lg:gap-16">
        <div className="animate-fade-up max-w-2xl">
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.23em] text-[#518f7b]">
            Trusted operations, built around verification
          </p>
          <h1 className="max-w-[700px] font-serif text-[3.35rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[#112b47] sm:text-[4.45rem] lg:text-[5rem]">
            Trust every document.
            <br />
            Manage every employee.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#5d6873] sm:text-lg sm:leading-8">
            DVerif helps organizations verify documents, manage employee records and simplify daily
            HR operations from one secure workspace.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <RequestAccessModal>
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-[#142d48] px-6 text-sm font-semibold text-white shadow-[0_14px_28px_-18px_#142d48] transition-transform hover:-translate-y-0.5">
                Get started <ArrowRight className="h-4 w-4" />
              </button>
            </RequestAccessModal>
            <a
              href="#platform"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] border border-[#9ca9af] bg-white/55 px-6 text-sm font-semibold text-[#17314c] transition-colors hover:bg-white"
            >
              Explore platform <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#61706d]">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#398f78]" />
              Secure access
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#398f78]" />
              QR certificates
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#398f78]" />
              English & Urdu
            </span>
          </div>
        </div>
        <HeroProductVisual />
      </div>
    </section>
  );
}

function HeroProductVisual() {
  return (
    <div className="relative animate-fade-in-soft lg:pl-4">
      <div className="absolute -right-10 top-6 h-72 w-72 rounded-full bg-[#d8ebcf] blur-3xl" />
      <div className="relative mx-auto max-w-[650px]">
        <div className="absolute -right-2 -top-12 hidden rotate-[6deg] font-serif text-2xl italic leading-7 text-[#6b8c70] sm:block">
          People first,
          <br />
          records trusted.
        </div>
        <div className="relative overflow-hidden rounded-[24px] border border-[#d7ddcd] bg-white p-2 shadow-[0_34px_80px_-38px_rgba(34,67,52,.42)] sm:p-3">
          <div className="flex h-9 items-center gap-1.5 rounded-t-[16px] border-b border-[#e7eadf] bg-[#fbfcf8] px-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e99a8d]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e8c76f]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#79bd8b]" />
            <span className="ml-3 text-[10px] font-semibold text-[#5c7864]">
              DVerif · Verification workspace
            </span>
          </div>
          <div className="relative overflow-hidden rounded-b-[16px] bg-[#f2f5ed] p-3 sm:p-5">
            <img
              src="/assets/verification-request.jpeg"
              alt="DVerif document verification request interface"
              className="h-auto w-full rounded-xl border border-[#dfe6d9] bg-white object-cover object-top shadow-[0_18px_35px_-24px_rgba(32,63,48,.4)]"
            />
            <div className="absolute -bottom-2 right-3 w-[46%] rounded-2xl border border-[#d9e5d5] bg-white/95 p-3 shadow-[0_20px_38px_-24px_rgba(31,75,52,.48)] backdrop-blur sm:right-7 sm:w-[42%] sm:p-4">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#dff0df] text-xs font-bold text-[#2f7451]">
                  AK
                </span>
                <div>
                  <p className="text-[11px] font-semibold text-[#263d31]">Ayesha Khan</p>
                  <p className="text-[9px] text-[#7c8b80]">Employee record</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-[#ecf0e8] pt-3">
                <span className="text-[10px] text-[#7c8b80]">Verification status</span>
                <span className="rounded-full bg-[#e1f1df] px-2 py-1 text-[9px] font-semibold text-[#347553]">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-8 -left-5 hidden items-center gap-2 rounded-full border border-[#d8e6d4] bg-white px-4 py-2 text-xs font-semibold text-[#397357] shadow-[0_14px_28px_-20px_rgba(31,74,52,.5)] sm:flex">
          <ShieldCheck className="h-4 w-4" /> Secure, organized, ready to verify
        </div>
      </div>
    </div>
  );
}

function Pillars() {
  const items = [
    {
      icon: FileCheck2,
      title: "Verify",
      text: "Verify documents at the source with tamper-aware certificates.",
    },
    {
      icon: Users,
      title: "Manage people",
      text: "Keep employee records, onboarding and offboarding organized.",
    },
    {
      icon: Settings2,
      title: "Run HR operations",
      text: "Handle attendance, leave, payroll, expenses and letters in one place.",
    },
  ];
  return (
    <section id="platform" className="bg-[#fbfaf7] pb-16 sm:pb-24">
      <div className="container-page">
        <div className="border-t border-[#e5e8e2] pt-14 text-center sm:pt-20">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#5a9985]">
            One workspace for trusted operations
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-semibold tracking-[-0.04em] text-[#17314c] sm:text-4xl lg:text-[2.8rem]">
            From verification to everyday HR, keep work moving.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-[12px] border border-[#dfe5e0] bg-white/60 p-5 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_-28px_rgba(25,51,63,.5)] sm:p-6"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#e9f4ed] text-[#287a65]">
                <item.icon className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#203449]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#697572]">{item.text}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#3a8c75] opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VerificationStory() {
  return (
    <section className="bg-[#f1f6f1] py-16 sm:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.23em] text-[#4c967e]">
            Document verification
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#17314c] sm:text-4xl">
            Give every document a clear, verifiable history.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#66746f]">
            Create digital certificates with embedded QR codes, track request progress, and let
            anyone verify an issued record from a public verification page.
          </p>
          <div className="mt-7 space-y-3 text-sm text-[#50635e]">
            <div className="flex items-center gap-3">
              <BadgeCheck className="h-5 w-5 text-[#3d9277]" />
              Auto verification for eligible requests
            </div>
            <div className="flex items-center gap-3">
              <QrCode className="h-5 w-5 text-[#3d9277]" />
              Instant public certificate verification
            </div>
            <div className="flex items-center gap-3">
              <LockKeyhole className="h-5 w-5 text-[#3d9277]" />
              Role-based access and audit history
            </div>
          </div>
        </div>
        <div className="relative rounded-2xl border border-[#d8e6dc] bg-white p-5 shadow-[0_28px_60px_-40px_rgba(28,63,56,.5)] sm:p-7">
          <div className="flex items-center justify-between border-b border-[#e9eeea] pb-4">
            <div>
              <p className="text-xs font-semibold text-[#294257]">Verification certificate</p>
              <p className="mt-1 text-[10px] text-[#81908b]">
                Employment · DVerif Certificate #DV-1042
              </p>
            </div>
            <span className="rounded-full bg-[#e6f4eb] px-3 py-1 text-[10px] font-semibold text-[#3c896f]">
              Verified
            </span>
          </div>
          <div className="grid gap-5 py-6 sm:grid-cols-[1fr_130px]">
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <span className="text-[#98a49f]">Employee</span>
                <span className="font-semibold text-[#3a4c57]">Ayesha Khan</span>
                <span className="text-[#98a49f]">Organization</span>
                <span className="font-semibold text-[#3a4c57]">Acme Systems</span>
                <span className="text-[#98a49f]">Issued</span>
                <span className="font-semibold text-[#3a4c57]">12 June 2023</span>
                <span className="text-[#98a49f]">Status</span>
                <span className="font-semibold text-[#3a8d73]">Authentic and active</span>
              </div>
              <div className="rounded-lg bg-[#f4f8f5] p-3 text-[10px] leading-5 text-[#5e746b]">
                This certificate was issued by an authorized organization and has not been altered
                since issuance.
              </div>
            </div>
            <div className="grid place-items-center rounded-xl bg-[#fbfcfa] p-4">
              <QrCode className="h-24 w-24 text-[#17314c]" />
              <span className="mt-2 text-[10px] font-medium text-[#718078]">Scan to verify</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecurityBand() {
  return (
    <section className="border-t border-[#dfe9e2] bg-[#edf5ef] py-8 sm:py-10">
      <div className="container-page flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <ShieldCheck className="h-8 w-8 text-[#4a947b]" />
          <div>
            <h2 className="text-base font-semibold text-[#234151]">
              Built for organizations that handle sensitive information
            </h2>
            <p className="mt-1 text-sm text-[#6a7973]">Trust is designed into every workflow.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#506860]">
          <span className="inline-flex items-center gap-2">
            <LockKeyhole className="h-4 w-4 text-[#4a947b]" />
            Role-based access
          </span>
          <span className="inline-flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-[#4a947b]" />
            Audit history
          </span>
          <span className="inline-flex items-center gap-2">
            <Users className="h-4 w-4 text-[#4a947b]" />
            Data isolation
          </span>
        </div>
      </div>
    </section>
  );
}

export function PlanCard({
  name,
  price,
  period,
  tagline,
  features,
  notIncludedFeatures,
  featured,
  badge,
  ctaText,
}: {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  features: string[];
  notIncludedFeatures?: string[];
  featured?: boolean;
  badge?: string;
  ctaText?: string;
}) {
  return (
    <div
      className={`card-hover relative flex h-full flex-col rounded-2xl border p-7 sm:p-8 ${featured ? "border-primary bg-card shadow-[var(--shadow-glow)]" : "border-border bg-card"}`}
    >
      {featured && (
        <div className="absolute -top-3 left-6 flex gap-2">
          <span className="rounded-full btn-primary-glow px-3 py-1 text-xs font-semibold">
            Recommended
          </span>
          {badge && (
            <span className="rounded-full border border-primary/30 bg-card px-3 py-1 text-xs font-semibold text-primary">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="text-sm font-bold text-black">{name}</div>
      <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
        <span className="text-4xl font-bold">{price}</span>
        {period && <span className="text-sm text-muted-foreground">{period}</span>}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{tagline}</div>
      <div className="mt-7 border-t border-border pt-6">
        <ul className="space-y-3 text-sm">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="font-semibold">{f}</span>
            </li>
          ))}
          {notIncludedFeatures?.map((f) => (
            <li key={f} className="flex items-start gap-2 text-muted-foreground opacity-70">
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto pt-6">
        <RequestAccessModal triggerLabel={ctaText ?? "Subscribe A Plan"} />
      </div>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: import("react").ReactNode;
  subtitle?: import("react").ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && <div className="section-kicker">{eyebrow}</div>}
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <div className="mt-4 text-muted-foreground">{subtitle}</div>}
    </div>
  );
}
