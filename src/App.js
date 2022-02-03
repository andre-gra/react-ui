/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState} from "react";

const  App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen p-10 text-center">
      <h1 className="text-4xl">A React Codepen Template with tailwind CSS</h1>
      <p className="text-xl py-6">
        You clicked the button <strong>{count}</strong> times.
      </p>
      <button
        className="bg-yellow-200 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider text-red-600 focus:outline-none"
        onClick={() => setCount(count + 1)}
      >
        Click
      </button>
    </div>
  );
};

export default App;
