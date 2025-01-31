import React from "react";

const CounterpartComp = () => {
  return (
    <>
      <div className="h-[350px] static rounded-lg shadow-3xl border-r-4 border-dashed overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-300 to-slate-300 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1>
          <p className="text-white mt-1">
            The most popular peer to peer lending at SEA
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterpartComp;
