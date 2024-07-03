import React from "react";

type Link = {
    link: string;
    name: string;
  };

  
  type ItemProps = {
    Links: Link[];
    title: string;
  }  
const Item = ({ Links, title }: ItemProps) => {

    return(
        <ul>
            <h1 className="mb-1 font-semibold">{title}</h1>
            {Links.map((link: Link, index: number) => (
                <li key={index}>
                <a className="text-gray-400 hover:text-orange-400 duration-300
                                text-sm cursor-pointer leading-6"   
                    href={link.link}
                >
                    {link.name}
                </a>
                </li>
            ))}
        </ul>
    )
};

export default Item;