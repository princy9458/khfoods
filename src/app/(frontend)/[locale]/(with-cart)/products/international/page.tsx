"use client";

import React, { useMemo, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import ProductTires from "./ProductTires";
import Modelmap from "@/frontendComponents/Home/Modelmap";

/* -------------------------------------------------------------------------- */
/* TYPES */
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
/* CONSTANTS */
/* -------------------------------------------------------------------------- */

const VECTOR_BG =
  "https://www.goodyearbike.com/wp-content/uploads/2025/01/WangerBazin2025TeamCamp-1011.jpg";

const FAQS: FAQItem[] = [
  {
    question: "Do you ship KH Food products internationally?",
    answer:
      "Yes, we ship our premium namkeen and peanuts globally. We handle all export documentation to ensure smooth customs clearance.",
  },
  {
    question: "How is the freshness maintained for export?",
    answer:
      "We use nitrogen-flushed, 3-layer packaging to ensure freshness for up to 12 months.",
  },
  {
    question: "Is there a minimum order quantity (MOQ) for exports?",
    answer:
      "MOQ is 100kg for air cargo and 1 pallet for sea freight (LCL).",
  },
  {
    question: "Are your products FSSAI and FDA compliant?",
    answer:
      "Yes, our products are manufactured in FSSAI-certified facilities and meet FDA standards.",
  },
];

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT */
/* -------------------------------------------------------------------------- */

export default function InternationalPage() {
  return (
    <main className="w-full bg-white text-neutral-900">
      {/* ========================== HERO ========================== */}
      <section
        className="relative w-full pt-[120px]"
        style={{
          backgroundImage: "url('/assets/Image/bg-banner.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto min-h-[260px] max-w-7xl flex items-center justify-center">
          <h1 className="text-4xl font-bold uppercase">International Products</h1>
        </div>
      </section>

      {/* ========================== PRODUCT GRID ========================== */}
      <ProductTires />

      {/* ========================== NUTRITION SECTION ========================== */}


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

      {/* ========================== MODEL MAP ========================== */}
      <Modelmap />

      {/* ========================== FAQ ========================== */}
      <FAQSection />

      {/* ========================== STYLES ========================== */}
      <style jsx global>{`
        .nf {
          display: grid;
          grid-template-columns: 320px 1fr;
          max-width: 980px;
          border: 3px solid #000;
          font-family: Arial, Helvetica, sans-serif;
        }
        .nf__left {
          padding: 14px;
          border-right: 3px solid #000;
        }
        .nf__title {
          font-size: 44px;
          font-weight: 900;
        }
        .nf__right {
          padding: 14px;
        }
        .nf__row {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #000;
          padding: 6px 0;
        }
        @media (max-width: 760px) {
          .nf {
            grid-template-columns: 1fr;
          }
          .nf__left {
            border-right: 0;
            border-bottom: 3px solid #000;
          }
        }
      `}</style>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ COMPONENTS */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6">
        {FAQS.map((faq, i) => (
          <Accordion key={i} {...faq} />
        ))}
      </div>
    </section>
  );
}

function Accordion({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl bg-white mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between p-5"
      >
        <span>{question}</span>
        {open ? <FaMinus /> : <FaPlus />}
      </button>
      {open && <p className="p-5 pt-0 text-sm">{answer}</p>}
    </div>
  );
}
