import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ProfilSection1User from './Profil_section1_user'

function Profil() {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <ProfilSection1User />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Profil