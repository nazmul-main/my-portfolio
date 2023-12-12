import Titile from "../../Shared/Titile";

const MyProject = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 my-12">
            <Titile heading={'My Project'}> </Titile>

            <div  className="md:flex items-center  gap-12  my-16 space-y-12 md:space-y-0" >
                <div>
                    <img className="w-4/5 md:w-full mx-auto" src="/public/images/Untitled (1).png " alt="" />
                    <div className="md:flex items-center justify-center gap-7 space-y-4 space-x-2 mt-1 ">
                        <a href="https://brand-sotre.web.app/" className="outline-none btn btn-sm bg-green-600 mt-4 ">
                            Live Link</a>
                        <button className="btn btn-sm ">Client Link</button>
                        <button className="btn btn-sm">Server Link</button>
                    </div>
                </div>
                <div>
                    <img  src="/public/images/Untitled (2).png" alt="" />
                    <div className="md:flex items-center justify-center gap-7 space-y-4 space-x-2 mt-1 ">
                    <a href="https://the-blogopolis.web.app/" className="outline-none btn btn-sm bg-green-600 mt-4 ">
                            Live Link</a>
                        <button className="btn btn-sm ">Client Link</button>
                        <button className="btn btn-sm">Server Link</button>
                    </div>
                </div>
                <div>
                    <img  src="/public/images/Untitled (3).png" alt="" />
                    <div className="md:flex items-center justify-center gap-7 space-y-4 space-x-2 mt-1 ">
                    <a href="https://the-blogopolis.web.app/" className="outline-none btn btn-sm bg-green-600 mt-4 ">
                            Live Link</a>
                        <button className="btn btn-sm ">Client Link</button>
                        <button className="btn btn-sm">Server Link</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProject;