import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'

const NavigationList = styled.ul`
    list-style:none;
    margin:0;
    padding:0;
`

const stripLink = (string) => {
    return string.replace(/\//ig, '')
}

const Navigation = ({ state }) => {

    const NavigationItem = styled.li`
        display:inline-block;
        a {
            color:${state.theme.colors.darkGray};
            font-weight:${state.theme.weight.bold};
            font-size:18px;
            display:inline-block;
            padding:0 1rem;
            text-decoration:none;
            position:relative;
            &:after {
                content: '';
                display:block;
                position:absolute;
                bottom:-10px;
                left:15%;
                width:70%;
                height:3px;
                background-color:black;
                border-radius:10px;
                transform-origin:center center;
                transition:all 500ms;
                transform:scaleX(0);
                opacity:0;
            }
        }
        a:hover, a.active {
            text-decoration:none;
            font-weight:${state.theme.weight.black};
            &:after {
                transform:scaleX(1);
                opacity:1;
            }
        }
    `

    return (
        <NavigationList>
            {state.theme.menu.map(link => {
                // console.log(stripLink(state.router.link), stripLink(link[1]))
                let linkClass = stripLink(link[1]) === stripLink(state.router.link) ? 'active' : ''
                return (
                    <NavigationItem key={link[0]}>
                        <Link link={link[1]} className={linkClass}>{link[0]}</Link>
                    </NavigationItem>
                )
            })}
        </NavigationList>
    )
}

export default connect(Navigation)