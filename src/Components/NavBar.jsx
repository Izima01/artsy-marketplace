import { GrClose } from 'react-icons/gr';
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../store/navSlice';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import support from '../assets/support.svg';

// eslint-disable-next-line react-refresh/only-export-components
export const navs = [
  {name: 'Home', link: '/'},
  {name: 'Auctions', link: '/auctions'},
  {name: 'Marketplace', link: '/products'},
  {name: 'Drops', link: '/auctions/live/drops'},
];

const NavBar = () => {
  const dispatch = useDispatch();
  const { navOpen, activePage } = useSelector((state) => state.nav);
  
  useEffect(() => {
    dispatch(navActions.toggleNav(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);
  
  return (
    <div className={`w-[80%] fixed left-0 top-0 h-screen bg-white p-8 transition-all duration-500 z-10 ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='w-full flex justify-between items-center mb-3'>
          <img src={logo} alt="" />
          <GrClose size="28px" className='hover:-rotate-90 transition duration-200' onClick={() => dispatch(navActions.toggleNav(false))} />
        </div>
        <nav className='mt-16 mb-24 flex flex-col justify-start gap-8'>
          {navs.map(({name, link}, i) =>
            <NavLink key={i} onClick={() => dispatch(navActions.setCurrentPage(link))} end to={link} className={({isActive}) => `text-2xl w-fit ${isActive ? 'border-b-2 border-black pb-2 font-bold' : 'font-medium'}`}>
              {name}
            </NavLink>
          )}
        </nav>
        {/* <button > */}
          <img className='ms-auto my-8' src={support} alt="" />
        {/* </button> */}
    </div>
  )
}

export default NavBar