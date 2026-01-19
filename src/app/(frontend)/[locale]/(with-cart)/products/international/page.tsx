"use client";

import React, { useMemo, useState } from "react";
import { PiMountainsFill } from "react-icons/pi";
import { IoBusiness } from "react-icons/io5";
import { FaMap, FaPlus, FaMinus } from "react-icons/fa"; // Added Plus/Minus icons
import ProductTires from "./ProductTires";
import Modelmap from "@/frontendComponents/Home/Modelmap";
import SeriesSection from "@/frontendComponents/sections/SeriesSection";

/* -------------------------------------------------------------------------- */
/* TYPES                                    */
/* -------------------------------------------------------------------------- */

type SeriesKey = "UHP" | "FS" | "HP" | "P";

type Product = {
  name: string;
  series: SeriesKey;
  tag: string;
  price: string;
  href: string;
  img: string;
  specs: { label: string; value: string }[];
};

type FAQItem = {
  question: string;
  answer: string;
};

/* -------------------------------------------------------------------------- */
/* CONSTANTS                                  */
/* -------------------------------------------------------------------------- */

const TIRE_IMG =
  "https://goodyear.creativeconsult.co.in/wp-content/uploads/2025/11/Render-Cut-Vector-R-Z30SW-1024x1024.png";

const VECTOR_BG =
  "https://www.goodyearbike.com/wp-content/uploads/2025/01/WangerBazin2025TeamCamp-1011.jpg";

// Yaha maine KH Food wale FAQs update kar diye hain
const FAQS: FAQItem[] = [
  {
    question: "Do you ship KH Food products internationally?",
    answer:
      "Yes, we ship our premium namkeen and peanuts globally. We handle all export documentation to ensure smooth customs clearance in the USA, UK, Canada, and UAE.",
  },
  {
    question: "How is the freshness maintained for export?",
    answer:
      "We use nitrogen-flushed, 3-layer packaging to ensure our roasted peanuts and snacks stay fresh and crunchy for up to 12 months during transit.",
  },
  {
    question: "Is there a minimum order quantity (MOQ) for exports?",
    answer:
      "For international air cargo, the MOQ is 100kg. For sea freight, we accept LCL (Less than Container Load) orders starting from 1 pallet.",
  },
  {
    question: "Are your products FSSAI and FDA compliant?",
    answer:
      "Absolutely. KH Food products are manufactured in an FSSAI-certified facility and meet FDA standards for export to the United States.",
  },
];

/* -------------------------------------------------------------------------- */
/* UTILITY FUNCTION                               */
/* -------------------------------------------------------------------------- */

function classNames(...c: (string | false | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

export default function InternationalPage() {
  const [openSeries, setOpenSeries] = useState<SeriesKey | null>("UHP");

  const products: Product[] = useMemo(
    () => [
      {
        name: "Eagle F1 SuperSport R",
        series: "UHP",
        tag: "Race / Pure Speed",
        price: "$95.00 – $120.00",
        href: "/shop/eagle-f1-supersport-r",
        img: TIRE_IMG,
        specs: [
          { label: "Air", value: "Tubeless Ready" },
          { label: "Casing", value: "120tpi" },
          { label: "Compound", value: "Dynamic UHP" },
        ],
      },
      {
        name: "Eagle F1R",
        series: "UHP",
        tag: "Fast Road / Aero",
        price: "$90.00 – $110.00",
        href: "/shop/eagle-f1r",
        img: TIRE_IMG,
        specs: [
          { label: "Air", value: "Tubeless Ready" },
          { label: "Casing", value: "120tpi" },
          { label: "Bead", value: "Folding" },
        ],
      },
      {
        name: "Vector 4Seasons",
        series: "HP",
        tag: "All-Season / Endurance",
        price: "$70.00 – $95.00",
        href: "/shop/vector-4seasons",
        img: TIRE_IMG,
        specs: [
          { label: "Grip", value: "Wet Focus" },
          { label: "Protection", value: "Enhanced" },
          { label: "Use", value: "All-Season" },
        ],
      },
      {
        name: "Vector R",
        series: "FS",
        tag: "Fitment / OEM",
        price: "$65.00 – $85.00",
        href: "/shop/vector-r",
        img: TIRE_IMG,
        specs: [
          { label: "Fit", value: "Multiple Sizes" },
          { label: "Air", value: "Tubeless Ready" },
          { label: "Bead", value: "Folding" },
        ],
      },
      {
        name: "Vector Sport",
        series: "HP",
        tag: "Road / Sport",
        price: "$55.00 – $75.00",
        href: "/shop/vector-sport",
        img: TIRE_IMG,
        specs: [
          { label: "Air", value: "Tubeless Ready" },
          { label: "Casing", value: "60tpi" },
          { label: "Use", value: "Training" },
        ],
      },
      {
        name: "Eagle Sport",
        series: "P",
        tag: "Everyday Performance",
        price: "$45.00 – $60.00",
        href: "/shop/eagle-sport",
        img: TIRE_IMG,
        specs: [
          { label: "Air", value: "Tubeless Ready" },
          { label: "Durability", value: "High" },
          { label: "Use", value: "Daily" },
        ],
      },
    ],
    []
  );

  return (
    <main className="w-full bg-white text-neutral-900">
      {/* ========================== HERO – INTERNATIONAL ========================== */}
      <section
        className="relative w-full overflow-hidden pt-[120px]"
        style={{
          backgroundImage: "url('/assets/Image/bg-banner.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto flex min-h-[260px] max-w-7xl items-center justify-center px-5 py-14 sm:px-6 md:min-h-[320px] md:py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold uppercase tracking-tight text-black md:text-5xl">
              International
            </h1>
            <div className="mt-3 flex items-center justify-center gap-2 text-sm text-black/70">
              <span className="hover:text-black">Home</span>
              <span className="text-black/40">›</span>
              <span className="hover:text-black">Products</span>
              <span className="text-black/40">›</span>
              <span className="text-black">International</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== PRODUCT GRID ========================== */}
      <ProductTires />

      {/* ========================== MODEL MAP ========================== */}
      <Modelmap />

      {/* ========================== VECTOR STORY ========================== */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0">
          <img
            src={VECTOR_BG}
            alt="Vector story"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-500">
                Global Performance
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                Vector
              </h2>

              <p className="mt-6 text-neutral-700 leading-relaxed">
                Engineired for international road conditions, Vector tires
                deliver dependable performance, durability, and confidence
                worldwide.
              </p>
            </div>

            <div className="relative h-[360px] rounded-[28px] overflow-hidden shadow-lg">
              <img
                src={VECTOR_BG}
                alt="Vector International"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================== FAQ SECTION ========================== */}
      <FAQSection />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ COMPONENTS                                */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  return (
    <section className="bg-neutral-50 py-24 border-t border-neutral-200">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
            Support
          </span>
          <h2 className="text-3xl font-bold text-neutral-900 mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <Accordion key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border rounded-xl transition-all duration-200 bg-white ${
        isOpen ? "border-neutral-800 shadow-sm" : "border-neutral-200"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-semibold text-neutral-900">{question}</span>
        {isOpen ? (
          <FaMinus size={14} className="text-neutral-900 flex-shrink-0" />
        ) : (
          <FaPlus size={14} className="text-neutral-500 flex-shrink-0" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="p-5 pt-0 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 mt-2">
          {answer}
        </p>
      </div>
    </div>
  );
}