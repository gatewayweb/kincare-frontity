import React from 'react'
import { connect, styled } from 'frontity'

const Services = ({ state, page }) => {

    const { title, subtitle, service_1, service_2, service_3, service_4, service_5, service_6 } = page.acf

    if(service_1.bullets) {
        service_1.formattedBullets = service_1.bullets.split(',')
    }
    if(service_2.bullets) {
        service_2.formattedBullets = service_2.bullets.split(',')
    }
    if(service_3.bullets) {
        service_3.formattedBullets = service_3.bullets.split(',')
    }
    if(service_4.bullets) {
        service_4.formattedBullets = service_4.bullets.split(',')
    }
    if(service_5.bullets) {
        service_5.formattedBullets = service_5.bullets.split(',')
    }
    if(service_6.bullets) {
        service_6.formattedBullets = service_6.bullets.split(',')
    }

    const Content = styled.section`
        background-color:${state.theme.colors.lightGrayBlue};
        padding:4rem 1rem;
        margin-top:3rem;
        h1 {
            font-weight:${state.theme.weight.black};
            font-size:3rem;
        }
        .subtitle {
            font-size:1.5rem;
        }
    `

    const Service = styled.article`
        color:${state.theme.colors.darkGray};
        background-color:#ffffff;
        padding:2rem;
        margin-top:2rem;
        border-radius:8px;
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);
        height:100%;
        transition:all 500ms;
        max-height:800px;
        overflow:hidden;
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
            height:300px;
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
            transform:translateY(-12px);
        }
    `

    return (
        <Content>
            <div className="container">
                <div className="row justify-content-center pb-5">
                    <div className="col col-12">
                        <h1>{title}</h1>
                        <div className="subtitle">{subtitle}</div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col col-12 col-md-6 pb-4">
                        <Service>
                            <div className="cover-image" style={{backgroundImage: `url(${service_1.image})` }}></div>
                            <h3>{service_1.name}</h3>
                            <p>{service_1.description}</p>
                            <ul>
                                {service_1.formattedBullets.map(point => {
                                    return (
                                        <li>{point}</li>
                                    )
                                })}
                            </ul>
                        </Service>
                    </div>
                    <div className="col col-12 col-md-6 pb-4">
                        <Service>
                            <div className="cover-image" style={{backgroundImage: `url(${service_2.image})` }}></div>
                            <h3>{service_2.name}</h3>
                            <p>{service_2.description}</p>
                            <ul>
                                {service_2.formattedBullets.map(point => {
                                    return (
                                        <li>{point}</li>
                                    )
                                })}
                            </ul>
                        </Service>
                    </div>
                    <div className="col col-12 col-md-6 pb-4">
                        <Service>
                            <div className="cover-image" style={{backgroundImage: `url(${service_3.image})` }}></div>
                            <h3>{service_3.name}</h3>
                            <p>{service_3.description}</p>
                            <ul>
                                {service_3.formattedBullets.map(point => {
                                    return (
                                        <li>{point}</li>
                                    )
                                })}
                            </ul>
                        </Service>
                    </div>
                    <div className="col col-12 col-md-6 pb-4">
                        <Service>
                            <div className="cover-image" style={{backgroundImage: `url(${service_4.image})` }}></div>
                            <h3>{service_4.name}</h3>
                            <p>{service_4.description}</p>
                            <ul>
                                {service_4.formattedBullets.map(point => {
                                    return (
                                        <li>{point}</li>
                                    )
                                })}
                            </ul>
                        </Service>
                    </div>
                    <div className="col col-12 col-md-6 pb-4">
                        <Service>
                            <div className="cover-image" style={{backgroundImage: `url(${service_5.image})` }}></div>
                            <h3>{service_5.name}</h3>
                            <p>{service_5.description}</p>
                            <ul>
                                {service_5.formattedBullets.map(point => {
                                    return (
                                        <li>{point}</li>
                                    )
                                })}
                            </ul>
                        </Service>
                    </div>
                </div>
            </div>
        </Content>
    )
}

export default connect(Services)