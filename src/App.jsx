import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Liste_des_produits from './pages/List_product';
import Product from './pages/Product';
import Orders from './pages/Order_summary.jsx';
import Profil from './pages/Profil.jsx';



function App() {
  return (
    <div className="w-screen h-screen">

    <BrowserRouter> 
      <Routes> 
        <Route path='/' element= { <Home /> } />
        <Route path='/Liste des produits' element= { <Liste_des_produits/> } />
        <Route path='/Produit' element= { <Product/> } />
        <Route path='/Commande' element= { <Orders/> } />
        <Route path='/Profil' element= { <Profil/> } />
      </Routes>
    </BrowserRouter>      

    </div>
  );
}

export default App;
