import Header from './Header'
import Footer from './Footer'
import React from 'react';
import Order_section1 from './Order_section1';


function Orders() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Order_section1 />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Orders;