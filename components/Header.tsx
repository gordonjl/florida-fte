import Link from 'next/link'

export default function Header() {
    return (<nav className="flex flex-col space-y-6 w-full mt-6 text-nav-black">
        <section className="flex justify-between border-b-2 pb-8">
            <img src="/SunPassLogo-Blue.svg" className="ml-14" />

            <ul className="flex space-x-5 min-w-min whitespace-nowrap text-lg  w-max flex-grow-2 justify-end items-end ml-3 mr-12  pb-3">
                <li>Program Information</li>
                <li>Pay a Toll</li>
                <li>Travelers and Visitors</li>
            </ul>
            <section className="flex flex-col space-y-5 mr-5">
                <ul className="flex justify-between tracking-widest uppercase text-sm">
                    <li>Contact Us</li>
                    <li className="flex space-x-2">
                    <svg className="inline w-6 relative bottom-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
</svg>
<span>English</span>
                         <svg className="w-4 inline relative bottom-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <li><Link href="/"><a>Home</a></Link></li>
                <li>|</li>
                <li>Program Information</li>
                <li>|</li>
                <li><Link href="/news"><a>SunPass News</a></Link></li>
            </ul>
        </section>
    </nav>);
}
