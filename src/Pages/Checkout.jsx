import { NavLink, Outlet } from 'react-router-dom'

const Checkout = () => {
  return (
    <>
      <h3 className="mt-10 text-[#a39e9e] text-xl pl-2 mb-6 md:hidden pb-4 border-b md:border-0 border-b-black">Home/ Marketplace/ <b className='text-black'>Cart</b></h3>
      <nav className='flex gap-6 justify-center mt-12'>
        <NavLink to='/products/checkout/cart' className={({isActive}) => `transition duration-300 ease-in-out ${isActive ? 'border-b-2 border-black pb-1 font-medium text-black' : 'text-slate-600'}`}>
          Shopping cart
        </NavLink>
        <NavLink to='/products/checkout/shipping-details' className={({isActive}) => `transition duration-300 ease-in-out ${isActive ? 'border-b-2 border-black pb-1 font-medium text-black' : 'text-slate-600'}`}>
          Shipping details
        </NavLink>
        <NavLink to='/products/checkout/payment-details' className={({isActive}) => `transition duration-300 ease-in-out ${isActive ? 'border-b-2 border-black pb-1 font-medium text-black' : 'text-slate-600'}`}>
          Payment Details
        </NavLink>
      </nav>  
      <Outlet />
    </>
  )
}

export default Checkout