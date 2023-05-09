import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import './App.css';
import { Home } from './Pages/Home/Home';
import { MainPage } from './Pages/MainPage/MainPage';
import { useEffect } from 'react';
import { CartPage } from './Pages/CartPage/CartPage';

const GlobalStyle = createGlobalStyle`
  *{
   font-family: 'Questrial', sans-serif;
  }
`;

function App() {
  
  
  const [activeScreen, setActiveScreen] = useState("MainPage")
  const [cart, setCart] =  useState([])
  const [favorites, setFavorites] = useState([])

  const goToMainPage = () => setActiveScreen("MainPage")
  const goToCartPage = () => setActiveScreen("CartPage")
  
  console.log(cart)
  
  const renderScreen = () =>{
    switch(activeScreen){
      case "MainPage":
        return <>
        <GlobalStyle/>
        <Home/>
        <MainPage
        addToCart={addToCart}
        goToCartPage={goToCartPage}

        />

        </>
        case "CartPage":
          return<>
          <GlobalStyle/>
          <CartPage
      increaseQuantityInCart={increaseQuantityInCart}
      decreaseQuantityInCart={decreaseQuantityInCart}
      deleteItemInCart={deleteItemInCart}
      cart={cart}
      goToMainPage={goToMainPage}
      />
     </>
     default:
      return<div>
        Page not found
      </div>
      
        
    }
  }

  const addToCart = (ProductToAdd)=>{
    const newCart = [...cart]

    const productFound = newCart.find((productInCart)=> productInCart.id === ProductToAdd.id)
    if(!productFound){
      const newProduct = {...ProductToAdd,quantity:1}
      newCart.push(newProduct)
      localStorage.setItem('ItemOnCart',JSON.stringify(newCart))
    } else{
      productFound.quantity++
      localStorage.setItem('ItemOnCart',JSON.stringify(cart))
    }

    setCart(newCart)
  }

  const increaseQuantityInCart = (productToIncrease)=>{
    const newCart = [...cart]
    const productFound = newCart.find(
      (productInCart)=>productInCart.id===productToIncrease.id)
    productFound.quantity++

    localStorage.setItem('ItemOnCart',JSON.stringify(newCart))
    setCart(newCart)
  }

  const decreaseQuantityInCart = (productToDecrease)=>{
  const newCart =[...cart]
  const productFound = newCart.find(
    (productInCart)=>productInCart.id===productToDecrease.id)
  productFound.quantity--
  
  localStorage.setItem('ItemOnCart',JSON.stringify(newCart))
  
  setCart(newCart)
  }

  const deleteItemInCart = (productToDelete)=>{
  const newCart = [...newCart]

  const indexFound = newCart.findIndex(
    (productInCart)=>productInCart.id===productToDelete.id)

    newCart.splice(indexFound,1)

    localStorage.setItem('ItemOnCart',JSON.stringify(newCart))

    setCart(newCart)

  }

  const localStorageCart = () => {
    if (localStorage.getItem('ItemOnCart')) {
      const newCartItems = localStorage.getItem('ItemOnCart')
      const newCartItemsParse = JSON.parse(newCartItems)
      setCart(newCartItemsParse)
    }
  }
  
  useEffect(() => {
    localStorageCart();
  }, [])

  return (
    <div className="App">
      {renderScreen()}
    </div>
  );
}

export default App;
