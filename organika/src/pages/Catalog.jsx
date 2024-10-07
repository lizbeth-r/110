import Product from "../components/Product";
import "./Catalog.css";
import { categories } from '../services/DataService';
import DataService from "../services/DataService";
import { useEffect, useState } from 'react';

function Catalog() {
    const [filter, setFilter] = useState("");
    const [products, setProducts] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
    const [searchTerm, setSearchTerm] = useState('');

    async function loadData() {
        let data = await DataService.getProducts();
        setProducts(data);
    }

    useEffect(() => {
        loadData();
    }, []);

    async function handlePriceFilter() {
        const min = priceRange.min === '' ? 0 : Number(priceRange.min);
        const max = priceRange.max === '' ? Infinity : Number(priceRange.max);
        const filteredProducts = await DataService.getProductsByPriceRange(min, max);
        setProducts(filteredProducts);
    }

    const filterInputs = [
        {
            placeholder: "Min Price",
            value: priceRange.min,
            onChange: (e) => setPriceRange({ ...priceRange, min: e.target.value })
        },
        {
            placeholder: "Max Price",
            value: priceRange.max,
            onChange: (e) => setPriceRange({ ...priceRange, max: e.target.value })
        }
    ];


    return (
        <div id="catalog" className="catalog page">
            <h1>Our amazing catalog</h1>

            <div className="filters">
                <button className='btn btn-sm btn-customAll' onClick={() => setFilter("")}>All</button>
                {categories.map(cat =>
                    <button className='btn btn-sm btn-custom' onClick={() => setFilter(cat)}>{cat}</button>
                )}
            </div>

            {products.filter(prod => filter == "" || prod.category == filter).map((prod) => (
                <Product data={prod}></Product>
            ))}

            <div className="price-filter">
                {filterInputs.map((input, index) => (
                    <input
                        key={index}
                        type="number"
                        placeholder={input.placeholder}
                        value={input.value}
                        onChange={input.onChange}
                    />
                ))}
                <button onClick={handlePriceFilter}>Filter by Price</button>
            </div>

        </div>
    );
}

export default Catalog;