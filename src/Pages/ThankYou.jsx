import blue from '../assets/shadow-blue.svg';
import purple from '../assets/shadow-purple.svg';
import orange from '../assets/shadow-orange.svg';
import desktop from '../assets/desktop-thanks.svg';
import delivery from '../assets/Woman get online delivery.png';

const ThankYou = () => {
  return (
    <div className="relative w-full h-[90vh] sm:h-[91vh]">
      <img src={blue} className="absolute sm:hidden top-6 -left-4" />
      <img src={purple} className="absolute sm:hidden -top-10 right-16" />
      <img src={orange} className="absolute sm:hidden bottom-10 right-0" />
      <img src={desktop} className="fixed hidden sm:block top-0 z-10 h-3/4" />
      <main className='w-full z-10 flex flex-col pt-12 items-center justify-center'>
        <img src={delivery} alt="" />
        <h4 className='text-black text-lg font-medium mt-16'>Hey Celestina, thank you for your purchase.</h4>
        <p className='text-[#616161]  mt-5'>You are amazing. Cheers to being <span className='text-[#006CA2]'>ARTSY!</span> </p>
      </main>
    </div>
  )
}

export default ThankYou