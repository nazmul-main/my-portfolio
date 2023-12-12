/* eslint-disable react/no-unescaped-entities */
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    return (
        <div className="w-full relative h-[30vh] md:h-[80vh] lg:[80vh] bg-[#0C141B] leading-3 mb-24 ">
            <div className="flex flex-row h-full justify-evenly items-center relative">
                <div>
                    <TypeAnimation
                        className="text-[#b9b9b9]  "
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'Web Developer',
                            1000,
                            'Front-End Web Developer',
                            1000,
                            'React Web  Developer',
                            1000,
                            'MERN Stack Web Developer',
                            1000,
                            'Full Stack web Developer',
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '1.3em' }}
                        repeat={Infinity}
                    />
                    <h2 className="text-[24] md:text-4xl lg:text-7xl mt-3 font-semibold text-[#adadad]">Hi, I'm <span className="text-[rgb(26,134,75)] font-bold ">Nazmul</span> <br /> From Bangladesh </h2><br />
                    <button className="md:text-[18px] mt-4 py-2 rounded-md hover:bg-[#4ca575] px-2 text-[#fff] bg-[#1a864b] text-[12px]">
                        <a
                            href="/public/images/SCIC A-2 - Google Docs.pdf"
                            download='CV'
                            className="flex gap-2"
                        >My Resume  <FaDownload /></a>
                    </button>
                </div>
                <div className="h-full ">
                    <img className="h-full object-cover" src="/public/images/web.png" alt="" />

                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <img
                    className=" object-cover rotate-10  opacity-5 w-full h-full"
                    src="/public/images/code.png" alt=""
                />
            </div>
        </div>


    );
};

export default Banner;