"use client"

import { useState, useEffect } from 'react'
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'

const ScrollButton = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300) {
            setVisible(true);
        } else if(scrolled <= 300) {
            setVisible(false)
        }
    };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
    }, [])


  return (
    <button>
        <ArrowUpCircleIcon
            onClick={scrollToTop}
            className={visible ? 'inline h-12 w-12 text-dark bg-white rounded-full fixed right-4 bottom-24' : 'none'} />
    </button>
  )
};

export default ScrollButton;
