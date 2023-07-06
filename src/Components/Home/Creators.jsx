import creators from '../../assets/TopCreatorsAnimation.png';

const Creators = () => {
  return (
    <div className="w-full bg-[#e2e2e2] h-64 md:h-fit mb-20 md:mb-28 p-2 md:p-16 overflow-y-visible relative">
        <h2 className="text-[#161616] font-bold text-xl md:text-4xl w-7/12 md:w-4/12 mb-4 md:mb-16">TOP CREATORS OF THE WEEK</h2>
        <p className="text-[#333333] font-extralight md:text-3xl md:mb-16">“Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden</p>
        <div className="flex items-center text-xs text-[#333333] gap-2.5 absolute top-0 -mr-6 right-0">
            <p className="">Editorials</p>
            <span className="block w-2 h-2 rounded-full bg-[#333333]"></span>
            <p className="">Fashion</p>
            <span className="block w-2 h-2 rounded-full bg-[#333333]"></span>
            <p className="">Lifestyle</p>
        </div>
        <img src={creators} className='absolute -bottom-11 md:-bottom-16 left-1/2 -translate-x-1/2 md:w-4/12' alt="" />
        <div className='absolute bottom-1 md:bottom-12 right-2 md:right-20 text-right'>
            <h2 className='text-[40px] md:text-[4rem] font-bold mb-3'>CIRCA</h2>
            <h2 className='text-[40px] md:text-[4rem] font-bold line-through'>1985</h2>
        </div>
    </div>
  )
}

export default Creators