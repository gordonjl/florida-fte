

interface ButtonProps {
    label:string;
    color:string;
}
export default function FteButton({color,label}:ButtonProps) {
    return (<div className={`bg-${color} shadow-sm border-gray-400 text-white text-lg tracking-wider font-bold rounded-full self-center w-min py-2 px-12 align-middle whitespace-nowrap`}>
        {label}
    </div>);
}
