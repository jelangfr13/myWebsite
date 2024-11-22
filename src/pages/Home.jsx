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
                </div>
                <div className="mp:flex mp:items-center mp:justify-center">
                    <img src="https://i.imgur.com/9JR1K28.png" alt="Profile Picture"/>
                </div>
            </div>
        </section>

    );
}

export default Home