import React from 'react'
import target from "../assets/target.svg";
import Product_card from "./Product-card";
import { useState } from 'react';
import resources from "../data/resource";
import references from "../data/reference";

function Project_card({ setShowViewDetails, selectedProject, setSelectedProject
}) {
    const [activeSection, setActiveSection] = useState(null);
    return (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center pt-4">

            <div className="bg-gray-100 rounded-xl w-[80%] max-w-[95%] max-h-[90vh] overflow-y-auto relative p-5 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full
    hover:[&::-webkit-scrollbar-thumb]:bg-gray-400
  ">
                <div className="flex justify-end items-center">

                    <button
                       onClick={() => setShowViewDetails(false)}
                        className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-200 text-[#0B0750] text-2xl flex items-center justify-center"
                    >
                        ×
                    </button>

                </div>

                <div className='grid grid-cols-3 gap-3 '>
                    <div className=' py-3 px-4'>
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
                    <div className='flex flex-col gap-5 pt-4 text-start col-span-2'>

                        {activeSection === null ? (
                            <>
                                < div className='bg-white border-2 border-gray-200 py-5 px-4 rounded-xl' id="topics">
                                    <div className='flex justify-between '>
                                        <div>
                                            <div className='flex gap-2 items-center'>
                                                <div className='bg-violet-100 p-2 rounded-lg'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="size-6 text-violet-800">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                                    </svg>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <h3 className='text-[#0B0750] font-semibold'>Project Brief</h3>
                                                    <p className="text-gray-600 text-sm leading-6">
                                                        {selectedProject.paragraph}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                        <button onClick={() => setActiveSection("brief")}>
                                            <div className='mt-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="size-6 text-violet-800">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                                </svg>

                                            </div>
                                        </button>


                                    </div>
                                </div>
                                <div className='bg-white border-2 border-gray-200 py-5 px-4 rounded-xl'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <div className='flex gap-2 items-center'>
                                                <div className='bg-red-100 p-2 rounded-lg'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-red-600">
                                                        <path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clip-rule="evenodd" />
                                                        <path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <h3 className='text-[#0B0750] font-semibold'>Requirements</h3>
                                                    <div className='flex gap-1'>
                                                        <p className="text-gray-600 text-sm  leading-6">
                                                            {selectedProject.Tech_1},
                                                        </p>
                                                        <p className="text-gray-600 text-sm  leading-6">
                                                            {selectedProject.Tech_2},
                                                        </p>
                                                        <p className="text-gray-600 text-sm leading-6">
                                                            {selectedProject.Tech_3},
                                                        </p>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <button onClick={() => setActiveSection("requirement")}>
                                            <div>
                                                <div className='mt-1'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="size-6 text-violet-800">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex justify-between bg-white py-5 px-4 rounded-2xl  border-2 border-gray-200 '>
                                    <div className='flex items-center gap-2'>

                                        <div className='bg-green-100 p-2 rounded-lg'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-700">
                                                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className='flex flex-col leading-6'>
                                            <h3 className='text-[#0B0750] font-semibold'>Reference and Designs</h3>
                                            <p>Figma, Dribble </p>
                                        </div>

                                    </div>
                                    <button onClick={() => setActiveSection("reference")}>
                                        <div>
                                            <div className='mt-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="size-6 text-violet-800">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                                </svg>

                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='flex justify-between  bg-white py-5 px-4 rounded-2xl  border-2 border-gray-200 '>
                                    <div className='flex gap-2 items-center'>
                                        <div className='bg-purple-100 p-2 rounded-lg'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-purple-700">
                                                <path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h3 className='text-[#0B0750] font-semibold'>Resources</h3>
                                            <p>Fonts , Icons</p>
                                        </div>
                                    </div>
                                    <button onClick={() => setActiveSection("resource")}>
                                        <div>
                                            <div className='mt-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="size-6 text-violet-800">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                                </svg>

                                            </div>

                                        </div>
                                    </button>
                                </div>


                            </>
                        ) : activeSection === "brief" ? (
                            <div>
                                <div className='flex justify-between'>
                                    <h2 className='text-2xl text-[#0B0750] font-bold'>Project Brief</h2>
                                    <button className='flex gap-1 items-center border rounded-full bg-blue-800 px-2 py-1 text-white font-semibold text-sm' onClick={() => {
                                        setActiveSection(null);

                                        setTimeout(() => {
                                            document.getElementById("project-brief-card")?.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start"
                                            });
                                        }, 0);
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                                        <span>Back</span>
                                    </button>
                                </div>
                                <div className='bg-green-50 py-3 px-4 text-green-700 rounded-lg border border-green-200 mt-4'>
                                    <div className='flex gap-2 items-center'>
                                        <div className='bg-green-100 p-2 rounded-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className='font-semibold'>Project Overview</h3>
                                        </div>
                                    </div>
                                    <p className='mt-2'>{selectedProject.brief.overview}</p>
                                </div>
                                <div className='bg-violet-100 py-3 px-4 text-violet-700 rounded-lg border border-violet-200 mt-4'>
                                    <div className='flex gap-2 items-center'>
                                        <div className='bg-violet-200 p-2 rounded-full '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-goal">
                                                <path d="M12 13V2l8 4-8 4" />
                                                <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
                                                <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
                                            </svg>
                                        </div>
                                        <h3 className='text-lg font-semibold'>Project Goal</h3>
                                    </div>
                                    <p>{selectedProject.brief.goal}</p>
                                </div>
                                {selectedProject.brief.steps.map((step, index) => (
                                    <div key={index}>
                                        <div className='bg-fuchsia-100 py-3 px-4 text-fuchsia-700 rounded-lg border border-fuchsia-200 mt-4'>
                                            <div className='flex gap-2 items-center'>
                                                <div className='bg-fuchsia-200 p-2 rounded-full'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers">
                                                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
                                                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
                                                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
                                                    </svg>
                                                </div>
                                                <h3 className='text-lg font-semibold'>Step {index + 1}</h3>
                                            </div>
                                            <h4 className='text-md text-gray-600 font-medium mt-2'>{step.title}</h4>
                                            <p className='mt-1'>{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className='bg-red-100 py-3 px-4 text-red-500 rounded-lg border border-red-200 mt-4'>
                                    <div className='flex gap-2 items-center'>
                                        <div className='bg-red-200 p-2 rounded-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid">
                                                <rect width="7" height="7" x="3" y="3" rx="1" />
                                                <rect width="7" height="7" x="14" y="3" rx="1" />
                                                <rect width="7" height="7" x="14" y="14" rx="1" />
                                                <rect width="7" height="7" x="3" y="14" rx="1" />
                                            </svg>
                                        </div>

                                        <h3 className='text-lg font-semibold'>Feature</h3>
                                    </div>
                                    <div className='grid grid-cols-3'>
                                        {selectedProject.brief.features.map((feature, index) => (
                                            <p key={index} className="mt-1">
                                                {index + 1}. {feature}
                                            </p>
                                        ))}                                    </div>
                                </div>
                                <div className='bg-[#E8EAFB] py-3 px-4 text-[#1E3A8A] rounded-lg border border-blue-300 mt-4'>
                                    <div className='flex gap-2 items-center'>
                                        <div className='bg-[#3B4FC4] p-2 rounded-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note text-white">
                                                <path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
                                                <path d="M15 3v5a1 1 0 0 0 1 1h5" />
                                            </svg>
                                        </div>
                                        <h3 className='text-lg font-semibold'>Pages</h3>
                                    </div>
                                    <div className="flex gap-3 flex-wrap">
                                        {selectedProject.brief.pages.map((page, index) => (
                                            <p key={index} className="mt-1">
                                                {index + 1}.{page}
                                            </p>
                                        ))}
                                    </div>                                </div>
                                <div className='bg-yellow-50 py-3 px-4 text-yellow-700 rounded-lg border border-yellow-200 mt-4'>
                                    <div className='flex gap-2 items-center'>
                                        <div className='bg-yellow-200 p-2 rounded-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy">
                                                <path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2" /><path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2" />
                                                <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3" />
                                                <path d="M4 22h16" />
                                                <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
                                                <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3" />
                                            </svg>
                                        </div>

                                        <h3 className='text-lg font-semibold'>Expected Result</h3>
                                    </div>
                                    <p className='mt-2'>{selectedProject.brief.expectedResult}</p>
                                </div>

                            </div>
                        ) : activeSection === "requirement" ? (
                            <div>
                                <div className="flex justify-between">
                                    <h2 className="text-2xl font-bold text-[#0B0750]">
                                        Requirements
                                    </h2>
                                    <button onClick={() => setActiveSection(null)}>
                                        Back
                                    </button>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
                                    <h3 className="text-lg font-semibold">Requirements</h3>
                                    {selectedProject.brief.requirements.technologies.map((tech, index) => (
                                        <div key={index}>
                                            <h3>{tech.name}</h3>
                                            <p>{tech.learn}</p>
                                            <a
                                                href={tech.link}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Learn →
                                            </a>
                                        </div>
                                    ))}                                </div>
                            </div>


                        ) : activeSection === "reference" ? (
                            <div>
                                <div className="flex justify-between">
                                    <h2 className="text-2xl font-bold text-[#0B0750]">
                                        Reference and Designs
                                    </h2>

                                    <button onClick={() => setActiveSection(null)}>
                                        Back
                                    </button>
                                </div>

                                <div>
                                    {references.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ) : activeSection === "resource" ? (
                            <div>
                                <div className="flex justify-between">
                                    <h2 className="text-2xl font-bold text-[#0B0750]">
                                        Reference and Designs
                                    </h2>

                                    <button onClick={() => setActiveSection(null)}>
                                        Back
                                    </button>
                                </div>                                <div className="flex flex-wrap gap-3">
                                    {resources.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-3 py-2 hover:border-purple-300"
                                        >
                                            <div>
                                                <p className="font-medium text-[#0B0750]">{item.name}</p>
                                                <span className="text-xs text-gray-500">{item.category}</span>
                                            </div>

                                            <span className="text-sm text-purple-700 font-medium">
                                                Visit →
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                        ) : null}

                    </div>

                </div>

            </div>


        </div >
    )
}

export default Project_card
