import React from 'react';

const Categories = () => {
  const categoryArray = ["Furniture", "HeadPhones", "Bag", "Laptop","Book"];
  return (
    <div className='container'>
      <h2>Shop Our Top Category</h2>
      {categoryArray.map(item => {
        return item
      })}
    </div>
  )
}

export default Categories
