import {
  FiArrowUpRight,
  FiHeart,
  FiShoppingCart,
  FiStar,
} from "react-icons/fi";

export default function NewArrivals() {

  const products = [
    {
      id: 1,
      title: "MacBook Air M4",
      category: "Laptop",
      price: "$1499",
      image: "💻",
      color: "from-sky-500 to-blue-600",
    },
    {
      id: 2,
      title: "Sony Headphones",
      category: "Audio",
      price: "$299",
      image: "🎧",
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 3,
      title: "Nike Sneakers",
      category: "Shoes",
      price: "$189",
      image: "👟",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "iPhone 16",
      category: "Mobile",
      price: "$999",
      image: "📱",
      color: "from-lime-500 to-green-500",
    },
    {
      id: 5,
      title: "Smart Watch",
      category: "Wearables",
      price: "$399",
      image: "⌚",
      color: "from-cyan-500 to-sky-500",
    },
  ];

  return (
    <section className="py-24" id="shop">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="flex items-center justify-between mb-14">

          <div>

            <p className="uppercase tracking-[5px] text-lime-400 font-semibold">

              Latest Collection

            </p>

            <h2 className="text-5xl font-black text-white mt-3">

              New Arrivals

            </h2>

          </div>

          <button className="hidden md:flex items-center gap-2 text-lime-400 hover:gap-4 transition">

            Explore All

            <FiArrowUpRight/>

          </button>

        </div>

        {/* Horizontal Scroll */}

        <div className="flex gap-7 overflow-x-auto pb-4 no-scrollbar [&::-webkit-scrollbar]:hidden">

          {products.map((item) => (

            <div
              key={item.id}
              className="group min-w-[320px] rounded-3xl border border-white/10 bg-[#171717] overflow-hidden hover:-translate-y-3 transition duration-500"
            >

              {/* Image */}

              <div
                className={`relative h-72 bg-gradient-to-br ${item.color} flex justify-center items-center`}
              >

                <span className="text-[130px] group-hover:scale-110 transition duration-500">

                  {item.image}

                </span>

                <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 backdrop-blur flex justify-center items-center text-white hover:bg-red-500 transition">

                  <FiHeart/>

                </button>

                <span className="absolute left-5 top-5 bg-lime-400 text-black text-sm font-bold px-4 py-1 rounded-full">

                  NEW

                </span>

              </div>

              {/* Content */}

              <div className="p-6">

                <p className="text-gray-400">

                  {item.category}

                </p>

                <h3 className="text-white text-2xl font-bold mt-2">

                  {item.title}

                </h3>

                <div className="flex items-center gap-2 mt-3 text-yellow-400">

                  <FiStar/>

                  <FiStar/>

                  <FiStar/>

                  <FiStar/>

                  <FiStar/>

                </div>

                <div className="flex justify-between items-center mt-6">

                  <h2 className="text-lime-400 text-2xl font-bold">

                    {item.price}

                  </h2>

                  <button className="w-12 h-12 rounded-xl bg-lime-400 text-black flex justify-center items-center hover:scale-110 transition">

                    <FiShoppingCart/>

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}