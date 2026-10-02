import Link from 'next/link';
import { brandPortfolio } from '@/lib/data';

const footerColumns = [
  {
    heading: 'The Ascott Limited',
    links: ['About Us', 'Our Brands', 'Sustainability', 'Newsroom', 'Careers'],
  },
  {
    heading: 'Ascott Star Rewards',
    links: ['Membership Tiers', 'Earn Points', 'Redeem Rewards', 'Partners', 'FAQs'],
  },
  {
    heading: 'Travel & Experiences',
    links: ['Find A Property', 'Discover Destinations', 'Explore Offers', 'Extended Stays'],
  },
  {
    heading: 'Support',
    links: ['Terms of Use and Legal Info', 'Privacy Policy', 'Cookie Preferences', 'Guarantee and Cancellation Policy'],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-asr-navy text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-asr-gold text-white">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 2l2.9 6.26L22 9.27l-5 4.73L18.2 21 12 17.27 5.8 21 7 14l-5-4.73 7.1-1.01z" />
                </svg>
              </span>
              <span className="font-display text-base text-white">Ascott Star Rewards</span>
            </Link>
            <p className="mt-4 text-sm text-pretty text-white/60">
              The unified loyalty and booking programme across The Ascott
              Limited&apos;s global portfolio of brands.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-white/50">
              {brandPortfolio.map((brand, index) => (
                <li key={brand} className="flex items-center gap-3">
                  {brand}
                  {index < brandPortfolio.length - 1 && (
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/30" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="font-display text-sm font-medium text-white">{column.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-white/60 hover:text-asr-gold-light">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} The Ascott Limited. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {['facebook', 'instagram', 'youtube'].map((social) => (
              <Link
                key={social}
                href="#"
                aria-label={social}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 hover:border-asr-gold hover:text-asr-gold-light"
              >
                <span className="sr-only">{social}</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
