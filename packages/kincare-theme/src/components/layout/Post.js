import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'

import HeaderPattern from '../parts/HeaderPattern'
import ContentContainer from '../parts/ContentContainer'
import Button from '../parts/Button'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const Post = ({ state, post, libraries }) => {
    const Html2React = libraries.html2react.Component

    const StyledPost = styled.article`
        color:${state.theme.colors.darkGray};
        background-color:#ffffff;
        padding:2rem;
        margin-top:1rem;
        border-radius:8px;
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);
        .post-content {
            p, ul, div, a {
                font-size:1.1em;
            }
        }
        @media (min-width: 768px) {
            padding:4rem;
        }
    `
    
    const modifiedDate = new Date(post.modified)
    const formattedModifiedDate = `${months[modifiedDate.getMonth()]} ${modifiedDate.getDate()}, ${modifiedDate.getFullYear()}`

    return (
        <>
            <HeaderPattern />
            <ContentContainer>
                <div className="container">
                    <div className="row">
                        <div className="col col-12 text-center">
                            <h1 className="text-center">
                                <Html2React html={post.title.rendered} />
                                <span class="post-date">{formattedModifiedDate}</span>
                            </h1>
                            <StyledPost>
                                <div className="post-content text-start">
                                    <Html2React html={post.content.rendered} />
                                </div>
                            </StyledPost>
                            <div className="pt-5 w-100">
                                <Link link='/resources'><Button>Back to Resources</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </>
    )
}

export default connect(Post)