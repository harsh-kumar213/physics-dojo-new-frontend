"use client";
import { ResearchTaskType } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1090 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1090, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export { responsive };
const ResearchSlider = ({
  researchTasks
}: {
  researchTasks: ResearchTaskType[];
}) => {
  return (
    <div className="flex flex-col w-full py-10 border-secondary border-t-2">
      <div className="flex max-w-screen-2xl mx-auto w-full px-2">
        <h2 className="font-bold uppercase text-xl">TOP RESEARCh PAPERS</h2>
        {/* <div className="border-secondary border-t-2 flex-auto mx-5 relative mt-3"></div> */}
      </div>
      <div className="flex justify-start items-center flex-wrap mx-16 py-7 px-8">
        
          {
            researchTasks &&
            researchTasks
            .map((task, i) => (
              <div
                key={i}
                className="w-full  md:w-1/2 lg:w-1/3 h-56 px-2 py-2"
              >

                <Link
                  href={`/research/${task.pk}`}
                  className="relative w-full h-full bg-accent rounded flex flex-col justify-end py-2 px-3 text-md font-semibold "
                >
                  <div className="absolute w-full  inset-0 p-2 flex justify-end items-end">
                    <div className="w-1/2 h-full ">
                      <Image
                        src={
                          (process.env.NEXT_PUBLIC_MEDIA_URL as string  +
                            task.image) as string
                        }
                        alt="Quantum Mechanics"
                        objectFit="cover"
                        width={150}
                        height={150}
                        className="h-full object-cover aspect-square object-center"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h6 className="text-white z-10 font-light"></h6>
                    <h2 className="text-white z-10 uppercase">
                      {
                        task.title
                      }
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
        
      </div>
    </div>
  );
};

export default ResearchSlider;
