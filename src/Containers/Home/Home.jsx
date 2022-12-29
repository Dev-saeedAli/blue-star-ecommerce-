import React from "react"
import Brands from "./Brands"
import Categories from "./Categories"
import Deals from "./Deals"
import FilterCategories from "./FilterCategories"
import Hero from "./Hero"
import Newsletter from "./Newsletter"

const Home = () => {
    return (
        <>
        <div className="container">
            <h1>Home Page</h1>
            <Hero />
            <Categories />
            <Deals />
            <FilterCategories />
            <Brands />
            <Newsletter />
        </div>
        </>
    )

}

export default Home