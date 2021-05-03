import React from 'react'
import { connect, styled } from 'frontity'

import HeaderPattern from '../parts/HeaderPattern'
import ContentContainer from '../parts/ContentContainer'
import ContactForm from '../parts/ContactForm'

const Contact = ({ page, libraries }) => {
    const { title, subtitle } = page.acf
    const Html2React = libraries.html2react.Component

    return (
        <>
            <HeaderPattern />
            <ContentContainer>
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div className="col col-12">
                            <h1>Contact Us</h1>
                            <Html2React html={page.content.rendered}></Html2React>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </>
    )
}

export default connect(Contact)