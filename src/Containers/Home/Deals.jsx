import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProductList} from "../../app/features/getProductsList/getProductList";
import { fetchProducts } from "../../app/features/products/productSlice";
import FilteredProductCards from "../../Component/FilteredProductCards";
import Spinner from "../../Component/Spinner";

const Deals = () => {
  const [active, setActive] = useState("electronics")

  const {loading, product } = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchProducts())
      return()=> dispatch(fetchProducts())
  }, [])

  return (
    <section className="container my-3">
      <h2 className="fw-bold mt-5 text-center text-md-start mb-3 mb-md-2">Todays Best Deals for you</h2>
      <form
      className="text-center text-md-start"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
         {loading ? (
          <div className="row row-cols-1 row-cols-md-4 g-4" style={{minHeight: "70vh"}}>
          <div className="col w-100 d-flex align-align-items-center  justify-content-center">
            <Spinner/>
          </div>
          </div>
          ) : 
        (product.map((item, index) => {
            return (
              <button
                onClick={()=> {
                  dispatch(getProductList(item))
                  setActive(item)
                }}
                key={index}
                type="submit"
                className={`btn rounded-pill ${active === item ? "btn-success":"btn-outline-success"} mx-2 my-md-5 my-3 `}
              >
                {item}
              </button>
            );
        }
        ))}
      </form>
      <FilteredProductCards/>
    </section>
  );
};

export default Deals;
