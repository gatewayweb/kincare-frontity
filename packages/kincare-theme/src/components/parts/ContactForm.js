import React from 'react'
import { connect, styled } from 'frontity'

import Button from './Button'

const StyledForm = styled.form`
    .form-group {
        margin-bottom:1.5rem;
        width:100%;
        textarea {
            width:100%;
        }
    }
`

const ContactForm = ({ state }) => {
    return (
        <StyledForm>
            <div className="row">
                <div className="col col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="contact-name" className="d-none">Your Name</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            name="name"
                            id="contact-name"
                            aria-label="Name"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact-phone" className="d-none">Your Phone</label>
                        <input
                            type="tel"
                            className="form-control form-control-lg"
                            name="phone"
                            id="contact-phone"
                            aria-label="Phone"
                            placeholder="Your Phone"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact-email" className="d-none">Your Email</label>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            name="email"
                            id="contact-email"
                            aria-label="Email"
                            placeholder="Your Email"
                        />
                    </div>
                </div>
                <div className="col col-12 col-md-6 d-flex">
                    <div className="form-group">
                        <label htmlFor="contact-message" className="d-none">Your Message</label>
                        <textarea
                            className="form-control h-100"
                            id="contact-message"
                            name="contact-message"
                            aria-label="Contact Message"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                </div>
                <div className="col col-12">
                    <Button>Submit</Button>
                </div>
            </div>
        </StyledForm>
    )
}

export default connect(ContactForm)