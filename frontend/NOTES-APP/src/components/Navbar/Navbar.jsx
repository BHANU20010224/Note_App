import React, { useState } from "react";
import Profileinfo from "../../components/Cards/Profileinfo";
import { useNavigate } from "react-router-dom";
import Searchbar from "../../components/Searchbar/Searchbar";
const Navbar = () => {

    const [searchQuery, setSearchQuery]= useState("") ;

    const navigate = useNavigate();

const onLogout = () => {
    navigate("/signin");
    };
    const handleSearch = () => {};
  
    const onClearSearch = ()=>{
    setSearchQuery ("");
    };


return (
  <>
	<div className=" bg-white shadow-md p-4 flex justify-between items-center">
	  <h2 className="text-xl font-medium text-black py-2 ustify-between items-center">Notes</h2>

<Searchbar
  value={searchQuery}
  onChange={({ target }) => setSearchQuery(target.value)}
  
  handleSearch={handleSearch}
  onClearSearch={onClearSearch}
/>
<Profileinfo onLogout={onLogout}/>
	</div>
	
  </>
);
};
export default Navbar;