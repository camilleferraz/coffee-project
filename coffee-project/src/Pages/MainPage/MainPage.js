import React from "react";
import { products } from "../../products/products";
import { CoffeeCard } from "../../components/CoffeeCard/CoffeeCard";


export const MainPage = () => {
return<>
<div>
    {products

    .map((products)=>{
        return(
            <CoffeeCard
            products={products}
            key={products.id}
            />
        )
    })
    
    }
</div>
</>


}