import React from 'react'
import bag from "../images/bag.avif"
import furniture from "../images/furniture.avif"

const FilteredProductCards = () => {
  return (
    <>
  <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img src={bag} className="card-img-top" alt="..." style={{height:"170px", objectFit:"cover", }}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default FilteredProductCards
