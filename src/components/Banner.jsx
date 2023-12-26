/* eslint-disable react/no-unescaped-entities */
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import web from "../assets/web.png";
import code from "../assets/code.png";
import resume from "../assets/Reume.pdf";
const Banner = () => {
    return (
        <div className="w-full relative h-[30vh] md:h-[80vh] lg:[80vh] bg-[#0C141B] leading-3 mb-24 ">
            <div className="flex flex-row h-full justify-evenly items-center relative pl-4">
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
                </div>


                <div className="h-full ">
                    <img className="h-full object-cover" src={web} alt="" />

                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <img
                    className=" object-cover rotate-10  opacity-5 w-full h-full"
                    src={code} alt=""
                />
            </div>
            <a
                href={resume}
                download={'Resume'}
                type="submit"
                className="flex items-center justify-center text-white bg-[rgba(26,134,75,0.51)] hover:bg-[rgba(26,134,75,0.7)]  focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
                <span className="mr-2">My Resume</span>
                <FaDownload className="text-xl" />
            </a>
        </div>


    );
};

export default Banner;