import Titile from "../../Shared/Titile";
import about2 from "../../../public/images/about3.png";

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
                    <img className="" src="/public/images/about1.png" alt="" />
                </div>
                <div className="w-4/5 space-y-8 text-[#adadad]">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis mollitia sit sed cupiditate quisquam. Odit assumenda quas a, harum eaque accusamus debitis voluptas, tempora magnam eveniet corrupti corporis dolor eligendi nostrum error dolorum dicta. Qui ea fugit id consequuntur saepe laudantium nemo labore delectus placeat snam expedita quam totam!</p>
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
        </div>
    );
};

export default About;
