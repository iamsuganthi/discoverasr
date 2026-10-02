import Image from 'next/image';

export function HeroSearch() {
  return (
    <section id="stay-your-way" className="relative">
      <div className="relative h-[600px] w-full overflow-hidden sm:h-[640px]">
        <Image
          src="/images/hero.png"
          alt="Ascott serviced apartment tower lit up at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-asr-navy via-asr-navy/60 to-asr-navy/20" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-asr-gold-light">
            Stay Rewarded
          </p>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium text-white sm:text-5xl">
            Save More, Earn Rewards
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base text-white/80 sm:text-lg">
            Book direct across 900+ Ascott, Somerset, Citadines, lyf and Quest
            properties in 40+ countries, and earn points on every stay.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-12 max-w-5xl px-6">
        <form className="grid gap-4 rounded-2xl bg-white p-6 shadow-[0_24px_60px_-20px_rgba(1,30,70,0.35)] sm:grid-cols-2 lg:grid-cols-5 lg:items-end lg:gap-3">
          <label className="flex flex-col gap-1.5 text-left lg:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-asr-navy/60">
              Destination
            </span>
            <input
              type="text"
              name="destination"
              placeholder="City, property or landmark"
              className="rounded-lg border border-asr-navy/15 px-3 py-2.5 text-sm text-asr-ink placeholder:text-asr-navy/40 focus:border-asr-gold focus:outline-none focus:ring-2 focus:ring-asr-gold/30"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-left">
            <span className="text-xs font-semibold uppercase tracking-wide text-asr-navy/60">
              Check-in
            </span>
            <input
              type="date"
              name="checkin"
              className="rounded-lg border border-asr-navy/15 px-3 py-2.5 text-sm text-asr-ink focus:border-asr-gold focus:outline-none focus:ring-2 focus:ring-asr-gold/30"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-left">
            <span className="text-xs font-semibold uppercase tracking-wide text-asr-navy/60">
              Check-out
            </span>
            <input
              type="date"
              name="checkout"
              className="rounded-lg border border-asr-navy/15 px-3 py-2.5 text-sm text-asr-ink focus:border-asr-gold focus:outline-none focus:ring-2 focus:ring-asr-gold/30"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-left">
            <span className="text-xs font-semibold uppercase tracking-wide text-asr-navy/60">
              Guests
            </span>
            <select
              name="guests"
              defaultValue="2"
              className="rounded-lg border border-asr-navy/15 px-3 py-2.5 text-sm text-asr-ink focus:border-asr-gold focus:outline-none focus:ring-2 focus:ring-asr-gold/30"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4+ Guests</option>
            </select>
          </label>

          <button
            type="submit"
            className="col-span-full rounded-lg bg-asr-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-asr-gold-600 lg:col-span-5"
          >
            Search Properties
          </button>
        </form>
      </div>
    </section>
  );
}
