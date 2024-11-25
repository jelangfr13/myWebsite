function Home() {
    return (
        // <div className="h-screen flex flex-col items-center justify-center text-[50px]">
        //     <h1>Welcome to my personal website!</h1>
        //     <h1>This site is still under progress ^^</h1>
        // </div>

        <section id="home" className="bg-white dark:bg-gray-900 mp:items-center mp:justify-center">
            {/* <div className="px-4 pb-10 max-w-screen-xl grid lg:grid-cols-2 lg:gap-16"> */}
            <div className="h-screen flex flex-row items-center justify-center px-[200px] gap-16 mp:flex-col-reverse mp:gap-5 mp:px-10 mp:h-auto">
                <div className="flex flex-col justify-center mp:mt-5">
                    <h1 className="mb-8 font-extrabold tracking-tight leading-none text-gray-900 lg:text-[42px] dark:text-white mp:text-tMo mp:text-center">
                        Hi! Im Jelang Fikri Ramadhan
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-justify #mp:text-start mp:text-xl mp:text-center">
                        I am a graduate of the Faculty of Computer Science at the University of Jember, with proficiency in programming languages for <b>Front-End Web Development</b>, experience in <b>UI/UX Design</b>, and a solid background in <b>Graphic Design</b>.
                    </p>
                    {/* <div style="padding-top: 30px; display: flex; flex-direction: row; align-items: center; gap: 15px;"> */}
                    <div className="flex flex-row items-center gap-[15px] mp:justify-center mp:mb-10">
                        <a href="https://www.instagram.com/jelangfikriramadhan/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"/></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/jelangfikriramadhan/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"/></svg>
                        </a>
                        <a href="https://github.com/jelangfr13" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#fff" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"/></g></svg>
                        </a>
                        <a href="https://jelangfikriramadhan.medium.com/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41 12.007c0 3.45-2.779 6.247-6.205 6.247S1 15.458 1 12.007S3.778 5.76 7.205 5.76s6.204 2.797 6.204 6.247m6.806 0c0 3.248-1.39 5.88-3.102 5.88c-1.714 0-3.103-2.633-3.103-5.88s1.39-5.88 3.103-5.88s3.102 2.633 3.102 5.88m2.784 0c0 2.91-.489 5.269-1.091 5.269c-.603 0-1.091-2.36-1.091-5.269s.488-5.269 1.091-5.269S23 9.098 23 12.008"/></svg>
                        </a>
                        <a href="mailto:jelangfikriramadhan@gmail.com" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg>
                        </a>
                    </div>
                </div>
                <div className="mp:flex mp:items-center mp:justify-center">
                    <img src="https://i.imgur.com/9JR1K28.png" alt="Profile Picture"/>
                </div>
            </div>
        </section>

    );
}

export default Home