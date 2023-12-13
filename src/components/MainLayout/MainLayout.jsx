
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer";


const MainLayout = () => {
    return (
        <div className="bg-[#0C141B] ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
           

        </div>
    );
};

export default MainLayout;