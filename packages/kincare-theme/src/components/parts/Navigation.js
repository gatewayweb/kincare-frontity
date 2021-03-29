import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'

const NavigationList = styled.ul`
    list-style:none;
    margin:0;
    padding:0;
`

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
        }
        a:hover {
            text-decoration:none;
        }
    `

    return (
        <NavigationList>
            {state.theme.menu.map(link => {
                return (
                    <NavigationItem key={link[0]}>
                        <Link link={link[1]}>{link[0]}</Link>
                    </NavigationItem>
                )
            })}
        </NavigationList>
    )
}

export default connect(Navigation)