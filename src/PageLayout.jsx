import { AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineBell } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux'
import { navActions } from './store/navSlice';
import logo from './assets/logo.png';
import { Link, NavLink, Outlet } from 'react-router-dom';
import NavBar, { navs } from './Components/NavBar';


const PageLayout = () => {
    const dispatch = useDispatch();
    const isChanged = useSelector((state) => state.cart.isChanged);

    return (
        <div className="w-full bg-[#f7f5f5]">
        <header className="w-full flex justify-between items-center pt-6 px-4 sm:hidden">
            <AiOutlineMenu
                size="32px"
                onClick={() => {
                    dispatch(navActions.toggleNav(true));
                }}
                className='hover:rotate-90 duration-300 transition'
            />
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
            <div className="flex gap-3">
                <AiOutlineSearch size="26px" />
                <Link to='/products/checkout/cart' className='relative'>
                  <AiOutlineShoppingCart size="26px" />
                  {isChanged && <div className='w-2 h-2 bg-red-600 rounded-full absolute top-0 right-0' />}  

                </Link>
            </div>
        </header>
        <header className="sm:flex justify-between items-center pt-6 md:w-10/12 sm:w-11/12 mx-auto hidden">
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
            <nav className='flex justify-start gap-6 md:gap-8'>
                {navs.map(({name, link}, i) =>
                    <NavLink key={i} onClick={() => dispatch(navActions.setCurrentPage(link))} end to={link} className={({isActive}) => `w-fit ${isActive ? 'border-b-2 border-black pb-1 font-bold' : 'font-medium'}`}>
                    {name}
                    </NavLink>
                )}
            </nav>
            <div className="flex gap-3">
                <AiOutlineSearch size="26px" />
                {/* <div> */}
                  {/* <AiOutlineShoppingCart size="26px" /> */}
                <Link to='/products/checkout/cart' className='relative'>
                  {isChanged && <div className='w-2 h-2 bg-red-600 rounded-full absolute top-0 right-0' />}  
                  <AiOutlineShoppingCart size="26px" />
                </Link>
                  <AiOutlineBell size="26px" />
                {/* </div> */}
            </div>
        </header>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default PageLayout