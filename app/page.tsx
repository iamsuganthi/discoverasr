import { SiteHeader } from '@/components/site-header';
import { HeroSearch } from '@/components/hero-search';
import { FeaturedOffers } from '@/components/featured-offers';
import { RewardsCta } from '@/components/rewards-cta';
import { PopularDestinations } from '@/components/popular-destinations';
import { SiteFooter } from '@/components/site-footer';

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <HeroSearch />
      <FeaturedOffers />
      <RewardsCta />
      <PopularDestinations />
      <SiteFooter />
    </main>
  );
}
