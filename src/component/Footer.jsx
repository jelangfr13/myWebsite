function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-2 container mx-auto mt-10 mb-0 mp:mx-0">
            <div className="w-full max-w-screen-xl mx-auto p-4 mp:py-8 mp:w-screen">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 mp:justify-center">
                        <li>
                            <a href="#home" className="hover:underline me-4 md:me-6 mp:">Home</a>
                        </li>
                        <li>
                            <a href="#educations" className="hover:underline me-4 md:me-6">About Me</a>
                        </li>
                        <li>
                            <a href="#Work" className="hover:underline me-4 md:me-6">Works</a>
                        </li>
                        <li>
                            <a href="#Projects" className="hover:underline me-4 md:me-6">Projects</a>
                        </li>
                    </ul>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mp:flex mp:justify-center">© 2024 <a>Jelang Fikri Ramadhan™</a>. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer