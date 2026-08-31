import React from 'react'
import { useState } from "react";
import Navbar from "./components/Navbar";
import banner from "./assets/project-banner.jpeg";
import task from "./assets/Task - Manager.png";
import analytics from "./assets/analytics.png";
import blog from "./assets/blog.png";
import Button from "./components/Button";
import Product_card from "./components/Product-card";
import e_commerce from "./assets/e-commerce.png";
import logo from "./assets/rocket.png";
import Projects from './pages/Project';



const courses = {
  "Computer Science": [
    "IT",
    "DS",
    "AI",
    "ML"
  ],

  "Science": [
    "Physics",
    "Chemistry",
    "Botany",
    "Zoology",
    "Maths"
  ],

  "Arts": [
    "Tamil",
    "English",
    "History",
    "Economics"
  ],

  "Engineering": [
    "CSE",
    "ECE",
    "EEE",
    "Civil"
  ],

  "Commerce": [
    "B.Com",
    "CA",
    "Accounting & Finance",
    "BBA"
  ]
};
const technologies = {

  "Computer Science": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Chart.js"
  ],

  "Science": [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "JavaScript",
    "React"
  ],

  "Arts": [
    "HTML",
    "CSS",
    "JavaScript",
    "Canva",
    "Figma"
  ],

  "Engineering": [
    "C",
    "C++",
    "Java",
    "Python",
    "MATLAB",
    "Arduino"
  ],

  "Commerce": [
    "Excel",
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
    "JavaScript"
  ]

};
function Project() {
  const [selectDept, setSelectDept] = useState("");
  const [selectCourse, setSelectCourse] = useState("");
  const [selectLevel, setSelectLevel] = useState("");
  const [selectTech, setSelectTech] = useState("");
  const [selectSort, setSelectSort] = useState("");
  const selectedCourses = courses[selectDept] || [];
  const selectedTech = technologies[selectDept] || [];



  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className='home-banner'>
          <div className='banner relative'>
            <img src={banner} alt='banner' />
            <div className='content'>
              <div className='absolute top-[120px] left-10 z-10'>
                <div className='container mx-auto py-2 px-4'>
                  <span className='bg-[#0B0750] rounded-2xl text-[14px] text-white/90 px-4 py-2 -ml-[120px]'>Real Projects . Real Experience . Real Growth 🚀</span>
                  <h1 className='mt-6 text-white text-5xl text-start font-bold leading-tight'>Build Real<span className='text-[#3F20B9]'> Projects.</span><br /> Boost Your Skills.</h1>
                  <p className='text-white/90 text-start mt-1'>Work on Industry-level Projects, apply your Knowledge<br /> and build an impressive Portfolio</p>
                  <div className='flex items-center gap-8'>
                    <div className='flex items-center gap-2 mt-8'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-violet-700 bg-[#0B0750] rounded-full p-2 brightness-125 saturate-125 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                      </svg>
                      <div className='flex flex-col items-center leading-[1.3]'>
                        <h4 className='text-[18px] text-white font-semibold'>500+</h4>
                        <p className='text-white/90'>Projects</p>
                      </div>

                    </div>
                    <div className='flex items-center gap-2 mt-8'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-violet-700 bg-[#0B0750] rounded-full p-2 brightness-125 saturate-125 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                      </svg>
                      <div className='flex flex-col items-center leading-[1.3]'>
                        <h4 className='text-[18px] text-white font-semibold'>20+</h4>
                        <p className='text-white/90'>Domains</p>
                      </div>

                    </div>
                    <div className='flex items-center gap-2 mt-8'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-violet-700 bg-[#0B0750] rounded-full p-2 brightness-125 saturate-125 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                      <div className='flex flex-col items-center leading-[1.3]'>
                        <h4 className='text-[18px] text-white font-semibold'>10K+</h4>
                        <p className='text-white/90'>Learners</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container mx-auto py-2 px-4 mt-[80px]'>
            <div className='flex justify-between items-center'>
              <div className='left'>
                <h3 className='text-3xl text-black font-bold text-start leading-tight'>Explore Projects</h3>
                <p className='text-black font-[450]'>Choose a department, find the right project and start building</p>
              </div>
              <div className='right'>
                <input type='text' placeholder='Search Projects..' className='bg-white border border-gray-400 rounded p-2 placeholder:text-[16px] placeholder:text-gray-600' />
              </div>
            </div>
            <div className='flex justify-between items-center mt-[30px] gap-2'>
              <div className="relative w-48">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-md text-sm text-black/70 bg-white px-4 py-2 font-semibold">
                    <span>{selectDept || "Select Departments"}</span>

                    <svg
                      className="h-4 w-4 transition-transform group-open:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 1.04l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>

                  <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-gray-200 bg-white text-start shadow-lg">

                    <a
                      className="block px-4 py-2 hover:bg-blue-500 text-black/80 hover:text-white"
                      onClick={(e) => {
                        setSelectDept("Computer Science");
                        e.currentTarget.closest("details").open = false;
                      }}
                    >
                      💻 Computer Science
                    </a>

                    <a
                      className="block px-4 py-2 hover:bg-blue-500 text-black/80 hover:text-white"
                      onClick={(e) => {
                        setSelectDept("Science");
                        e.currentTarget.closest("details").open = false;
                      }}
                    >
                      🔬 Science
                    </a>

                    <a
                      className="block px-4 py-2 hover:bg-blue-500 text-black/80 hover:text-white"
                      onClick={(e) => {
                        setSelectDept("Arts");
                        e.currentTarget.closest("details").open = false;
                      }}
                    >
                      🎨 Arts
                    </a>

                    <a
                      className="block px-4 py-2 hover:bg-blue-500 text-black/80 hover:text-white"
                      onClick={(e) => {
                        setSelectDept("Engineering");
                        e.currentTarget.closest("details").open = false;
                      }}
                    >
                      📐 Engineering
                    </a>

                    <a
                      className="block px-4 py-2 hover:bg-blue-500 text-black/80 hover:text-white"
                      onClick={(e) => {
                        setSelectDept("Commerce");
                        e.currentTarget.closest("details").open = false;
                      }}
                    >
                      💼 Commerce
                    </a>

                  </div>
                </details>
              </div>
              <div className="relative w-48">

                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-md text-sm text-black/70 bg-white px-4 py-2 font-semibold" onClick={(e) => {
                    if (selectDept === "") {
                      e.preventDefault();
                      alert("Please select a department first");
                    }
                  }}>
                    <span>{selectCourse || "Select Course"}</span>

                    <svg
                      className="h-4 w-4 transition-transform group-open:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 1.04l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>

                  </summary>

                  <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-gray-200 bg-white text-start shadow-lg">

                    {selectedCourses.map((course) => (
                      <a
                        key={course}
                        className="block px-4 py-2 hover:bg-blue-500 text-black/80 hover:text-white"
                        onClick={(e) => {
                          setSelectCourse(course);
                          e.currentTarget.closest("details").open = false;
                        }}
                      >
                        {course}
                      </a>
                    ))}

                  </div>
                </details>              </div>

              <div className="relative w-48">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-md text-sm text-black/70 bg-white px-4 py-2 font-semibold" onClick={(e) => {
                    if (selectDept === "") {
                      e.preventDefault();
                      alert("Please select a department first");
                    }
                  }}>
                    <span>{selectLevel || "Select Level"}</span>

                    <svg
                      className="h-4 w-4 transition-transform group-open:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 1.04l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>

                  <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-gray-200 bg-white text-start shadow-lg">

                    <a
                      className="block px-4 py-2 hover:bg-blue-500 text-black/80 hover:text-white"
                      onClick={(e) => {
                        setSelectLevel("Beginner");
                        e.currentTarget.closest("details").open = false;
                      }}
                    >
                      Basic
                    </a>

                    <a
                      className="block px-4 py-2 hover:bg-blue-500 text-black/80 hover:text-white"
                      onClick={(e) => {
                        setSelectLevel("Intermediate");
                        e.currentTarget.closest("details").open = false;
                      }}
                    >
                      Intermediate
                    </a>

                    <a
                      className="block px-4 py-2 hover:bg-blue-500 text-black/80 hover:text-white"
                      onClick={(e) => {
                        setSelectLevel("Advanced");
                        e.currentTarget.closest("details").open = false;
                      }}
                    >
                      Advance
                    </a>

                  </div>
                </details>
              </div>
              <div className="relative w-48">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-md text-sm text-black/70 bg-white px-4 py-2 font-semibold" onClick={(e) => {
                    if (selectDept === "") {
                      e.preventDefault();
                      alert("Please select a department first");
                    }
                  }}>
                    <span>{selectTech || "Select Technologies"}</span>

                    <svg
                      className="h-4 w-4 transition-transform group-open:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 1.04l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>

                  </summary>

                  <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-gray-200 bg-white text-start shadow-lg">

                    {selectedTech.map((technologies) => (
                      <a
                        key={technologies}
                        className="block px-4 py-2 hover:bg-blue-500 text-black/80 hover:text-white"
                        onClick={(e) => {
                          setSelectTech(technologies);
                          e.currentTarget.closest("details").open = false;
                        }}
                      >
                        {technologies}
                      </a>
                    ))}

                  </div>
                </details>
              </div>
              <div className="relative w-48">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-md text-sm text-black/70 bg-white px-4 py-2 font-semibold">
                    <span>{selectSort || "Sort by Popular"}</span>

                    <svg
                      className="h-4 w-4 transition-transform group-open:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 1.04l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>

                  <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-gray-200 bg-white text-start shadow-lg">

                    <a
                      className="block px-4 py-2 hover:bg-blue-500 text-black/80 hover:text-white"
                      onClick={(e) => {
                        setSelectSort("Most Popular");
                        e.currentTarget.closest("details").open = false;
                      }}
                    >
                      Most Popular
                    </a>

                    <a
                      className="block px-4 py-2 hover:bg-blue-500 text-black/80 hover:text-white"
                      onClick={(e) => {
                        setSelectSort("Highest Rated");
                        e.currentTarget.closest("details").open = false;
                      }}
                    >
                      Highest Rated
                    </a>

                    <a
                      className="block px-4 py-2 hover:bg-blue-500 text-black/80 hover:text-white"
                      onClick={(e) => {
                        setSelectSort("Newest");
                        e.currentTarget.closest("details").open = false;
                      }}
                    >
                      Newest
                    </a>

                    <a
                      className="block px-4 py-2 hover:bg-blue-500 text-black/80 hover:text-white"
                      onClick={(e) => {
                        setSelectSort("Shortest Duration");
                        e.currentTarget.closest("details").open = false;
                      }}
                    >
                      Shortest Duration
                    </a>

                    <a
                      className="block px-4 py-2 hover:bg-blue-500 text-black/80 hover:text-white"
                      onClick={(e) => {
                        setSelectSort("Longest Duration");
                        e.currentTarget.closest("details").open = false;
                      }}
                    >
                      Longest Duration
                    </a>

                  </div>
                </details>
              </div>
              <div>
                <button className='flex items-center gap-2 bg-white py-2 px-4 rounded-lg text-black/70 font-semibold text-sm '>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-[#3F20B9]">
                    <path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clip-rule="evenodd" />
                  </svg>
                  <p>Restart</p>

                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container mx-auto py-2 px-4 mt-[30px]'>
            <Projects selectDept={selectDept} selectCourse={selectCourse} selectLevel={selectLevel} selectTech={selectTech} selectSort={selectSort} />
            <div className='flex justify-center items-center mt-6'>
              <button className='flex gap-2 bg-blue-800 px-6 py-2 rounded-lg text-[16px] text-white font-semibold '>View All Project
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mt-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

              </button>

            </div>
          </div>
        </section>
        <section>
          <div className='container mx-auto px-4 py-2 mt-[150px]'>
            <div className='flex justify-between items-center'>
              <div>
                <h3 className='text-start text-black font-bold text-2xl'>My Projects</h3>
                <p className='text-black'>Track Your Progress and continue where you left off</p>
              </div>
              <div>
                <button className='flex items-center gap-2 bg-blue-800 py-2 px-4 rounded-lg text-white font-semibold'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                  </svg>
                  <p>Create Your Own Project</p>
                </button>
              </div>
            </div>
            <div className='flex gap-4 items-center mt-7'>
              <label className='bg-purple-300 border border-purple-500 text-purple-700 text-sm font-medium px-3 py-2 rounded-full'>In Progress</label>
              <label className='bg-green-100 border border-green-500 text-green-700 text-sm font-medium px-3 py-2 rounded-full'>Completed</label>
            </div>
            <div className='grid grid-cols-3 gap-5 mt-8'>
              <div className='bg-white rounded-lg px-5 pt-6 pb-3'>
                <div className='flex gap-2'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 bg-blue-200 rounded-full text-blue-700 p-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-black mt-1 font-semibold'>E-commerce Website</h4>
                    <div className="flex gap-2 mb-2">
                      <span className="text-sm text-black/80 font-medium">Progress</span>
                      <span className="text-sm font-medium text-black/80">0%</span>
                    </div>
                  </div>

                </div>
                <div className="w-full mt-2">
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
                    <div className="w-[0%] h-2 bg-[#3F20B9] rounded-full"></div>
                  </div>
                </div>
                <div className='flex gap-10 py-3'>
                  <div>
                    <span className='text-sm text-blue-700'>Last work 5 days ago</span>
                  </div>
                  <div className='flex items-center'>
                    <button className='flex gap-2  text-[16px] text-blue-700 font-semibold text-sm '>View Features
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 mt-[2px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>

                    </button>

                  </div>

                </div>
              </div>
              <div className='bg-white rounded-lg px-5 pt-6 pb-3'>
                <div className='flex gap-2'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 bg-blue-200 rounded-full text-blue-700 p-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-black mt-1 font-semibold'>Task Management</h4>
                    <div className="flex gap-2 mb-2">
                      <span className="text-sm text-black/80 font-medium">Progress</span>
                      <span className="text-sm font-medium text-black/80">0%</span>
                    </div>
                  </div>

                </div>
                <div className="w-full mt-2">
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
                    <div className="w-[0%] h-2 bg-[#3F20B9] rounded-full"></div>
                  </div>
                </div>
                <div className='flex gap-10 py-3'>
                  <div>
                    <span className='text-sm text-blue-700'>Last work 5 days ago</span>
                  </div>
                  <div className='flex items-center'>
                    <button className='flex gap-2  text-[16px] text-blue-700 font-semibold text-sm  '>View Features
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 mt-[2px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>

                    </button>

                  </div>

                </div>
              </div>
              <div className='bg-white rounded-lg px-5 pt-6 pb-3'>
                <div className='flex gap-2'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 bg-blue-200 rounded-full text-blue-700 p-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-black mt-1 font-semibold'>Analytics Dashboard</h4>
                    <div className="flex gap-2 mb-2">
                      <span className="text-sm text-black/80 font-medium">Progress</span>
                      <span className="text-sm font-medium text-black/80">0%</span>
                    </div>
                  </div>

                </div>
                <div className="w-full mt-2">
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
                    <div className="w-[0%] h-2 bg-[#3F20B9] rounded-full"></div>
                  </div>
                </div>
                <div className='flex gap-10 py-3'>
                  <div>
                    <span className='text-sm text-blue-700'>Last work 5 days ago</span>
                  </div>
                  <div className='flex items-center'>
                    <button className='flex gap-2  text-[16px] text-blue-700 font-semibold text-sm'>View Features
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 mt-[2px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>

                    </button>

                  </div>

                </div>
              </div>
            </div>
            <div className='flex justify-center items-center mt-6'>
              <button className='flex gap-2 bg-blue-800 px-6 py-2 rounded-lg text-[16px] text-white font-semibold '>View All Project
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mt-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

              </button>
            </div>
          </div>
        </section>
        <section>
          <div className='container mx-auto px-4 py-2 mt-[150px]'>
            <div className='flex justify-center items-center'>
              <div>
                <h3 className='text-black text-2xl font-bold'>How Project Works?</h3>
                <p className='text-black'>Follow these simple steps to build amazing projects</p>
              </div>
            </div>
            <div className='relative flex justify-between items-start w-full mt-[60px]'>
              <div className="relative text-center w-[22%]">
                <div className='bg-white rounded-full p-2 inline-block'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-violet-600 bg-gray-200 rounded-full px-2 py-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                </div>
                <div className="absolute top-[25px] left-[70%] w-[60%] border-t-2 border-dotted border-violet-300"></div>
                <h4 className='text-violet-600 font-bold text-xl pt-3'>01</h4>
                <h3 className='text-black font-bold pt-2'>Choose Project</h3>
                <p className='text-black/80 pt-2'>Pick a Project that matches<br /> your skills and intrest</p>
              </div>
              <div className="relative text-center w-[20%]">
                <div className='bg-white rounded-full p-2 inline-block'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-violet-600 bg-gray-200 rounded-full px-2 py-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>
                <div className="absolute top-[25px] left-[70%] w-[60%] border-t-2 border-dotted border-violet-300"></div>
                <h4 className='text-violet-600 font-bold text-xl pt-3'>02</h4>
                <h3 className='text-black font-bold pt-2'>Understand Requirments</h3>
                <p className='text-black/80 pt-2'>Read the requirements and<br />understand the features</p>
              </div>
              <div className="relative text-center w-[20%]">
                <div className='bg-white rounded-full p-2 inline-block'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-violet-600 bg-gray-200 rounded-full px-2 py-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                  </svg>
                </div>
                <div className="absolute top-[25px] left-[70%] w-[60%] border-t-2 border-dotted border-violet-300"></div>
                <h4 className='text-violet-600 font-bold text-xl pt-3'>03</h4>
                <h3 className='text-black font-bold pt-2'>Build & Code</h3>
                <p className='text-black/80 pt-2'>Write clean code and build<br />your project step by step</p>
              </div>
              <div className="relative text-center w-[19%]">
                <div className='bg-white rounded-full p-2 inline-block'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-violet-600 bg-gray-200 rounded-full px-2 py-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                </div>
                <div className="absolute top-[25px] left-[70%] w-[60%] border-t-2 border-dotted border-violet-300"></div>
                <h4 className='text-violet-600 font-bold text-xl pt-3'>04</h4>
                <h3 className='text-black font-bold pt-2'>Test & deploy</h3>
                <p className='text-black/80 pt-2'>Test your Project and deploy<br />it tomake it live</p>
              </div>
              <div className="relative text-center w-[18%]">
                <div className='bg-white rounded-full p-2 inline-block'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 text-yellow-500 bg-pink-200 rounded-full px-2 py-1">
                    <path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clip-rule="evenodd" />
                  </svg>
                </div>
                <h4 className='text-violet-600 font-bold text-xl pt-3'>05</h4>
                <h3 className='text-black font-bold pt-2'>Add to Profile</h3>
                <p className='text-black/80 pt-2'>Showcase your project<br />and impress recruiters</p>
              </div>
            </div>
          </div>
        </section>
      </main >
      <footer className="bg-[#0B0750] mt-10 text-white">
        <div className="container mx-auto px-6 py-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-10">

            <div className='col-span-2'>
              <div className="flex items-center mb-4">
                <img
                  src={logo}
                  alt="brand-logo"
                  className="w-[60px] -ml-4"
                />
                <h2 className="text-2xl font-semibold">StudyPilot</h2>
              </div>

              <p className="text-white/70 text-sm leading-6 max-w-[260px] text-start">
                Your all-in-one platform to learn, practice, build and grow.
                Let's build the future together.
              </p>

              <div className="flex items-center gap-3 mt-5">
                <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#3F20B9] transition">
                  f
                </a>

                <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#3F20B9] transition">
                  𝕏
                </a>

                <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#3F20B9] transition">
                  in
                </a>

                <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#3F20B9] transition">
                  ◎
                </a>
              </div>
            </div>

            <div>
              <h4 className="uppercase text-white font-semibold text-sm tracking-wider mb-4 text-start">
                Pages
              </h4>

              <ul className="space-y-3 text-sm text-white/70 text-start">
                <li>
                  <a className="hover:text-white transition">Home</a>
                </li>
                <li>
                  <a className="hover:text-white transition">Study</a>
                </li>
                <li>
                  <a className="hover:text-white transition">Practice</a>
                </li>
                <li>
                  <a className="hover:text-white transition">Projects</a>
                </li>
                <li>
                  <a className="hover:text-white transition">Interview</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="uppercase text-white font-semibold text-sm tracking-wider mb-4 text-start">
                Resources
              </h4>

              <ul className="space-y-3 text-sm text-white/70 text-start">
                <li>
                  <a className="hover:text-white transition">Tutorials</a>
                </li>
                <li>
                  <a className="hover:text-white transition">Practice Questions</a>
                </li>
                <li>
                  <a className="hover:text-white transition">Project Guides</a>
                </li>
                <li>
                  <a className="hover:text-white transition">Career Tips</a>
                </li>
                <li>
                  <a className="hover:text-white transition">FAQs</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="uppercase text-white font-semibold text-sm tracking-wider mb-4 text-start">
                Get in Touch
              </h4>

              <p className="text-white/70 text-sm leading-6 mb-4 text-start">
                Have questions or need help?
                We're here for you.
              </p>

              <div className="space-y-3 text-sm text-white/80">
                <p className="flex items-center gap-2">
                  ✉
                  support@studypilot.com
                </p>

                <p className="flex items-center gap-2">
                  ☎
                  +91 12345 67890
                </p>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10"></div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 text-sm text-white/50">

            <p>
              © 2026 StudyPilot. All rights reserved.
            </p>

            <div className="flex gap-5">
              <a className="hover:text-white transition">
                Privacy Policy
              </a>

              <a className="hover:text-white transition">
                Terms and Conditions
              </a>
            </div>

          </div>

        </div>
      </footer>
    </>
  )
}
export default Project