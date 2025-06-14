import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

import { validateEmail } from "../Utils/helper";
import PasswordInput from "../../components/Input/PasswordInput";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter a password.");
      return;
    }

    setError("");
    console.log("Signup submitted:", { name, email, password });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-18">
        <div className="w-96 rounded-[30px] bg-transparent px-7 py-10 shadow-xl border border-gray-200">
          <form onSubmit={handleSignup}>
            <h4 className="text-2xl mb-7">Sign Up</h4>

            <input
              type="text"
              placeholder="Name"
              className="text-input-box mb-5 w-full h-10 px-4 border rounded-[30px] outline-none text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Email"
              className="text-input-box mb-0.5 w-full h-10 px-4 border rounded-[30px] outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mb-2 w-full h-10 px-4 border rounded-[30px] outline-none text-sm"
            />

            {error && (
              <p className="text-red-500 text-sm mb-4 mt-2">{error}</p>
            )}

            <button
              type="submit"
              className="w-full h-10 mt-2 rounded-[30px] bg-blue-600 text-white font-medium"
            >
              Create Account
            </button>

            <p className="text-sm text-center mt-4">
              Already have an account? <br />
              <Link
                to="/signin"
                className="font-medium text-primary underline text-blue-600"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
