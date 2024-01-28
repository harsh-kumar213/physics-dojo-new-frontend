"use client";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import { useEffect, useState } from "react";
import { testAnswer } from "@/actions/challange";
import { useRouter } from "next/navigation";

const Editor = ({
  problemId,
  codeConent,
}: {
  problemId: number;
  codeConent: string;
}) => {
  const router = useRouter();
  const [theme, setTheme] = useState("monokai");
  const [code, setCode] = useState(codeConent);
  const [result, setResult] = useState("");
  const [error, setErrors] = useState("");
  const onLoad = (editor: any) => {
    console.log("i've loaded");
  };
  const onChange = (newValue: any) => {
    setCode(newValue);
  };

  useEffect(() => {
    // get theme from localstorage
    let userTheme = localStorage.getItem("theme");
    if (userTheme) {
      setTheme(userTheme);
    }
  }, []);

  const handleSolve = async () => {
    
    let res = await testAnswer({
      data: {
        answer: code,
        problemId: problemId,
        arguments: "",
      },
    });
    setResult(res?.data?.testAnswer?.message as string);
    setErrors(res?.data?.testAnswer?.error as string);
    router.refresh();
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex py-2 justify-between items-center px-0">
        <select
          name="Theme"
          className="py-1 rounded text-textColor bg-transparent"
          value={theme}
          onChange={(e) => {
            setTheme(e.target.value);
            localStorage.setItem("theme", e.target.value);
          }}
        >
          <option value="github">github</option>
          <option value="monokai">monokai</option>
          <option value="tomorrow">tomorrow</option>
          <option value="tomorrow_night_blue">tomorrow night blue</option>
          <option value="tomorrow_night">tomorrow night</option>
          <option value="kuroir">kuroir</option>
          <option value="twilight">twilight</option>
          <option value="xcode">xcode</option>
          <option value="textmate">textmate</option>
          <option value="solarized_dark">solarized_dark</option>
          <option value="solarized_light">solarized_light</option>
          <option value="terminal">terminal</option>
        </select>
        <button
          onClick={() => {
            setResult("");
            setErrors("");
            handleSolve();
          }}
          className="text-green-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <AceEditor
        placeholder=""
        mode="python"
        theme={theme}
        width="100%"
        height="100%"
        name="editor"
        className="h-full w-full"
        onLoad={onLoad}
        onChange={onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={code}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <div className="py-4 bg-black text-white px-4">
        <div className="flex">
          <span>{">>"}</span>
          {error && <span className="px-4 text-red-400">{error}</span>}
          {result && <span className="px-4 text-green-400">{result}</span>}
        </div>
      </div>
    </div>
  );
};

export default Editor;
