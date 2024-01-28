
import Banner from "@/components/Banner";
import Animation from "@/components/Animation"
import CoursesSlider from "@/components/CoursesSlider";
import LearnPhysics from "@/components/LearnPhysics";
import PracticeQuiz from "@/components/PracticeQuiz";
import ResearchSlider from "@/components/ResearchSlider";
import WhoFor from "@/components/WhoFor";
import { ChallengeType, CourseType, ResearchTaskType } from "@/gql/graphql";
import { LANDING_PAGE_QUERY } from "@/graphql/queries";
import { makeClient } from "@/lib/urlq";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";

const HomePage = async () => {
  let {
    data,
    errors,
  }: {
    data: {
      allCourses: {
        edges: { node: CourseType }[];
      };
      challenges: {
        edges: { node: ChallengeType }[];
      };
      allResearchTasks: {
        edges: { node: ResearchTaskType }[];
      };
    };
    errors: any[];
  } = await makeClient()
    .query(LANDING_PAGE_QUERY, {
      coursesfirst: 6,
      challengesFirst: 6,
      researchFirst: 6,
    })
    .then((res: any) => res);

  return (
    <div className="flex flex-col w-full text-textColor">
      <Animation/>
      <Banner />
      <WhoFor />
      <div className="flex flex-col text-textColor bg-primary w-full justify-center items-center h-full py-10">
        <CoursesSlider
          courses={data.allCourses.edges.map((edge) => edge.node)}
        />
        
        <ResearchSlider
          researchTasks={data.allResearchTasks.edges.map((edge) => edge.node)}
        />
      </div>
      <LearnPhysics />
      <div className="w-full flex flex-col py-20 px-2 ">
        <div className="grid md:grid-cols-2 max-w-screen-2xl mx-auto w-full justify-between items-baseline">
          <div></div>
          <div className="flex flex-col space-y-6">
            <h2 className="text-5xl font-extrabold max-w-sm">Ready to start haqing?</h2>
            <div>
              <Link
                href="/auth/register"
                className="bg-accent shadow py-2 px-6 rounded text-white"
              >
                Get started now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
