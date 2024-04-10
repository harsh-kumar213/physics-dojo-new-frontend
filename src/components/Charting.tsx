"use client";
import { CourseType } from "@/gql/graphql";
import { JSCharting } from "jscharting-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const Charting = ({
  courses,
}: {
  courses: {
    node: CourseType;
  }[];
}) => {
  const router = useRouter();
  const chartRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  let points = courses.map((course) => {
    return {
      name: course.node.name,
      id: `${course.node.pk}`,
      parent: course.node.parents.edges
        .map((parent) => parent?.node?.pk)
        .join(","),
      attributes: {
        desription: course.node.description,
      },
      connectorLine: {
        /* No radius on first angle, then 5px on the second angle. */
        radius: [0, 5],
        color: "#424242",
        width: 1,
        caps: { end: { type: "arrow", size: 6 } },
      },
    };
  });

  

  console.log(points);
  var highlightColor = "#544040",
    mutedHighlightColor = "#504545",
    selectionMode = "single";
  let attr = {
    debug: false,
    type: "organizational straight down",
    legend_visible: false,
    pointSelection: "single",
    events: {
      pointSelectionChanged: (points: any) => {
        let selectedPoints = points.map(function (p: any) {
          return p.id;
        });
        router.push(`/learn/${selectedPoints[0]}`);
      },
    },
    defaultSeries: {
      color: "#fffff6",
      pointSelection: selectionMode,
      defaultPoint: {
        color:"white",
        /* Default line styling for connector lines. */
        connectorLine: {
          color: "#b6b6b6",
          width: 1,
        },
        
        outline: { color: "#cbcbcb", width: 1 },
        
        states: {
          /* The select state is used by points that are clicked. */
          select: {
            fill: "#bac9e1",
            outline: { color: highlightColor },
          },
          /* The mute state is used to style points that are part a clicked path. */
          mute: {
            enabled: true,
            opacity: 1,
            outline_color: mutedHighlightColor,
          },
          hover:{
            transform:"rotateZ(180deg)"
          },
        },
        annotation: { padding: [5, 10], margin: 5 },
      },
    },
    series: [
      {
        defaultPoint: {
          label: {
            text:
              "" +
              "<span  style='font-size: 12px; color: white;'>%name</span>" +
              "<br/>",
            autoWrap: false,
          },

          connectorLine_color: "#747c72",
          annotation: {
            padding: 9,
            corners: ["round"],
            margin: [15, 5, 10, 0],
            height:80,
            width:170,
          },
          
          color: "rgb(0, 128, 128)",
          tooltip: "<b>%name</b>",
        },
        points: points || [],
      },
    ],
  };

  return (
    
      <JSCharting
      className="h-[500%] bg-primary "
      ref={chartRef}
      options={attr}
    
    />
    
  );
};

export default Charting;
