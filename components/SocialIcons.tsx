import { link } from "fs";
import React from "react";

import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socialLinks = [
{ icon: FaFacebook, link:'#' },
{ icon: FaTwitter, link: '#' },
{ icon: FaGithub, link: '#' },
{ icon: FaLinkedin, link: '#' },
{ icon: FaInstagram, link: '#' },
]


const SocialIcons = () => {

 

    return (
        <div className="text-orange-400">
           {socialLinks.map(({ icon: Icon, link}, index) => (
              <a
              key={index}
              href={link}
              className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-white hover:bg-orange-500 duration-300"
              >
                <Icon size={20}/>
                </a>
           ))}
        </div>
    )
}

export default SocialIcons;

