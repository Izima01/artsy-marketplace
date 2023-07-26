import { useState, useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import down from '../assets/down.png';
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import {useParams} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useFetchProductData } from '../config/cartActions.js';

const ProductDetail = () => {
  const { data } = useFetchProductData();
  let { productId } =  useParams();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  
  const addToCart = () => {
    dispatch(cartActions.addToCart({
      id: product.id,
      name: product.name,
      product: product.id,
      price: product.price,
      quantity: count,
      pic: product.pic,
      category: product.category
    }));
  };

  useEffect(() => {
    setProduct(data.find((prod) => prod?.id === productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="w-[95%] md:w-[85%] mx-auto pb-10">
      <ToastContainer autoClose={2500} />
      <h3 className="mt-10 text-[#a39e9e] text-xl pl-2 mb-6 md:mb-10 pb-4 border-b md:border-0 border-b-black capitalize">Home/ Marketplace/ {product?.category}/ <b className='text-black'>{product?.name}</b> </h3>
      <main className='w-[95%] md:w-full mx-auto md:flex items-stretch justify-stretch'>
        <img src={product?.pic} className='w-full h-96 md:w-1/2 md:h-auto md:px-4 md:py-10 md:border border-black' />
        <section className='md:border md:border-black md:border-l-0 md:w-1/2'>
          <div className='flex justify-between items-center mt-4 md:mt-0 font-medium md:px-[5%] md:py-8 md:mx-auto md:text-2xl md:border-b md:border-b-black'>
            <p className='uppercase'>{product?.name}</p>
            <p className='uppercase'>${product?.price}.00</p>
          </div>
          <h5 className='mt-7 mb-5 md:mb-2 font-medium md:font-normal md:text-2xl md:px-[6%]'>Creator: <span className='text-blue-600'>Ali Dawa</span></h5>
          <h6 className='mb-5 md:mb-2 font-medium md:font-normal md:text-lg md:px-[6%] '>Made in Italy</h6>
          <h6 className='mb-6 font-medium md:font-normal md:text-xl md:px-[6%]'>Total views: 1.7K</h6>
          <div className='flex gap-3  text-3xl md:px-[6%]'>
            <button onClick={() => {
              if (count==1) return;
              setCount(count-1);
            }}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>+</button>
          </div>
          <div className='flex gap-5 mt-6 mb-12 md:px-[6%]'>
            <button className='bg-blue-800 py-4 text-lg px-12 text-white rounded' onClick={addToCart}>Add to cart</button>
            <button className='border-black border p-4 rounded'>
              <AiOutlineHeart
                size='24px'
                className='cursor-pointer'
                stroke='black'
              />  
            </button>
          </div>

          <section>
            <button className='w-full pl-3 pr-9 sm:pl-14 sm:pr-32 py-4 flex justify-between items-center border border-slate-500 border-x-0 group'>
              <p className='text-xl sm:text-2xl font-medium'>Description</p>
              <img src={down} className='group-focus:rotate-180 transition duration-500' />
            </button>
            <button className='w-full pl-3 pr-9 sm:pl-14 sm:pr-32 py-4 flex justify-between items-center border border-b-slate-500 border-x-0 group'>
              <p className='text-xl sm:text-2xl font-medium'>Listings</p>
              <img src={down} className='group-focus:rotate-180 transition duration-500' />
            </button>
            <button className='w-full pl-3 pr-9 sm:pl-14 sm:pr-32 py-4 flex justify-between items-center border border-b-slate-500 border-x-0 group'>
              <p className='text-xl sm:text-2xl font-medium'>Status</p>
              <img src={down} className='group-focus:rotate-180 transition duration-500' />
            </button>
          </section>
        </section>
      </main>
    </div>
  )
}

export default ProductDetail