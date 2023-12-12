
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="bg-[#0C141B] ">
            <Navbar></Navbar>
            <Outlet></Outlet>
           

        </div>
    );
};

export default MainLayout;