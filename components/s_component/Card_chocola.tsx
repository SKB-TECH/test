import StarIcon from '@mui/icons-material/Star';
import { interfacMagic } from '@/interfaces/magic';
import Image  from 'next/image';
import logo from '../../public/logo2.svg';

const Card_chocola=(data:interfacMagic)=>{
    return (
        <section className='w-[95%] h-96 gap-5 lg:gap-0 lg:w-48 lg:h-72 border-2 border-footer rounded-lg relative flex flex-col  items-center text-footer'>
            <div className='flex flex-col items-center gap-1 mb-4 mt-4'>
                <h1 className='uppercase text-footer font-bold font-Baba'>{data.title}</h1>
                <div className='flex justify-center  items-center'>
                    <StarIcon className='text-footer'/>
                    <StarIcon className='text-footer'/>
                    <StarIcon className='text-footer'/>
                    <StarIcon className='text-footer'/>
                    <StarIcon className='text-footer'/>
                </div>
                <p className='text-footer text-center font-beatrice font-semibold'>
                    {
                        data.content
                    }
                </p>
            </div>
            <Image 
                priority
                src={logo}
                width={100}
                height={200}
                alt='logo'
                className='mt-10'
            />
        </section>
    )
}


export default Card_chocola;