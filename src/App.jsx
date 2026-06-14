import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import 'remixicon/fonts/remixicon.css'

function App() {

  let [showContent , setShowContent] = useState(false);

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to(".vi-mask-group" , {
      rotate : 10,
      duration:2,
      ease: "Power4.easeInOut",
      transformOrigin:"50% 50%"
    })
    .to(".vi-mask-group", {
      scale:10,
      duration:2,
      delay:-1.8,
      ease:"Expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate: function(){
        if(this.progress() > 0.9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
          }
      }
    })
  });

  useGSAP(()=>{
if(!showContent) return;

    gsap.to(".main",{
      scale: 1,
      rotate: 0,
      duration: 2,
      delay:"-1",
      ease:"Expo.easeInOut",
    });

     gsap.to(".sky",{
      scale: 1.7,
      rotate: 0,
      duration: 2,
      delay:"-0.8",
      ease:"Expo.easeInOut",
    });

     gsap.to(".bg",{
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay:"-0.8",
      ease:"Expo.easeInOut",
    });

    gsap.to(".girl",{
      scale: .35,
      x:"-50%",
      bottom:"-150%",
      rotate: 0,
      duration: 2,
      delay:"-0.8",
      ease:"Expo.easeInOut",
    });

    gsap.to(".text",{
      scale: 1,
      rotate: 0,
      duration: 2,
      delay:"-1",
      ease:"Expo.easeInOut",
    });
    

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove",function(e){
      const xMove = (e.clientX / window.innerWidth - .5) * 40;
      gsap.to(".imagesdiv .text",{
        x:`${ xMove *0.5 }%`,
      });
      gsap.to(".sky",{
        x: xMove ,
      });
      gsap.to(".bg",{
        x: xMove *1.7 ,
      });
      
    });
  },[showContent]);

  return (
    <>
    <div className="svg flex items-center justify-center fixed top-0 left-0 z-100 w-full h-screen overflow-hidden bg-black">
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="viMask">
            <rect width="100%" height="100%" fill="black"/>
            <g className="vi-mask-group">
              <text
              x="50%"
              y="50%"
              fontSize="250"
              textAnchor="middle"
              fill="white"
              dominantBaseline="middle"
              fontFamily="Arial Black"
              >
                VI
              </text>
            </g>
          </mask>
        </defs>

        <image
        href="./sky.png"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        mask="url(#viMask)"
        />
        <image 
        href="./bg.png"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        mask="url(#viMask)"
        />
        
      </svg>
    </div>
    {showContent &&
     (<div className="main w-full rotate-[-10deg] scale-[1.7]">
      <div className="landing  overflow-hidden relative w-full h-screen bg-black" >
        <div className="navbar absolute top-0 left-0 z-10 w-full py-2.5 px-10" >
          <div className="logo flex gap-4">
            <div className="lines flex flex-col gap-1">
              <div className="line w-10 h-0.5 bg-white" ></div>
              <div className="line w-7 h-0.5 bg-white" ></div>
              <div className="line w-5 h-0.5 bg-white" ></div>
            </div>
            <h3 className=' -mt-1 leading-none text-white' >Rockstar</h3>
          </div>
        </div>
        
        <div className="imagesdiv overflow-hidden relative w-full h-screen" >
          <img className="absolute scale-[1.5] rotate-[-20deg] sky top-0 left-0 w-full h-full object-cover" src="sky.png" alt= ""/>
          <img className="absolute scale-[1.8] rotate-[-5deg] bg top-0 left-0 w-full h-full " src="./bg.png" alt="" />

          <div className='text text-white scale-[1.4] rotate-[-10deg] flex flex-col gap-3   absolute top-10 left-1/2 -translate-x-1/2'>
          <h1 className='text-[3rem] leading-none -ml-15'>grand</h1>
          <h1 className='text-[3rem] leading-none ml-10'>theft</h1>
          <h1 className='text-[3rem] leading-none -ml-12'>auto</h1>
        </div>

          <img className="absolute girl -bottom-[550%] left-1/2 -translate-x-1/2 scale-[2] rotate-[-20deg] " src="./girlbg.png" alt="" />
        </div>
        <div className="btmbar absolute bottom-0 left-0 w-full py-4 px-4 bg-linear-to-t from-black to-transparent">
          <div className="flex gap-4  text-white items-center" >
            <i className="ri-arrow-down-line text-[15px]"></i>
            <h3 className="font-[Helvetica _Now_Display] text-[10px]">SCORLL DOWN</h3>
          </div>
          <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[25px]" src="./ps5.png" alt="" />
        </div>
      </div>
      <div className='w-full h-screen flex items-center justify-center px-10 bg-black' >
        <div className='cntnr flex text-white w-full h-[80%]'>
          <div className='limg relative w-1/2 h-full'>
          <img className='absolute  scale-[0.8] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
        </div>
        <div className='rg w-[40%] py-5 '>
          <h1 className='text-2xl' >Still Running</h1>
          <h1 className='text-2xl' >Not Hunting</h1>
          <p className=' mt-3 text-[6px] font-serif'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates optio vero sunt praesentium corrupti quas nemo possimus excepturi illo, exercitationem, et illum vitae?</p>
          <p className=' mt-2 text-[6px] font-serif'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque necessitatibus fugit quis quam!</p>
          <p className=' mt-2 text-[6px] font-serif'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque necessitatibus fugit quis quam! Lorem ipsum dolor sit</p>
          
          <button className='bg-yellow-500 px-1.5 py-1.5 text-xl text-black mt-3'>Download Now</button>

        </div>
        </div>
        
      </div>
      </div>
      )}
      </>
  );
}
export default App