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
import ProfilClient from './pages/Profil_client.jsx';
import UpdateProfilUser from './pages/Update_profil_user.jsx';
import ModifierUserDash from './pages/dashboard/update_profil_dash.jsx';
import { CartProvider } from './CartContext.jsx'; // Make sure this path is correct


function App() {
  return (
    <div className=''>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Liste des produits' element={<Liste_des_produits />} />
            <Route path='/Produit/:id' element={<Product />} />
            <Route path='/Commande' element={<Orders />} />
            <Route path='/Profil' element={<Profil />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Dashboard/Liste des produits' element={<ListeProduitsDash />} />
            <Route path='/Dashboard/Nouveau produit' element={<NouveauProduit />} />
            <Route path='/Dashboard/Editer les produits/:id' element={<EditProduit />} />
            <Route path='/À propos de nous' element={<About_us />} />
            <Route path='/Profil du client' element={<ProfilClient />} />
            <Route path='/Modifier profil' element={<UpdateProfilUser />} />
            <Route path='/Dashboard/Modifier profil' element={<ModifierUserDash />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
