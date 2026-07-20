import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaShoppingBag,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090909]">

      <div className="max-w-7xl mx-auto px-5 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Company */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center">

                <FaShoppingBag className="text-black text-xl" />

              </div>

              <div>

                <h2 className="text-2xl font-black text-white">

                  SkyMart

                </h2>

                <p className="text-sm text-gray-500">

                  Premium Shopping

                </p>

              </div>

            </div>

            <p className="mt-6 max-w-md leading-8 text-gray-400">

              SkyMart is your premium online shopping destination for
              electronics, fashion, accessories and much more with
              lightning-fast delivery and secure payments.

            </p>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="w-11 h-11 rounded-xl bg-[#171717] border border-white/10 flex items-center justify-center text-gray-300 hover:bg-lime-400 hover:text-black hover:scale-110 transition-all"
                  >
                    <Icon />
                  </button>
                )
              )}

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white font-bold text-lg">

              Quick Links

            </h3>

            <ul className="space-y-4 mt-6 text-gray-400">

              <li className="hover:text-lime-400 cursor-pointer transition">
                Home
              </li>

              <Link to={"/shop"} className="hover:text-lime-400 cursor-pointer transition">
                Shop
              </Link>

              <li className="hover:text-lime-400 cursor-pointer transition">
                Contact
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-white font-bold text-lg">

              Company

            </h3>

            <ul className="space-y-4 mt-6 text-gray-400">

              <li className="hover:text-lime-400 cursor-pointer transition">
                About Us
              </li>

              <li className="hover:text-lime-400 cursor-pointer transition">
                Careers
              </li>

              <li className="hover:text-lime-400 cursor-pointer transition">
                Blog
              </li>

              <li className="hover:text-lime-400 cursor-pointer transition">
                Privacy Policy
              </li>

              <li className="hover:text-lime-400 cursor-pointer transition">
                Terms & Conditions
              </li>

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3 className="text-white font-bold text-lg">

              Support

            </h3>

            <ul className="space-y-4 mt-6 text-gray-400">

              <li className="hover:text-lime-400 cursor-pointer transition">
                Help Center
              </li>

              <li className="hover:text-lime-400 cursor-pointer transition">
                Shipping
              </li>

              <li className="hover:text-lime-400 cursor-pointer transition">
                Returns
              </li>

              <li className="hover:text-lime-400 cursor-pointer transition">
                FAQ
              </li>

              <li className="hover:text-lime-400 cursor-pointer transition">
                Track Order
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}

          <p className="text-gray-500 text-center md:text-left">

            © {new Date().getFullYear()}{" "}
            <span className="text-lime-400 font-semibold">

              SkyMart

            </span>{" "}
            • Designed & Developed by <span className="text-white">Rupesh Bishwakarma</span>. All Rights Reserved.

          </p>

          {/* Payment */}

          <div className="flex items-center gap-4 text-4xl text-gray-400">

            <FaCcVisa className="hover:text-white transition" />

            <FaCcMastercard className="hover:text-white transition" />

            <FaCcPaypal className="hover:text-white transition" />

          </div>

          {/* Back To Top */}

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="w-12 h-12 rounded-xl bg-lime-400 text-black flex items-center justify-center hover:scale-110 transition-all"
          >
            <FiArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}