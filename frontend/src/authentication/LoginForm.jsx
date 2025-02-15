import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import axios from "axios"; // Ensure Axios is installed

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:5175/api/login", { email, password });


      // On success, store user data and token in localStorage
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Storing user data
      localStorage.setItem("token", response.data.token); // Storing JWT token

      // Redirect to dashboard or home page
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-12 md:pt-20 pb-6 px-2 md:px-0" style={{ fontFamily: "Lato, sans-serif" }}>
      <header className="max-w-lg mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Pickle Management</span>
        </h1>
      </header>

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-xl shadow-2xl border border-gray-100">
        <section className="mb-8">
          <h3 className="font-bold text-3xl text-gray-900 mb-2">Welcome Back 👋</h3>
          <p className="text-gray-600">Sign in to continue</p>
        </section>

        <section className="mt-6">
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 text-black rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                placeholder="hello@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900" htmlFor="password">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-3 text-black rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent p-0 border-none outline-none hover:text-purple-600 focus:ring-0"
                >
                  {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold py-3.5 rounded-lg transition-all transform hover:scale-[1.01] shadow-lg hover:shadow-xl"
              type="submit"
            >
              Login
            </button>
          </form>
        </section> 

       
      </main>
    </div>
  );
};

export default LoginForm;
