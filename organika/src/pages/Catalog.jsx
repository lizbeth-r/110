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
    const [loading, setLoading] = useState(true); // Estado para cargar productos

    async function loadData() {
        try {
            const data = await DataService.getProducts();
            setProducts(data);
        } catch (error) {
            console.error("Error loading products:", error);
            // Manejar error, quizás establecer un estado para manejar el error
        } finally {
            setLoading(false); // Indicar que la carga ha terminado
        }
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

    if (loading) {
        return <div>Loading products...</div>; // Mensaje de carga
    }

    const filteredProducts = products.filter(prod =>
        (filter === "" || prod.category === filter) &&
        (prod.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div id="catalog" className="catalog page">
            <h1>Our amazing catalog</h1>


            <div className="filters">
                <button className='btn btn-sm btn-customAll' onClick={() => setFilter("")}>All</button>
                {categories.map(cat =>
                    <button key={cat} className='btn btn-sm btn-custom' onClick={() => setFilter(cat)}>{cat}</button>
                )}
            </div>

            {filteredProducts.map((prod) => (
                   <Product key={prod._id} data={prod} />
               ))}

            <div className="search-filter">
                <div className="price-filter">
                    {filterInputs.map((input, index) => (
                        <input key={index} type="number" placeholder={input.placeholder} value={input.value} onChange={input.onChange} className="form-control" />
                    ))}
                    <button className="btn btn-outline-success" onClick={handlePriceFilter}><i class="fa-solid fa-filter-circle-dollar"></i></button>
                </div>

                <div className="d-flex search-bar">
                    <input type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="form-control" />
                    <button class="btn btn-outline-success" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Catalog;
