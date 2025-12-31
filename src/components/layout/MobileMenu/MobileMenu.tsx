"use client";

import { NAV_LEFT, NAV_RIGHT } from "@/config/navigation";
import { X } from "lucide-react";
import { NavLink } from "../Navbar/NavLinks";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-white">
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6"
        aria-label="Close menu"
      >
        <X size={28} />
      </button>

      {/* Menu */}
      <div className="flex h-full flex-col items-center justify-center gap-8">
        {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
          <NavLink
            key={item.href}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
