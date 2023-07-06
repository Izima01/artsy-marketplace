import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
 
const Footer = () => {
  return (
    <div className="mt-7 mb-10 px-5 w-full">
        <footer className='md:hidden'>
            <h4 className="text-xl font-semibold">NEWSLETTER</h4>
            <p className="mt-4 text-sm mb-6">SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS</p>
            <input type="email" className="w-full placeholder:uppercase p-4 border border-black" placeholder="Enter your email here" name="" id="" />
            <button className="text-white bg-black py-4 w-1/2 mt-6">SUBSCRIBE</button>

            <p className="mt-8 text-sm mb-4">REACH US</p>
            
            <span className="flex gap-4 mb-6 items-center">
                <AiOutlineMail size={24} />
                <p className='text-sm'>artsystudios@gmail.com</p>
            </span>
            <span className="flex gap-4 items-center">
                <GoLocation size={24} />
                <p className='text-sm'>Lagos, Nigeria</p>
            </span>
        </footer>

        <footer className="hidden md:block">
            <div className="border border-black w-full flex flex-col gap-4 items-center py-8">
                <h4 className="text-3xl font-semibold">NEWSLETTER</h4>
                <p className="text-xl">Subscribe to get daily updates on new drops & exciting deals</p>
                <div className='flex gap-6 items-center'>
                    <input type="email" className="placeholder:uppercase py-3 pl-4 pr-20 border border-black" placeholder="Enter your email here" name="" id="" />
                    <button className="text-white bg-black py-3 w-1/2 px-6">SUBSCRIBE</button>
                </div>
            </div>
            <nav className='flex justify-between items-center w-full my-8'>
                <img src={logo} className='pl-12' alt="" />
                <div className='flex flex-col gap-6'>
                <Link className='text-xl' to='/'>Home</Link>
                <Link className='text-xl' to='/products'>Marketplace</Link>
                <Link className='text-xl' to='/auctions'>Auctions</Link>
                <Link className='text-xl' to='/auctions/live/drops'>Drops</Link>
                </div>
                <div className='flex flex-col gap-6'>
                <Link className='text-xl' to='/'>Blog</Link>
                <Link className='text-xl' to='/'>Wallets</Link>
                <Link className='text-xl' to='/'>Rates</Link>
                <Link className='text-xl' to='/'>High bids</Link>
                </div>
                <section className='justify-self-start'>
                <span className="flex gap-4 mb-6 items-center">
                    <AiOutlineMail size={24} />
                    <p className='text-sm'>artsystudios@gmail.com</p>
                </span>
                <span className="flex gap-4 items-center">
                    <GoLocation size={24} />
                    <p className='text-sm'>Lagos, Nigeria</p>
                </span>
                </section>
            </nav>
            <aside>
                <p className='text-center font-semibold'>Artsystudios © 2022. All Rights Reserved.</p>
            </aside>
        </footer>
    </div>
  )
}

export default Footer