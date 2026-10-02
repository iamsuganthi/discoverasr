'use client';

import { useState } from 'react';
import Image from 'next/image';
import { destinationCategories } from '@/lib/data';

export function PopularDestinations() {
  const [activeId, setActiveId] = useState(destinationCategories[0].id);
  const active =
    destinationCategories.find((category) => category.id === activeId) ??
    destinationCategories[0];

  return (
    <section id="destinations" className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-asr-gold-600">
        Properties by Location
      </p>
      <h2 className="mt-2 font-display text-3xl font-medium text-asr-navy sm:text-4xl">
        Popular Destinations
      </h2>

      <div
        role="tablist"
        aria-label="Destination categories"
        className="mt-8 flex flex-wrap gap-2"
      >
        {destinationCategories.map((category) => {
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(category.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'border-asr-navy bg-asr-navy text-white'
                  : 'border-asr-navy/15 text-asr-navy hover:border-asr-gold hover:text-asr-gold-600'
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {active.destinations.map((destination) => (
          <a
            key={destination.id}
            href="#"
            className="group relative block overflow-hidden rounded-2xl"
          >
            <div className="relative h-72 w-full">
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-asr-navy/90 via-asr-navy/10 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-display text-xl font-medium text-white">
                {destination.name}
              </h3>
              <p className="mt-1 text-sm text-white/75">{destination.properties}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
