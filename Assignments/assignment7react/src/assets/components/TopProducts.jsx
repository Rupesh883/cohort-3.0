import {
  FiHeart,
  FiShoppingCart,
  FiArrowUpRight,
  FiStar,
} from "react-icons/fi";

export default function TopProducts() {
  const products = [
    {
      id: 1,
      name: "AirPods Max",
      price: "$399",
      oldPrice: "$499",
      rating: "4.9",
      discount: "-20%",
      color: "from-cyan-500 to-blue-500",
      image: "🎧",
    },
    {
      id: 2,
      name: "iPhone 16 Pro",
      price: "$1199",
      oldPrice: "$1299",
      rating: "5.0",
      discount: "-10%",
      color: "from-lime-400 to-green-500",
      image: "📱",
    },
    {
      id: 3,
      name: "Apple Watch",
      price: "$499",
      oldPrice: "$599",
      rating: "4.8",
      discount: "-18%",
      color: "from-purple-500 to-pink-500",
      image: "⌚",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: "$89",
      oldPrice: "$119",
      rating: "4.7",
      discount: "-25%",
      color: "from-orange-500 to-red-500",
      image: "🖱️",
    },
  ];

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="flex items-center justify-between mb-14">

          <div>

            <p className="uppercase tracking-[6px] text-lime-400 font-semibold">

              Best Seller

            </p>

            <h2 className="text-5xl font-black text-white mt-3">

              Top Ranking Products

            </h2>

          </div>

          <button className="hidden md:flex items-center gap-2 text-lime-400 hover:gap-4 transition-all">

            View All

            <FiArrowUpRight />

          </button>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item) => (

            <div
              key={item.id}
              className="group rounded-3xl border border-white/10 bg-[#171717] overflow-hidden hover:-translate-y-3 transition-all duration-500"
            >

              {/* Product Image */}

              <div
                className={`relative h-64 bg-gradient-to-br ${item.color} flex items-center justify-center`}
              >

                <span className="text-[120px] transition duration-500 group-hover:scale-110 group-hover:rotate-6">

                  {item.image}

                </span>

                <span className="absolute top-5 left-5 rounded-full bg-black/70 text-white px-4 py-1 text-sm">

                  {item.discount}

                </span>

                <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-red-500 transition">

                  <FiHeart />

                </button>

              </div>

              {/* Content */}

              <div className="p-6">

                <div className="flex items-center gap-2 text-yellow-400">

                  <FiStar />

                  <span>{item.rating}</span>

                </div>

                <h3 className="mt-4 text-2xl font-bold text-white">

                  {item.name}

                </h3>

                <div className="mt-4 flex items-center gap-3">

                  <span className="text-lime-400 text-2xl font-bold">

                    {item.price}

                  </span>

                  <span className="line-through text-gray-500">

                    {item.oldPrice}

                  </span>

                </div>

                <button className="mt-6 w-full h-12 rounded-xl bg-lime-400 text-black font-bold flex items-center justify-center gap-3 hover:bg-white transition-all">

                  <FiShoppingCart />

                  Add To Cart

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}