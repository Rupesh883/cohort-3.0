import { FiArrowRight, FiGift, FiMail } from "react-icons/fi";

export default function Newsletter() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-5">

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-[#151515] via-[#1b1b1b] to-[#151515] p-10 lg:p-16">

          {/* Background Glow */}

          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-lime-400/10 blur-[120px]" />

          <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

          {/* Content */}

          <div className="relative grid gap-12 lg:grid-cols-2 items-center">

            {/* Left */}

            <div>

              <div className="inline-flex items-center gap-3 rounded-full bg-lime-400/10 border border-lime-400/20 px-5 py-2 text-lime-400">

                <FiGift />

                Limited Time Offer

              </div>

              <h2 className="mt-6 text-4xl md:text-5xl font-black text-white leading-tight">

                Get <span className="text-lime-400">20% OFF</span>

                <br />

                On Your First Order

              </h2>

              <p className="mt-6 text-gray-400 leading-8 max-w-lg">

                Subscribe to SkyMart and receive exclusive offers,
                early access to new arrivals and members-only discounts.

              </p>

            </div>

            {/* Right */}

            <div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">

                <label className="text-gray-300 text-sm">

                  Email Address

                </label>

                <div className="mt-4 flex items-center rounded-2xl border border-white/10 bg-[#111] px-5 h-16">

                  <FiMail className="text-lime-400 text-xl" />

                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="ml-4 h-full w-full bg-transparent outline-none text-white placeholder:text-gray-500"
                  />

                </div>

                <button className="group mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-lime-400 font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-lime-300">

                  Subscribe Now

                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />

                </button>

                <p className="mt-4 text-center text-sm text-gray-500">

                  No spam. Unsubscribe anytime.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}