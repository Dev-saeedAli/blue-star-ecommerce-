import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { fetchSearchResults } from "../app/features/search/searchSlice";

const Form = () => {
  const [search, setSearch ] = useState("")
  const [searched, setSearched] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const styles = {
    fontSize:".9rem"
  }

  const searchProducts = (event) => {
    event.preventDefault()
    setSearched(!searched)
    navigate('/products/details')
  }
  useEffect(()=>{
    if(searched){
      dispatch(fetchSearchResults(search))
    }
  }, [])


  return (
    <>
      <form className="d-flex" role="search" onSubmit={(e) => searchProducts(e)}>
        <label htmlFor="form-label"></label>
        <div className="form-group d-flex justify-space-around bg-white rounded-pill">
          <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
            style={styles}
            className="shadow-none form-control me-2 bg-transparent border-0"
            type="search"
            placeholder="Search Products"
            aria-label="Search"
            id="form-label"
          />
          <button className="btn btn-outline-success border-0" type="submit">
            <AiOutlineSearch />
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
