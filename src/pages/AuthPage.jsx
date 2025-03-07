import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import loginpic from "/assets/loginworker.jpg";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  return (
    <div id="signup" className="flex min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#F5FBF7] to-[#1ee052]">
      {/* Left Side - Login Form */}
      <div className="w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-green-600 text-center mb-4">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-green-700">Username</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full p-2 border border-green-300 rounded-lg"
                />
              </div>
            )}
            <div>
              <label className="block text-green-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-green-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-green-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-green-300 rounded-lg"
              />
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg" onClick={() => navigate("/user-profile")}>
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <div className="text-center my-4">
            <span className="text-green-600 font-semibold">OR</span>
          </div>
          <div className="text-center my-4">
            <button className="w-full bg-gray-300 text-black flex items-center justify-center gap-2 p-2 rounded-lg">
              <FcGoogle className="text-xl" /> Sign in with Google
            </button>
          </div>
          <p className="text-center text-sm mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              className="text-green-600 hover:underline ml-1"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
      {/* Right Side - Image */}
      <div className="w-1/2 hidden md:block ">
        <img
          src={loginpic}
          alt="Electrician, Plumber, Carpenter"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}