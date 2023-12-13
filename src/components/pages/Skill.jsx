import Titile from "../../Shared/Titile";
// import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
    return (
        <div className="max-w-screen-xl min-h-screen mx-auto px-4  bg-[]">
            <Titile heading={'My Skill'}></Titile>

            <div className="md:flex gap-12 justify-center items-center  my-8">
                <div>
                    <div className="mb-1 text-[#545352] font-medium ">
                        <img className="w-12 mx-auto" src="/public/images/htmk.png" alt="" />
                    </div>
                    <div className="w-24 bg-[#ebb080] rounded-full h-2.5 mb-4 mx-auto ">
                        <div className="bg-[#E14E1D] h-2.5 rounded-full " style={{ width: '90%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="mb-1 text-[#0277BD] font-medium ">
                        <img className="w-12 mx-auto" src="/public/images/css.png" alt="" />
                    </div>
                    <div className="w-24 bg-[#a6d0e8] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#0277BD] h-2.5 rounded-full " style={{ width: '93%' }}></div>
                    </div>
                </div>

                <div>
                    <div className="mb-1 text-[#23BBBC] font-medium ">
                        <img className="w-12 mx-auto" src="/public/images/tailwind.png" alt="" />
                    </div>
                    <div className="w-24 bg-[#9fd4d4] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#23BBBC] h-2.5 rounded-full " style={{ width: '95%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="mb-1 text-[#A356FF] font-medium ">
                        <img className="w-12 mx-auto" src="/public/images/daisyui-removebg-preview.png" alt="" />
                    </div>
                    <div className="w-24 bg-[#d1bbed] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#A356FF] h-2.5 rounded-full " style={{ width: '81%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="mb-1 text-[#F0DB4F] font-medium ">
                        <img className="w-12 mx-auto" src="/public/images/Screjs.png" alt="" />
                    </div>
                    <div className="w-24 bg-[#77724b] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#F0DB4F] h-2.5 rounded-full " style={{ width: '85%' }}></div>
                    </div>
                </div>
            </div>
            <div className="md:flex gap-12 justify-center items-center ">
                <div>
                    <div className="mb-1 text-[#00D8FF] font-medium ">
                        <img className="w-12 mx-auto" src="/public/images/react-removebg-preview.png" alt="" />
                    </div>
                    <div className="w-24 bg-[#5f6d70] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#00D8FF] h-2.5 rounded-full " style={{ width: '88%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="mb-1 text-[#81CD39] font-medium ">
                        <img className="w-12 mx-auto" src="/public/images/nodejs-removebg-preview.png" alt="" />
                    </div>
                    <div className="w-24 bg-[#dbf8c1] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#81CD39] h-2.5 rounded-full " style={{ width: '85%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="mb-1 text-[#242938] font-medium ">
                        <img className="bg-[#9ea2b1] w-12 mx-auto" src="/public/images/expresss-removebg-preview.png" alt="" />
                    </div>
                    <div className=" w-24 bg-[#9ea2b1]  rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#242938] h-2.5 rounded-full " style={{ width: '79%' }}></div>
                    </div>
                </div>

                <div>
                    <div className="mb-1 text-[#FFCB2D] font-medium ">
                        <img className="w-12 mx-auto" src="/public/images/firebase-removebg-preview.png" alt="" />
                    </div>
                    <div className="w-24 bg-[#8f8569] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#FFCB2D] h-2.5 rounded-full " style={{ width: '75%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="mb-1 text-[#10AA50] font-medium ">
                        <img className="w-12 mx-auto" src="/public/images/mongodb-removebg-preview.png" alt="" />
                    </div>
                    <div className="w-24 bg-[#b0e3c5] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#10AA50] h-2.5 rounded-full " style={{ width: '90%' }}></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skill;
