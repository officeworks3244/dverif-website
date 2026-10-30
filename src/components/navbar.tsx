import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { RequestAccessModal } from "./request-access-modal";

const links = [
  { to: "/features", label: "Platform" },
  { to: "/features", label: "Solutions" },
  { to: "/features", label: "Resources" },
  { to: "/pricing", label: "Pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e8e2]/90 bg-[#fbfaf7]/90 backdrop-blur-xl">
      <div className="container-page">
        <div className="flex h-[76px] items-center justify-between gap-5">
          <Link
            to="/"
            aria-label="Dverif home"
            className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-[#2f9479] text-white shadow-[0_8px_18px_-9px_#2f9479]">
              <ShieldCheck className="h-5 w-5" strokeWidth={2.3} />
            </span>
            <span className="text-[1.45rem] font-semibold tracking-[-0.055em] text-[#102640]">
              DVerif
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`rounded-lg px-4 py-2 text-sm transition-colors hover:text-[#2f9479] ${path === link.to ? "font-semibold text-[#2f9479]" : "text-[#5d6873]"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="hidden px-2 py-2 text-sm font-medium text-[#344856] transition-colors hover:text-[#2f9479] sm:block"
            >
              Sign in
            </a>
            <RequestAccessModal>
              <button className="hidden h-10 items-center gap-2 rounded-[9px] bg-[#142d48] px-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:inline-flex">
                Get started <ArrowUpRight className="h-4 w-4" />
              </button>
            </RequestAccessModal>
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-[#dce4df] bg-white/70 text-[#19344d] md:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="space-y-1 border-t border-[#e5e8e2] py-3 md:hidden">
            <nav className="grid gap-1">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm text-[#344856] hover:bg-[#eaf4ed]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href="/login"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl px-3 py-2.5 text-sm text-[#344856] hover:bg-[#eaf4ed]"
            >
              Sign in
            </a>
            <RequestAccessModal>
              <button className="mt-2 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#142d48] text-sm font-semibold text-white">
                Get started <ArrowUpRight className="h-4 w-4" />
              </button>
            </RequestAccessModal>
          </div>
        )}
      </div>
    </header>
  );
}
