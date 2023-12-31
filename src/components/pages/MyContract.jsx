import Titile from "../../Shared/Titile";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useRef } from "react";



const MyContract = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_qq73p72', 'template_xyo85wg', form.current, 'BwWYSCh22KjBFTByU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };





    return (
        <div className="max-w-screen-xl mx-auto min-h-screen ">
            <Titile heading={'My Contact'}></Titile>


            <div className="md:flex mx-auto">
                <div className="md:w-4/6  px-6">
                    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto ">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="form_name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="form_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <textarea name="message" id="floating_message" className="block py-2.5 px-0 w-full h-20 text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required></textarea>
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                        </div>


                        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                    </form>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold border-gray-300 border-b-2 pb-3 mb-3 text-[#adadad]">Social Midea </h2>
                    <div className="md: flex gap-7 mt-4">
                        <a href="https://www.facebook.com/nazmulhossen539/" className="mb-4">
                            <FaFacebook className="text-green-500 text-4xl hover:text-6xl"></FaFacebook>
                        </a>
                        <a href="https://www.instagram.com/nazmulhossen01/" className="mb-4">
                            <FaInstagram className="text-green-500 text-4xl hover:text-6xl"></FaInstagram>
                        </a>
                        <a href="#" className="mb-4">
                            <FaLinkedin className="text-green-500 text-4xl hover:text-blu"></FaLinkedin>
                        </a>
                    </div>
                </div>

            </div>
            <MessengerCustomerChat
                pageId="<PAGE_ID>"
                appId="<APP_ID>"
            />,

        </div>
    );
};

export default MyContract;