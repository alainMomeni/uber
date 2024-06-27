import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Home_section1 from './Home_section1'
import Home_section2 from './Home_section2'

function Home() {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Home_section1 />
            </div>
            <div>
                <Home_section2 />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home