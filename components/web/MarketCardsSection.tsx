"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

interface MarketCardProps {
  title: string;
  state: string;
  median: string;
  imageSrc: string;
  points: string[];
}

const MarketCard = ({ title, state, median, imageSrc, points }: MarketCardProps) => {
  return (
    <article className="overflow-hidden rounded-md border border-[#ccd1d8] bg-white shadow-[0_2px_8px_rgba(7,21,38,0.08)]">
      <div className="relative h-[180px] w-full sm:h-[200px]">
        <Image src={imageSrc} alt={title} width={1000} height={1000} className="h-full w-full object-cover"  />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute right-3 top-3 rounded-[4px] bg-[#d1a03f] px-3 py-2 font-sans text-[15px] text-[#0f2b45]">
          Median: {median}
        </div>

        <div className="absolute bottom-5 left-5">
          <p className="mb-2 flex items-center gap-1.5 font-sans text-[12px] tracking-[0.24em] text-[#c79b3c]">
            <MapPin className="h-3.5 w-3.5" />
            {state}
          </p>
          <h3 className="text-[42px] leading-none text-white sm:text-[44px] md:text-[40px] lg:text-[43px]">
            {title}
          </h3>
        </div>
      </div>

      <ul className="space-y-3 p-5 font-sans text-[15px] leading-relaxed text-[#4d5f74] sm:p-6">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="mt-[10px] h-[5px] w-[5px] rounded-full bg-[#c79b3c]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default function MarketCardsSection() {
  const markets: MarketCardProps[] = [
    {
      title: "Palm Beach County",
      state: "FLORIDA",
      median: "$510,000",
      imageSrc: "/card2.svg",
      points: [
        "Balanced market conditions with negotiating leverage",
        "Buyers negotiating ~5–6% below asking price",
        "50%+ of residential purchases are cash transactions",
        "Strong job growth and downtown redevelopment",
        "Ongoing population migration into South Florida",
      ],
    },
    {
      title: "Martin County",
      state: "FLORIDA",
      median: "$600,000",
      imageSrc: "/card3.svg",
      points: [
        "Strong coastal community demand",
        "Increased inventory providing negotiating leverage",
        "Nearly 50% of transactions are cash purchases",
        "Limited long-term inventory supply",
        "Workforce housing opportunities in inland communities",
      ],
    },
  ];

  return (
    <section className="bg-white px-0 lg:px-0 py-16 sm:px-6 md:py-20">
      <div className="mx-auto container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="font-sans text-[13px] uppercase tracking-[0.26em] text-[#c79b3c]">
            Where We Invest
          </p>
          <h2 className="mt-2 text-[42px] leading-tight text-[#153d66] md:text-[54px]">
            Our Markets
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] font-sans text-[16px] leading-relaxed text-[#5a6f85]">
            25+ years of hands-on experience in South Florida gives us an edge that out-of-area
            investors simply can&apos;t replicate.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {markets.map((market) => (
            <MarketCard key={market.title} {...market} />
          ))}
        </div>

        <div className="mt-10 rounded-md bg-[#e6eaef] px-6 py-10 text-center md:px-12">
          <p className="text-[24px] leading-tight text-[#173e67]">
            &quot;Both markets are entering a buyer-friendly phase in 2026.&quot;
          </p>
          <p className="mx-auto mt-5 max-w-[820px] font-sans text-[16px] leading-relaxed text-[#5a6f85]">
            Pricing has stabilized, inventory levels have increased, and sellers have become more
            negotiable - historically creating favorable acquisition opportunities for disciplined
            buyers.
          </p>
        </div>
      </div>
    </section>
  );
}
