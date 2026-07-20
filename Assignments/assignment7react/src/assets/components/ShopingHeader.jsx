import { FiShoppingBag } from "react-icons/fi";

export default function ShopHeader() {
  return (
    <section>

      <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-lime-400">

        <FiShoppingBag />

        Premium Collection

      </div>

      <h1 className="mt-6 text-5xl md:text-6xl font-black text-white">

        All Products

      </h1>

      <p className="mt-4 text-lg text-gray-400 max-w-2xl">

        Discover premium electronics, fashion, accessories and more.
        Carefully selected products with the best quality.

      </p>

    </section>
  );
}