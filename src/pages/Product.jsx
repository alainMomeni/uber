import React from 'react'
import Footer from './Footer'
import Product_section1 from './Product_section1'
import Product_section2 from './Product_section2'
import Header from './header/Header'

function Product() {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Product_section1 />
            </div>
            <div>
                <Product_section2 />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Product