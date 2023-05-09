import React from "react";
import { AddBtn,Description,FavBtn, Name, Price, FreshContainer,FreshImg } from "./CoffeeCard.styles";
import add from "../../assets/add.png"
import fav from "../../assets/fav.png"
import liked from "../../assets/liked.png"
import { useState } from "react";
// import LikeBtn from "../Animation/likeBtn";

export const FreshCard = (props) => {
    
    const {isOnMainPage,freshProducts,addToCart} = props
    const [isFavorite, setIsFavorite] = useState(false)

   

return(
    <FreshContainer>
    <FreshImg src={freshProducts.img} alt="mainPageImg"/>
   
    {isOnMainPage&&<button onClick={()=>addToCart(freshProducts)}>
        <AddBtn src= {add}/>
        </button>}
    {isFavorite&&<button onClick={()=>setIsFavorite(!isFavorite)}>
        <FavBtn src= {liked}/>
        </button>}
    {!isFavorite&&<button onClick={()=>setIsFavorite(!isFavorite)}>
        <FavBtn src= {fav}/>
        </button>}
    
    <Description>
    <Name>{freshProducts.name}</Name>
    <Price>{`$${freshProducts.price}`}</Price>
    <div>{freshProducts.description}</div>
    </Description>
    </FreshContainer>
)

}