import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-12 md:pt-20 pb-6 px-2 md:px-0"
      style={{ fontFamily: "Lato, sans-serif" }}
    >
      <header className="max-w-lg mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Pickle Management
          </span>
        </h1>
      </header>

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-xl shadow-2xl border border-gray-100">
        <section className="mb-8">
          <h3 className="font-bold text-3xl text-gray-900 mb-2">
            Create Account 🚀
          </h3>
          <p className="text-gray-600">Get started with your account</p>
        </section>

        <section className="mt-6">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-gray-900"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 text-black rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 text-black rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                placeholder="hello@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                {" "}
                {/* Add this wrapper div */}
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-3 text-black rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-5 h-5" />
                  ) : (
                    <FaEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-gray-900"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div className="relative">
                {" "}
                {/* Add this wrapper div */}
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-3 text-black rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600 bg-transparent border-none p-0 focus:outline-none focus:ring-0"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="w-5 h-5" />
                  ) : (
                    <FaEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold py-3.5 rounded-lg transition-all transform hover:scale-[1.01] shadow-lg hover:shadow-xl"
              type="submit"
            >
              Create Account
            </button>
          </form>
        </section>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="ml-2 text-purple-600 hover:text-purple-700 font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignupForm;
