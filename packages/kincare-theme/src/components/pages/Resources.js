import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'

import HeaderPattern from '../parts/HeaderPattern'
import ContentContainer from '../parts/ContentContainer'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const Resources = ({ state, data, page, libraries }) => {
    const Html2React = libraries.html2react.Component

    const Resource = styled.article`
        background-color:#ffffff;
        padding:2rem;
        border-radius:8px;
        opacity:0.85;
        position:relative;
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);
        width:100%;
        h3 {
            position:relative;
            font-weight:${state.theme.weight.bold};
            &:after {
                content:'';
                position:absolute;
                bottom:-10px;
                left:0;
                background-color:${state.theme.colors.lightGray};
                width:80px;
                height:2px;
            }
        }
        .post-resource-date {
            padding-top:8px;
            color:${state.theme.colors.mediumGray};
        }
        .post-read-more {
            background-color:${state.theme.colors.orange};
            display:inline-block;
            padding:0.5rem 1rem;
            color:#ffffff;
            border-radius:8px;
            font-size:0.8rem;
            text-transform:uppercase;
            margin-top:1rem;
        }
        &:hover {
            opacity:1;
        }
    `

    return (
        <>
            <HeaderPattern />
            <ContentContainer>
                <div className="container">
                    <div className="row">
                        <div className="col col-12">
                            <h1>{page.title.rendered}</h1>
                        </div>
                    </div>
                    <div className="row">
                    {data.items.map((item) => {
                        const post = state.source[item.type][item.id]
                        const modifiedDate = new Date(post.modified)
                        const formattedModifiedDate = `${months[modifiedDate.getMonth()]} ${modifiedDate.getDate()}, ${modifiedDate.getFullYear()}`
                        return (
                            <div className="col col-12 col-md-6 d-flex" key={item.id}>
                                <Link className="resource-link d-flex w-100" link={post.link}>
                                    <Resource>
                                        <h3><Html2React html={post.title.rendered} /></h3>
                                        <div className="post-resource-date">{formattedModifiedDate}</div>
                                        <div className="post-read-more">Read More</div>
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