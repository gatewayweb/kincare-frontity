import React from 'react'
import { connect } from 'frontity'

import HeaderPattern from '../parts/HeaderPattern'
import ContentContainer from '../parts/ContentContainer'
import ContactForm from '../parts/ContactForm'

const Contact = ({ data, page }) => {
    const { title, subtitle } = page.acf

    return (
        <>
            <HeaderPattern />
            <ContentContainer>
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div className="col col-12 pb-4">
                            <h1>{title}</h1>
                            <div className="subtitle">{subtitle}</div>
                        </div>
                        <div className="col col-12">
                            <ContactForm data={data} />
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </>
    )
}

export default connect(Contact)