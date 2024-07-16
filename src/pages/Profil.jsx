import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ProfilSection1User from './Profil_section1_user'

function Profil() {

    return (
        <div className='min-h-screen'>
            <div className=''>
                <Header />
            </div>
            <div className=''>
                <ProfilSection1User />
            </div>
            <div className='sticky top-[100vh]'>
                <Footer />
            </div>
        </div>
    )
}

export default Profil