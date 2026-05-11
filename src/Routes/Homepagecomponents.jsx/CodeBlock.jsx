function CodeBlock() {
  return (
    <div className="h-1/3 w-1/3 absolute left-[66%] top-[70%] transform -translate-x-1/2 -translate-y-1/2 ">
      <div className="text-white bg-slate-900 rounded-2xl p-4 font-mono">
        
        <div>
          <span className="text-blue-500">import</span>{" "}
          <span className="text-gray-400">{"{"}</span>
          motion
          <span className="text-gray-400">{"}"}</span>{" "}
          <span className="text-blue-500">from</span>{" "}
          <span className="text-purple-500">"React-motion"</span>;
        </div>

        <div className="pl-2">
          <span className="text-[#60A5FA]">function</span>{" "}
          <span className="text-yellow-500">Component</span>
          ()&nbsp;
          <span className="text-gray-300">{"{"}</span>
        </div>

        <div className="pl-4">
          <span className="text-cyan-400">return</span>{" "}
          <span className="text-gray-300">(</span>
        </div>

        <div className="pl-8">
          <span>{"<"}</span>
          <span className="text-yellow-500">motion.div</span>
        </div>

        <div className="pl-8">
          <span className="text-green-500">transition</span>=
          <span className="text-gray-300">{"{{"}</span>
          <span className="text-green-500">ease:</span>{" "}
          <span className="text-purple-500">"linear"</span>{" "}
          <span className="text-gray-300">{"}}"}</span>
        </div>

        <div className="pl-8">
          <span className="text-green-500">animate</span>=
          <span className="text-gray-300">{"{{"}</span>
          <span className="text-green-500">rotate</span>:{" "}
          <span className="text-yellow-500">360</span>,{" "}
          <span className="text-green-500">scale</span>:{" "}
          <span className="text-yellow-500">2</span>{" "}
          <span className="text-gray-300">{"}}"}</span>
        </div>

        <div className="text-gray-300 pl-4">/{" >"}</div>

        <div className="text-gray-300 pl-2">);</div>

        <div className="text-gray-300">{"}"}</div>
      </div>
    </div>
  );
}

export default CodeBlock;