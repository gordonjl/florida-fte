function NewsPage() {
    return (
        <nav className="flex flex-col space-y-6 w-full max-w-7xl mt-6 text-nav-black">
            <section className="flex justify-between border-b-2 pb-8">
                <img src="/SunPassLogo-Blue.svg" className="ml-14" />

                    <ul className="flex space-x-5 min-w-min whitespace-nowrap text-lg  w-max flex-grow-2 justify-end items-end mx-16 pb-3">
                        <li>Program Information</li>
                        <li>Pay a Toll</li>
                        <li>Travelers and Visitors</li>
                    </ul>
                <section className="flex flex-col space-y-5 mr-5">
                    <ul className="flex justify-between tracking-widest uppercase text-sm">
                        <li>Contact Us</li>
                        <li >English <svg className="w-4 inline"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
</svg></li>
                    </ul>
                    <div className="flex space-x-8 ">
                            <div className="bg-primary shadow-sm text-white text-lg tracking-wider font-bold rounded-full self-center py-2 px-12 align-middle whitespace-nowrap">
                                My SunPass
                                </div>
                        <div className="text-secondary">
                        <svg className="stroke-current w-14 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                        </div>
                    </div>
                </section>
            </section>
            <section className="pl-20 border-fl-yellow border-b-4 pb-4">
                <ul className="flex text-sm nav-items space-x-4 tracking-wider">
                    <li>Home</li>
                    <li >|</li>
                    <li>Program Information</li>
                    <li>|</li>
                    <li>SunPass News</li>
                </ul>
            </section>
        </nav>
    )
}

export default NewsPage