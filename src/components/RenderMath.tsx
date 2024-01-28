"use client";
import { MathJaxContext } from "better-react-mathjax";
import ReactMarkdown from "react-markdown";

const RenderMath = ({ content }: { content: string }) => {
  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    }
  };
  return (
    <MathJaxContext version={3} config={config}>
      <ReactMarkdown >{content}</ReactMarkdown>
    </MathJaxContext>
  );
};

export default RenderMath;
