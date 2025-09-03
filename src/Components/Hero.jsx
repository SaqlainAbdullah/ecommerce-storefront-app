import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Side: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Shop the Latest Trends 🛍️
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover amazing products with unbeatable prices. Upgrade your
            lifestyle with just one click!
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <Link to="/products">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition cursor-pointer">
                Shop Now
              </button>
            </Link>

            <button
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-2xl shadow-md hover:bg-gray-300 transition cursor-pointer"
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="\Shopping-banner.jpg"
            alt="Shopping banner"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
