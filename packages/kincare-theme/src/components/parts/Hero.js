import React, { useEffect } from 'react'
import { styled } from 'frontity'
import gsap from 'gsap'

const HeroTitle = styled.h1`
    font-size:36px;
    @media (min-width: 768px) {
        font-size:48px;
    }
    @media (min-width: 992px) {
        font-size:72px;
        line-height:68px;
    }
`

const HeroSubtitle = styled.div`
    font-size:16px;
    line-height:28px;
    letter-spacing:2px;
    width:425px;
    max-width:100%;
    @media (min-width: 768px) {
        font-size:18px;
        line-height:24px;
        letter-spacing:1px;
    }
`

const animateHero = () => {
    gsap.fromTo('.hero-animate', { x: -500 }, { x: 0, duration: 0.75, stagger: 0.25 })
}

const Hero = ({ hero }) => {

    useEffect(() => {
        animateHero()
    }, [])

    return (
        <>
        {hero ?
                <div className="col col-12 col-lg-8 col-xxl-8 px-4 px-md-5">
                    <HeroTitle className="hero-animate">
                        {hero.title}
                        {hero.title_two ?
                            <>
                                <br />
                                <strong>{hero.title_two}</strong>
                            </> :
                            <></>
                        }
                    </HeroTitle>
                    <HeroSubtitle className="hero-animate">{hero.subtitle}</HeroSubtitle>
                </div> :
            <></>
        }
        </>
    )
}

export default Hero