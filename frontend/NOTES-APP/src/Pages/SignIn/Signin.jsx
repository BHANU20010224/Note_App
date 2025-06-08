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
      setError("Plese enter a password");
      return;
    }
    setError("")

    //signin API call
};


  return (
    <>
     <Navbar /> 
       <div className="flex items-center justify-center mt-35 mb-20">
        <div className="w-96 rounded-[30px] bg-transparent px-7 py-10 shadow-xl border border-gray-200">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">SignIn</h4>
            <input type="text" placeholder="Email" className="text-input-box" value={email}
               onChange={(e) => setEmail(e.target.value)} />


            <PasswordInput value={password}
             onChange={(e) => setPassword(e.target.value)} />

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              Not registered yet?{' '} <br/>
              <Link to="/signup" className="font-medium text-primary underline text-blue-600">
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
