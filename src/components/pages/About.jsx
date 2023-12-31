import Titile from "../../Shared/Titile";
import about2 from "../../assets/about2.png";
import about1 from "../../assets/about1.png";

const About = () => {
    return (
        <div
            style={{ position: 'relative', backgroundImage: `url${about2}` }}
            className="max-w-screen-xl min-h-screen mx-auto px-4 bg-[#] "
        >
            <div

            ></div>
            <Titile heading={'About ME'}></Titile>
            <div className="flex items-center justify-center ">
                <div className="w-2/5">
                    <img className="" src={about1} alt="" />
                </div>
                <div className="w-4/5 space-y-8 text-[#adadad]">
                    <p>I'm Nazmul, a passionate front-end developer dedicated to crafting seamless and engaging user experiences. With a keen eye for design and a love for clean code, I transform ideas into interactive web applications. My toolbox includes HTML, CSS, JavaScript, and various modern frameworks. When not coding, you'll find me exploring new technologies, contributing to open source projects, and continuously honing my skills to stay at the forefront of web development. Let's build something amazing together! 💻✨</p>
                    <div className="border-2 p-4 space-y-2">
                        <h2 className="text-[18px]"><span className="font-semibold mr-7">Name: </span> MD Nazmul Hossen</h2>
                        <h2 className="text-[18px]"><span className="font-semibold mr-9">Birth: </span> November, 10, 2002</h2>
                        <h2 className="text-[18px]"><span className="font-semibold mr-3">Address: </span> Bogura Sadar, Bangladesh</h2>
                        <h2 className="text-[18px]"><span className="font-semibold mr-1">Zip Code: </span> 5800</h2>
                        <h2 className="text-[18px]"><span className="font-semibold mr-7">Email: </span> nazmulhossen@gmail.com</h2>
                        <h2 className="text-xl"><span className="font-semibold mr-5">Phone: </span> 01774-375863, 01857069236</h2>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-center items-center gap-5">
                <div className=" md:w-4/5 space-y-6 ">
                    <h2 className="text-2xl md:text-4xl my-4 font-semibold text-[#adadad] text-center">Education</h2>


                    <div tabIndex={0} className="collapse collapse-arrow border border-[#adadad46] text-[#adadad] bg-[#113a2642]">
                        <div className="collapse-title text-xl font-medium">
                            Secondary School Certificate (SSC)
                        </div>
                        <div className="collapse-content">
                            <p><span className="font-semibold">School: </span>Nizam Uddin High School, Karnibari</p>
                            <p><span className="font-semibold">Group: </span>Humanites</p>
                            <p><span className="font-semibold">Session: </span>2017-2018</p>
                            <p><span className="font-semibold">GPA: </span>4.33</p>

                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-[#adadad46] text-[#adadad] bg-[#113a2642]">
                        <div className="collapse-title text-xl font-medium">
                            Higher School Certificate (HSC)
                        </div>
                        <div className="collapse-content">
                            <p><span className="font-semibold">School: </span>Bogura YMCA Public School & College</p>
                            <p><span className="font-semibold">Group: </span>Humanites</p>
                            <p><span className="font-semibold">Session: </span>2019-2020</p>
                            <p><span className="font-semibold">GPA: </span>4.50</p>

                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-[#adadad46] text-[#adadad] bg-[#113a2642]">
                        <div className="collapse-title text-xl font-medium">
                            Hons
                        </div>
                        <div className="collapse-content">
                            <p><span className="font-semibold">School: </span>Govt. Shah Sultan College,Bogura</p>
                            <p><span className="font-semibold">Subject: </span>History</p>
                            <p><span className="font-semibold">Session: </span>2020-2024</p>
                            <p><span className="font-semibold">Runing... </span></p>

                        </div>
                    </div>




                </div>
               
                
            </div>
            
        </div>
    );
};

export default About;
