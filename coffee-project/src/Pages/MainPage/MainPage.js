import React from "react";
import { products } from "../../products/products";
import { CoffeeCard } from "../../components/CoffeeCard/CoffeeCard";
import { BeansDecoration, CartIcon, HotCategory, Logo, ProductsContainer, RamoDecoration } from "./MainPage.styles";
import logo from "../../assets/logo.png"
import hot from "../../assets/hot.png"
import ramo from "../../assets/ramo.png"
import beans from "../../assets/beans.png"
import cartIcon from "../../assets/cartIcon.png"




export const MainPage = (props) => {

const{goToCartPage, addToCart} = props

return<div>
<Logo src={logo}/>
<span>
    <CartIcon src={cartIcon}/>
</span>
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
            addToCart={addToCart}
            products={products}
            key={products.id}
            isOnMainPage={true}
            />
           
        )
    })
    
    }
</ProductsContainer>
</div>


}