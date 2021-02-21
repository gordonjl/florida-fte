import NewsTeaser from "../components/NewsTeaser";


function NewsPage() {
    return (
        <main className=" w-full border-black border-2">

            <div className="flex flex-col space-y-6 news-banner sm:h-56 bg-no-repeat bg-cover w-full items-center justify-center bg-gray-100 mb-12">
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
                    <NewsTeaser 
                    img="/news/toll_plaza.jpg" 
                    teaser="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis cursus diam. Cras sodales felis in rhoncus placerat. Sed porttitor leo mauris. Nunc lectus arcu, semper vitae egestas id, eleifend quis nibh. Donec nisl turpis, finibus a dapibus at, dignissim id mauris. Nullam ac mollis nulla. Nunc dapibus pretium urna, ut pharetra sem vestibulum ut.

                    Praesent nec diam et justo facilisis aliquet tristique in nunc. Nam tristique malesuada elit, vitae feugiat odio fermentum vitae. Etiam nec tincidunt turpis. Aenean placerat sollicitudin feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut ullamcorper erat a nunc congue, sed finibus erat lobortis. Phasellus fringilla, eros a tempor lacinia, diam sem hendrerit metus, id auctor purus arcu sed odio.
                    
                    Ut eu vestibulum tellus. Quisque urna justo, egestas non enim ut, rutrum placerat ex. Nam feugiat, dui sed interdum ultrices, neque nisl dapibus urna, id iaculis odio nulla id nunc. Quisque at nisi viverra, imperdiet ante sit amet, tincidunt metus. Fusce auctor, odio tincidunt facilisis laoreet, mauris mi condimentum lorem, in porttitor nibh orci id dolor. Fusce ac lectus euismod, vehicula risus et, rutrum nibh. Morbi egestas nisl et interdum commodo. Nam in purus egestas, gravida odio nec, condimentum odio."
                    />
                    <NewsTeaser img="/news/street_with_signs.jpg"
                    teaser="Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus."
                    ></NewsTeaser>
                </div>

            </section>
        </main>
    )
}

export default NewsPage