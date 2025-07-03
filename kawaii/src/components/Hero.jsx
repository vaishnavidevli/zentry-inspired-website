import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from './Button'
import {useGSAP} from '@gsap/react'

const Hero = () => {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [hasClicked, sethasClicked] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [loadedVideos, setloadedVideos] = useState(0);
  const totvd = 3;
  const nextVdRef = useRef(null);

  const handleVdLoad = () => {
    setloadedVideos((prev) => prev + 1);
  };

  const upcomingVdIdx=(currentIndex%totvd)+1;
  const handleMiniVdClick = () => {
    sethasClicked(true);
    setcurrentIndex(upcomingVdIdx);
  };

  useGSAP(func= () => {
    if(hasClicked){
      gsap.set('#next-video',{visibility:'visible'});
      gsap.to('#next-video',{
        transformOrigin: 'center center',
        scale:1,
        width:'100%',
        height: '100%',
        duration: 1,
        ease: 'power1.inOut',
        onStart:()=> nextVdRef.current.play(),
      })
      gsap.from('#current-video',{
        transformOrigin:'center center',
        scale:1,
        duration:1.5,
        ease:'power1.inOut'
      })
    }
  },{dependencies:[currentIndex],revertOnUpdate: true})

  const getVdSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVdRef}
                src={getVdSrc(upcomingVdIdx)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVdLoad}
              />
            </div>
          </div>
          <video
             ref={nextVdRef}
             src={getVdSrc(currentIndex)}
             loop
             muted
             id="next-video"
             className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
             onLoadedData={handleVdLoad}
          />

          <video
             src={getVdSrc(currentIndex === totvd-1?1:currentIndex)}
             autoPlay
             loop
             muted
             className="absolute left-0 top-0 size-full object-cover object-center"
             onLoadedData={handleVdLoad}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 z-40 right-5 text-blue-75">
            G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
            <div className="mt-24 px-5 sm:px-10">
                <h1 className="special-font hero-heading text-blue-100">redefi<b>n</b>e</h1>
                <p className="mb-3 max-w-64 font-robert-regular text-blue-100">Enter the Metagame Layer <br/> Unleash the Play Economy</p>
                <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow/>} containerClass="!bg-yellow-300 flex-center gap-1" />
            </div>

        </div>
      </div>
       <h1 className="special-font hero-heading absolute bottom-5 z-40 right-5 text-black">
            G<b>a</b>ming
        </h1>
    </div>
  );
};

export default Hero;
