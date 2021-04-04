import React, { useState } from 'react'
import { connect, styled } from 'frontity'
import { Waypoint } from 'react-waypoint'
import gsap from 'gsap'

import ContactForm from '../parts/ContactForm'

const Home = ({ state, page }) => {
    const [populated, setPopulated] = useState({
        what_we_offer: false,
        services: false,
        mission: false,
        why_us: false
    })

    const { who_we_are, what_we_offer, services, our_mission, why_us } = page.acf

    let sectionPadding = '48px 32px'

    const WhoWeAre = styled.section`
        background-color:${state.theme.colors.darkBlue};
        padding:${sectionPadding};
        color:#ffffff;
        h2 {
            font-weight:bold;
        }
        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0em;
        }
    `

    const WhatWeOffer = styled.section`
        padding:${sectionPadding};
        h2 {
            font-weight:bold;
        }
        img {
            border-radius:8px;
        }
        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0em;
        }
    `

    const Services = styled.section`
        padding:${sectionPadding};
        background-color:${state.theme.colors.lightGrayBlue};
        position:relative;
        &:before {
            content:'';
            width:0;
            height:0;
            border-style:solid;
            border-width:34px 37px 0 37px;
            border-color:#ffffff transparent transparent transparent;
            position:absolute;
            left:calc(50% - 37px);
            top:-2px;
        }
    `

    const ServiceBox = styled.article`
        padding:16px;
        background-color:#ffffff;
        border-radius:8px;
        box-shadow: 0px 15px 24px rgba(0, 0, 0, 0.05);
        text-align:center;
        margin-top:16px;
        h3 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom:40px;
            position:relative;
            width:100%;
            &:after {
                content:'';
                width:40px;
                height:5px;
                background-color:${state.theme.colors.darkGray};
                position:absolute;
                left:calc(50% - 20px);
                bottom:-20px;
            }
        }
        p {
            font-size:16px;
            font-weight:300;
            line-height:17px;
            letter-spacing:1px;
        }
    `

    const Mission = styled.section`
        background-color:${state.theme.colors.darkBlue};
        padding:${sectionPadding};
        color:#ffffff;
        h2 {
            font-weight:800;
            &:after {
                width:80px;
                height:10px;
            }
        }
    `

    const WhyUs = styled.section`
        padding:${sectionPadding};
        h2 {
            font-weight:800;
        }
    `

    const WhyUsBox = styled.article`
        padding:40px 30px;
        background-color:${state.theme.colors.lightGrayBlue};
        border-radius:8px;
        text-align:center;
        h3 {
            font-size: 28px;
            font-weight: 900;
        }
        p {
            font-size: 16px;
            font-weight: 300;
            line-height: 17px;
            margin: 0;
        }
        img {
            margin-bottom:10px;
        }
    `

    const ContactSection = styled.section`
        padding:${sectionPadding};
        background-color:${state.theme.colors.lightGrayBlue};
    `
    
    const animateSection = (section) => {
        switch(section) {
            case 'what-we-offer':
                if(!populated.what_we_offer) {
                    gsap.from(`.what-we-offer .img-fluid`, { x: -300, opacity: 0, duration: 0.5 })
                    gsap.from('.what-we-offer h2, .what-we-offer p', { x: -400, opacity: 0, duration: 0.35, stagger: 0.15, onComplete: () => {
                        setPopulated(prevState => {
                            return { ...prevState, what_we_offer: true }
                        })
                    }})
                }
                break
            case 'services':
                if(!populated.services) {
                    gsap.from('.service-box', { x: -500, y: -500, opacity: 0, duration: 0.5, stagger: 0.15 })
                }
                break
        }
    }

    return (
        <>
            <WhoWeAre>
                <div className="container">
                    <div className="row">
                        <div className="col col-12 text-center">
                            <h2>{who_we_are.title}</h2>
                            <p>{who_we_are.content}</p>
                        </div>
                    </div>
                </div>
            </WhoWeAre>
            <Waypoint onEnter={() => animateSection('what-we-offer')}>
                <WhatWeOffer className="what-we-offer">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col col-12 col-xl-4">
                                <img className="img-fluid" src={what_we_offer.image} />
                            </div>
                            <div className="col col-12 col-xl-4 d-flex flex-column justify-content-center">
                                <h2>{what_we_offer.title}</h2>
                                <p>{what_we_offer.content}</p>
                            </div>
                        </div>
                    </div>
                </WhatWeOffer>
            </Waypoint>
            <Waypoint onEnter={() => animateSection('services')}>
                <Services>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 col-xl-3">
                                <ServiceBox className="service-box">
                                    <img src={services.service_1.icon} />
                                    <h3>{services.service_1.name}</h3>
                                    <p>{services.service_1.description}</p>
                                </ServiceBox>
                            </div>
                            <div className="col-12 col-md-6 col-xl-3">
                                <ServiceBox className="service-box">
                                    <img src={services.service_2.icon} />
                                    <h3>{services.service_2.name}</h3>
                                    <p>{services.service_2.description}</p>
                                </ServiceBox>
                            </div>
                            <div className="col-12 col-md-6 col-xl-3">
                                <ServiceBox className="service-box">
                                    <img src={services.service_3.icon} />
                                    <h3>{services.service_3.name}</h3>
                                    <p>{services.service_3.description}</p>
                                </ServiceBox>
                            </div>
                        </div>
                    </div>
                </Services>
            </Waypoint>
            <Mission>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-12 col-xl-8">
                            <h2>{our_mission.title}</h2>
                            <p>{our_mission.content}</p>
                        </div>
                    </div>
                </div>
            </Mission>
            <WhyUs>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-12 col-xl-8 text-center">
                            <h2>{why_us.title}</h2>
                            <p>{why_us.content}</p>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-4">
                        <div className="col-12 col-md-6 col-xl-3">
                            <WhyUsBox>
                                <img src={why_us.reason_1.icon} />
                                <h3>{why_us.reason_1.name}</h3>
                                <p>{why_us.reason_1.description}</p>
                            </WhyUsBox>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <WhyUsBox>
                                <img src={why_us.reason_2.icon} />
                                <h3>{why_us.reason_2.name}</h3>
                                <p>{why_us.reason_2.description}</p>
                            </WhyUsBox>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <WhyUsBox>
                                <img src={why_us.reason_3.icon} />
                                <h3>{why_us.reason_3.name}</h3>
                                <p>{why_us.reason_3.description}</p>
                            </WhyUsBox>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col pt-5 text-center">
                            <a href={why_us.cta.link_to}>{why_us.cta.link_text}</a>
                        </div>
                    </div>
                </div>
            </WhyUs>
            <ContactSection>
                <ContactForm />
            </ContactSection>
        </>
    )
}

export default connect(Home)