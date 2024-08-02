import React, { useState } from 'react'
import Footer from './Footer'
import List_product_section2 from './List_product_section2'
import Header from './header/Header'

function Liste_des_produits() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <div>
            <div>
                <Header onSearch={handleSearch} />
            </div>
            <div>
                <List_product_section2 searchQuery={searchQuery} /> 
            </div>
            <div>
                <Footer />
            </div>            
        </div>
    )
}

export default Liste_des_produits