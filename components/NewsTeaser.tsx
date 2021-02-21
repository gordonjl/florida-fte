import Image from 'next/image';
import FteButton from './FteButton';

interface ComponentProps {
    img: string;
    teaser: string;
}

export default function NewsTeaser({img,teaser}:ComponentProps) {
    return (<div className="flex flex-col space-y-3 sm:-space-y-0  sm:flex-row sm:items-start">
        <div className="relative flex w-80 h-48 sm:w-56 flex-none ">
            <Image src={img} 
            layout="fill" 
            objectFit="cover" 
            />
        </div>
        <div className="flex flex-col space-y-2 sm:ml-8">
            <div className="text-primary-200">November 24, 2020</div>
            <div className="text-primary font-bold text-lg">Interoperability of SunPass with 23 Other States Coming Soon</div>
            <div>{teaser}</div>
        </div>

    </div>);
}
