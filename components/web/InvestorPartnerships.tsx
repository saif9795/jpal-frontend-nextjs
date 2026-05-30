// app/components/InvestorPartnerships.tsx
"use client";

import { Button } from "@/components/ui/button";
import { BarChart3, Clock3, Shield, UsersRound } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Asset-Backed Security",
    description:
      "Every debt instrument is secured by a physical real estate asset not unsecured debt",
    icon: Shield,
  },
  {
    title: "Structured Returns",
    description:
      "Structured interest payments every six months, backed by below-market acquisition opportunities.",
    icon: BarChart3,
  },
  {
    title: "No Management Required",
    description:
      "Participate in real estate acquisitions without day-to-day management responsibilities.",
    icon: Clock3,
  },
  {
    title: "Transparent Partnership",
    description:
      "Consistent communication, conservative practices, and a long-term relationship-first philosophy.",
    icon: UsersRound,
  },
];

export default function InvestorPartnerships() {
  return (
    <section className="bg-[#183f67] px-0 py-16 text-white sm:px-6 md:py-20">
      <div className="container mx-auto ">
        <div className="mx-auto mb-12 max-w-[680px] text-center">
          <p className="font-sans text-[13px] uppercase tracking-[0.22em] text-[#d2a647]">
            Partner With Us
          </p>
          <h2 className="mt-2 text-3xl lg:text-[50px] leading-tight text-white">
            Partnerships
          </h2>
          <p className="mx-auto mt-3 max-w-[620px] font-sans text-[16px] leading-relaxed text-[#b6c4d6]">
            Buy Rite Properties actively seeks strategic partners to assist with
            pre-foreclosure acquisition funding or following successful auction
            bids.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-md border border-[#365a81] bg-transparent p-7 transition-colors duration-300 hover:border-[#ba913f]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#27496f]">
                  <Icon className="h-5 w-5 text-[#d2a647]" strokeWidth={1.9} />
                </div>
                <h3 className="text-[20px] leading-snug text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 font-sans text-[16px] leading-relaxed text-[#a9bbce]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-[760px] rounded-md border border-[#3a5f86] bg-[#25496f] px-8 py-9 text-center">
          <p className="font-sans text-[14px] uppercase tracking-[0.22em] text-[#d2a647]">
            Our Mission
          </p>
          <p className="mx-auto mt-3 max-w-[620px] text-[22px] leading-[1.26] text-white sm:text-[26px] font-semibold">
            "To responsibly acquire, improve, and reposition residential real
            estate assets while creating value and expanding affordable
            homeownership throughout South Florida."
          </p>
          <Button
            asChild
            className="mt-6 h-12 w-full lg:w-auto rounded-[4px] bg-[#d3a642] px-8 font-sans text-xs md:text-[16px] font-medium text-[#172f4c] hover:bg-[#dfb354]"
          >
            <Link href="#contact">Explore Partnership Opportunities</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
