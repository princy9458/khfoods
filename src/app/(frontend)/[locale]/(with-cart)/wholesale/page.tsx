"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

/* -------------------------------------------------------------------------- */
/*                               DATA                                          */
/* -------------------------------------------------------------------------- */

const featuredProjects = [
  {
    id: 1,
    title: "GIFT BOXES",
    category: "Hot Deal",
    image: "https://khfood.com/wp-content/uploads/2019/12/Box-image.jpg",
    slug: "/projects/gift-box",
  },
  {
    id: 2,
    title: "WHOLESALE DEALS",
    category: "Interested In",
    image: "https://khfood.com/wp-content/uploads/2019/12/Image-3.jpg",
    slug: "/wholesale",
  },
  {
    id: 3,
    title: "GLOBAL SHIPPING",
    category: "Available Now",
    image: "https://khfood.com/wp-content/uploads/2019/12/Image-1.jpg",
    slug: "/projects/shipping",
  },
  {
    id: 4,
    title: "OUR STORY",
    category: "Since 1990",
    image:
      "https://khfood.com/wp-content/uploads/2019/11/Screen-Shot-2019-07-16-at-1.11.14-PM@1X.png",
    slug: "/about-us",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* -------------------------------------------------------------------------- */
/*                            WHOLESALE PAGE                                   */
/* -------------------------------------------------------------------------- */

export default function WholesalePage() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full overflow-hidden pt-[120px]"
        style={{
          backgroundImage: "url('/assets/Image/bg-banner.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto flex min-h-[260px] max-w-7xl items-center justify-center px-5 py-14 md:min-h-[320px]">
          <div className="text-center">
            <h1 className="text-3xl font-bold md:text-5xl text-black">
              WHOLESALE
            </h1>
            <div className="mt-3 text-sm text-black/70">
              Home › Wholesale
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-center text-3xl font-bold text-black">
            Why Choose KH Food Wholesale?
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              "Premium quality & consistent taste",
              "Bulk order & flexible packaging",
              "Competitive wholesale pricing",
              "Strict quality & hygiene standards",
              "Reliable supply chain & delivery",
              "Long-term business partnership",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                <CheckCircle2 className="h-8 w-8 text-black" />
                <p className="mt-4 text-lg font-semibold text-black">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      {/* <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-center text-3xl font-bold">
            How Wholesale Ordering Works
          </h3>

          <div className="mt-14 grid gap-10 md:grid-cols-4 text-center">
            {[
              { step: "01", title: "Send Inquiry" },
              { step: "02", title: "Business Verification" },
              { step: "03", title: "Pricing Discussion" },
              { step: "04", title: "Order & Delivery" },
            ].map((item) => (
              <div key={item.step}>
                <p className="text-5xl font-bold text-white/20">
                  {item.step}
                </p>
                <p className="mt-3 text-lg font-semibold">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ================= DISCOVER OUR WORLD (SWIPER) ================= */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-black">
        {/* Background layers */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgb(255 255 255 / 10%) 1px, #000000 1px)",
          }}
        />
        <div className="absolute inset-0 z-0 bg-black/60" />
        <div
          className="absolute inset-0 z-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        />

        <motion.div
          className="relative z-10 mx-auto max-w-7xl px-4 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="mb-10 text-center text-3xl font-bold uppercase tracking-wide md:text-left md:text-[48px]"
            variants={cardVariants}
          >
            Discover Our World
          </motion.h2>

          <motion.div variants={cardVariants}>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="pb-16"
            >
              {featuredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <a
                    href={project.slug}
                    className="group relative block overflow-hidden rounded-2xl"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="mb-3 inline-block rounded-full bg-[#EAB159] px-3 py-1 text-[10px] font-bold uppercase text-black">
                        {project.category}
                      </span>

                      <h3 className="text-2xl font-bold uppercase">
                        {project.title}
                      </h3>

                      <div className="mt-4 flex items-center text-[#EAB159] opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <span className="text-sm font-bold uppercase tracking-widest">
                          Explore
                        </span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
