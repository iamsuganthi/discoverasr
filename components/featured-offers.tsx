'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { offers } from '@/lib/data';

export function FeaturedOffers() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollBy({ left: direction * 360, behavior: 'smooth' });
  };

  return (
    <section id="offers" className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-asr-gold-600">
            Featured Offers
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium text-asr-navy sm:text-4xl">
            Experiences Reimagined with Ascott Star Rewards
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll offers left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-asr-navy/20 text-asr-navy transition-colors hover:border-asr-gold hover:text-asr-gold-600"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Scroll offers right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-asr-navy/20 text-asr-navy transition-colors hover:border-asr-gold hover:text-asr-gold-600"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-8 flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {offers.map((offer) => (
          <article
            key={offer.id}
            className="group relative w-[320px] flex-shrink-0 overflow-hidden rounded-2xl bg-asr-cream"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-asr-gold-600">
                {offer.scope}
              </p>
              <h3 className="mt-2 text-balance font-display text-lg font-medium text-asr-navy">
                {offer.title}
              </h3>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-asr-navy underline-offset-4 hover:underline"
              >
                View Offer
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
