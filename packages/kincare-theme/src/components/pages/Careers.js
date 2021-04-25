import React from 'react'
import { connect, styled } from 'frontity'

import HeaderPattern from '../parts/HeaderPattern'
import ContentContainer from '../parts/ContentContainer'
import Button from '../parts/Button'

const Careers = ({ state, page }) => {
    const { title, subtitle, jobs } = page.acf

    const JobPost = styled.article`
        background-color:#ffffff;
        border-radius:10px;
        padding:3rem;
        margin-bottom:4rem;
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);
        h3 {
            font-weight:${state.theme.weight.black};
            margin-bottom:2rem;
        }
        .job-item {
            font-size:1.2rem;
            margin-bottom:1.5rem;
            span {
                color:${state.theme.colors.mediumGray};
                font-size:1rem;
                text-transform:uppercase;
                letter-spacing:1px;
                border-bottom:1px solid ${state.theme.colors.lightGray};
                padding-bottom:0.5rem;
                margin-bottom:0.5rem;
                font-weight:${state.theme.weight.bold};
                display:inline-block;
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
                    <div className="row">
                        {jobs && jobs.length ?
                            Object.values(jobs.map((job, index) => {
                                return (
                                    <div className="col col-12" key={index}>
                                        <JobPost>
                                            <h3>{job.title}</h3>
                                            <div className="job-item">
                                                <span>Description</span>
                                                <div>{job.description}</div>
                                            </div>
                                            <div className="job-item">
                                                <span>Requirements</span>
                                                <div>{job.requirements}</div>
                                            </div>
                                            <div className="job-item">
                                                <Button className="orange">Apply Now</Button>
                                            </div>
                                        </JobPost>
                                    </div>
                                )
                            }))
                            :
                            <></>
                        }
                    </div>
                </div>
            </ContentContainer>

        </>
    )
}

export default connect(Careers)