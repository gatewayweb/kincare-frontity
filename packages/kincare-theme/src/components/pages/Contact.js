import React from 'react'
import { connect, styled } from 'frontity'

import HeaderPattern from '../parts/HeaderPattern'
import ContentContainer from '../parts/ContentContainer'

const Contact = ({ page }) => {
    const { title, subtitle } = page.acf

    return (
        <>
            <HeaderPattern />
            <ContentContainer>
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div className="col col-12">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </>
    )
}

export default connect(Contact)