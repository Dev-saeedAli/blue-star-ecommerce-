import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProductList from "../../app/features/getProductsList/getProductList";
import { fetchProducts } from "../../app/features/products/productSlice";
import FilteredProductCards from "../../Component/FilteredProductCards";

const Deals = () => {
  const {loading, product } = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchProducts())
      return()=>   dispatch(fetchProducts())
  }, [])




  return (
    <section className="container my-3">
      <h2>Todays Best Deals for you</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {product.map((item) => {
          const { id, image, name} = item; 
            return (
              <button
                onClick={()=> dispatch(getProductList(id))}
                key={id}
                type="submit"
                className="btn rounded-pill btn-outline-success mx-2 my-3"
              >
                {item.name}
              </button>
            );
        }
        )}
      </form>
      <FilteredProductCards/>
    </section>
  );
};

export default Deals;
