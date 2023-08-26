import React from 'react';
import image1 from '../../images/brainStationForce.png'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
    <footer className="footer mt-10 items-center sm:py-2 md:py-4 bg-[#E4F3FF] text-black">
  <div className="items-center grid-flow-col">
    <img className="w-10 rounded-full" src={image1} alt="" />
  </div> 
  <div>
  <p className='text-center sm:ml-0 md:ml-[280px]'>Copyright © 2023 - MD : Sadiqur Rahman &#x1F499;</p>
  </div>
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end sm:mr-0 md:mr-10">
         <div>
          <Link to='https://github.com/Sadiqur199' target='_blank'><BsGithub className='w-5 h-5'></BsGithub></Link>
         </div>
         <div>
          <Link to='https://www.facebook.com/musfiqur.rohmanshadik' target='_blank'><BsFacebook className='w-5 h-5'></BsFacebook></Link>
         </div>
         <div>
          <Link to='https://www.linkedin.com/in/sadiqur-rahman-3255b11a3/' target='_blank'><BsLinkedin className='w-5 h-5'></BsLinkedin></Link>
         </div>
  </div>
</footer>
    </>
  );
};

export default Footer;