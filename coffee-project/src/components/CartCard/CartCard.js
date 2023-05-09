import React from "react";
import { useState } from "react";
import { CoffeeImg, MainConteiner, PurchaseConteiner } from "./CartCard.styles";

// import LikeBtn from "../Animation/likeBtn";

export const CartCard = (props) => {

    console.log(props)
    const {isOnMainPage,products,addToCart,isOnCartPage} = props
    const [isFavorite, setIsFavorite] = useState(false)

   

return(
   
<PurchaseConteiner>

<CoffeeImg src={products.img}/>
<span>{products.name}</span>
<span>{products.description}</span>
<span>{products.quantity}</span>
<span>{`$${products.price}`}</span>  
</PurchaseConteiner>

)

}