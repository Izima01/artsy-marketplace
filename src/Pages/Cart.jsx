import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import CartItem from "../Components/CartItem";
import { cartActions } from "../store/cartSlice";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';
// import { useFetchProductData } from "../config/cartActions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const dispatch = useDispatch();
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  // eslint-disable-next-line no-unused-vars
  
  useEffect(() => {
    dispatch(cartActions.openedCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  useEffect(() => {
    console.log(cartItems);
    // Step 1: Use map to extract the quantities from the objects
    const quantities = cartItems.map(item => item.quantity);
    const prices = cartItems.map(item => item.totalPrice);
    // Step 2: Use reduce to add up the quantities
    setTotalQty(quantities.reduce((total, quantity) => total + quantity, 0));
    setTotalPrice(prices.reduce((total, price) => total + price, 0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  return (
    <>
      <ul className="flex flex-col gap-8 mt-8 pb-8 w-[90%] md:w-4/5 mx-auto">
        <ToastContainer autoClose={1000} />
        {cartItems.length == 0 && <h2 className="text-xl font-bold text-center">There are no items in your cart yet</h2>}
        {cartItems.map(({id, name, price, totalPrice, quantity, pic, category}) => 
          <CartItem key={id} id={id} name={name} price={price} pic={pic} quantity={quantity} category={category} totalPrice={totalPrice} />
        )}
      </ul>
      <footer className='py-8 flex flex-col items-center bg-white sm:flex-row-reverse px-[5%] md:px-[10%] sm:justify-between'>
        <div className="w-full sm:w-6/12 flex flex-col gap-4">
          <div className='flex justify-between w-11/12 mx-auto'>
            <p className="text-[#888] text-lg">Prodcuts in Cart:</p>
            <p className="text-[#292929] font-medium text-lg">{totalQty} items</p>
          </div>
          <div className='flex justify-between w-11/12 mx-auto'>
            <p className="text-[#888] text-lg">Shipping:</p>
            <p className="text-[#292929] font-medium text-lg">${(totalQty*1).toFixed(2)}</p>
          </div>
          <div className='flex justify-between w-11/12 mb-2 mx-auto'>
            <p className="text-[#888] text-lg">Total:</p>
            <p className="text-[#292929] font-medium text-lg">${totalPrice.toFixed(2)}</p>
          </div>
          <div className='flex justify-between w-full px-[4.5%] border-t border-dashed border-black pt-4'>
            <p className="text-[#888] text-lg">Grand Total:</p>
            <p className="text-[#292929] font-medium text-lg">${(totalPrice+(totalQty*1)).toFixed(2)}</p>
          </div>
        </div>
        <div className="sm:w-5/12 flex flex-col gap-4">
          <Link to='/products/checkout/shipping-details' className='bg-[#3341C1] text-white px-12 sm:px-9 md:px-12 lg:px-16 py-3.5 rounded-sm mt-8 text-lg'>
            Proceed to Checkout
          </Link>
          <Link to='/products' style={{ textDecoration: 'underline 2px solid #006CA2' }} className='text-[#006CA2] text-lg mx-auto'>
            Continue to shopping
          </Link>
        </div>
      </footer>
    </>
  )
}

export default Cart