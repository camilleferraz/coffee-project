import React from "react"
import { CartCard } from "../../components/CartCard/CartCard"
import logo from "../../assets/logo.png"
import ramo from "../../assets/ramo.png"
import beans from "../../assets/beans.png"
import { BeansDecorationCart, Button, LogoCart, Price, RamoDecorationCart } from "./CartPageStyled"

export const CartPage = (props) =>{
    const{
        goToMainPage, 
        cart, 
        addToCart,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        deleteItemInCart
      } = props

      const total = cart.reduce(
        ((acc,product)=>(product.price*product.quantity)+acc),0)
    return( 
   <>
   
   <LogoCart src={logo}/> 
   <RamoDecorationCart src={ramo}/>
   <BeansDecorationCart src={beans}/>
   {cart.map((products)=>{
    return(
        <CartCard
        addToCart={addToCart}
        key={products.id}
        products={products}
        isOnCartPage={true}
        increaseQuantityInCart={increaseQuantityInCart}
        decreaseQuantityInCart={decreaseQuantityInCart}
        deleteItemInCart={deleteItemInCart}
    />
   )})}
   <Price>{`Total:$ ${total}`}</Price>
    <Button onClick={goToMainPage}>Forgot something?</Button>
    <Button>Confirm Order</Button>
   </>
    )
}