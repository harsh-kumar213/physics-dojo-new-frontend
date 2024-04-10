"use client";
import SingleCourse from "@/components/SingleCourse";
import { CourseType, CourseTypeEdge } from "@/gql/graphql";
import Link from "next/link";
import { Tree, TreeNode } from "react-organizational-chart";

const generateTree = (data: any) => {
  if (!data) return null;

  return (
    <TreeNode label={data.name} key={data.pk}>
      {data.children &&
        data.children.map((child: any) => (
          <TreeNode
            key={child.pk}
            label={
              <div className="">
                <Link
                  href={`/learn/${child.pk}`}
                  className="w-96 bg-accent rounded aspect-video flex flex-col 
          justify-end text-xl font-bold text-white text-left p-2"
                >
                  {child.name}
                </Link>
              </div>
            }
          >
            {child?.children?.length && generateTree(child)}
          </TreeNode>
        ))}
    </TreeNode>
  );
};

const DrawTree = ({
  courses,
}: {
  courses: {
    node: CourseType;
  }[];
}) => {

  const createHierarchy = (courses: any, parent: any) => {
    const children = courses
      .filter(
        ({ node }: { node: any }) => node.parent && node.parent.pk === parent.pk
      )
      .map(({ node }: { node: any }) => ({
        ...node,
        children: createHierarchy(courses, node),
      }));
    return children.length > 0 ? children : null;
  };

  const rootCourse = courses.find(({ node }) => node.parents === null);
  const hierarchy = {
    ...rootCourse?.node,
    children: createHierarchy(courses, rootCourse?.node),
  };
  console.log(hierarchy)
  return (
    <Tree
      lineWidth={"4px"}
      lineColor={"blue"}
      lineBorderRadius={"10px"}
      label={
        <div className="bg-accent rounded max-w-xs mx-auto flex w-full">
          <Link
            href={`/learn/?topic=${hierarchy?.branch?.name}`}
            className="rounded flex flex-col w-full justify-center items-center"
          >
            <div
              className="w-96 bg-accent rounded aspect-video flex flex-col 
            justify-center items-center text-xl font-bold text-white text-center"
            >
              {hierarchy.name}
            </div>
          </Link>
        </div>
      }
    >
      {hierarchy?.children && generateTree(hierarchy)}
    </Tree>
  );
};

export default DrawTree;
