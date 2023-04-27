
import { useState } from 'react';
import './App.css';
import { Home } from './Pages/Home/Home';
import {ProductList} from './components/ProductsList/ProductList'
import { MainPage } from './Pages/MainPage/MainPage';

// const GlobalStyle = createGlobalStyle`
//   *{
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;
//     font-family: "Inter", sans-serif;
//     background-color: #f8f9f9;
  
//   }
// `;

function App() {

  const [activeScreen, setActiveScreen] = useState("MainPage")
  const [cart, setCart] =  useState([])
  const [favorites, setFavorites] = useState([])

  const renderScreen = () =>{
    switch(activeScreen){
      case "MainPage":
        return <>
        <Home/>
        <MainPage/>

        </>
        
    }
  }

  return (
    <div className="App">
      {renderScreen()}
    </div>
  );
}

export default App;
