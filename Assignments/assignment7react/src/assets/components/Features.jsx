import {
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiHeadphones,
} from "react-icons/fi";

export default function Features() {

  const features = [
    {
      icon: <FiTruck />,
      title: "Free Fast Delivery",
      desc: "Get your order delivered within 24-48 hours anywhere in the country.",
    },
    {
      icon: <FiShield />,
      title: "Secure Payments",
      desc: "100% protected checkout with trusted payment gateways.",
    },
    {
      icon: <FiRefreshCw />,
      title: "Easy Returns",
      desc: "7-day hassle-free return policy for eligible products.",
    },
    {
      icon: <FiHeadphones />,
      title: "24/7 Support",
      desc: "Our support team is available anytime you need assistance.",
    },
  ];

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-lime-400 font-semibold">

            Why Choose Us

          </p>

          <h2 className="text-5xl font-black text-white mt-4">

            Shopping Made Better

          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">

            Premium shopping experience with trusted services and lightning-fast delivery.

          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-[#171717] p-8 text-center hover:-translate-y-3 hover:border-lime-400/40 transition-all duration-500"
            >

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 to-green-500 text-4xl text-black shadow-lg shadow-lime-400/20 group-hover:rotate-6 group-hover:scale-110 transition-all">

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">

                {item.title}

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}