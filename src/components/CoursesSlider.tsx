"use client";
import { CourseType } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
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
const CoursesSlider = ({ courses }: { courses: CourseType[] }) => {
  return (
    <div className="flex flex-col w-full py-10">
      <div className="flex max-w-screen-2xl mx-auto  w-full px-2">
        <h2 className="font-bold uppercase  text-xl">TOP PHYSICS COURSES</h2>
        {/* <div className="border-secondary border-t-2 flex-auto mx-5 relative mt-3"></div> */}
      </div>
      <div className="flex py-6">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={5500}
          swipeable={true}
          draggable={true}
          ssr={true}
          containerClass="w-full "
        >
          {courses &&
            courses.map((course, i) => (
              <div
                key={i}
                className=" w-full py-6 px-4 h-full aspect-video  p-1"
              >
                <Link
                  href="/learn/1"
                  className="relative w-full h-full bg-accent rounded flex flex-col justify-end py-2 px-3  "
                >
                  <div className="absolute w-full  inset-0 p-2 flex justify-end items-end">
                    <div className="w-1/2 h-full ">
                      {course.image && (
                        <Image
                          src={
                            ((process.env.NEXT_PUBLIC_MEDIA_URL as string) +
                              course.image) as string
                          }
                          alt="Quantum Mechanics"
                          objectFit="cover"
                          width={150}
                          height={150}
                          className="h-full object-cover aspect-square object-center"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h6 className="text-white z-10 font-medium text-sm">
                      {course.branch.name}
                    </h6>
                    <h6 className="text-white z-10 font-light text-xs">
                      5 chapters
                    </h6>
                    <h2 className="text-white z-10 uppercase font-semibold">
                      {course.name}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CoursesSlider;
