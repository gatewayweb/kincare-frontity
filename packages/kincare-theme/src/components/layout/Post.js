import React from 'react'
import { connect } from 'frontity'

import HeaderPattern from '../parts/HeaderPattern'
import ContentContainer from '../parts/ContentContainer'

const Post = ({ state, post, libraries }) => {
    const Html2React = libraries.html2react.Component

    return (
        <>
            <HeaderPattern />
            <ContentContainer>
                <div className="container">
                    <div className="row">
                        <div className="col col-12">
                            <h1>{post.title.rendered}</h1>
                            <Html2React html={post.content.rendered} />
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </>
    )
}

export default connect(Post)