const highlights = [
  { title: 'Earn & Redeem', body: 'Collect ASR points on every stay and redeem for free nights worldwide.' },
  { title: 'Member Rates', body: 'Unlock rates up to 10% below best available, exclusive to members.' },
  { title: 'Tier Privileges', body: 'Enjoy room upgrades, late checkout and welcome amenities as you climb tiers.' },
];

export function RewardsCta() {
  return (
    <section id="rewards" className="relative overflow-hidden bg-asr-navy">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-asr-gold/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-asr-navy-500/40 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-asr-gold-light">
              Ascott Star Rewards
            </p>
            <h2 className="mt-3 max-w-lg text-balance font-display text-3xl font-medium text-white sm:text-4xl">
              Go Further with Ascott Star Rewards
            </h2>
            <p className="mt-4 max-w-md text-pretty text-white/70">
              Joining is free and instant. Earn points from your very first
              stay and enjoy benefits across our global portfolio of brands.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-full bg-asr-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-asr-gold-600"
              >
                Join Now For Free
              </a>
              <a
                href="#"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
              >
                Learn More
              </a>
            </div>
          </div>

          <dl className="grid gap-5 sm:grid-cols-1">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <dt className="font-display text-base font-medium text-asr-gold-light">
                  {item.title}
                </dt>
                <dd className="mt-1.5 text-sm text-pretty text-white/70">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
