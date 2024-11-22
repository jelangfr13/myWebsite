import Image1 from '../assets/94.png';
import Image2 from '../assets/unej.png';

function Educations () {
    return (
        <div id="Educations" className="mx-40">
            <div>
                <h1 className="text-3xl font-bold">Educations</h1>
                <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
            </div>

            <a class="flex flex-col #items-center bg-white border border-gray-200 rounded-lg shadow #md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 px-10 py-5">
                <div className="flex flex-row items-center">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-32 md:rounded-none md:rounded-s-lg" src={Image1} alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Senior High School 94 Jakarta</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><b>2017 - 2020</b> with GPA 89.86 / 100</p>
                    </div>
                </div>

                <ol class="relative border-s border-gray-200 dark:border-gray-700 mt-3">                  
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time> */}
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Active in School Activities & Organizations</h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Joined the Islamic Spirituality and School Committee extracurricular activities. Learned communication skills, teamwork, leading a division, developing design skills, business management, and time management from various work programs and committees that were followed.
                        </p>
                        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                        </a> */}
                    </li>
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Academic Achievement</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Participated in various graphic design competitions and quiz olympiads. Won 3rd place in the Graphic Design Competition at the Madya City level, and 3rd place in the Arabic Language Olympiad throughout Indonesia.
                        </p>
                    </li>

                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </ol>
            </a>
            
            <a class="mt-10 flex flex-col #items-center bg-white border border-gray-200 rounded-lg shadow #md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 px-10 py-5">
                <div className="flex flex-row items-center">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-32 md:rounded-none md:rounded-s-lg" src={Image2} alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">University of Jember</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><b>2020 - 2024</b> with GPA 3.6 / 4</p>
                    </div>
                </div>

                <ol class="relative border-s border-gray-200 dark:border-gray-700 mt-3">                  
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time> */}
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Active in College Activities & Organizations</h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Joined and active in campus organizations (UKM-Pers BINARY, UKM-KI Al-Azhar) and participated and played an active role in the committee of faculty activities.
                            Be the head of the organization and in charge of the division for one term.
                        </p>
                        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                        </a> */}
                    </li>
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Soft Skills & Hard Skills Development</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                            Participated in various soft skills and hard skills development training seminars, Certified Independent Studies, and Independent Internships. Studying and developing skills in teamwork, leadership, time management, business management, graphic design, Front-End Web Development, UI/UX Design, and others.
                        </p>
                    </li>
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Active on Projects and Freelance Work</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                            Working on projects outside the course, such as creating cashier applications, e-commerce, CRUD systems, website portfolios, and others.
                        </p>
                    </li>

                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </ol>
            </a>

        </div>
    )
}

export default Educations