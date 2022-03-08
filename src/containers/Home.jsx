import React, { useContext } from "react";
import initialState from "../initialState";

import Products from "../components/Products";
import AppContext from "../context/AppContext";

const Home = () => {
    const { state } = useContext(AppContext);
    console.log(state);
    return (
        <Products 
            products={initialState.products}
        />
    )
}

export default Home;