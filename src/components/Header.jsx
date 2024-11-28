import { Link, useLocation } from "react-router-dom";
import logo from "./../assets/logo.png";
import Search from "./Search";
import { FaUser } from "react-icons/fa";
import useMobile from "../hooks/useMobile";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  const isMobile = useMobile();
  const pageLocation = useLocation();
  const searchedPage = pageLocation.pathname === "/search";

  console.log(isMobile);
  console.log(searchedPage);
  //  console.log(isMobile) return false if screen width > 768 else true

  return (
    <header>
      <div className="h-28 lg:h-20 lg:shadow-md flex shrink-0 justify-between justify-center items-center gap-2 lg:gap-4 lg:gap-10 sticky mt-0">
        {/* logo */}
        <Link to={"/"} className="flex items-center p-2 h-full lg:w-full">
          <img src={logo} alt="logo" className="h-14 lg:h-10 lg:w-30  " />
        </Link>

        {searchedPage && isMobile ? (
          <>
          
            <Search />
            <div className="flex items-center justify-center h-full lg:w-full   ">
              <button className="hidden items-center mr-2 ">
                <FaUser size={24} />
              </button>
             
            </div>
          </>
        ) : (
          <>
            {/* <Search/> */}
            <Search />

             {/* login & Cart*/}
            <div className="flex items-center justify-between justify-center  px-2 mx-1 h-full lg:w-full   ">
              <button className="lg:hidden items-center mr-2  ">
                <FaUser size={24} />
              </button>

              <Link to={"login"} className="hidden lg:block">login</Link>
             {/* for cart and price */}
              <div className="hidden lg:block lg:flex justify-center items-center gap-3 mx-2 p-2 rounded-md bg-green-200 ">
                <div className="animate-bounce">
                    <MdOutlineShoppingCart size={32}/>
                </div>
                <div className="flex flex-col justify-between text-lg">
                <p>items 0</p>
                <p>total price</p>
                </div>
                </div>
            </div>
          </>
        )}
      
      

       
      </div>
    </header>
  );
};

export default Header;
