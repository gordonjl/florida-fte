import { NewsTeaser } from "../components/NewsTeaser";


function NewsPage() {
    return (
        <main>

            <div className="flex flex-col space-y-6 news-banner h-56 bg-no-repeat bg-cover w-full items-center justify-center bg-gray-100 mb-12">
                <h1 className="text-secondary font-extrabold text-5xl">SunPass News</h1>
                <div className="w-3/4 text-xl text-nav-black text-center min-w-min tracking-wide">
                    Here you’ll find all the latest news and announcements from SunPass, Florida’s Prepaid
                    Toll Program. Stay up to date on the goings on of your toll program.
                </div>
            </div>
            <section className="w-10/12 mx-auto">
                <div className="flex space-x-7 border-b-2 text-3xl pl-16 tracking-wide">
                    <span className="font-thin">Editors Picks</span>
                    <span className="border-b-4 border-fl-yellow font-bold">Recent</span>
                </div>
                <div className="mt-10 flex flex-col space-y-16" >
                    <NewsTeaser></NewsTeaser>
                    <NewsTeaser></NewsTeaser>
                    <NewsTeaser></NewsTeaser>
                    <NewsTeaser></NewsTeaser>
                    <NewsTeaser></NewsTeaser>
                    <NewsTeaser></NewsTeaser>
                    <NewsTeaser></NewsTeaser>
                    <NewsTeaser></NewsTeaser>
                </div>

            </section>
        </main>
    )
}

export default NewsPage