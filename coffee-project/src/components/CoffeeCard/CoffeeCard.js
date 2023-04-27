import React from "react";
import { Conteiner,Img } from "./CoffeeCard.styles";

export const CoffeeCard = (props) => {

    console.log(props)

return(
    <Conteiner>
    <Img src={props.products.img} alt="mainPageImg"/>
    <div>{`R$${props.products.price}`}</div>
    <div>{props.products.name}</div>
    <div>{props.products.description}</div>
    </Conteiner>
)

}