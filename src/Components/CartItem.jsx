import { useEffect, useState } from 'react';
import image from '../assets/Carousel-1.png';
import close from '../assets/close.svg';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';

// eslint-disable-next-line react/prop-types
const CartItem = ({ name, category, totalPrice, price, pic, id, quantity }) => {
    const [count, setCount] = useState(quantity);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(cartActions.addToCart({
        //     name,
        //     id,
        //     price,
        //     count,
        //     pic,
        //     category
        // }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);

  return (
    <article className="flex gap-5 w-full" id={id}>
        <img src={pic || image} alt="" className='w-4/12 h-32' />
        <div className='w-7/12'>
            <div className='flex justify-between w-full items-start'>
                <div>
                    <p className='italic text-lg mb-4 capitalize'>{category || 'Editorials'}</p>
                    <h4 className='text-xl font-bold capitalize'>{name || 'Philomena 23'}</h4>
                </div>
                <button onClick={() => {
                    dispatch(cartActions.removeFromCart(id));
                }}>
                    <img src={close} alt="" />
                </button>
            </div>
            <div className='flex justify-between mt-4 items-center'>
                <span className='border border-black rounded-xl flex items-center text-lg font-medium'>
                    <button
                        className='py-1 px-3 border-r border-r-black'
                        onClick={() => {
                            if (count==1) return;
                            setCount(count-1);
                        }}
                    >-</button>
                    <p className='px-4'>{count}</p>
                    <button className='py-1 px-3 border-l border-l-black' onClick={() => setCount(count+1)}>+</button>
                </span>
                <p className='text-xl font-semibold'>${price*quantity}.00</p>
            </div>
        </div>
    </article>
  )
}

export default CartItem