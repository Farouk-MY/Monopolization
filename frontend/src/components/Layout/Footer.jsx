import React from "react";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
    footercompanyLinks,
    footerProductLinks,
    footerSupportLinks,
} from "../../static/data";

const Footer = () => {
    return (
        <div className="bg-[#000] text-white">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#E8E5E5] py-7">
                <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5" style={{paddingLeft:"80px"}}>
                    <span className="text-[#FF2222]">Subscribe</span><span className="text-[#000000]"> For The News{" "}</span>
                    <br />
                </h1>
                <div style={{paddingRight:'90px'}}>
                    <input
                        type="text"
                        required
                        placeholder="Enter your email..."
                        className="text-black font-semibold sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
                     style={{borderRadius:"10px "}}/>
                    <button className="bg-[#FF2222] hover:bg-black duration-300 px-5 py-2.5 rounded-md text-whie md:w-auto w-full">
                        Submit
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center" style={{paddingTop:'60px'}}>
                <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
                    <p style={{color:"red",fontSize:'35px', fontWeight:600, fontFamily:"cursive"}}>TuniMono</p> <br />
                    <img src="/img/logo2.png" alt="" srcset="" style={{width:"100px", height:"100px", marginLeft:"30px"}} />
                    <br />
                    <div className="flex items-center mt-[15px]">
                        <AiFillFacebook size={25} className="cursor-pointer" />
                        <AiOutlineTwitter
                            size={25}
                            style={{ marginLeft: "15px", cursor: "pointer" }}
                        />
                        <AiFillInstagram
                            size={25}
                            style={{ marginLeft: "15px", cursor: "pointer" }}
                        />
                        <AiFillYoutube
                            size={25}
                            style={{ marginLeft: "15px", cursor: "pointer" }}
                        />
                    </div>
                </ul>

                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold">Company</h1>
                    {footerProductLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                                to={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold">Shop</h1>
                    {footercompanyLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                                to={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className="text-center sm:text-start">
                    <h1 className="mb-1 font-semibold">Support</h1>
                    {footerSupportLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                                to={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
              style={{display:"inline-block", textAlign:'center', marginLeft:'500px'}}>
                <span>© 2024 Tunisia. All rights reserved.</span><br />
                <span>Terms · Privacy Policy</span>
                
            </div>
        </div>
    );
};

export default Footer;