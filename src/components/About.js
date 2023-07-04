import React from 'react'
import "../includes/css/home.css"
import blackBg1 from '../includes/images/bgBlackMd.png'
import blackBg2 from '../includes/images/bgBlackSm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import TsParticles from './TsParticles';
import ProfilePic from '../includes/images/anmol.jpg'
import Footer from './Footer';

const About = () => {


  return (
    <div className="relative top-[75px] md:top-0 md:left-[15%] md:w-[85%]">
      <TsParticles />

      <div className={`z-10 flex flex-col justify-end md:bg-[url('${blackBg1}')] bg-[url('${blackBg2}')] backdrop-blur-xl h-[200px] lg:bg-cover bg-left text-white`}>

        <div className="path p-10">
          <p>Home &nbsp;<FontAwesomeIcon icon={faAngleRight} /> &nbsp; About</p>
          <p className='text-5xl pb-3 pt-5'><strong>About</strong></p>
          <button disabled className='bg-white rounded-xl mr-2 w-[50px] h-[10px]'></button>
          <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
          <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
          <button disabled className='bg-white rounded-xl animate-pulse mr-2 w-[10px] h-[10px]'></button>
        </div>

      </div>


      <div className='text-white px-4 md:p-2 md:mx-8 flex flex-col lg:flex-row items-center justify-between'>
        
          <div className="about-body lg:pl-4 py-2 lg:w-[70%] text-justify">
              <div className="text-pink-500 text-3xl pt-2">Hi!</div>
              <div className="text-green-500 text-4xl pb-2">I am <span className='text-yellow-400'>Anmol!</span></div>
              <div className="text-green-400 md:text-xl">I am an aspiring <span className='text-violet-400'>computer programmer,</span> with proven problem-solving and troubleshooting skills.</div>
              <div className='text-green-400 md:text-xl'>I am currently pursuing my undergraduate degree in <span className='text-sky-400'>Computer Science and Engineering</span> at <span className='text-red-500'>NIT Sikkim.</span></div><br />
              <div className="text-green-400 md:text-xl">Recently, I have been working on <span className='text-violet-400'>full-stack web development</span> technologies and projects through <span className='text-yellow-600'>LAMP</span> and <span className='text-yellow-600'>MERN</span> stack.</div>
              <div className="text-green-400 md:text-xl">I am seeking an entry-level <span className='text-orange-400'>internship opportunities</span> to continue expanding my knowledge of different languages and systems and get more experience in <span className='text-violet-400'>software development.</span></div>

          </div>

          <div className='flex items-center justify-center lg:p-2 lg:w-[30%] py-3'>
            <img className="border-2 shadow-xl rounded-full border-slate-500 z-10 w-[150px] md:w-[250px] hover:scale-105 duration-500"src={ProfilePic} alt="" />
          </div>


      </div>
          <div className="text-white px-4 py-2 md:p-2 md:mx-8 lg:pl-4 flex flex-col lg:flex-row items-center justify-between  mb-10 pb-10 ">
              <div className="text-green-500 md:text-xl">Moreover, I have prior experience of working with <span className='text-violet-400'>web development</span> and design as a member of  <span className='text-red-500'>Web Development Cell, NIT Sikkim.</span> </div>
          </div>


      <Footer />

    </div>
  )
}

export default About