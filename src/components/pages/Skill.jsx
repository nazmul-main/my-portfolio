import Titile from "../../Shared/Titile";
import html from "../../assets/htmk.png"
import css from "../../assets/css.png"
import tailwind from "../../assets/tailwind.png"
import daisyui from "../../assets/daisyui-removebg-preview.png"
import js from "../../assets/Screjs.png"
import react from "../../assets/react-removebg-preview.png"
import nodejs  from "../../assets/nodejs-removebg-preview.png"
import express  from "../../assets/expresss-removebg-preview.png"
import firebase  from "../../assets/firebase-removebg-preview.png"
import mongodb  from "../../assets/mongodb-removebg-preview.png"

const Skill = () => {
    return (
        <div className="max-w-screen-xl min-h-screen mx-auto px-4  bg-[]">
            <Titile heading={'My Skill'}></Titile>

            <div className="md:flex gap-12 justify-center items-center  my-8">
                <div>
                    <div className="mb-1 text-[#545352] font-medium ">
                        <img className="w-12 mx-auto" src={html} alt="" />
                    </div>
                    <div className="w-24 bg-[#ebb080] rounded-full h-2.5 mb-4 mx-auto ">
                        <div className="bg-[#E14E1D] h-2.5 rounded-full " style={{ width: '90%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="mb-1 text-[#0277BD] font-medium ">
                        <img className="w-12 mx-auto" src={css} alt="" />
                    </div>
                    <div className="w-24 bg-[#a6d0e8] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#0277BD] h-2.5 rounded-full " style={{ width: '93%' }}></div>
                    </div>
                </div>

                <div>
                    <div className="mb-1 text-[#23BBBC] font-medium ">
                        <img className="w-12 mx-auto" src={tailwind} alt="" />
                    </div>
                    <div className="w-24 bg-[#9fd4d4] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#23BBBC] h-2.5 rounded-full " style={{ width: '95%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="mb-1 text-[#A356FF] font-medium ">
                        <img className="w-12 mx-auto" src={daisyui} alt="" />
                    </div>
                    <div className="w-24 bg-[#d1bbed] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#A356FF] h-2.5 rounded-full " style={{ width: '81%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="mb-1 text-[#F0DB4F] font-medium ">
                        <img className="w-12 mx-auto" src={js} alt="" />
                    </div>
                    <div className="w-24 bg-[#77724b] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#F0DB4F] h-2.5 rounded-full " style={{ width: '85%' }}></div>
                    </div>
                </div>
            </div>
            <div className="md:flex gap-12 justify-center items-center ">
                <div>
                    <div className="mb-1 text-[#00D8FF] font-medium ">
                        <img className="w-12 mx-auto" src={react} alt="" />
                    </div>
                    <div className="w-24 bg-[#5f6d70] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#00D8FF] h-2.5 rounded-full " style={{ width: '88%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="mb-1 text-[#81CD39] font-medium ">
                        <img className="w-12 mx-auto" src={nodejs} alt="" />
                    </div>
                    <div className="w-24 bg-[#dbf8c1] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#81CD39] h-2.5 rounded-full " style={{ width: '85%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="mb-1 text-[#242938] font-medium ">
                        <img className="bg-[#9ea2b1] w-12 mx-auto" src={express} alt="" />
                    </div>
                    <div className=" w-24 bg-[#9ea2b1]  rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#242938] h-2.5 rounded-full " style={{ width: '79%' }}></div>
                    </div>
                </div>

                <div>
                    <div className="mb-1 text-[#FFCB2D] font-medium ">
                        <img className="w-12 mx-auto" src={firebase} alt="" />
                    </div>
                    <div className="w-24 bg-[#8f8569] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#FFCB2D] h-2.5 rounded-full " style={{ width: '75%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="mb-1 text-[#10AA50] font-medium ">
                        <img className="w-12 mx-auto" src={mongodb} alt="" />
                    </div>
                    <div className="w-24 bg-[#b0e3c5] rounded-full h-2.5 mb-4 mx-auto">
                        <div className="bg-[#10AA50] h-2.5 rounded-full " style={{ width: '90%' }}></div>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-center items-center gap-5">
                <div className=" md:w-2/5 space-y-6 ">
                    <h2 className="text-2xl md:text-4xl my-4 font-semibold text-[#adadad] text-center md:mt-12" >EXPERIENCE</h2>


                    <div tabIndex={0} className="collapse collapse-arrow border border-[#adadad46] text-[#adadad] bg-[#113a2642]">
                        <div className="collapse-title text-xl font-medium">
                        Learning Experience
                        </div>
                        <div>
                            <p className="pl-3 ">
                                Over the past year, I completed a web development course with Programming Hero, gaining expertise in HTML, CSS, Tailwind, JavaScript, ReactJS, NextJS, and backend technologies such as NodeJS, ExpressJS, MongoDB, and Mongoose. Additionally, I am familiar with essential tools including Postman, Git, GitHub, and VS Code. This comprehensive learning experience has equipped me with a diverse skill set, allowing me to create dynamic and responsive web applications while efficiently utilizing industry-standard development tools.</p>


                        </div>
                    </div>






                </div>


            </div>

        </div>
    );
};

export default Skill;
