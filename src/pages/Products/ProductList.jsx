import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";

import { ProductCard, ScrollToTopButton, Error, Loader  } from "../../components";
import { ProductFilter } from "./components/ProductFilter";

import { useFilter } from "../../context";
import { getProductList } from "../../services";

export const ProductList = () => {
  const { products, initialProductList } = useFilter();
  const [show, setShow] = useState(false);
  const [iserror, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
  useTitle("Explore eBooks Collection");
 

  useEffect(() => {
    async function fetchProducts(){
     try {
      setLoading(true);
      const data = await getProductList(searchTerm);
      initialProductList(data);
      setLoading(false);
      
     } catch (error) {
      
       setIsError(true);
       setError(error);
       setLoading(false);
     }
    }
    fetchProducts();
  }, [searchTerm]);

  return (
    <main>
      { loading ? <Loader /> :
        <section className="my-5">
          <div className="my-5 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>
            <span>
              <button onClick={() => setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
              </button>
            </span>            
          </div>    

          <div className="flex flex-wrap justify-center lg:flex-row">
            
            { iserror && <Error error={error} />}
            { products.map((product) => (
              <ProductCard key={product.id} product={product} />
            )) }            
          </div>  
        </section>
      }
        { show && <ProductFilter setShow={setShow} /> }
         { !iserror && !loading && <ScrollToTopButton />
         }


    </main> 
  )
}



