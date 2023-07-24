import { useDispatch, useSelector } from "react-redux"
import CartItem from "../Components/CartItem";
import { cartActions } from "../store/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(cartActions.openedCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className="flex flex-col gap-8 mt-8 pb-8 w-[90%] mx-auto">
      {cartItems.length == 0 && <h2 className="text-xl font-bold text-center">There are no items in your cart yet</h2>}
      {cartItems.map(({id, name, price, totalPrice, quantity, pic, category}) => 
          <CartItem key={id} id={id} name={name} price={price} pic={pic} quantity={quantity} category={category} totalPrice={totalPrice} />
      )}
    </ul>
  )
}

export default Cart