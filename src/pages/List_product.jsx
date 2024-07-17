import React from 'react'
import Footer from './Footer'
import List_product_section2 from './List_product_section2'
import Header from './header/Header'


function Liste_des_produits() {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <List_product_section2 /> 
            </div>
            <div>
                <Footer />
            </div>            
        </div>
    )
}

export default Liste_des_produits