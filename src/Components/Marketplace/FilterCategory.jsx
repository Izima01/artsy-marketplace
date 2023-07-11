import { useState } from 'react';
import down from '../../assets/down.png';

/* eslint-disable react/prop-types */
const FilterCategory = ({ changeCategory, categories }) => {
  const [showCategory, setshowCategory] = useState(false);

  return (
    <>
        <button className="w-1/2 md:w-full flex justify-between items-center group" type='button' onClick={() => setshowCategory(!showCategory)}>
            <p className='font-semibold text-xl'>By Category</p>
            <img src={down} alt="" className={`transition duration-300 ${showCategory ? 'rotate-180' : 'rotate-0'}`} />
        </button>
        <ul className={`w-full flex flex-col gap-4 mt-3 ml-3 md:ml-0 md:overflow-hidden ${showCategory ? 'max-h-none' : 'max-h-0'}`}>
            <li className='text-lg flex gap-3 items-center'>
                <input type="checkbox" name="" className='w-5 h-5 md:w-4' checked={categories?.includes("fashion")} onChange={(e) => changeCategory(e)} id="fashion" />
                <label htmlFor="fashion">Fashion</label>
            </li>
            <li className='text-lg flex gap-3 items-center'>
                <input type="checkbox" name="" className='w-5 h-5 md:w-4' checked={categories?.includes("optics")} onChange={(e) => changeCategory(e)} id="optics" />
                <label htmlFor="optics">Optics</label>
            </li>
            <li className='text-lg flex gap-3 items-center'>
                <input type="checkbox" name="" className='w-5 h-5 md:w-4' checked={categories?.includes("art & museum")} onChange={(e) => changeCategory(e)} id="art & museum" />
                <label htmlFor="art & museum">Art & Museum</label>
            </li>
            <li className='text-lg flex gap-3 items-center'>
                <input type="checkbox" name="" className='w-5 h-5 md:w-4' checked={categories?.includes("nature")} onChange={(e) => changeCategory(e)} id="nature" />
                <label htmlFor="nature">Nature</label>
            </li>
        </ul>
    </>
  )
}

export default FilterCategory