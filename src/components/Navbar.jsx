import pfpImage from '../assets/pfp.PNG';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const navLinkClass = (path) =>
    `font-medium text-base transition duration-200 
     ${location.pathname === path ? 'text-black' : 'text-gray-500'} 
     hover:text-black`;

  return (
    <nav
      id="nav-shadow"
      className="fixed z-[999] inset-x-0 top-0 h-[100px] flex flex-col justify-between bg-white/80 backdrop-blur-[50px] px-[20px]"
    >
      <div className="flex flex-row justify-between items-center pt-[6px]">
        <a href="#" className="font-semibold text-[36px]">
          Lumi
          <span className=" text-gray-400 pl-2">Petal</span>
        </a>
        <form className="relative flex w-[400px] h-[50px] justify-center items-center">
          <button
            type="submit"
            className="bi bi-search text-white absolute right-1.5 cursor-pointer bg-[#dc3545] rounded-full h-[80%] px-5"
          ></button>
          <input
            className="w-full h-full text-[16px] pl-4 pr-17 text-black border-1 border-gray-200 outline-0 rounded-full transition duration-300 hover:border-[#dc3545] focus:border-[#dc3545] "
            type="text"
            placeholder="Search"
            name="search"
          />
        </form>
        <div className="relative h-[40px] flex justify-center items-center">
          <div className="mr-6 flex flex-row gap-3 justify-center items-centercursor-pointer">
            <img
              className="h-[36px] w-[36px] aspect-square object-cover rounded-full"
              src={pfpImage}
              alt="user image"
            />
            <i className="bi bi-check-circle-fill absolute left-[26px] top-[50%] text-xs text-blue-600 bg-white px-[calc(7px/3)] pt-[calc(3px/4)] rounded-full"></i>
            <div className="flex flex-col justify-center items-start">
              <p className="text-gray-700 text-sm font-medium leading-4">
                Aoi Tenten
              </p>
              <p className="text-xs font-medium text-blue-500">Active</p>
            </div>
          </div>
          <Link
            to="/notification"
            className="bi bi-bell h-full w-auto text-[32px] pl-6 border-l-2 border-gray-300 flex justify-center items-center"
          ></Link>
          <Link
            to="/bag"
            className="bi bi-bag h-full w-auto text-[32px] pl-6 flex justify-center items-center"
          ></Link>
        </div>
      </div>
      <ul className="flex flex-row items-center gap-6 pb-[5px]">
        <Link className={navLinkClass('/')} to="/">
          Home
        </Link>
        <Link className={navLinkClass('/shopAll')} to="/shopAll">
          Shop All
        </Link>
        <Link className={navLinkClass('/category')} to="/category">
          Category
        </Link>
        <Link className={navLinkClass('/brand')} to="/brand">
          Brand
        </Link>
        <Link className={navLinkClass('/freeDelivery')} to="/freeDelivery">
          Free delivery
        </Link>
        <Link className={navLinkClass('/explore')} to="/explore">
          Explore
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
