import upcoming from '../../assets/upcoming.png';
import arrow from '../../assets/arrow-right.svg';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Upcoming = () => {
  return (
    <>
      <div className="w-full pb-16" style={{ background: "linear-gradient(90deg, #4693ED -26.21%, #79C2D2 25%, rgba(192, 86, 9, 0.49) 120%)" }}>
          <div className='py-6 w-10/12 mx-auto sm:w-'>
            <h3 className='text-white text-xl sm:text-3xl font-semibold pb-3'>See Upcoming Auctions and Exhibitions</h3>
            <img src={arrow} className='sm:pr-20 h-2 pr-12' alt="" />
          </div>
          <div className='w-10/12 mx-auto relative'>
            <img src={upcoming} className='w-full h-72 md:h-96' alt="" />
            <div className='absolute top-0 left-0 w-full md:bottom-8 md:left-8 md:w-auto md:right-8 md:top-auto text-white z-10 pt-8 px-2'>
              <h2 className='flex mb-6'>
                <span className='w-4 h-4 bg-white rounded-full mr-7 block'></span>
                <span className='text-lg'>MONALISA REDEFINED IN STYLE</span>
              </h2>
              <section className='flex gap-3 w-full'>
                <h2 className='text-[#E1E1E1] text-3xl'>01</h2>
                <div>
                  <p className='pb-5 pt-2 text-sm'>Start on : 08:00 GTS . Monday </p>
                  <p className='pb-3 text-sm'>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
                  <div className='flex justify-end gap-7 w-full items-center'>
                    <Link to='/' className='decoration-white underline'>See more</Link>
                    <button className='bg-transparent border border-white p-2 rounded-xl'>Set a reminder</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
      </div>
      <div className='mt-20 mb-14 w-full'>
        <Link className='w-full pl-3 pr-9 sm:pl-14 sm:pr-32 py-4 flex justify-between items-center border-2 border-black border-x-0 group' to='/products'>
          <p className='text-xl sm:text-2xl font-medium'>Explore marketplace</p>
          <span className='w-12 h-12 rounded-full border border-black flex justify-center items-center group-hover:-translate-x-12 transition duration-200'>
            <AiOutlineArrowRight size={24} />
          </span>
        </Link>
        <Link className='w-full pl-3 pr-9 sm:pl-14 sm:pr-32 py-4 flex justify-between items-center border-b-2 border-b-black group' to='/auctions'>
          <p className='text-xl sm:text-2xl font-medium'>See auctions</p>
          <span className='w-12 h-12 rounded-full border border-black flex justify-center items-center group-hover:-translate-x-12 transition duration-200'>
            <AiOutlineArrowRight size={24} />
          </span>
        </Link>
      </div>
    </>
  )
}

export default Upcoming