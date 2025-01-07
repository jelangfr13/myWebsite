import Image1 from '../assets/94.png';
import Image2 from '../assets/unej.png';

function Educations () {
    return (
        <div id="educations" className="mx-40 mp:mx-10 mp:mt-10">
            <div>
                <h1 className="text-3xl font-bold flex items-center gap-2 mp:flex mp:items-center mp:justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-11 w-11">
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                </svg>
                    Educations
                </h1>
                <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
            </div>

            <a class="flex flex-col #items-center bg-white border border-gray-200 rounded-lg shadow mp:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 px-10 py-5">
                <div className="flex flex-row items-center mp:flex-col">
                    <img class="object-cover w-full rounded-t-lg max-h-52 max-w-52 mp:h-[20%]" src={Image1} alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mp:text-center">Senior High School 94 Jakarta</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mp:text-center"><b>2017 - 2020</b> with GPA 89.86 / 100</p>
                    </div>
                </div>

                <ol class="relative border-s border-gray-200 dark:border-gray-700 mt-3 mp:flex mp:flex-col mp:justify-center">                  
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time> */}
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Active in School Activities & Organizations</h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                            Participated in school activities and organizations, including the Islamic Spirituality and School Committee. Gained communication skills, leadership, design skills, business management, and time management through various programs and committees.
                        </p>
                        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                        </a> */}
                    </li>
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Academic Achievement</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                            Participated in various graphic design competitions and quiz olympiads, winning 3rd place in the Graphic Design Competition at the Madya City level, as well as 3rd place in the Arabic Language Olympiad nationwide in Indonesia.
                        </p>
                    </li>

                    {/* <div className='mp:flex mp:items-center mp:justify-center'>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div> */}
                </ol>
            </a>
            
            <a class="mt-10 flex flex-col #items-center bg-white border border-gray-200 rounded-lg shadow mp:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 px-10 py-5">
                <div className="flex flex-row items-center mp:flex-col">
                    <img class="object-cover w-full rounded-t-lg max-h-52 max-w-52 mp:h-[20%]" src={Image2} alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mp:text-center">University of Jember</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mp:text-center"><b>2020 - 2024</b> with GPA 3.6 / 4</p>
                    </div>
                </div>

                <ol class="relative border-s border-gray-200 dark:border-gray-700 mt-3">                  
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time> */}
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Active in College Activities & Organizations</h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                            Participated actively in campus organizations (UKM-Pers BINARY, UKM-KI Al-Azhar) and played a significant role on the faculty activities committee. I served as the head of the organization and was responsible for the division for one term.
                        </p>
                        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                        </a> */}
                    </li>
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Soft Skills & Hard Skills Development</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                            Participated in various soft skills and hard skills development training seminars, certified independent studies, and independent internships. I am studying and developing skills in teamwork, leadership, time management, business management, graphic design, front-end web development, UI/UX design, and more.
                        </p>
                    </li>
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Active on Projects and Freelance Work</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                            Working on projects beyond the course, such as cashier applications, e-commerce platforms, CRUD systems, website portfolios, and others.
                        </p>
                    </li>

                    {/*<div className='mp:flex mp:items-center mp:justify-center'>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>*/}
                </ol>
            </a>

        </div>
    )
}

export default Educations