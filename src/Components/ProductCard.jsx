import { Link } from 'react-router-dom';
import image from '../assets/Carousel-1.png';

// eslint-disable-next-line react/prop-types
const ProductCard = ({name, price, pic, id}) => {
  return (
    <Link to={`/products/:productId`} id={id} className="w-full py-3 px-2">
        <img src={pic || image} className='w-full rounded-2xl' alt="" />
        <div className='flex w-full justify-between items-center mt-2'>
            <p className='text-[#333] font-medium uppercase'>{name || 'boolean egyptian'}</p>
            <p className='text-[#333] font-medium uppercase'>${price || "20.00"}.00</p>
        </div>
    </Link>
  )
}

export default ProductCard