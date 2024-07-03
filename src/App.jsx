import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Liste_des_produits from './pages/List_product';
import Product from './pages/Product';
import Orders from './pages/Order_summary.jsx';
import Profil from './pages/Profil.jsx';
import Dashboard from './pages/dashboard/dashboard.jsx';
import ListeProduitsDash from './pages/dashboard/Liste_produit_dash.jsx';



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
        <Route path='/Dashboard' element= { <Dashboard/> } />
        <Route path='/Dashboard/Liste des produits' element= { <ListeProduitsDash/> } />
      </Routes>
    </BrowserRouter>      

    </div>
  );
}

export default App;
