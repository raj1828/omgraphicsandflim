"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_LEFT, NAV_RIGHT } from "@/config/navigation";
import { NavLink } from "./NavLinks";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 z-50 w-full backdrop-blur-md transition-all duration-300",
          scrolled ? "bg-white/85 shadow-sm" : "bg-white/40"
        )}
      >
        <nav className="mx-auto flex h-[88px] max-w-[1800px] items-center justify-between px-6 md:px-16">
          {/* Left navigation (desktop only) */}
          <ul className="hidden md:flex gap-10">
            {NAV_LEFT.map((item) => (
              <li key={item.href}>
                <NavLink {...item} />
              </li>
            ))}
          </ul>

          {/* Logo */}
          <div className="flex flex-col items-center leading-none">
            <h1 className="font-[Allura] text-[22px] md:text-[24px] text-black">
              OM Graphics
            </h1>
            <p className="mt-1 text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-neutral-600">
              Photography
            </p>
          </div>

          {/* Right navigation (desktop only) */}
          <ul className="hidden md:flex gap-10">
            {NAV_RIGHT.map((item) => (
              <li key={item.href}>
                <NavLink {...item} />
              </li>
            ))}
          </ul>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-[6px]"
            aria-label="Open menu"
          >
            <span className="h-[1px] w-6 bg-black" />
            <span className="h-[1px] w-6 bg-black" />
            <span className="h-[1px] w-6 bg-black" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
