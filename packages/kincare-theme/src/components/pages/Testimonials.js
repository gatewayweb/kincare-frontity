import React from 'react'
import { connect, styled } from 'frontity'

import HeaderPattern from '../parts/HeaderPattern'
import ContentContainer from '../parts/ContentContainer'

const Testimonials = ({ page, state }) => {
    const { title, testimonials, call_to_action } = page.acf

    const Testimonial = styled.article`
        border-radius:20px;
        padding:2rem;
        background-color:#ffffff;
        position:relative;
        padding-top:4rem;
        margin-bottom:3rem;
        font-size:1.3rem;
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);
        transition:all 500ms;
        .quote {
            background-color:${state.theme.colors.orange};
            font-family: 'Abhaya Libre', serif;
            font-weight:800;
            position:absolute;
            width:60px;
            height:60px;
            border-radius:60px;
            position:absolute;
            top:-20px;
            left:calc(50% - 30px);
            display:flex;
            justify-content:center;
            align-items:center;
            transform:rotate(8deg);
            border:8px solid #ffffff;
            box-sizing:content-box;
        }
        .name {
            font-weight:${state.theme.weight.bold};
            font-size:1.5rem;
            margin-top:1rem;
        }
        &:hover {
            box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
            transform:translateY(-20px);
        }
    `

    const CallToActionLink = styled.a`
        font-size:2rem;
        font-weight:${state.theme.weight.bold};
    `

    return (
        <>
            <HeaderPattern />
            <ContentContainer>
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div className="col col-12">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    <div className="row g-xl-5">
                        {Object.values(testimonials).map((testimonial, index) => {
                            return (
                                <div className="col col-12 col-md-6 col-xl-4" key={index}>
                                    <Testimonial>
                                        <div className="quote">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>
                                        </div>
                                        {testimonial.text}
                                        <div className="name">{testimonial.name}</div>
                                    </Testimonial>
                                </div>
                            )
                        })}
                    </div>
                    <div className="row">
                        <div className="col col-12 text-center">
                            <CallToActionLink href={call_to_action.link}>{call_to_action.text}</CallToActionLink>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </>
    )
}

export default connect(Testimonials)