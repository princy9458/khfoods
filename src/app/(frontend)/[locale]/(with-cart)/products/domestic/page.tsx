"use client";

import React, { useMemo, useState } from "react";
import { PiMountainsFill } from "react-icons/pi";
import { IoBusiness } from "react-icons/io5";
import { FaMap, FaPlus, FaMinus } from "react-icons/fa"; // Added Icons
import ProductTires from "./ProductTires";
import Modelmap from "@/frontendComponents/Home/Modelmap";
import SeriesSection from "@/frontendComponents/sections/SeriesSection";

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
/* CONSTANTS                                    */
/* -------------------------------------------------------------------------- */

const TIRE_IMG =
  "https://goodyear.creativeconsult.co.in/wp-content/uploads/2025/11/Render-Cut-Vector-R-Z30SW-1024x1024.png";

const VECTOR_BG =
  "https://www.goodyearbike.com/wp-content/uploads/2025/01/WangerBazin2025TeamCamp-1011.jpg";




  
/* ======================= UPDATED FOOD FAQs ONLY ======================= */

const FAQS: FAQItem[] = [
  {
    question: "What are international food products?",
    answer:
      "International food products are food items that are sourced or inspired from global markets and meet international quality standards.",
  },
  {
    question: "Are international food products safe to consume?",
    answer:
      "Yes, all international food products go through quality checks and are safe for consumption when used before the expiry date.",
  },
  {
    question: "Do international food products follow food safety standards?",
    answer:
      "Yes, these products follow international food safety and quality guidelines to ensure freshness and hygiene.",
  },
  {
    question: "How should international food products be stored?",
    answer:
      "Store the products in a cool, dry place. Always follow the storage instructions mentioned on the packaging.",
  },
  {
    question: "Do international food products have expiry dates?",
    answer:
      "Yes, every international food product comes with a clearly mentioned expiry date on the package.",
  },
  {
    question: "Can I order international food products online?",
    answer:
      "Yes, you can order international food products online through our website and get them delivered to your location.",
  },
];


/* -------------------------------------------------------------------------- */
/* UTILITY FUNCTION                                */
/* -------------------------------------------------------------------------- */

function classNames(...c: (string | false | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                 */
/* -------------------------------------------------------------------------- */

export default function InternationalPage() {
  const [openSeries, setOpenSeries] = useState<SeriesKey | null>("UHP");

  // Products Data
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
      {/* ========================== HERO ========================== */}
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
              Domestic Products
            </h1>
          </div>
        </div>
      </section>

      <ProductTires />
{/* ==============================Nutrition Section================================== */}
 <section className="py-24 flex justify-center">
        <section className="nf" aria-label="Nutrition Facts">
          <header className="nf__left">
            <h2 className="nf__title">Nutrition Facts</h2>

            <div className="nf__meta">
              <div>Serving Size <strong>1 oz (28g)</strong></div>
              <div>Servings Per Container <strong>6</strong></div>
            </div>

            <div className="nf__divider nf__divider--thick" />

            <div className="nf__calories">
              <div className="nf__caloriesTop">
                <span className="nf__caloriesLabel">Calories</span>
                <span className="nf__caloriesValue">170</span>
              </div>
              <div className="nf__caloriesSub">Calories from Fat 110</div>
            </div>

            <div className="nf__divider" />

            <p className="nf__footnote">
              *Percent Daily Value (DV) are based on a 2,000 calorie diet.
            </p>
          </header>

          <div className="nf__right">
            <div className="nf__cols">
              <div className="nf__col">
                <div className="nf__colHead">
                  <span>Amount Per Serving</span>
                  <span className="nf__dvHead">%DV*</span>
                </div>

                <div className="nf__row nf__row--major">
                  <span>Total Fat <span className="nf__amt">13g</span></span>
                  <span className="nf__dv">21%</span>
                </div>

                <div className="nf__row nf__row--sub">
                  <span>Saturated Fat <span className="nf__amt">2g</span></span>
                  <span className="nf__dv">9%</span>
                </div>

                <div className="nf__row nf__row--major">
                  <span>Sodium <span className="nf__amt">120mg</span></span>
                  <span className="nf__dv">5%</span>
                </div>
              </div>

              <div className="nf__col">
                <div className="nf__colHead">
                  <span>Amount Per Serving</span>
                  <span className="nf__dvHead">%DV*</span>
                </div>

                <div className="nf__row nf__row--major">
                  <span>Total Carb <span className="nf__amt">6g</span></span>
                  <span className="nf__dv">2%</span>
                </div>

                <div className="nf__row nf__row--sub">
                  <span>Fiber <span className="nf__amt">3g</span></span>
                  <span className="nf__dv">11%</span>
                </div>

                <div className="nf__row nf__row--major">
                  <span>Protein <span className="nf__amt">7g</span></span>
                  <span className="nf__dv"></span>
                </div>
              </div>
            </div>

            <div className="nf__divider nf__divider--thick" />

            <div className="nf__vitamins">
              <span>Vitamin A 4%</span> • <span>Vitamin C 0%</span> •
              <span>Calcium 0%</span> • <span>Iron 0%</span>
            </div>
          </div>
        </section>
      </section>



      
      <Modelmap />
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
          <h2 className="text-3xl font-bold text-neutral-900">
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
    <div className="border rounded-xl bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-semibold">{question}</span>
        {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
      </button>

      {isOpen && (
        <p className="p-5 pt-0 text-sm text-neutral-600">{answer}</p>
      )}
    </div>
  );
}
