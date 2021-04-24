import { styled } from 'frontity'

const ContentContainer = styled.section`
    background-color:#ECF3F9;
    padding:2rem 1rem;
    position:relative;
    h1 {
        font-weight:900;
        font-size:2.5rem;
        position:relative;
        margin-bottom:3rem;
        &:after {
            content:'';
            position:absolute;
            height:10px;
            width:80px;
            background-color:#333333;
            left:8px;
            bottom:-15px;
        }
    }
    .subtitle {
        font-size:1.5rem;
    }
    .google-review-logo {
        width:150px;
        position:absolute;
        right:0;
        top:0px;
    }
    @media (min-width: 768px) {
        padding-top:0;
        padding-bottom:3rem;
        h1 {
            font-size:3.5rem;
        }
    }
`

export default ContentContainer