// app/components/PhasesSection.tsx
"use client";

export default function PhasesSection() {
  const phases = [
    {
      title: "Private Money",
      phase: "Phase 1",
      description:
        "Rapid, auction-ready capital from non-institutional private lenders secured by the property asset — not borrower credit.",
    },
    {
      title: "Renovation Capital",
      phase: "Phase 2",
      description:
        "Internal capital covers renovations and holding costs, ensuring properties are fully capitalized from day one.",
    },
    {
      title: "Hard Money / Refinance",
      phase: "Phase 3",
      description:
        "Post-acquisition refinancing options optimize capital efficiency. Typical terms: 6–24 months at 9–12% interest-only.",
    },
  ];

  return (
    <section className="py-12  bg-[#F0F2F4]">
      <div className="container rounded-[12px] bg-[#16385A] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 py-5">
        {phases.map((phase, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg shadow hover:shadow-lg transition-shadow "
          >
            <p className="text-[#C9A84C] text-base mb-2 uppercase font-sans ">
              {phase.phase}
            </p>
            <h3 className="text-xl font-semibold text-white  mb-3">{phase.title}</h3>
            <p className="text-gray-200 text-base font-sans">{phase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}