import {
  FiArrowRight,
  FiCheckCircle,
  FiStar,
} from "react-icons/fi";

import {
  FaHeadphones,
  FaMobileAlt,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">

      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-lime-400/10 blur-[150px]" />
      <div className="absolute right-0 top-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Grid */}

      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-lime-300">

            <FiStar />

            Trusted by 100K+ Customers

          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white">

            Discover The

            <span className="block bg-gradient-to-r from-lime-300 via-lime-400 to-green-400 bg-clip-text text-transparent">

              Future

            </span>

            Of Shopping

          </h1>

          <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">

            Explore thousands of premium products with lightning-fast
            delivery, secure checkout and exclusive daily deals.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <Link to={"/shop"} className="group h-14 px-8 rounded-2xl bg-lime-400 text-black font-bold flex items-center gap-3 hover:scale-105 transition-all">

              Shop Now

              <FiArrowRight className="group-hover:translate-x-1 transition" />

            </Link>
          </div>

          {/* Features */}

          <div className="flex flex-wrap gap-6 mt-10">

            <div className="flex items-center gap-2 text-gray-300">

              <FiCheckCircle className="text-lime-400" />

              Free Shipping

            </div>

            <div className="flex items-center gap-2 text-gray-300">

              <FiCheckCircle className="text-lime-400" />

              Secure Payment

            </div>

            <div className="flex items-center gap-2 text-gray-300">

              <FiCheckCircle className="text-lime-400" />

              Easy Returns

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative h-[600px] hidden lg:block">

          {/* Main Card */}

          <div className="absolute right-20 top-10 w-72 h-72 rounded-[35px] bg-gradient-to-br from-lime-400 to-green-400 flex items-center justify-center shadow-[0_0_60px_rgba(163,230,53,.35)] hover:-translate-y-3 transition-all duration-500">

            <FaHeadphones className="text-[150px] text-black" />

          </div>

          {/* Phone */}

          <div className="absolute left-0 bottom-32 w-44 h-44 rounded-3xl bg-[#181818] border border-white/10 flex items-center justify-center hover:rotate-6 transition-all duration-500">

            <FaMobileAlt className="text-7xl text-lime-400" />

          </div>

          {/* Watch */}

          <div className="absolute right-0 bottom-0 w-48 h-48 rounded-3xl bg-[#181818] border border-white/10 flex items-center justify-center hover:-rotate-6 transition-all duration-500">

            <FaClock className="text-7xl text-cyan-400" />

          </div>

          {/* Rating */}

          <div className="absolute left-10 top-16 rounded-2xl bg-[#181818]/80 backdrop-blur-xl border border-white/10 px-6 py-4">

            <p className="text-yellow-400 text-xl">

              ⭐ 4.9

            </p>

            <p className="text-gray-400 text-sm">

              Customer Rating

            </p>

          </div>

          {/* Discount */}

          <div className="absolute bottom-56 right-8 rounded-2xl bg-lime-400 px-5 py-3 text-black font-bold animate-pulse">

            Up To 50% OFF
          </div>

        </div>

      </div>

    </section>
  );
}