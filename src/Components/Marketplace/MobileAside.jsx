/* eslint-disable react/prop-types */
import FilterCategory from "./FilterCategory";
import FilterPrice from "./FilterPrice";
import down from '../../assets/down.png';

const MobileAside = ({ endNumber, filteredProducts, setShowFilters, showFilters, sortBy, setSortBy, priceRange, setPriceRange, changeCategory }) => {
  return (
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
  )
}

export default MobileAside