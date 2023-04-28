import React from "react";
import { AddBtn, Conteiner,Description,FavBtn,Img, Name, Price } from "./CoffeeCard.styles";
import add from "../../assets/add.png"
import fav from "../../assets/fav.png"
export const CoffeeCard = (props) => {

    console.log(props)

return(
    <Conteiner>
    <Img src={props.products.img} alt="mainPageImg"/>
   
    <AddBtn src= {add}/>
    <FavBtn src= {fav}/>
    <Description>
    <Name>{props.products.name}</Name>
    <Price>{`$${props.products.price}`}</Price>
    <div>{props.products.description}</div>
    </Description>
    </Conteiner>
)

}