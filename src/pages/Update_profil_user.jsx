import React from 'react'
import Footer from './Footer'
import UpdateProfilUserForm from './Update_profil_user_section_1'
import Header from './header/Header'


function UpdateProfilUser() {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <UpdateProfilUserForm />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default UpdateProfilUser