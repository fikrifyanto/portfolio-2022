import { useEffect, useState, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  const [buttonExist, setIsButtonExist] = useState(false);
  const intervalRef = useRef();
  const play = useRef(false);

  useEffect(() => {
    clearInterval(intervalRef.current);
  }, [buttonExist]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      let allDiv = document.querySelectorAll("div");
      if (allDiv[6] && allDiv[10]) {
        allDiv[6].classList.add("-z-10");
        allDiv[6].classList.add("opacity-0");
        allDiv[10].classList.add("-z-10");
        allDiv[10].classList.add("opacity-0");

        allDiv[6].classList.add("transition-all");
        allDiv[6].classList.add("duration-700");
        allDiv[10].classList.add("transition-all");
        allDiv[10].classList.add("duration-700");

        document.getElementById("loading").classList.add("hidden");
        document.getElementById("loading").classList.remove("flex");
        setIsButtonExist(true);
      }
    }, 200);
    return () => clearInterval(intervalRef.current);
  }, []);

  const togglePlay = () => {
    let allDiv = document.querySelectorAll("div");

    play.current = !play.current;

    if (play.current) {
      if (allDiv[6] && allDiv[10]) {
        allDiv[6].classList.remove("-z-10");
        allDiv[6].classList.remove("opacity-0");
        allDiv[10].classList.remove("-z-10");
        allDiv[10].classList.remove("opacity-0");
      }
      document.getElementById("content").classList.add("opacity-0");
      document.getElementById("instruction").classList.add("opacity-100");
      document.getElementById("instruction").classList.remove("-z-10");
      document.getElementById("content").classList.remove("opacity-100");
      document.getElementById("instruction").classList.remove("opacity-0");

      setTimeout(() => {
        document.getElementById("content").classList.add("-z-10");
      }, 800);
    } else {
      if (allDiv[6] && allDiv[10]) {
        allDiv[6].classList.add("-z-10");
        allDiv[6].classList.add("opacity-0");
        allDiv[10].classList.add("-z-10");
        allDiv[10].classList.add("opacity-0");
      }
      document.getElementById("content").classList.add("opacity-100");
      document.getElementById("content").classList.remove("-z-10");
      document.getElementById("instruction").classList.add("opacity-0");
      document.getElementById("content").classList.remove("opacity-0");
      document.getElementById("instruction").classList.remove("opacity-100");

      setTimeout(() => {
        document.getElementById("instruction").classList.add("-z-10");
      }, 800);
    }
  };

  return (
    <div className="h-screen w-screen relative">
      <div
        id="content"
        className="transition-all duration-700 absolute text-white text-center h-screen w-screen bg-black bg-opacity-40 flex flex-col items-center justify-center"
      >
        <h1 className="drop-shadow text-3xl font-bold">A Programmer and Learner</h1>
        <p className="drop-shadow text-lg mt-6 max-w-lg px-4">
          Hello, My name is Fikri. I've been writing 'Hello World' since 2019. I have experience
          working in companies and freelancing with various projects. And now, I'm interested in
          working with you.
        </p>
        <a
          href="mailto:fikrifyanto@gmail.com"
          className="hover:scale-110 transition-all duration-700 drop-shadow-sm inline-block rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 px-6 py-2 mt-6"
        >
          Get In Touch
        </a>
        <button
          onClick={togglePlay}
          className="transition-all duration-300 hover:scale-125 mt-10 hover:ring-2 ring-white rounded-full h-14 w-14 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="ml-1 w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </button>
      </div>
      <button
        id="instruction"
        onClick={togglePlay}
        className="flex transiton-all duration-700 opacity-0 absolute left-8 md:left-10 top-8 md:top-14 justify-center gap-12 ring-2 ring-white bg-white/30 p-2 rounded-lg backdrop-blur-sm group hover:scale-75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 stroke-white group-hover:scale-[2] transition-all duration-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </button>
      <div
        id="loading"
        className="bg-gradient-to-t from-yellow-300 via-yellow-100 to-yellow-50 transition-all duration-700 absolute text-slate-600 font-medium text-center h-screen w-screen flex flex-col items-center justify-center"
      >
        <div className="relative w-36 bg-gray-200 rounded-full shadow">
          <div
            style={{ width: "80%" }}
            className="h-4 rounded-full bg-lime-500 overflow-hidden relative after:absolute after:inset-0 after:-translate-x-full after:content-[''] after:rounded-full after:bg-gradient-to-r after:from-white/0 after:to-white after:animate-shimmer"
          ></div>
        </div>
        <p className="mt-2">Loading...</p>
      </div>
      <Spline scene="https://prod.spline.design/RMRtLg2CzdxFXSm3/scene.splinecode" />
    </div>
  );
}
