

const Navbar = () => {
    return (
        <div className=" z-10 p-3">




            <nav className="bg-black bg-opacity-20  fixed w-full z-20 top-0 start-0  ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />

                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Github </button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-2" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <a href="/" className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 " aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">About</a>
                            </li>
                            <li>
                                <a href="/mySkill" className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">My Skill</a>
                            </li>
                            <li>
                                <a href="/myProject" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">My Project</a>
                            </li>
                            <li>
                                <a href="/contact" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">Contract</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>

    );
};

export default Navbar;