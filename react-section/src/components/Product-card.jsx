import React from 'react'
import Button from "./Button";
import e_commerce from "../assets/e-commerce.png"



export default function Product_card({ image, name, paragraph, Tech_1, Tech_2, Tech_3, Days, level, rating,views, bg1, bg2, bg3, text1, text2, text3 }) {
    return (
        <>
            <div className='card border border-white rounded-2xl bg-white'>
                <img src={image} alt="e-commerce" className='rounded-t-2xl rounded-tr-2xl ' />
                <div className='content px-3 py-4'>
                    <h3 className='text-start text-black font-semibold text-lg'>{name}</h3>
                    <p className='text-start text-black py-2'>{paragraph}</p>
                    <div className='flex gap-3 py-3'>
                        <div >
                            <span className={`text-[13px] ${bg1} ${text1} font-bold rounded p-2`}>{Tech_1}</span>
                        </div>
                        <div >
                            <span className={`text-[13px] ${bg2} ${text2} font-bold rounded p-2`}>{Tech_2}</span>
                        </div>
                        <div >
                            <span className={`text-[13px] ${bg3} ${text3} font-bold rounded p-2`}>{Tech_3}</span>
                        </div>
                    </div>
                    <div className='flex gap-3 py-2'>
                        <div className='flex gap-[2px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-black">
                                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
                            </svg>
                            <span className='text-[12px] text-black font-semibold'>{Days}</span>
                        </div>
                        <div className='flex gap-[2px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-black">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                            </svg>
                            <span className='text-[12px] text-black font-semibold'>{level}</span>
                        </div>
                        <div className='flex gap-[2px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-yellow-500">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                            <span className='text-[12px] text-black font-semibold'>{rating}</span>
                            <span className='text-[12px] text-black font-semibold'>({views})</span>
                        </div>

                    </div>
                    <div className='flex gap-2 mt-3'>
                        <Button name="View Detail" padding="px-4 py-2" text_size="text-[16px]" bg="bg-blue-200" text="text-[#351A9E]" />
                        <Button name="Start Project" padding="px-4 py-2" text_size="text-[16px]" bg="bg-blue-800" />
                    </div>
                </div>
            </div>
        </>
    )
}
