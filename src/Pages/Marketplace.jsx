/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import down from '../assets/down.png';
import ProductCard from '../Components/Marketplace/ProductCard';
// import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { db } from '../config/firebase.js'
import { getDocs, collection } from 'firebase/firestore';
import FilterCategory from '../Components/Marketplace/FilterCategory';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {VscSettings} from 'react-icons/vsc';
import FilterPrice from '../Components/Marketplace/FilterPrice';
import LoadingCard from '../Components/Marketplace/LoadingCard';

const Marketplace = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [searchTerm, setsearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([20, 90]);
  const [endNumber, setEndNumber] = useState(5);
  const productsRef = collection(db, "products");

  // showing all the products if you're using a big screen
  useEffect(() => {
    if (window.innerWidth > 768) {
      setEndNumber(14);
    }
  }, []);

  useEffect(() => {
    const getMoviesList = async () => {
      try {
        const data = await getDocs(productsRef);
        const grabbedData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
        setProductsData(grabbedData);
        setFilteredProducts(grabbedData);
        setIsLoading(false);
        // localStorage.setItem('products', JSON.stringify(grabbedData));
      } catch (err) {
        console.log(err);
      }
    };
    getMoviesList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // custom effect for storing fetched data on local storage
  // useEffect(() => {
  //   let stored = JSON.parse(localStorage.getItem('products'));
  //   // console.log(stored);
  //   setProductsData(stored);
  //   setIsLoading(false);
  //   setFilteredProducts(stored);
  // }, []);

  // searching for a product
  useEffect(() => {
    let searched = productsData.filter((prod) => prod.name.includes(searchTerm));
    setFilteredProducts(searched);
  }, [searchTerm]);

  // sorting by name or price
  useEffect(() => {
    if (sortBy == 'name') {
      let nameSort = productsData.sort((a,b) => a.name.localeCompare(b.name));
      setFilteredProducts(nameSort);
    } else if (sortBy == 'price') {
      let priceSort = productsData.sort((a,b) => a.price - b.price);
      setFilteredProducts(priceSort);
    }
  }, [sortBy]);

  
  // selecting a price range
  useEffect(() => {
    let newFilter = productsData.filter(prod => prod.price >= priceRange[0]);
    newFilter = newFilter.filter(prod => prod.price <= priceRange[1]);
    setFilteredProducts(newFilter);
  }, [priceRange]);
  
  // changing the category
  useEffect(() => {
    setFilteredProducts(productsData.filter(prod => categories.includes(prod.category)));
  }, [categories]);

  const changeCategory = (e) => {
    if (e.target.checked) {
      setCategories(prev => ([...prev, e.target.id]));
    } else {
      setCategories((prev) => prev?.filter(el => el !== e.target.id));
    }
  };

  return (
    <div className="w-[85%] sm:w-[92%] lg:w-[85%] mx-auto flex-col flex gap-12 md:gap-6 pb-6">
      <header className='w-full md:flex pt-10 hidden sticky top-0 justify-between gap-10 items-center bg-[#eeeeee] pb-2'>
        <input
          type="search"
          value={searchTerm}
          placeholder='Search...'
          onChange={(e) => setsearchTerm(e.target.value)}
          className='placeholder:text-white bg-gray-300 rounded-lg pl-2.5 lg:w-2/12 w-3/12 py-2.5'
        />

        <form className="w-full bg-white p-4 rounded-2xl flex justify-between items-center shadow-lg">
          <p className='md:hidden'>Showing 1-{endNumber > filteredProducts.length ? '5' : filteredProducts.length} of {filteredProducts.length} results</p>
          <p className='hidden md:block'>Showing 1-{filteredProducts.length} of {filteredProducts.length} results</p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className='text-xl w-2/12 justify-between items-center border border-black rounded-md focus:outline-none'
          >
            <option className='text-lg' value="" disabled>Sort by</option>
            <option className='text-lg' value="name">Name</option>
            <option className='text-lg' value="price">Price</option>
          </select>
        </form>
      </header>
      <section className='flex flex-col md:flex-row md:gap-10'>
        {/* Mobile aside */}
        <aside className="md:hidden">
          <h3 className="mt-7 text-[#BCB7B7] text-lg font-medium mb-4 md:hidden">Home/ Marketplace</h3>
          <p className='md:hidden'>Showing 1-{endNumber > filteredProducts.length ? '5' : filteredProducts.length} of {filteredProducts.length} results</p>
          <form className="w-full bg-white p-5 mt-4 rounded-2xl transition-all duration-700 ease-in-out md:hidden">
            <header className='flex justify-between items-center'>
              <button
                type='button'
                className={`flex w-3/12 items-center text-xl justify-between py-1 ${showFilters ? 'border-b-[#AFB091] border-b-4' : ''}`}
                onClick={() => setShowFilters(!showFilters)}
              >Filters
                <img src={down} alt="" className={`transition duration-500 ${showFilters ? 'rotate-180' : ''}`} />
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className='flex w-4/12 text-xl justify-between items-center'
              >
                <option className='text-lg' value="" disabled>Sort by</option>
                <option className='text-lg' value="name">Name</option>
                <option className='text-lg' value="price">Price</option>
              </select>
            </header>
            <section style={{ transition: "max-height 0.5s ease-out" }} className={`gap-6 flex flex-col overflow-hidden ${showFilters ? ' mt-6 max-h-none' : 'max-h-0'}`}>
              <FilterPrice values={priceRange} setValues={setPriceRange} />
              <FilterCategory
                changeCategory={changeCategory}
              />
            </section>
          </form>
        </aside>

        {/* Desktop aside */}
        <aside className="hidden md:block w-3/12 lg:w-2/12 mb-6 h-fit sticky top-28">
          {/* <div className='h-full sticky top-16 w-full'> */}
            <header className='flex justify-between items-center'>
              <label
                type='button'
                className='flex w-full items-center text-xl font-semibold gap-4 py-1 mb-12 border-b-[#AFB091] border-b-4'
              >
                <VscSettings />
                Filter
              </label>
            </header>
            <section className='gap-6 flex flex-col'>
              <FilterPrice values={priceRange} setValues={setPriceRange} />
              <FilterCategory
                changeCategory={changeCategory}
                categories={categories}
              />
            </section>
          {/* </div> */}
        </aside>

        {/* Main page for products */}
        <main className='flex flex-col gap-6 w-full flex-wrap md:flex-row md:gap-0 md:justify-start'>
          {
            isLoading ? (
              <LoadingCard />
            ) :
            (categories.length == 0 && priceRange[0] == 20 && priceRange[1] == 90 && !sortBy && !searchTerm) ? productsData.slice(0, endNumber).map(({name, pic, price, id}) => (
              <ProductCard id={id} key={id} name={name} pic={pic} price={price} />
            ))
            : filteredProducts.slice(0, endNumber).map(({name, pic, price, id}) => (
              <ProductCard key={id} id={id} name={name} pic={pic} price={price} />
            ))
          }
          <button className={`justify-end gap-4 items-center flex md:hidden`} onClick={() => setEndNumber(endNumber == 5 ? 14 : 5)}>
            <p className='text-xl sm:text-2xl font-medium'>Show {endNumber == 5 ? 'More' : 'Less'}</p>
            <span className='w-12 h-12 rounded-full border border-black flex justify-center items-center'>
              <AiOutlineArrowRight className={`${endNumber == 5 ? '' : 'rotate-180'} transition ease-in-out duration-300`} size={24} />
            </span>
          </button>
        </main>
      </section>
    </div>
  )
}

export default Marketplace