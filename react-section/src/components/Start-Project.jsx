import React, { useEffect, useState } from "react";
import Product_card from "./Product-card";
import vs from "../assets/vscode.png";



function StartProject({
    setSelectedProject,
    selectedProject,
    setShowStartProject,
    onViewProgress,
    setShowViewDetails
}) {
    const [time, setTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const [showVSCodeAlert, setShowVSCodeAlert] = useState(false);
    const [showCompiler, setShowCompiler] = useState(false);

    useEffect(() => {
        let interval;

        if (isTimerRunning) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isTimerRunning]);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${String(hrs).padStart(2, "0")} : ${String(mins).padStart(
            2,
            "0"
        )} : ${String(secs).padStart(2, "0")}`;
    };

    const handleVSCode = () => {
        setShowVSCodeAlert(true);

        setTimeout(() => {
            window.location.href = "vscode://";
        }, 300);
    };

    const handleOnlineCompiler = () => {
        setShowVSCodeAlert(false);
        setShowCompiler(true);
    };

    if (!selectedProject) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

            <div className="bg-gray-100 rounded-xl w-[85%] max-w-[95%] max-h-[90vh] overflow-y-auto relative p-5 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full
    hover:[&::-webkit-scrollbar-thumb]:bg-gray-400
  ">

                <div className="flex justify-end items-center pt-3">

                    <button
                        onClick={() => setShowStartProject(false)}
                        className="fixed w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-200 text-[#0B0750] text-2xl flex items-center justify-center"
                    >
                        ×
                    </button>

                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">

                    <div>

                        <Product_card
                            image={selectedProject.image}
                            name={selectedProject.name}
                            paragraph={selectedProject.paragraph}
                            Tech_1={selectedProject.Tech_1}
                            Tech_2={selectedProject.Tech_2}
                            Tech_3={selectedProject.Tech_3}
                            Days={selectedProject.Days}
                            level={selectedProject.level}
                            rating={selectedProject.rating}
                            views={selectedProject.views}
                            bg1={selectedProject.bg1}
                            text1={selectedProject.text1}
                            bg2={selectedProject.bg2}
                            text2={selectedProject.text2}
                            bg3={selectedProject.bg3}
                            text3={selectedProject.text3}
                            project={selectedProject}
                            setSelectedProject={setSelectedProject}
                            setShowViewDetails={setShowViewDetails}
                        />

                    </div>


                    <div className="lg:col-span-2 flex flex-col gap-5">


                        <div className="bg-white border border-gray-200 rounded-2xl p-5">

                            <div className="flex justify-between items-center">

                                <div className="flex items-center gap-4">

                                    <div className="bg-purple-200 p-2  rounded-2xl flex items-center justify-center">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings text-purple-500 w-7 h-7 ">
                                            <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>

                                    </div>

                                    <div>

                                        <h2 className="text-lg font-bold text-[#0B0750] text-start">
                                            Project Setup
                                        </h2>

                                        <p className="text-gray-500 text-start">
                                            Choose your preferred environment and start
                                            building<br></br> your project.
                                        </p>

                                    </div>

                                </div>


                                <div className="hidden sm:flex items-center gap-2 bg-violet-50 text-violet-600 px-4 py-2 rounded-full font-semibold">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6l4 2"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>

                                    {selectedProject.Days}

                                </div>

                            </div>


                            <div className="p-6">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">

                                    <button
                                        onClick={handleVSCode}
                                        className="border-2 border-violet-500 bg-white hover:bg-violet-50 text-violet-700 rounded-xl py-4 px-5 font-semibold flex items-center justify-center gap-3 transition"
                                    >

                                        <img src={vs} alt="vs" className="w-5 h-5"></img>

                                        <span>
                                            Open in VS Code
                                        </span>

                                        <span className="text-xl">
                                            →
                                        </span>

                                    </button>


                                    <button
                                        onClick={handleOnlineCompiler}
                                        className="bg-violet-600 hover:bg-violet-700 text-white rounded-xl py-4 px-5 font-semibold flex items-center justify-center gap-3 transition"
                                    >

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-code"><path d="M15.5 10 13 7.5 15.5 5" /><path d="M15.861 14A14.5 14.5 0 0112 22a14.48 14.48 0 010-20 10 10 0 109.888 11.5" /><path d="M19.5 5 22 7.5 19.5 10" /><path d="M2 12h8.5" /></svg>
                                        <span>
                                            Online Compiler
                                        </span>

                                        <span className="text-xl">
                                            →
                                        </span>

                                    </button>

                                </div>

                            </div>

                        </div>


                        <div className="bg-white border border-gray-200 rounded-2xl p-6">

                            <div className="flex items-center justify-between ">

                                <div className="flex items-center gap-4">

                                    <div className="bg-violet-200 p-2  rounded-2xl flex items-center justify-center">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-7 h-7 text-violet-600"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6l4 2"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                            />
                                        </svg>

                                    </div>

                                    <div>

                                        <h2 className="text-lg font-bold text-[#0B0750] text-start">
                                            Project Timer
                                        </h2>

                                        <p className="text-gray-500 text-start">
                                            Keep track of your time while you build.
                                        </p>

                                    </div>

                                </div>


                                <div className="flex items-center gap-4">

                                    <div className="flex gap-4 items-center border-2 border-violet-500 bg-white rounded-xl px-4 py-4 ">
                                        <div>

                                            <span className="text-2xl font-bold text-[#0B0750]">
                                                {formatTime(time)}
                                            </span>
                                        </div>

                                        <div>
                                            <button
                                                onClick={() =>
                                                    setIsTimerRunning(!isTimerRunning)
                                                }
                                                className="bg-violet-600 hover:bg-violet-700 text-white w-9 h-9 rounded-full flex items-center justify-center transition"
                                            >

                                                {isTimerRunning ? (
                                                    <span className="text-lg">
                                                        ❚❚
                                                    </span>
                                                ) : (
                                                    <span className="text-lg ml-1">
                                                        ▶
                                                    </span>
                                                )}

                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="bg-white border border-gray-200 rounded-2xl p-6">

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-4">

                                    <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-8 h-8 text-green-600"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 12s3.75-6 9.75-6 9.75 6 9.75 6-3.75 6-9.75 6S2.25 12 2.25 12Z"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                            />
                                        </svg>

                                    </div>

                                    <div>

                                        <h2 className="text-lg font-bold text-[#0B0750] text-start">
                                            Live Preview
                                        </h2>

                                        <p className="text-gray-500">
                                            Preview your project in action.
                                        </p>

                                    </div>

                                </div>


                                <button
                                    onClick={() =>
                                        window.open(
                                            selectedProject.preview || "about:blank",
                                            "_blank"
                                        )
                                    }
                                    className="border-2 border-green-500 bg-white hover:bg-green-100 text-green-600 rounded-xl px-6 py-3 font-semibold flex items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-out-up-right"><path d="M22 12A10 10 0 1 1 12 2" /><path d="M22 2 12 12" /><path d="M16 2h6v6" /></svg>                                    Open Preview
                                    <span>›</span>
                                </button>

                            </div>

                        </div>


                        <button
                            onClick={() => {
                                setShowStartProject(false);

                                if (onViewProgress) {
                                    onViewProgress(selectedProject);
                                }
                            }}
                            className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl py-5 px-6 font-bold text-lg flex items-center justify-center gap-3 transition"
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing"><path d="M5 21v-6" /><path d="M12 21V9" /><path d="M19 21V3" /></svg>                            View Progress

                            <span className="text-2xl">
                                ›
                            </span>

                        </button>

                    </div>

                </div>


                {/* ================= VS CODE ALERT ================= */}
                {showVSCodeAlert && (
                    <div className="absolute inset-0 z-50 bg-black/50 flex items-center justify-center rounded-2xl">

                        <div className="bg-white rounded-2xl p-6 w-[420px] shadow-2xl">

                            <div className="flex items-start gap-4">

                                <div className="bg-yellow-100 rounded-full p-3 text-2xl">
                                    ⚠️
                                </div>

                                <div>

                                    <h3 className="text-xl font-bold text-[#0B0750]">
                                        VS Code not available?
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-2 leading-5">
                                        You can install VS Code or continue using an
                                        online compiler.
                                    </p>

                                </div>

                            </div>


                            <div className="grid grid-cols-2 gap-3 mt-6">

                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://code.visualstudio.com/download",
                                            "_blank"
                                        )
                                    }
                                    className="bg-violet-600 hover:bg-violet-700 text-white rounded-xl py-3 font-semibold"
                                >
                                    Install VS Code
                                </button>

                                <button
                                    onClick={handleOnlineCompiler}
                                    className="border-2 border-violet-400 text-violet-700 hover:bg-violet-50 rounded-xl py-3 font-semibold"
                                >
                                    Online Compiler
                                </button>

                            </div>


                            <button
                                onClick={() => setShowVSCodeAlert(false)}
                                className="w-full mt-3 text-gray-400 hover:text-gray-700 py-2"
                            >
                                Cancel
                            </button>

                        </div>

                    </div>
                )}


                {showCompiler && (
                    <div className="absolute inset-0 z-[60] bg-white rounded-2xl overflow-hidden">

                        <div className="flex justify-between items-center px-5 py-4 border-b bg-white">

                            <div>

                                <h2 className="font-bold text-xl text-[#0B0750] text-start">
                                    Online Compiler
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Build and test your project online.
                                </p>

                            </div>


                            <button
                                onClick={() => setShowCompiler(false)}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-xl"
                            >
                                ×
                            </button>

                        </div>


                        <iframe
                            src="https://onecompiler.com/html"
                            title="Online HTML Compiler"
                            className="w-full h-[calc(100%-73px)] border-0"
                        />

                    </div>
                )}

            </div>

        </div>
    );
}

export default StartProject;