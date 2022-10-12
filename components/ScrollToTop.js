import React from "react";
import { BiUpArrowAlt } from "react-icons/bi"
import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [backToTop, setBackToTop] = useState(false);
    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })

    }, [])


    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {
                backToTop && (
                    <button className="fixed bottom-12 right-12 h-12 w-12 bg-yellow-700 transition-all duration-300 ease-in bg-gradient-to-tr from-orange-500 to-yellow-500 rounded-full shadow-2xl flex items-center justify-center" onClick={scrollUp}><BiUpArrowAlt className="text-3xl font-medium" /></button>
                )
            }
        </>
    );
}
