import Image from 'next/image';
import BenerImg from '@/assets/hero_img.jpg';

const Hero = () => {
    return (
        <div className="hero bg-base-200 p-5 h-full">
            <div className="container mx-auto rounded-2xl bg-slate-200 h-full hero-content flex-col-reverse lg:flex-row-reverse justify-around py-20">
                <Image
                    src={BenerImg}
                    height={500}
                    width={500}
                    alt="Tailwind CSS hero component"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='h-full w-115 flex flex-col gap-9 justify-center'>
                    <h1 className="text-5xl font-bold leading-19">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-success w-fit h-13 font-bold text-white">View the list</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;