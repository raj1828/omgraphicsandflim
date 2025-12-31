"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  label: string;
  href: string;
}

export function NavLink({ label, href }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "font-serif text-[12px] uppercase tracking-[0.25em] transition-colors",
        isActive
          ? "text-black"
          : "text-neutral-700 hover:text-neutral-500"
      )}
    >
      {label}
    </Link>
  );
}
