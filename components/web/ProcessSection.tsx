// app/components/ProcessSection.tsx
"use client";

import {  Hammer,  TrendingUp, Search, FileSearch } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      title: "Pre-Foreclosure & Pre-Auction Identification",
      description:
        "We conduct comprehensive due diligence before every acquisition and auction bid — including occupancy review, title and lien analysis, HOA review, and full market evaluation — to ensure each property meets our strict investment criteria.",
      icon: <Search className="w-6 h-6 text-blue-900 hover:text-[#C9A84C]/50" />,
      color: "bg-gray-100",
    },
    {
      title: "ARV & Cost Validation",
      description:
        "We accurately estimate renovation costs and validate the projected After-Repair Value (ARV) prior to acquisition, ensuring every deal pencils before we bid.",
      icon: <FileSearch className="w-6 h-6 text-blue-900 hover:text-[#C9A84C]/50" />,
      color: "bg-gray-100",
    },
    {
      title: "Strategic Renovation",
      description:
        "Licensed and insured trade partners in electrical, plumbing, HVAC, roofing, landscaping, and general construction execute cost-controlled, timeline-focused renovations.",
      icon: <Hammer className="w-6 h-6 text-blue-900" />,
      color: "bg-gray-100",
    },
    {
      title: "Resale & Value Creation",
      description:
        "Properties are repositioned for resale to first-time homebuyers and retail buyers through MLS listings, realtor partnerships, and online platforms — minimizing hold time and maximizing returns.",
      icon: <TrendingUp className="w-6 h-6 text-blue-900  hover:text-[#C9A84C]/50" />,
      color: "bg-gray-100",
    },
  ];

  return (
    <section className="py-16 bg-[#F0F2F4]">
      <div className="container mx-auto px-4 text-center">
        <p className="text-[#C9A84C] font-sans uppercase tracking-wide text-base mb-2">
          Our Process
        </p>
        <h2 className="text-3xl md:text-6xl font-serif text-[#0C1F3F] mb-2">
          How We Invest
        </h2>
        <p className="text-[#676F7E] text-base font-sans mb-12 max-w-2xl mx-auto">
          A disciplined, data-driven approach designed to minimize risk and
          maximize returns at every stage of the investment cycle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`px-6 py-10 rounded-lg shadow hover:shadow-lg transition-shadow bg-white border`}
            >
              <div className=" mb-6 w-14 h-14 flex items-center justify-center  bg-[#16385A0D] hover:bg-[#C9A84C]/30 ">
                {step.icon}
              </div>
              <p className="text-[#C9A84C] text-left text-sm mb-6 font-medium font-sans">
                Step {idx + 1}
              </p>
              <h3 className="text-xl font-semibold text-[#0C1F3F] mb-6 text-left">
                {step.title}
              </h3>
              <p className="text-base text-left font-sans text-[#676F7E]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}