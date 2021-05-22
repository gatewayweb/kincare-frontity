import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'

import HeaderPattern from '../parts/HeaderPattern'
import ContentContainer from '../parts/ContentContainer'
import ContactForm from '../parts/ContactForm'
import Button from '../parts/Button'

const formatPhone = (phoneNumber) => {
    let match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/)

    return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phoneNumber
}

const Contact = ({ state, data, page }) => {
    const { title, subtitle, service_areas, business_hours } = page.acf
    
    const options = state.source.get('theme-options')
    const { company_name, contact_info } = options.acf

    const ContentBox = styled.article`
        background-color:#ffffff;
        border-radius:8px;
        padding:1.5rem;
        width:100%;
        flex-basis:100%;
        font-size:1.1rem;
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);
        h3 {
            font-weight:${state.theme.weight.bold};
        }
        iframe {
            max-width:100%;
        }
        &.blue-bg {
            background-color:${state.theme.colors.darkBlue};
            color:#ffffff;
            margin-top:3rem;
        }
        &.contact-info {
            font-size:1.4rem;
        }

        @media (min-width: 768px) {
            &.contact-info {
                button {
                    font-size:1.5rem;
                }
            }
        }
    `

    return (
        <>
            <HeaderPattern />
            <ContentContainer>
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div className="col col-12 pb-4">
                            <h1>{title}</h1>
                            <div className="subtitle pb-3">{subtitle}</div>
                        </div>
                        <div className="col col-12 col-lg-6">
                            <ContentBox>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d738.7854262101483!2d-70.99932979797174!3d42.21141592674388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e363bc0c56354d%3A0xd852dc2e3d575c2d!2sKinCare%20at%20Home!5e0!3m2!1sen!2sus!4v1620524296108!5m2!1sen!2sus"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy">
                                </iframe>
                            </ContentBox>
                        </div>
                        <div className="col col-12 col-lg-6 d-flex">
                            <ContentBox className="text-center contact-info">
                                <h3>Contact Information</h3>
                                <div className="my-4">
                                    <strong>{company_name}</strong>
                                    <div>{contact_info.address_line_1}</div>
                                    <div>{contact_info.city}, {contact_info.state} {contact_info.zip_code}</div>
                                </div>
                                <div>
                                    <Link className="d-block mt-5" link={`tel:+1${contact_info.phone}`}>
                                        <Button className="orange lg">{formatPhone(contact_info.phone)}</Button>
                                    </Link>
                                    <Link className="d-block mt-5" link={`mailto:${contact_info.email}`}>
                                        <Button className="orange lg">{contact_info.email}</Button>
                                    </Link>
                                </div>
                            </ContentBox>
                        </div>
                        <div className="col-12 col-lg-6 d-flex">
                            <ContentBox className="blue-bg">
                                <h3>{service_areas.title}</h3>
                                <div className="mb-4">{service_areas.subtitle}</div>
                            </ContentBox>
                        </div>
                        <div className="col-12 col-lg-6 d-flex">
                            <ContentBox className="blue-bg">
                                <h3>{business_hours.title}</h3>
                                <div>{business_hours.subtitle}</div>
                            </ContentBox>
                        </div>
                        <div className="col col-12 pt-5">
                            <ContentBox>
                                <h2>Inquiry Form</h2>
                                <ContactForm data={data} />
                            </ContentBox>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </>
    )
}

export default connect(Contact)