import React from 'react'
import Footer from './Footer'
import Header from './Header'
import List_product_section1 from './List_product_section1'
import List_product_section2 from './List_product_section2'


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