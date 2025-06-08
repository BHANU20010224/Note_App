import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../Utils/helper";


const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState (null);

  const handleSignup = (e) => {e.preventDefault();

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
    
    // Signup API call 
  }
  return (
    <>
    <Navbar /> 
       <div className="flex items-center justify-center mt-28">
        <div className="w-96 rounded-[30px] bg-transparent px-7 py-10 shadow-xl border border-gray-200">
          <form onSubmit={handleSignup}>
            <h4 className="text-2xl mb-7">SignIn</h4>

            <input
              type="text"
              placeholder="Name"
              className="text-input-box mb-4"                      // Name
              value={name}
              onChange={(e) => setName(e.target.value)}  />

             <input
              type="text"
              placeholder="Email"
              className="text-input-box mt-4"                      // Email
              value={email}
              onChange={(e) => setEmail(e.target.value)} /> 

            <PasswordInput
             value={password}                                 // Password
             onChange={(e) => setPassword(e.target.value)} /> 

             {error && <p className="text-red-500 text-sm mb-4 mt-4">{error}</p>}

            <button type="submit" className="btn-primary">
              Create Account
            </button>
            <p className="text-sm text-center mt-4">
              Alrady Have An Account{' '} <br/>
              <Link  to="/signin" className="font-medium text-primary underline text-blue-600">
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
