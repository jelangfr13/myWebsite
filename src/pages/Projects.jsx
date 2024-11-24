import SEEN from '../assets/seen.webp';
import Skillearn from '../assets/skillearn.webp';
import ElMusica from '../assets/elmusica.png';
import UpCycle from '../assets/UpCycle.png';
import Mojave from '../assets/Mojave.png';
import SiPets from '../assets/SiPets.png';

function Projects () {
    return (
        <div id="Projects" className="mx-40 mt-10 mp:mx-10 mp:mt-20">
            <div>
                <h1 className="text-3xl font-bold flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path fill="currentColor" d="M11.112 12a4.502 4.502 0 0 0 8.777 0H22v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8zM5 16h2v2H5zm10.5-2.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5M11.111 10H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6h-2.111a4.502 4.502 0 0 0-8.777 0"/></svg>
                    Projects
                </h1>
                <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
            </div>

            <div className='flex justify-around gap-10 mp:flex-col'>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://jelangfikriramadhan.medium.com/ux-case-study-seen-f9f4c4e1064d">
                        <img class="rounded-t-lg" src={SEEN} alt="SEEN" />
                    </a>
                    <div class="p-5">
                        <a href="https://jelangfikriramadhan.medium.com/ux-case-study-seen-f9f4c4e1064d">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SEEN</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This project is a design mock-up for a draft app called "SEEN." This application serves as a mobile-based e-learning and online course platform.</p>
                        <a href="https://jelangfikriramadhan.medium.com/ux-case-study-seen-f9f4c4e1064d" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://jelangfikriramadhan.medium.com/ux-case-study-skillearn-741a5c969f8a">
                        <img class="rounded-t-lg" src={Skillearn} alt="SEEN" />
                    </a>
                    <div class="p-5">
                        <a href="https://jelangfikriramadhan.medium.com/ux-case-study-skillearn-741a5c969f8a">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Skillearn</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This project is a design mock-up for a draft app called "Skillearn." This application serves as a mobile-based e-learning and online course platform.</p>
                        <a href="https://jelangfikriramadhan.medium.com/ux-case-study-skillearn-741a5c969f8a" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://jelangfikriramadhan.medium.com/ui-ux-design-el-musica-83ea4c1371">
                        <img class="rounded-t-lg" src={ElMusica} alt="SEEN" />
                    </a>
                    <div class="p-5">
                        <a href="https://jelangfikriramadhan.medium.com/ui-ux-design-el-musica-83ea4c1371">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">El-Musica</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This project is a design mock-up for a draft app called "El-Musica." This application serves as a mobile-based music platform.</p>
                        <a href="https://jelangfikriramadhan.medium.com/ui-ux-design-el-musica-83ea4c1371" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex justify-around gap-10 mt-10 mp:flex-col'>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://upcycler.vercel.app/">
                        <img class="rounded-t-lg" src={UpCycle} alt="SEEN" />
                    </a>
                    <div class="p-5">
                        <a href="https://upcycler.vercel.app/">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">UpCycle</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This project involves designing a web-based application system that focuses on the environment and health. By using waste as the central theme, my team and I have developed a website-based waste bank system that can be accessed anytime and from anywhere.</p>
                        <a href="https://upcycler.vercel.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://mojavehome.com/">
                        <img class="rounded-t-lg" src={Mojave} alt="SEEN" />
                    </a>
                    <div class="p-5">
                        <a href="https://mojavehome.com/">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mojavehome</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">This project is a portfolio website for a furniture company in Indonesia. It emphasizes the development of a visually appealing design. With an elegant and minimalist theme, my team and I created a portfolio website that features an attractive layout and eye-catching animations.</p>
                        <a href="https://mojavehome.com/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://github.com/jelangfr13/Si-Pets">
                        <img class="rounded-t-lg" src={SiPets} alt="SEEN" />
                    </a>
                    <div class="p-5">
                        <a href="https://github.com/jelangfr13/Si-Pets">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SiPets</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            This project involves the creation of a website tailored for a pet shop in Indonesia. The platform allows users to engage in transactions similar to a typical e-commerce site, but it focuses specifically on animal adoption. The website features a cashier application system that includesfunctionalities such as user authentication, content search, and more.
                        </p>
                        <a href="https://github.com/jelangfr13/Si-Pets" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Projects