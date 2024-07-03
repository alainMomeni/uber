import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Liste_des_produits from './pages/List_product';
import Product from './pages/Product';
import Orders from './pages/Order_summary.jsx';
import Profil from './pages/Profil.jsx';
import Dashboard from './pages/dashboard/dashboard.jsx';
import ListeProduitsDash from './pages/dashboard/Liste_produit_dash.jsx';
import NouveauProduit from './pages/dashboard/Nouveau_produit_dash.jsx';
import EditProduit from './pages/dashboard/Edit_produit_dash.jsx';
import About_us from './pages/About_us.jsx';



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
        <Route path='/Dashboard/Nouveau produit' element= { <NouveauProduit/> } />
        <Route path='/Dashboard/Editer les produits' element= { <EditProduit/> } />
        <Route path='/Dashboard/Editer les produits' element= { <EditProduit/> } />
        <Route path='/À propos de nous' element= { <About_us/> } />
      </Routes>
    </BrowserRouter>      

    </div>
  );
}

export default App;
