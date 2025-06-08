import React from "react";

import { getInitials } from "../../Pages/Utils/helper";


const ProfileInfo = ({ onLogout }) => {
  return (
	<div className="flex items-center gap-3">
	 <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
     {getInitials("bhanu Ranaweera")}
	  </div>
	  <div>
		<p className="text-sm font-medium">Bhanu</p>
		<button className="text-sm ☐text-slate-700 " onClick={onLogout}>
		  Logout
		</button>
	  </div>
	</div>
  );
};
export default ProfileInfo;