import React from "react"
import Brands from "./Brands"
import Categories from "./Categories"
import Deals from "./Deals"
import FAQ from "./FAQ"
import Hero from "./Hero"
import Newsletter from "./Newsletter"

const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Deals />
            <Brands />
            <Newsletter />
            <FAQ />
      
        </>
    )

}

export default Home