import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import SearchPage from "../Pages/SearchPage";
import { useEffect, useState } from "react";
import useMobile from "../hooks/useMobile";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Search = () => {
  const navigate = useNavigate();

  const [searchedPage, setSearchedPage] = useState(false);
  const isMobile =useMobile();

  const navigateToSearchPage = () => {
    navigate("/search");
  };

  useEffect(() => {
    const isSearchPage = pageLocation.pathname === "/search";
    setSearchedPage(isSearchPage);
  });

  const pageLocation = useLocation();
  console.log(pageLocation); // this object gives us the pathname='/something'
  console.log(searchedPage);

  return (
    <div
     
      className="flex items-center text-gray-500 bg-slate-200  border rounded-xl h-10 mr-4 lg:h-12 w-full border-2 hover:border-yellow-400"
    >
      
      {
        (searchedPage && isMobile) ? (
            <Link to={"/"} className="p-3 hover:text-red-500">
                <FaArrowAltCircleLeft size={24}/>
            </Link>
        ) : (

            <button  onClick={navigateToSearchPage} className="p-3 hover:text-red-500">
        <FaSearch />
      </button>


        )
      }



      {searchedPage ? (
        //  for taking input
        <input  
          type="text"
          placeholder="search here..."
          className=" w-[90%]  lg:w-[80%] placeholder:text-center outline-none bg-slate-50 rounded-lg mr-2 text-lg my-1 border-[1px] hover:border-pink-400"
        />
      ) : (
        <div className="text-lg">
          <TypeAnimation
            sequence={[
              "search milk...",
              1000,
              "search laptop...",
              1000,
              "search fan...",
              1000,
              "search bread...",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
      )}
{/* 
      {
        (searchedPage && isMobile) ? (
            <input
            type="text"
            placeholder="search here..."
            className=" w-[90%]  lg:w-[80%] placeholder:text-center outline-none bg-slate-50 rounded-lg mr-2 text-lg my-1 border-[1px] hover:border-pink-400"
          />

        ) : (
            <input
          type="text"
          placeholder="search here..."
          className=" w-[90%]  lg:w-[80%] placeholder:text-center outline-none bg-slate-50 rounded-lg mr-2 text-lg my-1 border-[1px] hover:border-pink-400"
        />

        )
      } */}

      <div></div>
    </div>
  );
};
export default Search;
