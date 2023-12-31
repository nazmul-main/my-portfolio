import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className=" z-10 p-3">




            <nav className="bg-black bg-opacity-20  fixed w-full z-20 top-0 start-0  ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="nazmul Logo" />

                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <a href="https://github.com/nazmul-main" type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  text-sm px-2 rounded-full py-2 text-center "> <FaGithubSquare className="text-2xl text-[#ADADAD]"> </FaGithubSquare></a>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-2" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <Link to="/" className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 " aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">About</Link>
                            </li>
                            <li>
                                <Link to="/mySkill" className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">My Skill</Link>
                            </li>
                            <li>
                                <Link to="/myProject" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">My Project</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">Contract</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>


        </div>

    );
};

export default Navbar;