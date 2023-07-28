import { Link } from "react-router-dom"
import { ToastContainer } from "react-toastify"

const Shipping = () => {
  return (
    <div className="w-[95%] md:w-[85%] mx-auto pb-10">
      <ToastContainer autoClose={2500} />
      <h3 className="mt-10 text-[#a39e9e] text-xl pl-2 mb-6 md:mb-2 pb-4 border-b md:border-0 border-b-black capitalize">Home/ Marketplace/ Cart/ <span className="text-black"> Shipping</span></h3>
      <form className='w-[95%] md:w-full mx-auto grid grid-cols-1 gap-7 md:grid-cols-2'>
        <div>
          <label className='text-lg text-[#888]' htmlFor="email">Your Email</label>
          <input type="email" className="block w-full bg-[#dfdddd] py-3 pl-5 rounded-lg outline-none border-[#747474] border mt-2.5" name="email" id="" />
          <div className="flex mt-2.5">
            <input type="checkbox" id="updates" className="" />
            <label className='text-[#888] ml-2' htmlFor="updates">Get updates about new drops & exclusive offers</label>
          </div>
        </div>
        <div>
          <label className='text-lg text-[#888]' htmlFor="wallet">Choose a Wallet</label>
          <select className="block w-full bg-[#dfdddd] py-3 pl-5 rounded-lg outline-none border-[#747474] border mt-2.5" placeholder="" id="">
            <option value="metamask">MetaMask</option>
            <option value="walletConnnect">Wallet Connect</option>
            <option value="coinbase">Coin Base</option>
            <option value="phantom">Phantom</option>
          </select>
        </div>
        <div>
          <label className='text-lg text-[#888] ' htmlFor="city">City</label>
          <input type="text" className="block w-full bg-[#dfdddd] py-3 pl-5 rounded-lg outline-none border-[#747474] border mt-2.5" id="city" />
        </div>
        <div>
          <label className='text-lg text-[#888] ' htmlFor="country">Country</label>
          <input type="text" className="block w-full bg-[#dfdddd] py-3 pl-5 rounded-lg outline-none border-[#747474] border mt-2.5" id="country" />
        </div>
        <div>
          <label className='text-lg text-[#888] ' htmlFor="postal-code">Postal Code</label>
          <input type="text" className="block w-full bg-[#dfdddd] py-3 pl-5 rounded-lg outline-none border-[#747474] border mt-2.5" id="postal-code" />
        </div>
        <div>
          <label className='text-lg text-[#888] ' htmlFor="phone">Phone number</label>
          <input type="tel" className="block w-full bg-[#dfdddd] py-3 pl-5 rounded-lg outline-none border-[#747474] border mt-2.5" id="phone" />
        </div>
      </form>
        <div className="flex flex-col gap-4 w-fit mx-auto">
          <Link to='/products/checkout/thanks' className='bg-[#3341C1] text-white py-3.5 rounded-sm mt-8 px-10 text-lg'>
            Proceed to Payment
          </Link>
          <Link to='/products/checkout/cart' style={{ textDecoration: 'underline 2px solid #006CA2' }} className='text-[#006CA2] text-lg mx-auto'>
            Go back to cart
          </Link>
        </div>
    </div>
  )
}

export default Shipping