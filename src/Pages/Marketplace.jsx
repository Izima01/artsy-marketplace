import { useEffect, useState } from 'react';
import down from '../assets/down.png';
import ProductCard from '../Components/ProductCard';
// import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { db } from '../config/firebase.js'
import { getDocs, collection } from 'firebase/firestore';
import FilterCategory from '../Components/Marketplace/FilterCategory';
import { AiOutlineArrowRight } from 'react-icons/ai';
import FilterPrice from '../Components/Marketplace/FilterPrice';

const Marketplace = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([20, 90]);
  const [endNumber, setEndNumber] = useState(5);
  const productsRef = collection(db, "products");

  useEffect(() => {
    const getMoviesList = async () => {
      try {
        const data = await getDocs(productsRef);
        const grabbedData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
        setProductsData(grabbedData);
      } catch (err) {
        console.log(err);
      }
    };
    getMoviesList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(categories);
    if (categories.length === 0) return;
    if (filteredProducts.length == 0) {
      setFilteredProducts(productsData.filter(prod => categories.includes(prod.category)));
    } else {
      setFilteredProducts(filteredProducts.filter(prod => categories.includes(prod.category)));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  useEffect(() => {
    if (filteredProducts.length == 0) {
      let newFilter = productsData.filter(prod => prod.price > priceRange[0]);
      newFilter = newFilter.filter(prod => prod.price < priceRange[1]);
      setFilteredProducts(newFilter);
    } else {
      let newFilter = filteredProducts.filter(prod => prod.price > priceRange[0]);
      newFilter = newFilter.filter(prod => prod.price < priceRange[1]);
      setFilteredProducts(newFilter);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceRange]);

  const changeCategory = (e) => {
    if (e.target.checked) {
      setCategories(prev => ([...prev, e.target.id]));
    } else {
      setCategories((prev) => prev?.filter(el => el !== e.target.id));
    }
  };

  return (
    <div className="w-[85%] mx-auto flex-col flex gap-12 pb-6">
      <aside className="">
          <h3 className="mt-7 text-[#BCB7B7] text-lg font-medium mb-4">Home/ Marketplace</h3>
          <p>Showing 1-{endNumber} of {filteredProducts.length || productsData.length} results</p>
          <form className="w-full bg-white p-5 mt-4 rounded-2xl transition-all duration-700 ease-in-out">
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
      <main className='flex flex-col gap-6 w-full'>
        {
          (categories.length == 0 && priceRange[0] == 20 && priceRange[1] == 90 ) ? productsData.slice(0, endNumber).map(({name, pic, price, id}) => (
            <ProductCard key={id} name={name} pic={pic} price={price} />
          ))
          : filteredProducts.slice(0, endNumber).map(({name, pic, price, id}) => (
            <ProductCard key={id} name={name} pic={pic} price={price} />
          ))
        }
        <button className={`justify-end gap-4 items-center ${endNumber === 14 ? 'hidden' : 'flex'}`} onClick={() => setEndNumber(14)}>
          <p className='text-xl sm:text-2xl font-medium'>Load More</p>
          <span className='w-12 h-12 rounded-full border border-black flex justify-center items-center'>
            <AiOutlineArrowRight className='' size={24} />
          </span>
        </button>
      </main>
    </div>
  )
}

export default Marketplace