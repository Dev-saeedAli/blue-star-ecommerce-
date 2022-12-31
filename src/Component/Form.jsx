import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Form = () => {
  return (
    <>
      <form className="d-flex" role="search">
        <label htmlFor="form-label"></label>
        <div className="form-group d-flex justify-space-around bg-white rounded-pill">
          <input
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
