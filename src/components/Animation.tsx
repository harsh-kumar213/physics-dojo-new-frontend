"use client";
import React, { useEffect, useState, Suspense } from 'react';
import f from '@/animationImage/ezgif-frame-001.jpg'
const Animation: React.FC = () => {
  const [pointerPosition, setPointerPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [imageSrc, setImageSrc] = useState(f);
  const totalImages = 70; // Adjust this number according to the total number of photos

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPointerPosition({ x: event.clientX, y: event.clientY });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      const imageModule = await import(`@/animationImage/ezgif-frame-${calculateImageIndex().toString().padStart(3, '0')}.jpg`);
      setImageSrc(imageModule.default);
    };

    loadImages();
  }, [pointerPosition]); // Re-run effect when pointerPosition changes

  function calculateImageIndex(): number {
    if (typeof window === 'undefined') {
      return 1; // Return default index if window is not defined
    }

    // Calculate the image index based on the pointer's position
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const distance = Math.sqrt((pointerPosition.x - centerX) ** 2 + (pointerPosition.y - centerY) ** 2);
    const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
    const index = Math.floor((distance / maxDistance) * totalImages) + 1;

    return Math.min(index, totalImages);
  }

  return (
    <div className='w-full h-[700px] bg-primary'>
    <div id='animationContainer' className="relative border-none flex justify-center items-center   -z-0  w-full h-full bg-black overflow-hidden " 
   >
         <img src={`${imageSrc.src}`} alt="animation" className=' h-[300px] w-72' style={{borderRadius:'50%'} } />
       </div> 
    </div>
  );
};

export default Animation;
