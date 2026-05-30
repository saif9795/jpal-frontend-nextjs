// app/components/StatsBar.tsx
"use client";

export default function StatsBar() {
  const stats = [
    { title: "Palm Beach", subtitle: "COUNTY, FLORIDA" },
    { title: "Martin", subtitle: "COUNTY, FLORIDA" },
    { title: "25+", subtitle: "YEARS LOCAL MARKET EXPERIENCE" },
    { title: "Below Market", subtitle: "ACQUISITION STRATEGY" },
  ];

  return (
    <section className="bg-[#CE9D3B] text-[#1A1A1A] border-y ">
      <div className="container mx-auto px-0 lg:px-4 py-6 md:py-8 grid grid-cols-1 md:grid-cols-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center justify-center py-4 text-center border-b border-black/20 last:border-b-0 md:border-b-0 md:px-6"
          >
            <h3 className="text-2xl md:text-xl lg:text-[2rem] leading-none font-medium tracking-tight">
              {stat.title}
            </h3>
            <p className="mt-2 text-xs md:text-[10px] lg:text-sm uppercase tracking-[0.06em] text-black/70">
              {stat.subtitle}
            </p>
            {idx !== stats.length - 1 && (
              <span
                aria-hidden="true"
                className="hidden md:block absolute right-0 top-1/2 h-14 -translate-y-1/2 w-px bg-black/25"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
