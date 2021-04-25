import { styled } from 'frontity'

const Button = styled.button`
    outline:none;
    border:none;
    background-color:#2A58A7;
    font-size:1.3rem;
    color:#ffffff;
    border-radius:8px;
    font-weight:900;
    padding:0.75rem 1.5rem;
    transition:all 250ms;
    &.orange {
        background-color:#F2822C;
    }
    &:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.15);
    }
`

export default Button