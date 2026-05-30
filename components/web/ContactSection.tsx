// app/components/ContactSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "sonner";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

const INITIAL_FORM_DATA = {
  userType: "potential-investor",
  fullName: "",
  phone: "",
  email: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (formData.phone.trim()) {
      const phoneRegex = /^[0-9+()\-\s]{7,20}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        toast.error("Please enter a valid phone number.");
        return false;
      }
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message.");
      return false;
    }

    if (formData.message.trim().length < 10) {
      toast.error("Message should be at least 10 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error(
        "Email service is not configured. Please add EmailJS credentials.",
      );
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // Make sure these parameter keys match your EmailJS template variables.
          user_type: formData.userType,
          from_name: formData.fullName.trim(),
          from_email: formData.email.trim(),
          from_phone: formData.phone.trim() || "Not provided",
          message: formData.message.trim(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      toast.success("Message sent successfully.");
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#eef0f3] px-0 py-16 sm:px-6 md:py-20">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.08fr] lg:items-center lg:gap-16">
          <div className="flex h-full flex-col justify-center">
            {/* <p className="font-sans text-[13px] font-medium uppercase tracking-[0.2em] text-[#cf9f42]">
              Reach Out
            </p> */}
            <h2 className="mt-2 text-3xl  lg:text-[40px] leading-tight text-[#153d66] sm:text-[58px]">
              Contact us
            </h2>
            <p className="mt-4 max-w-[560px] font-sans text-[16px] leading-relaxed text-[#5a6f85]">
              Detailed partnership agreement information, promissory note
              documentation, and, upon request, our operating agreement, will be
              provided to qualified individuals, corporate entities, and lenders
              for review during the due diligence process. All documentation is
              shared confidentially and only after verification of interest and
              qualifications.
            </p>

            <p className="mt-4 max-w-[560px] font-sans text-[16px] leading-relaxed text-[#5a6f85]">
              Whether you're a homebuyer, a real estate investor, a lender, or
              looking to partner with us...
            </p>

            <div className="mt-9 space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#d7dde5]">
                  <MapPin className="h-5 w-5 text-[#173e66]" />
                </div>

                <div>
                  <p className="font-sans text-[16px] font-medium text-[#132f4f]">
                    Business Address
                  </p>

                  <p className="font-sans text-[15px] leading-relaxed text-[#5a6f85]">
                    Buy Rite Properties <br />
                    470 Fountains Drive South
                    <br />
                    Lake Worth, Florida 33467
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#d7dde5]">
                  <Mail className="h-5 w-5 text-[#173e66]" />
                </div>
                <div>
                  <p className="font-sans text-[16px] font-medium text-[#132f4f]">
                    Email
                  </p>
                  <p className="font-sans text-[15px] leading-relaxed text-[#5a6f85]">
                    info@buyrite-properties.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#d7dde5]">
                  <Phone className="h-5 w-5 text-[#173e66]" />
                </div>

                <div>
                  <p className="font-sans text-[16px] font-medium text-[#132f4f]">
                    Phone
                  </p>

                  <p className="font-sans text-[15px] leading-relaxed text-[#5a6f85]">
                    (561) 692-2800
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="self-start rounded-lg border border-[#d2d7dd] bg-white p-6 shadow-[0_2px_8px_rgba(8,24,44,0.08)] md:p-8"
          >
            <div>
              <label className="mb-2 block font-sans text-[16px] font-medium text-[#132f4f]">
                I am a...
              </label>
              <Select
                value={formData.userType}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, userType: value }))
                }
              >
                <SelectTrigger className="!h-[44px] w-full rounded-md border-[#cfd5dc] px-4 font-sans text-[15px] text-[#132f4f] data-[state=open]:border-[#8f98a3]">
                  <SelectValue placeholder="Potential Investor" />
                </SelectTrigger>
                <SelectContent className="rounded-none border border-[#8f98a3] bg-white p-0 shadow-none">
                  <SelectItem
                    value="potential-investor"
                    className="rounded-none py-1.5 pl-3 pr-3 font-sans text-[16px] text-[#132f4f] focus:bg-[#1f63c3] focus:text-white data-[state=checked]:bg-[#1f63c3] data-[state=checked]:text-white [&>span:first-child]:hidden"
                  >
                    Potential Investor
                  </SelectItem>
                  <SelectItem
                    value="homebuyer"
                    className="rounded-none py-1.5 pl-3 pr-3 font-sans text-[16px] text-[#132f4f] focus:bg-[#1f63c3] focus:text-white data-[state=checked]:bg-[#1f63c3] data-[state=checked]:text-white [&>span:first-child]:hidden"
                  >
                    Homebuyer
                  </SelectItem>
                  <SelectItem
                    value="business-partner"
                    className="rounded-none py-1.5 pl-3 pr-3 font-sans text-[16px] text-[#132f4f] focus:bg-[#1f63c3] focus:text-white data-[state=checked]:bg-[#1f63c3] data-[state=checked]:text-white [&>span:first-child]:hidden"
                  >
                    Business Partner
                  </SelectItem>
                  <SelectItem
                    value="other-inquiry"
                    className="rounded-none py-1.5 pl-3 pr-3 font-sans text-[16px] text-[#132f4f] focus:bg-[#1f63c3] focus:text-white data-[state=checked]:bg-[#1f63c3] data-[state=checked]:text-white [&>span:first-child]:hidden"
                  >
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-sans text-[16px] font-medium text-[#132f4f]">
                  Full Name
                </label>
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  className="h-[42px] rounded-md border-[#cfd5dc] px-4 font-sans text-[15px]"
                />
              </div>
              <div>
                <label className="mb-2 block font-sans text-[16px] font-medium text-[#132f4f]">
                  Phone (optional)
                </label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(561) 000-0000"
                  className="h-[42px] rounded-md border-[#cfd5dc] px-4 font-sans text-[15px]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block font-sans text-[16px] font-medium text-[#132f4f]">
                Email
              </label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                placeholder="you@example.com"
                className="h-[42px] rounded-md border-[#cfd5dc] px-4 font-sans text-[15px]"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block font-sans text-[16px] font-medium text-[#132f4f]">
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us how we can help..."
                rows={5}
                className="min-h-[132px] rounded-md border-[#cfd5dc] px-4 py-3 font-sans text-[15px]"
              />
            </div>

            <Button
              disabled={isSubmitting}
              type="submit"
              className="mt-7 h-[44px] w-full rounded-[4px] bg-[#173e66] font-sans text-[16px] font-medium text-white hover:bg-[#1e4d7d]"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        <div className="mt-10 rounded-lg border border-[#d2d7dd] bg-white/70 p-5 shadow-[0_2px_8px_rgba(8,24,44,0.05)] md:p-6">
          <p className="font-sans text-sm leading-relaxed text-[#4e6176]">
            <span className="font-medium text-[#132f4f]">
              Legal Disclaimer:{" "}
            </span>
            Buy Rite Properties LLC is a real estate investment company and does
            not provide legal, tax, accounting, or financial advisory services.
            All information presented on this website and in related materials
            is for informational purposes only and should not be construed as
            legal, financial, or investment advice. Real estate investments
            involve risk, and past performance does not guarantee future
            results. Any projected returns, valuations, or investment
            opportunities referenced are estimates only and may change based on
            market conditions and other factors. Prospective partners,
            investors, and clients are encouraged to conduct their own due
            diligence and consult with licensed legal, tax, and financial
            professionals before making any investment or real estate decisions.
            Buy Rite Properties LLC acquires properties through various
            channels, including pre-foreclosure opportunities, county
            foreclosure sales, public auctions, and negotiated transactions.
            Property availability, pricing, title status, occupancy, liens, and
            condition may change without notice. While every effort is made to
            verify property information, Buy Rite Properties LLC makes no
            guarantees or warranties regarding the accuracy or completeness of
            any information provided. All content, branding, logos, and
            materials on this website are the property of Buy Rite Properties
            LLC and may not be copied, reproduced, or distributed without prior
            written consent.
          </p>
        </div>
      </div>
    </section>
  );
}
