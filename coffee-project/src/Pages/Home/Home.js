import React from "react"
import './Home.styles.js'
import mainImg from "../../assets/mainImg.png"
import { MainContainer, MainImg, Orderbtn, } from "./Home.styles.js"

export const Home = () =>{
    return( 
    <MainContainer>
   <MainImg src={mainImg} alt="mainPageImg"/>
   <Orderbtn href="#about" >
    <p>Order now</p>
   </Orderbtn>
    </MainContainer>
    )
}

