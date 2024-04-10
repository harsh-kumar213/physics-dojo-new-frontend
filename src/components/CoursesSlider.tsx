
const CoursesSlider = async () => {
  
  
  return (
    <div className="flex flex-col  w-full py-10">
      <div className="flex max-w-screen-2xl mx-auto w-full px-2">
        <h2 className="font-bold uppercase text-xl">TOP PHYSICS COURSES</h2>
      </div>
      <div>
      
          <div className="flex  flex-col w-full  gap-4 py-10 justify-center bg-primary items-center ">
             <div className=" node bg-accent h-10 w-20 md:h-16 md:w-32 text-xs flex justify-center items-center rounded  ">
              <span className="default-text">Intro Physics</span>
              <span className="hidden hover-text">joke</span>
              </div>
             <div className="line1 border-[1px] border-emerald-700 h-0 w-28 md:w-60 -rotate-12 relative right-16 md:right-[7.3rem] bottom-1 md:-bottom-2"
             ></div>
             <div className="line2 border-[1px] h-0 w-7 md:w-14 rotate-90 relative bottom-5 md:bottom-2 border-emerald-700"></div>
             <div className="line3 border-[1px] h-0 w-28 md:w-60 rotate-12 relative left-16 md:left-[7.3rem] bottom-10 md:bottom-7 border-emerald-700"></div>
             <div className=" node bg-accent h-10 w-20 md:h-16 md:w-32 pl-1 text-xs flex justify-center items-center rounded relative right-32 md:right-56 bottom-11 md:bottom-5">
             <span className="default-text">Classical Mechanics</span>
              <span className="hidden hover-text">joke</span></div>
             <div className="line4 border-[1px] h-0 w-7 md:w-14 rotate-90 relative right-32 bottom-12 md:right-[14.2rem] md:bottom-2 border-emerald-700"></div>
             <div className="line5 border-[1px] h-0 w-28 md:w-60 rotate-12 relative right-[4.5rem] bottom-[4.2rem] md:right-[6.8rem] md:bottom-7 border-emerald-700"></div>
             <div className=" node bg-accent h-10 w-20 md:h-16 md:w-32 pl-1 text-xs flex justify-center items-center rounded relative bottom-[8.5rem] md:bottom-[8.3rem]">
             <span className="default-text">Quantum Mechanics</span>
              <span className="hidden hover-text">joke</span></div>
             <div className="line6 border-[1px] h-0 w-28 md:w-60 -rotate-12 relative right-[4.5rem] bottom-[8.7rem] md:right-28 md:bottom-[7.7rem] border-emerald-700"></div>
             <div className="line7 border-[1px] h-0 w-28 md:w-60 rotate-12 relative left-20 bottom-40 md:left-[7.7rem] md:bottom-[8.8rem] border-emerald-700"></div>
             <div className=" node bg-accent h-10 w-20 md:h-16 md:w-32 pl-1 text-[0.5rem] md:text-xs flex justify-center items-center rounded relative left-36 md:left-56 bottom-[14.2rem] md:bottom-[15.6rem]">
             <span className="default-text">Electromagnetism</span>
              <span className="hidden hover-text">joke</span></div>
             <div className="line8 border-[1px] h-0 w-28 md:w-60  -rotate-12 relative left-20 bottom-[14.4rem] md:left-[7.9rem] md:bottom-60 border-emerald-700"></div>
             <div className="line9 border-[1px] h-0 w-6 md:w-14  rotate-90 relative bottom-[15.5rem] left-[8.4rem] md:left-60 md:bottom-64 border-emerald-700"></div>
             <div className=" node bg-accent h-10 w-20 md:h-16 md:w-32 text-xs pl-1 flex justify-center items-center rounded relative right-32 bottom-64 md:right-56 md:bottom-[15.5rem]">
             <span className="default-text">Statistical Mechanics</span>
              <span className="hidden hover-text">joke</span></div>
             <div className=" node bg-accent h-10 w-20 md:h-16 md:w-32 text-xs pl-1 flex justify-center items-center rounded relative bottom-[19.4rem] md:bottom-[20.5rem]">
             <span className="default-text">General Relativity</span>
              <span className="hidden hover-text">joke</span></div>
             <div className=" node bg-accent h-10 w-20 md:h-16 md:w-32 text-xs pl-1 flex justify-center items-center rounded relative left-36 bottom-[23rem] md:left-56 md:bottom-[25.4rem]">
             <span className="default-text">QuantumField Theory</span>
              <span className="hidden hover-text">joke</span></div>
       
      </div>
    </div>
    </div>
  );
  };


export default CoursesSlider;
