import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ProfilSection1 from './Profil_section1'

function ProfilClient() {

    return (
        <div className='min-h-screen'>
            <div>
                <Header />
            </div>
            <div>
                <ProfilSection1 />
            </div>
            <div className='sticky top-[100vh]'>
                <Footer />
            </div>
        </div>
    )
}

export default ProfilClient