import React from 'react'
import Footer from './Footer'
import HeaderUser from './Header_user'
import AboutUsSection1 from './About_us_section1'


function About_us() {

    return (
        <>
            <div>
                <HeaderUser />
            </div>
            <div>
                <AboutUsSection1 />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default About_us