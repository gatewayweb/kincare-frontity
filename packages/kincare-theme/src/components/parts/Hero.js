import React from 'react'
import { styled } from 'frontity'

const HeroTitle = styled.h1`
    font-size:48px;
    @media (min-width: 992px) {
        font-size:72px;
        line-height:68px;
    }
`

const HeroSubtitle = styled.div`
    font-size:16px;
    line-height:28px;
    letter-spacing:2px;
`

const Hero = ({ hero }) => {
    return (
        <>
        {hero ?
                <div className="col col-12 col-lg-8 col-xl-4 px-5">
                    <HeroTitle>
                        {hero.title}
                        {hero.title_two ?
                            <>
                                <br />
                                <strong>{hero.title_two}</strong>
                            </> :
                            <></>
                        }
                    </HeroTitle>
                    <HeroSubtitle>{hero.subtitle}</HeroSubtitle>
                </div> :
            <></>
        }
        </>
    )
}

export default Hero