import React from "react";
import { products } from "../../products/products";
import { CoffeeCard } from "../../components/CoffeeCard/CoffeeCard";
import { BeansDecoration, HotCategory, Logo, ProductsContainer, RamoDecoration } from "./MainPage.styles";
import logo from "../../assets/logo.png"
import hot from "../../assets/hot.png"
import ramo from "../../assets/ramo.png"
import beans from "../../assets/beans.png"

export const MainPage = () => {
return<div>
<Logo src={logo}/>
<RamoDecoration src={ramo}/>
<BeansDecoration src={beans}/>
<div>
<HotCategory src={hot}/>
</div>

<ProductsContainer>
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
</ProductsContainer>
</div>


}