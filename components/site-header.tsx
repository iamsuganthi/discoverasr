'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Stay Your Way', href: '#stay-your-way' },
  { label: 'Properties by Location', href: '#destinations' },
  { label: 'Discover More', href: '#offers' },
  { label: 'Destination Stories', href: '#stories' },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Utility bar */}
      <div className="hidden border-b border-asr-navy/10 bg-asr-cream md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-2 text-xs text-asr-navy/70">
          <Link href="#" className="hover:text-asr-navy">
            About The Ascott Limited
          </Link>
          <Link href="#" className="hover:text-asr-navy">
            English
          </Link>
          <Link href="#" className="flex items-center gap-1.5 hover:text-asr-navy">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6h15l-1.5 9h-12z" />
              <circle cx="9" cy="20" r="1.3" />
              <circle cx="17" cy="20" r="1.3" />
            </svg>
            My Cart
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Ascott Star Rewards home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-asr-navy text-asr-gold-light">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.73L18.2 21 12 17.27 5.8 21 7 14l-5-4.73 7.1-1.01z" />
            </svg>
          </span>
          <span className="font-display text-lg leading-tight text-asr-navy">
            Ascott Star
            <span className="block text-xs font-sans font-semibold uppercase tracking-[0.18em] text-asr-gold-600">
              Rewards
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-asr-navy transition-colors hover:text-asr-gold-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#"
            className="text-sm font-semibold text-asr-navy underline-offset-4 hover:underline"
          >
            Sign In
          </Link>
          <Link
            href="#rewards"
            className="rounded-full bg-asr-gold px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-asr-gold-600"
          >
            Join Free
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-asr-navy/15 text-asr-navy lg:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile primary"
          className="border-t border-asr-navy/10 bg-white px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1.5 text-sm font-medium text-asr-navy"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-asr-navy/10 pt-4">
            <Link href="#" className="text-sm font-semibold text-asr-navy">
              Sign In
            </Link>
            <Link
              href="#rewards"
              className="rounded-full bg-asr-gold px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Join Free
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
