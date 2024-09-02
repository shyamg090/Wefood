import React from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const App = () => {

//   gsap.set("#follower", {xPercent: -50, yPercent: -50});

// let xTo = gsap.quickTo("#follower", "x", {duration: 0.6, ease: "power3"}),
//     yTo = gsap.quickTo("#follower", "y", {duration: 0.6, ease: "power3"});

// window.addEventListener("mousemove", e => {
//   xTo(e.clientX);
//   yTo(e.clientY);
// })

  return (
      <div className='' id='page'>
        {/* <div className='w-[2vw] h-[3.7vh] fixed top-0 left-0 bg-black rounded-full' id='follower' >

        </div> */}
      <Header />
      <Outlet />
      <Footer />
      </div>
  

  )
}

export default App;