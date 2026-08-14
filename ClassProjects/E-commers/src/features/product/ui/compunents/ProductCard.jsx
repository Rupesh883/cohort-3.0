import { FiHeart, FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-emerald-500/40">
      {/* Image */}
      <div className="relative bg-zinc-950 p-2 sm:p-3">

        <button className="absolute right-2 top-2 z-10 rounded-full bg-zinc-800/80 p-1.5 text-zinc-300 transition hover:text-red-500">
          <FiHeart size={14} />
        </button>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="mx-auto h-24 w-full object-contain transition duration-300 group-hover:scale-105 sm:h-32 md:h-40"
        />
      </div>

      {/* Content */}
      <div className="p-3">

        <p className="truncate text-[10px] uppercase tracking-wider text-emerald-400">
          {product.brand}
        </p>

        <h3 className="mt-1 line-clamp-2 min-h-[36px] text-sm font-semibold text-white">
          {product.title}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-yellow-400">
            ⭐ {product.rating}
          </span>

          <span className="text-[10px] text-emerald-400">
            Stock
          </span>
        </div>

        <div className="mt-3">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-bold text-white">
                ${product.price}
              </p>

              <p className="text-[10px] text-zinc-500">
                {Math.round(product.discountPercentage)}% OFF
              </p>
            </div>
          </div>

          <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2 text-xs font-semibold text-white transition hover:bg-emerald-600">
            <FiShoppingCart size={14} />
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;