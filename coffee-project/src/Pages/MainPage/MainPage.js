import React from "react";
import { products } from "../../products/products";
import { freshProducts } from "../../products/freshProducts";
import { CoffeeCard } from "../../components/CoffeeCard/CoffeeCard";
import { BeansDecoration, CartIcon, CoffeeBeanBtn, CoffeeGirl, HotCategory, Line, Logo, ProductsContainer, RamoDecoration, CoffeeGirlConteiner, ChoiceConteiner, MainContainer, Header, CartBtn, DescriptionGirl, DescriptionGirlFresh } from "./MainPage.styles";
import logo from "../../assets/logo.png"
import hot from "../../assets/hot.png"
import ramo from "../../assets/ramo.png"
import beans from "../../assets/beans.png"
import cartIcon from "../../assets/cartIcon.png"
import CoffeGirl from "../../assets/CoffeeGirl.png"
import coffeeBeans from "../../assets/coffeeBeans.png"
import JuiceGirl from "../../assets/JuiceGirl.png"
import mintLeaves from "../../assets/mintLeaves.png"
import { FreshCard } from "../../components/CoffeeCard/FreshCard";






export const MainPage = (props) => {

const{goToCartPage, addToCart} = props

return<MainContainer>
<Header id="about">
<Logo src={logo}/>
<CartBtn onClick={goToCartPage}><CartIcon src={cartIcon}/></CartBtn>
</Header>

<ChoiceConteiner >

<CoffeeGirlConteiner>
<CoffeeGirl src={CoffeGirl}/>
<CoffeeBeanBtn src={coffeeBeans}/>
<DescriptionGirl>Caffeine</DescriptionGirl>
</CoffeeGirlConteiner>

<CoffeeGirlConteiner>
<CoffeeGirl src={JuiceGirl}/>
<CoffeeBeanBtn src={mintLeaves}/>
<DescriptionGirlFresh>Fresh</DescriptionGirlFresh>
</CoffeeGirlConteiner>

</ChoiceConteiner>

{/* <RamoDecoration src={ramo}/>
<BeansDecoration src={beans}/> */}
<div>
<HotCategory src={hot}/>
{/* <Line></Line> */}
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

<div>
<HotCategory src={hot}/>
{/* <Line></Line> */}
</div>

<ProductsContainer>
    {freshProducts

    .map((freshProducts)=>{
        return(
          
          <FreshCard
            addToCart={addToCart}
            freshProducts={freshProducts}
            key={products.id}
            isOnMainPage={true}
            />
           
        )
    })
    
    }
</ProductsContainer>
</MainContainer>


}