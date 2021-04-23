import React from 'react'
import { connect, styled } from 'frontity'

const Services = ({ state, page }) => {

    const { title, subtitle, services } = page.acf

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
                    {Object.values(services).map(service => {
                        return (
                            <div className="col col-12 col-md-6 pb-4" key={service.name}>
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
                    })}
                </div>
            </div>
        </Content>
    )
}

export default connect(Services)