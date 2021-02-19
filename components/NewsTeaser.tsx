import Image from 'next/image';

export function NewsTeaser() {
    return (<div className="flex">
        <div className="flex-none">
            <Image src="/news/toll_plaza.jpg" width="201" height="142" />

        </div>
        <div className="ml-8">
            <div className="text-primary-200 mb-2">November 24, 2020</div>
            <div className="text-primary font-bold text-lg mb-3">Interoperability of SunPass with 23 Other States Coming Soon</div>
            <div>Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus.</div>
        </div>

    </div>);
}
