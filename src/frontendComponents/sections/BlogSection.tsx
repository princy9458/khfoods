"use client";
import Image from "next/image";

export default function NewsSection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* TOP BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-10">
        <div>
          <p className="text-xs tracking-[0.18em] uppercase text-gray-500">
            News & Insights
          </p>
          <h2 className="text-2xl sm:text-[36px] md:text-[48px] uppercase font-regular mt-1 leading-tight">
            Discover The World Of Premium Peanuts.
          </h2>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium uppercase hover:opacity-80 transition self-start sm:self-auto">
          VIEW ALL <span>→</span>
        </button>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT FEATURED BLOG */}
        <div>
          <div className="relative overflow-hidden rounded-2xl shadow-sm">
            <img
              // Replace with your actual large peanut image path
              src="/assets/Image/khfoodImage/Image-2.jpg" 
              alt="Peanut Roasting Process"
              className="
                w-full
                h-[260px] sm:h-[360px] md:h-[420px] lg:h-[480px]
                object-cover
                rounded-2xl
              "
            />

            {/* Category badge */}
            <span className="absolute bottom-24 sm:bottom-28 left-4 sm:left-6 bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow uppercase">
              Processing
            </span>

            {/* Text */}
            <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-6 right-4 text-white">
              <h3 className="text-lg sm:text-xl font-semibold leading-tight max-w-xl">
                The Art of the Perfect Roast // Our Legacy
              </h3>
              <p className="text-xs sm:text-sm opacity-90 mt-1 line-clamp-2">
                We take a behind-the-scenes look at how we select the finest California peanuts and roast them to perfection for that signature KH Food crunch...
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE BLOG LIST */}
        <div className="flex flex-col gap-8">
          {/* Blog Item */}
          {[
            {
              // Replace with small peanut/health image
              img: "/assets/Image/khfoodImage/Image-2.jpg",
              title: "The Surprising Health Benefits of Peanuts",
              desc: "Rich in protein and heart-healthy fats, discover why adding premium roasted peanuts to your daily diet is a smart choice for your lifestyle...",
            },
            {
               // Replace with wholesale/business image
              img: "/assets/Image/khfoodImage/Image-2.jpg",
              title: "KH Food Expands Wholesale Distribution Network",
              desc: "We are proud to announce new partnerships that bring our premium roasted peanuts to more retailers and businesses across the country...",
            },
            {
               // Replace with gift box image
              img: "/assets/Image/khfoodImage/Image-2.jpg",
              title: "Perfect Gifting: Why Our Gift Boxes Are Best Sellers",
              desc: "From corporate events to family gatherings, find out why our complimentary peanut gift boxes are the perfect way to share the joy...",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5"
            >
              <img
                src={item.img}
                alt="Blog"
                className="
                  w-full sm:w-44 md:w-52
                  h-[180px] sm:h-28 md:h-32
                  object-cover
                  rounded-xl
                "
              />

              <div>
                <p className="text-xs text-gray-500">
                  BY KH FOOD TEAM • 15TH JAN 2026
                </p>

                <h4 className="font-medium text-[15px] sm:text-[16px]  md:text-[16px] mt-1">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}