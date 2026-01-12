"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      label: "Features",
      href: "https://www.xpaycheckout.com/old-home-2#features-2",
    },
    {
      label: "Pricing",
      href: "https://www.xpaycheckout.com/old-home-2#pricing",
    },
    {
      label: "Blogs",
      href: "https://www.xpaycheckout.com/blog",
    },
    {
      label: "FAQs",
      href: "https://www.xpaycheckout.com/old-home-2#faq",
    },
    {
      label: "Careers",
      href: "https://www.xpaycheckout.com/careers",
    },
  ];

  return (
    <nav className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Image
            src="/logo.avif"
            alt="logo"
            width={90}
            height={40}
            className="object-contain"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
              >
                {item.label}
              </Link>
            ))}

            <Button
              asChild
              className="rounded-full bg-white text-black hover:bg-black hover:text-white border border-white transition"
            >
              <a
                href="https://calendly.com/utkrist-xpaycheckout/chat-with-utkrist?month=2026-01"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to Founder
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="flex flex-col gap-4 px-4 py-6 text-sm font-semibold">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Button
              asChild
              className="mt-2 rounded-full bg-white text-black hover:bg-black hover:text-white border border-white"
            >
              <a
                href="https://calendly.com/utkrist-xpaycheckout/chat-with-utkrist?month=2026-01"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to Founder
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
