import React from 'react'
import { connect, styled } from 'frontity'

const Home = ({ state, data }) => {

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

    const WhatWeOffer = styled.article`
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

    const Services = styled.article`
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
    const ServiceBox = styled.div`
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

    const page = state.source[data.type][data.id]
    const { who_we_are, what_we_offer, services } = page.acf

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
            <WhatWeOffer>
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
            <Services>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-xl-3">
                            <ServiceBox>
                                <img src={services.service_1.icon} />
                                <h3>{services.service_1.name}</h3>
                                <p>{services.service_1.description}</p>
                            </ServiceBox>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <ServiceBox>
                                <img src={services.service_2.icon} />
                                <h3>{services.service_2.name}</h3>
                                <p>{services.service_2.description}</p>
                            </ServiceBox>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <ServiceBox>
                                <img src={services.service_3.icon} />
                                <h3>{services.service_3.name}</h3>
                                <p>{services.service_3.description}</p>
                            </ServiceBox>
                        </div>
                    </div>
                </div>
            </Services>
        </>
    )
}

export default connect(Home)