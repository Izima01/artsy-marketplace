/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import img1 from '../../assets/Featured-1.png';
import img2 from '../../assets/Featured-2.png';
import img3 from '../../assets/Featured-3.png';
import forward from '../../assets/forward.svg';
import creator1 from '../../assets/creator-1.png';
import creator2 from '../../assets/creator-2.png';
import creator3 from '../../assets/creator-3.png';
import creator4 from '../../assets/creator-4.png';
import creator5 from '../../assets/creator-5.png';
import { AiOutlineArrowRight } from 'react-icons/ai';

const FeaturedCard = ({ creators, image, title, reverse }) => {
    return (
        <div className={`w-full flex flex-col sm:border-t sm:border-t-black ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} sm:py-4 sm:px-1 sm:justify-between`}>
            <div className='relative w-full group overflow-hidden mb-4 sm:w-[47%]'>
                <img src={image} className='w-full md:h-[280px]' alt="" />
                <div className='absolute inset-0 -translate-y-full bg-black bg-opacity-40 flex items-center transition duration-500 group-hover:translate-y-0 w-full'>
                    <div className='w-3/4 mx-auto flex flex-col gap-10 justify-center items-end'>
                        <h2 className='text-3xl font-semibold text-white'>{title || 'Boolean Egyptian'}</h2>
                        <Link to='/' className='ms-auto'>
                            <img src={forward} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='sm:w-[51%] sm:flex sm:flex-col sm:justify-between'>
                <h2 className='text-3xl font-semibold hidden sm:block md:text-4xl'>{title || 'Boolean Egyptian'}</h2>
                <p className='leading-snug text-[#616161] w-5/6 text-lg sm:w-full md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
                <div className='border-black border-b sm:border-b-0 sm:pr-0 pr-3 w-fit sm:w-full pb-4 flex items-center mt-4 gap-4'>
                    <div className="imgs flex items-center sm:w-fit">
                        <img src={creator1} className='w-12 lg:w-14' alt="" />
                        <img src={creator2} className='w-12 lg:w-14 -translate-x-4' alt="" />
                        <img src={creator3} className='w-12 lg:w-14 -translate-x-8' alt="" />
                        <img src={creator4} className='w-12 lg:w-14 -translate-x-12' alt="" />
                        <img src={creator5} className='w-12 lg:w-14 -translate-x-16' alt="" />
                    </div>
                    <h5 className='text-lg font-medium sm:-ms-16 lg:-ms-12 -ms-8 '>{creators || '64'} major creators</h5>
                    <Link to='/' className='w-10 h-10 rounded-full border border-black flex justify-center items-center group-hover:-translate-x-12 transition duration-200'>
                        <AiOutlineArrowRight size={24} />
                    </Link>
                </div>
            </div>
        </div>
    )
}


const FeaturedProducts = () => {
  return (
    <div className="mt-9 w-[86%] mx-auto mb-16">
        <h1 className='text-center text-4xl font-semibold leading-relaxed mb-8'>Featured Products</h1>
        <div className='flex flex-col gap-9 sm:gap-0'>
            <FeaturedCard creators='24' image={img1} title='Boolean Egyptian' />
            <FeaturedCard creators='37' image={img2} title='Are We There Yet?' reverse={true} />
            <FeaturedCard creators='64' image={img3} title='Oloibiri 1997' />
        </div>
    </div>
  )
}

export default FeaturedProducts