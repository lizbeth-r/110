import { useState } from 'react';
import "./Admin.css";

function Admin() {
    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({ code: "", discount: "" });
    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({ title: "", price: "", image: "", category: "" });

    function handleProduct(e) {
        const text = e.target.value;
        const name = e.target.name;

        const copy = { ...product };
        copy[name] = text;
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
        if (product.title && product.price && product.image && product.category) {
            let copy = [...allProducts];
            copy.push(product);
            setAllProducts(copy);
            
            // Limpiar el formulario
            setProduct({
                title: "",
                price: "",
                image: "",
                category: ""
            });
        } else {
            console.warn("Please fill in all fields."); // Mensaje de advertencia
        }
    }

    function handleCoupon(e) {
        const text = e.target.value;
        const name = e.target.name;

        const copy = { ...coupon };
        copy[name] = text;
        setCoupon(copy);
    }

    function saveCoupon() {
        console.log(coupon);
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    return (
        <div className="admin page">
            <h1>Store administration</h1>

            <div className="parent">
                <div className="products">

                    <div className="form">
                        <h3>Register a Product</h3>
                        <div className="mb-3">
                            <label className="form-label">Title:</label>
                            <input type="text" className="form-control" onChange={handleProduct} name='title' value={product.title} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image:</label>
                            <input type="text" className="form-control" onChange={handleProduct} name='image' value={product.image} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Category:</label>
                            <input type="text" className="form-control" onChange={handleProduct} name='category' value={product.category} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price:</label>
                            <input type="number" className="form-control" onChange={handleProduct} name='price' value={product.price} />
                        </div>
                        <div className="controls">
                            <button className="btn btn-outline-dark" onClick={saveProduct}>Save Product</button>
                        </div>

                    </div>
                    <div className="product-list">
                        {Array.isArray(allProducts) && allProducts.map((prod, index) => (
                            <li key={prod._id || index} className='prod'>
                                <img src={prod.image} alt={prod.title} />
                                <h5>{prod.title}</h5>
                                <label>${prod.price}</label>
                            </li>
                        ))}
                    </div>
                </div>
                <div className="coupons">
                    <div className="form">
                        <h3>Register a Coupon</h3>
                        <div className="mb-3">
                            <label className="form-label">Code</label>
                            <input type="text" className="form-control" onChange={handleCoupon} name="code" value={coupon.code} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Discount</label>
                            <input type="number" className="form-control" onChange={handleCoupon} name="discount" value={coupon.discount} />
                        </div>
                        <div className="controls">
                            <button className="btn btn-outline-dark" onClick={saveCoupon}>Save Coupon</button>
                        </div>
                    </div>

                    <div className="coupons-list">
                        {allCoupons.map(cp => <li key={cp.code}>{cp.code} - {cp.discount}%</li>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
