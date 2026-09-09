import React from 'react'
import task from "../assets/Task - Manager.png";
import Product_card from "./Product-card";

function Project_card({ setShowStartProject, selectedProject, setSelectedProject
}) {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center">

            <div className="bg-gray-100 rounded-xl w-[80%] max-w-[95%] max-h-[70vh] overflow-y-auto relative p-5 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full
    hover:[&::-webkit-scrollbar-thumb]:bg-gray-400
  ">
                <div className='flex justify-end items-center'>
                    <button className='border rounded-full bg-gray-200 px-1 text-gray-600 font-semibold text-sm' onClick={() => setShowStartProject(false)}>
                        ✕
                    </button>
                </div>
                <div className='grid grid-cols-3 '>
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
                            setShowStartProject={setShowStartProject}
                        />
                        <div className='bg-white rounded-lg mt-4'>
                            <div className='flex'>
                                <div className='py-5 px-4'>
                                    <div className='flex'>
                                        <div className='flex gap-4 items-center'>
                                            <div>
                                                <span className='bg-purple-100 py-2 px-4 text-xl text-purple-800 rounded-lg'>00</span>
                                            </div>
                                            <span>:</span>
                                            <div>
                                                <span className='bg-purple-100 py-2 px-4 text-xl text-purple-800 rounded-lg'>00</span>
                                            </div>
                                            <span>:</span>
                                            <div>
                                                <span className='bg-purple-100 py-2 px-4 text-xl text-purple-800 rounded-lg'>00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-gray-600 text-sm mt-2 leading-6 font-medium' >Project Timer</p>
                                    <button className='flex justify-center items-center w-full gap-2 mt-3 bg-purple-600 text-white rounded-lg py-2 px-7 '>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                        </svg>
                                        <span className='font-semibold'>Start Project</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 pt-4 text-start col-span-2'>
                        <div className='bg-white border-2 border-gray-200 py-3 px-4 rounded-xl'>
                            <div className='flex justify-between '>
                                <div>
                                    <div className='flex gap-2 items-center'>
                                        <div className='bg-violet-100 p-2 rounded-lg'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="size-6 text-violet-800">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                            </svg>
                                        </div>
                                        <h3 className='text-[#0B0750] font-semibold'>Project Brief</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-2 leading-6">
                                        {selectedProject.paragraph}
                                    </p>
                                </div>
                                <div className='mt-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="size-6 text-violet-800">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-gray-200 py-3 px-4 rounded-xl'>
                            <div className='flex justify-between'>
                                <div>
                                    <div className='flex gap-2 items-center'>
                                        <div className='bg-red-100 p-2 rounded-lg'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-red-600">
                                                <path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clip-rule="evenodd" />
                                                <path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className='text-[#0B0750] font-semibold'>Requirements</h3>
                                    </div>
                                    <div className='flex gap-1'>
                                        <p className="text-gray-600 text-sm mt-3 leading-6">
                                            {selectedProject.Tech_1},
                                        </p>
                                        <p className="text-gray-600 text-sm mt-3 leading-6">
                                            {selectedProject.Tech_2},
                                        </p>
                                        <p className="text-gray-600 text-sm mt-3 leading-6">
                                            {selectedProject.Tech_3},
                                        </p>

                                    </div>
                                </div>
                                <div>
                                    <div className='mt-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="size-6 text-violet-800">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between bg-white py-3 px-4 rounded-2xl'>
                            <div className='flex items-center gap-2'>

                                <div className='bg-green-100 p-2 rounded-lg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-700">
                                        <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className='text-[#0B0750] font-semibold'>Reference and Designs</h3>
                            </div>
                            <div>
                                <div className='mt-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="size-6 text-violet-800">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between  bg-white py-3 px-4 rounded-2xl'>
                            <div className='flex gap-2 items-center'>
                                <div className='bg-purple-100 p-2 rounded-lg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-purple-700">
                                        <path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className='text-[#0B0750] font-semibold'>Resources</h3>
                            </div>
                            <div>
                                <div className='mt-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="size-6 text-violet-800">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                    </svg>

                                </div>

                            </div>
                        </div>
                        <div className='bg-white py-3 px-4 rounded-2xl'>
                            <div className='flex justify-between'>
                                <div>
                                    <div className='flex gap-2 items-center'>
                                        <div className='bg-orange-100 p-2 rounded-lg'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-orange-700">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                            </svg>
                                        </div>
                                        <h3 className='text-[#0B0750] font-semibold'>Work Space</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-3 leading-6">Start coding your project in your preferred environment</p>
                                </div>
                                <div>
                                    <div className='mt-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="size-6 text-violet-800">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-2 mt-4'>
                                <button className="pushable">
                                    <span className="shadow"></span>
                                    <span className="edge"></span>
                                    <span className="front"> Open in VS COde </span>

                                </button>
                                <button className="pushable">
                                    <span className="shadow"></span>
                                    <span className="edge"></span>
                                    <span className="front"> Use Online Editor</span>
                                </button>
                            </div>
                        </div>
                        <div className='bg-white py-3 px-4 rounded-2xl'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <div className='flex gap-2 items-center'>
                                        <div className='bg-pink-100 p-2 rounded-lg'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-pink-700">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                                            </svg>
                                        </div>
                                        <h3 className='text-[#0B0750] font-semibold'>Live Preview</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-3 leading-6">Start coding your project<br></br> in your preferred environment</p>
                                </div>
                                <div>
                                    <button className='border-2 border-purple-400 rounded-lg text-black text-sm py-2  px-4'>Open Preview</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div >
    )
}

export default Project_card
