import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const PasswordInput = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div className="flex items-center bg-transparent border border-gray-300 px-3 h-10 w-full text-sm  outline-none mt-6 mb-4 rounded-[30px]">
            <input
                value={value}
                onChange={onChange}
                type={isShowPassword ? "text" : "password"}
                placeholder={placeholder || "Password"}
                className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
            />
           {isShowPassword ? (
                  <FaRegEye
                    size={22}
                    className="primary cursor-pointer"
                    onClick={() => toggleShowPassword()}
                   />
                ) : (
                  <FaRegEyeSlash
                    size={22}
                    className="text-slate-400 cursor-pointer"
                    onClick={() => toggleShowPassword()}
                   />
)}

        </div>
    );
};

export default PasswordInput;
