import React from "react"
import './Home.styles.js'
import mainImg from "../../assets/mainImg.png"
import { MainImg, Orderbtn, } from "./Home.styles.js"

export const Home = () =>{
    return( 
    <>
   <MainImg src={mainImg} alt="mainPageImg"/>
   <Orderbtn>Order now</Orderbtn>
    </>
    )
}