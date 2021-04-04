import React from 'react'
import ReactLoading from 'react-loading'
import { styled } from 'frontity'

const LoadingContainer = styled.section`
    padding-top:100px;
    position:fixed;
    width:100vw;
    height:100vh;
    background-color:#ffffff;
    z-index:2;
`

const Loading = () => {
    return (
        <LoadingContainer className="d-flex justify-content-center align-items-center">
            <ReactLoading type="spin" color="#ccc" width={75} height={75} />
        </LoadingContainer>
    )
}

export default Loading