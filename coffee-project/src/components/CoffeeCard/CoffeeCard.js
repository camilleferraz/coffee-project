import React from "react";
import { AddBtn, Conteiner,Description,FavBtn,Img, Name, Price } from "./CoffeeCard.styles";
import add from "../../assets/add.png"
import fav from "../../assets/fav.png"
import liked from "../../assets/liked.png"
import { useState } from "react";
// import LikeBtn from "../Animation/likeBtn";

export const CoffeeCard = (props) => {

    console.log(props)
    const {isOnMainPage,products,addToCart} = props
    const [isFavorite, setIsFavorite] = useState(false)

   

return(
    <Conteiner>
    <Img src={props.products.img} alt="mainPageImg"/>
   
    {isOnMainPage&&<button onClick={()=>addToCart(products)}>
        <AddBtn src= {add}/>
        </button>}
    {isFavorite&&<button onClick={()=>setIsFavorite(!isFavorite)}>
        <FavBtn src= {liked}/>
        </button>}
    {!isFavorite&&<button onClick={()=>setIsFavorite(!isFavorite)}>
        <FavBtn src= {fav}/>
        </button>}
    
    <Description>
    <Name>{props.products.name}</Name>
    <Price>{`$${props.products.price}`}</Price>
    <div>{props.products.description}</div>
    </Description>
    </Conteiner>
)

}