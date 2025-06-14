import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import PasswordInput from '../../components/Input/PasswordInput';
import { validateEmail } from '../Utils/helper';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter a password.");
      return;
    }

    setError("");
    console.log("Login submitted:", { email, password });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-30 mb-50">
        <div className="w-96 rounded-[30px] bg-transparent px-7 py-10 shadow-xl border border-gray-200">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Sign In</h4>

            <input
              type="text"
              placeholder="Email"
              className="text-input-box mb- w-full h-10 px-4 border rounded-[30px] outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mb-4 w-full h-10 px-4 border rounded-[30px] outline-none text-sm"
            />

            {error && (
              <p className="text-red-500 text-sm mb-4">{error}</p>
            )}

            <button
              type="submit"
              className="w-full h-10 mt-2 rounded-[30px] bg-blue-600 text-white font-medium"
            >
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Not registered yet? <br />
              <Link
                to="/signup"
                className="font-medium text-primary underline text-blue-600"
              >
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
