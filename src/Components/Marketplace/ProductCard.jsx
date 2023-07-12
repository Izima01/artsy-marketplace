import { Link } from 'react-router-dom';
import image from '../../assets/Carousel-1.png';

// eslint-disable-next-line react/prop-types
const ProductCard = ({name, price, pic, id}) => {
  // console.log(name);
  return (
    <Link to={`/products/${id}`} id={id} className="w-full p-3 sm:w-1/2 md:w-4/12 lg:w-3/12">
        <img src={pic || image} className='w-full rounded-2xl' alt="" />
        <div className='flex w-full justify-between items-center mt-2'>
            <p className='text-[#333] font-medium uppercase'>{name || 'boolean egyptian'}</p>
            <p className='text-[#333] font-medium uppercase'>${price || "20.00"}.00</p>
        </div>
    </Link>
  )
}

export default ProductCard