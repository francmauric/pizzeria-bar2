"use client"
import { useState, useEffect } from "react" ;

export const useScrollEffect = () => {
    const [navbarVisible, setNavbarVisible] = useState (true);

    const handleScroll = () => {
        if(window.scrollY > 100) {
            setNavbarVisible (false);
        } else { 
            setNavbarVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return navbarVisible;
};

/* export const setupScrollEffect = () => {
        if(typeof window !== "undefined") {
            return useScrollEffect();
        }
    

    return true;
}; */