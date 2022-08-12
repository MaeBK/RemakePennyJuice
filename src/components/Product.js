import ProductCard from "./ProductCard.js";
import { useEffect, useState } from "react";


export default function Product(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(`https://remake-penny-juice.herokuapp.com/data`)
                const data = await result.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                
            }
        }
        fetchData();
    }, [])


    return (
        <>
            <h1 className="prod-page-title">All Flavors</h1>
            {/* <p>Youre a nerd</p> */}
            <section className="product-main"> 
            {/* added section above */}
            <ul className="product-list">
                {loading ? <h1>Loading...</h1> : null}
                {error ? <h1>Error</h1> : null}
                {products.map(product => {
                  return <ProductCard key={product._id} products={product} />
                })}
            </ul>
            </section>
        </>
    )
}
