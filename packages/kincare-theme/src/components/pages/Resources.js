import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'

import HeaderPattern from '../parts/HeaderPattern'
import ContentContainer from '../parts/ContentContainer'

const Resources = ({ state, data, page }) => {

    const Resource = styled.article`
        background-color:#ffffff;
        padding:2rem;
        border-radius:8px;
    `

    return (
        <>
            <HeaderPattern />
            <ContentContainer>
                <div className="container">
                    <div className="row">
                        <div className="col col-12">
                            <h1>Resources</h1>
                        </div>
                    </div>
                    <div className="row">
                    {data.items.map((item) => {
                        const post = state.source[item.type][item.id]
                        return (
                            <div className="col col-12 col-md-6 col-lg-4" key={item.id}>
                                <Link link={post.link}>
                                    <Resource>
                                        <h3>{post.title.rendered}</h3>
                                    </Resource>
                                </Link>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </ContentContainer>
        </>
    )
}

export default connect(Resources)