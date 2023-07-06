import { useRef } from 'react';
import img1 from '../../assets/Carousel-1.png';
import img2 from '../../assets/Carousel-2.png';
import img3 from '../../assets/Carousel-3.png';
import img4 from '../../assets/Carousel-4.png';
import img5 from '../../assets/Carousel-5.png';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const obj = [
  {img: img1, deg: '-12'},
  {img: img2, deg: '6'},
  {img: img4, deg: '6'},
  {img: img5, deg: '12'},
  {img: img3, deg: '0'},
];

const Hero = () => {
  const dragRef = useRef(null);

  const dragEnd = (e) => {
    if (e.screenX > 0.75*window.innerWidth || e.screenX<0.25*window.innerWidth) {
      console.log(e.target.style.zIndex);
      e.target.style.zIndex -= 5;
    }
  }

  return (
    <div className="mt-9 w-[86%] mx-auto">
      <h1 className='text-center text-4xl font-semibold leading-relaxed mb-8 sm:px-10'>Photography is poetry and beautiful untold stories</h1>
      <p className='text-center text-lg px-3 font-medium sm:px-[10%]'>Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.</p>
      <div className='w-full my-20 relative h-96 flex items-center justify-center sm:hidden' ref={dragRef}>
        {obj.map(({img, deg}, i) => (
          <motion.img src={img} key={i} className={`w-[85%] h-full absolute transition-all duration-300`} style={{ rotate: `${deg}deg`, zIndex: i }} alt="" drag="x" dragConstraints={dragRef} dragElastic={1} onDragEnd={dragEnd} whileDrag={{ scale: 1.1 }} />
        ))}
      </div>
      <Swiper
        className='mt-12'
        spaceBetween={20}
        autoplay={true}
        // slidesPerView={3}
        loop={true}
      >
        {obj.map(({img}, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="" className={i % 2 == 0 ? 'scale-y-90 w-full' : 'scale-y-110 w-full'} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero
