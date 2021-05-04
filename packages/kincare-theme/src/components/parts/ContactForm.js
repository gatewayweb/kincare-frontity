import React from 'react'
import { connect, styled } from 'frontity'

const StyledForm = styled.div`
    label {
        font-size:1.1rem;
        width:100%;
        display:block;
    }
    textarea {
        width:100%;
        height:100%;
        margin-bottom:1rem;
    }
    p {
        margin-bottom:1rem;
    }
    form {
        margin-bottom:1rem;
    }
`

const ContactForm = ({ state, libraries }) => {
    const contactData = state.source.get('/contact-us')
    const contactPage = state.source.page[contactData.id]
    const Html2React = libraries.html2react.Component
    
    return (
        <StyledForm>
            {contactPage && contactPage.content ? <Html2React html={contactPage.content.rendered}></Html2React> : <></>}
        </StyledForm>
    )
}

export default connect(ContactForm)