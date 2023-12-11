import { FaDownload } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="w-full relative h-[30vh] md:h-[70vh] bg-[#0C141B] leading-3">
        <div className="flex flex-row h-full justify-evenly items-center relative">
            <div>
                <h4 className="text-[#adadad] text-[10px] md:text-[20px]">WEB DEVELOPER</h4><br />
                <h2 className="text-[24] md:text-4xl lg:text-7xl font-semibold text-[#adadad]">Hi, I'm <span className="text-[rgb(26,134,75)] font-bold ">Nazmul</span> <br /> From Bangladesh </h2><br />
                <button className="md:text-[18px] mt-4 py-2 rounded-md hover:bg-[#4ca575] px-2 text-[#fff] bg-[#1a864b] text-[12px]">
                    <a
                        href="/public/images/SCIC A-2 - Google Docs.pdf"
                        download='CV'
                        className="flex gap-2"
                    >My Resume  <FaDownload /></a>
                </button>
            </div>
            <div className="h-full ">
                <img className="h-full object-cover" src="/public/images/main_Image.png" alt="" />
               
            </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <img
                        className="object-cover rotate-10  opacity-5 w-full h-full"
                        src="/public/images/code.png" alt=""
                    />
                </div>
    </div>
    
    
    );
};

export default Banner;