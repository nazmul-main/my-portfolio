import Titile from "../../Shared/Titile";
import project1 from "../../assets/Untitled (1).png"
import project2 from "../../assets/Untitled (2).png"
import project3 from "../../assets/Untitled (3).png"

const MyProject = () => {
    return (
        <div className="max-w-screen-xl min-h-screen mx-auto px-4 ">
            <Titile heading={'My Project'}> </Titile>

            <div className="md:flex items-center  gap-12  space-y-12 md:space-y-0" >
                <div>
                    <img className="w-4/5 md:w-full mx-auto" src={project1} alt="" />
                    <div className="md:flex items-center justify-center gap-7 space-y-4 space-x-2 mt-1 ">
                        <a href="https://smart-asset-managment.web.app/" className="outline-none btn btn-sm bg-green-600 mt-4 ">
                            Live Link</a>
                        <a href="https://github.com/nazmul-main/client-smart-asset-manager" className="outline-none btn btn-sm bg-green-600 mt-4 ">
                            Client Link</a>
                        <a href="https://github.com/nazmul-main/server-smart-asset-manager" className="outline-none btn btn-sm bg-green-600 mt-4 ">
                            Server Link</a>
                    </div>
                </div>
                <div>
                    <img src={project2} alt="" />
                    <div className="md:flex items-center justify-center gap-7 space-y-4 space-x-2 mt-1 ">
                        <a href="https://the-blogopolis.web.app/"  className="outline-none btn btn-sm bg-green-600 mt-4 ">
                            Live Link</a>
                        <a href="https://github.com/nazmul-main/the-bolgopolis-client" className="outline-none btn btn-sm bg-green-600 mt-4 ">
                            client Link</a>
                        <a href="https://github.com/nazmul-main/the-blogopolis-server" className="outline-none btn btn-sm bg-green-600 mt-4 ">
                            Server Link</a>
                    </div>
                </div>
                <div>
                    <img src={project3} alt="" />
                   
                    <div className="md:flex items-center justify-center gap-7 space-y-4 space-x-2 mt-1 ">
                        <a href="https://brand-sotre.web.app/" className="outline-none btn btn-sm bg-green-600 mt-4 ">
                            Live Link</a>
                        <a href="https://github.com/nazmul-main/brand-store-client" className="outline-none btn btn-sm bg-green-600 mt-4 ">
                            Client Link</a>
                        <a href="https://github.com/nazmul-main/brand-store-server" className="outline-none btn btn-sm bg-green-600 mt-4 ">
                            Server Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProject;