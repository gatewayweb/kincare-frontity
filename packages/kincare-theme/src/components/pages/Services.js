import React from 'react'
import { connect, styled } from 'frontity'

import HeaderPattern from '../parts/HeaderPattern'
import ContentContainer from '../parts/ContentContainer'

const Services = ({ state, page }) => {

    const { title, subtitle, services } = page.acf

    const Service = styled.article`
        color:${state.theme.colors.darkGray};
        background-color:#ffffff;
        padding:1rem;
        margin-top:1rem;
        border-radius:8px;
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);
        transition:all 500ms;
        overflow:hidden;
        position:relative;
        h3 {
            font-weight:${state.theme.weight.bold};
            color:${state.theme.colors.darkGray};
            border-left:5px solid ${state.theme.colors.orange};
            font-size:1.6rem;
            padding:0.5rem 0;
            padding-left:1rem;
            margin-top:2rem;
        }
        p {
            font-size:1.25rem;
            line-height:1.75rem;
            margin-top:1.5rem;
        }
        .cover-image {
            border-radius:8px;
            width:100%;
            height:200px;
            background-size:cover;
            background-repeat:no-repeat;
        }
        ul {
            padding-left:0;
            list-style:none;
            margin-bottom:0;
            li {
                border-top:1px solid ${state.theme.colors.lightGray};
                padding:0.75rem 0;
            }
        }
        &:hover {
            box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
            transform:translateY(-20px);
        }
        &.active {
            max-height:10000px;
        }
        @media (min-width: 768px) {
            padding:2rem;
            .cover-image {
                height:300px;
            }
        }
    `
    return (
        <>
            <HeaderPattern />
            <ContentContainer>
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div className="col col-12">
                            <h1>{title}</h1>
                            <div className="subtitle">{subtitle}</div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {services && services.length ?
                            Object.values(services).map(service => {
                                return (
                                    <div className="col col-12 col-lg-6 pb-4 d-flex" key={service.name}>
                                        <Service>
                                            <div className="cover-image" style={{backgroundImage: `url(${service.image})` }}></div>
                                            <h3>{service.name}</h3>
                                            <p>{service.description}</p>
                                            <ul>
                                                {Object.values(service.bullets).map((point, index) => {
                                                    return (
                                                        <li key={index}>{point.value}</li>
                                                    )
                                                })}
                                            </ul>
                                        </Service>
                                    </div>
                                )
                            })
                            :
                            <></>
                        }
                    </div>
                </div>
            </ContentContainer>
        </>
    )
}

export default connect(Services)