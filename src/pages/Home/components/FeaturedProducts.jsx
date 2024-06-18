import { useEffect, useState } from "react"
import { ProductCard, Error, Loader } from "../../../components"
import { getFeturedProduct } from "../../../services";

export const FeaturedProducts = () => {

  const [products, setproducts] = useState([]);
  const [iserror, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
     try {
      setLoading(true);
      const data = await getFeturedProduct();
      setproducts(data);
      setLoading(false);
     } catch (error) {
      setIsError(true);
      setError(error);
      setLoading(false);
     }
    }
    fetchProducts();
  },[])
 
  

  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
        { loading && <Loader />}
        { iserror && <Error error={error} />}    
        <div className="flex flex-wrap justify-center lg:flex-row">
            { products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </section>
  )
}
