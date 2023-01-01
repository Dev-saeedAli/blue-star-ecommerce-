
import { filterLists } from "../../Categories";
import FilteredProductCards from "../../Component/FilteredProductCards";

const Deals = () => {
  
  return (
    <section className="container my-3">
      <h2>Todays Best Deals for you</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {filterLists.map((item, index) => {
          if (item.filters === "type") {
            return (
              <button
                key={index}
                type="submit"
                className="btn rounded-pill btn-outline-success mx-2 my-3"
              >
                {item.name}
              </button>
            );
          }
        })}
      </form>

      <FilteredProductCards />
    </section>
  );
};

export default Deals;
