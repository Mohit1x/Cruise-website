import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#dde5eb] text-[#1c1c1c] text-sm mt-10">
      <div className="border-t-[4px] border-[#2d3c50]" />

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-5">
          <img src="/logo.svg" alt="Cruise Critic Logo" className="h-8" />
          <p className="text-gray-600 text-sm">a Tripadvisor company</p>

          <div className="flex flex-wrap gap-4 mt-4 text-[13px] text-[#1c1c1c] font-medium">
            <a href="#">Top deals</a>
            <a href="#">Find a cruise</a>
            <a href="#">About us</a>
            <a href="#">Privacy</a>
            <a href="#">Terms of use</a>
            <a href="#">Accessibility statement</a>
            <a href="#">Cookie Consent</a>
          </div>

          <p className="text-xs text-gray-600 mt-2">
            © 1995—2025, The Independent Traveler, Inc.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-md w-full">
          <h2 className="font-semibold text-lg">
            Get special cruise deals, expert advice, insider tips and more.
          </h2>

          <div className="flex flex-col sm:flex-row items-stretch border-b border-gray-500">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 w-full bg-[#dde5eb] focus:outline-none placeholder-gray-700"
            />
            <button className="px-4 py-2 text-sm font-semibold text-white bg-[#1c1c1c] hover:bg-gray-900">
              Sign up →
            </button>
          </div>

          <p className="text-xs text-gray-600">
            By proceeding, you agree to our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>
            .
          </p>

          <div className="flex gap-4 text-lg text-[#1c1c1c] mt-2">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaPinterestP />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
