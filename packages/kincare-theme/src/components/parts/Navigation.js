import React, { useState, useRef, useEffect } from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'
import { gsap } from 'gsap'

import logo from '../../img/logo.png'

const stripLink = (string) => {
    return string.replace(/\//ig, '')
}

const mobileBreakpoint = '992px'

const Navigation = ({ state }) => {

    const navRef = useRef(null)

    const NavigationList = styled.ul`
        list-style:none;
        margin:0;
        padding:0;
        position:fixed;
        background-color:#fff;
        height:100vh;
        width:100vw;
        top:0;
        left:0;
        display:none;
        z-index:3;
        &.show {
            display:block;
        }
        @media (min-width: ${mobileBreakpoint}) {
            display:inline-block;
            position:static;
            background-color:transparent;
            height:auto;
            width:auto;
        }
    `

    const NavigationItem = styled.li`
        @media (min-width: ${mobileBreakpoint}) {
            display:inline-block;
        }
        a {
            color:${state.theme.colors.darkGray};
            font-weight:${state.theme.weight.bold};
            display:block;
            font-size:28px;
            padding:0.5rem 1rem;
            text-decoration:none;
            position:relative;
            border-top:1px solid ${state.theme.colors.lightGrayBlue};
            @media (min-width: ${mobileBreakpoint}) {
                display:inline-block;
                font-size:18px;
                padding:0 1rem;
                border:none;
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
        }
        a:hover, a.active {
            text-decoration:none;
            font-weight:${state.theme.weight.black};
            &:after {
                transform:scaleX(1);
                opacity:1;
            }
        }
        &.mobile-logo {
            padding:1rem;
            position:relative;
            display:flex;
            justify-content:space-between;
            align-items:flex-start;
            img {
                width:120px;
                max-width:100%;
            }
            button {
                outline:none;
                border:none;
                background-color:transparent;
                svg {
                    height:30px;
                    width:30px;
                    fill:${state.theme.colors.lightGray};
                }
            }
            @media (min-width: ${mobileBreakpoint}) {
                display:none;
            }
        }
    `

    const MobileMenuButton = styled.button`
        outline:none;
        border:none;
        background-color:transparent;
        position:fixed;
        right:1rem;
        top:1rem;
        z-index:2;
        @media (min-width: ${mobileBreakpoint}) {
            display:none;
        }
    `


    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    useEffect(() => {
        if(showMobileMenu) {
            navRef.current.classList.add('show')
        } else {
            navRef.current.classList.remove('show')
        }
    }, [showMobileMenu])

    return (
        <>
            <MobileMenuButton onClick={() => toggleMobileMenu()}>MENU</MobileMenuButton>
            <NavigationList id="main-navigation" ref={navRef}>
                <NavigationItem className="mobile-logo">
                    <img src={logo} />
                    <button onClick={() => toggleMobileMenu()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
                    </button>
                </NavigationItem>
                {state.theme.menu.map(link => {
                    // console.log(stripLink(state.router.link), stripLink(link[1]))
                    let linkClass = stripLink(link[1]) === stripLink(state.router.link) ? 'active' : ''
                    return (
                        <NavigationItem key={link[0]} onClick={() => toggleMobileMenu()}>
                            <Link link={link[1]} className={linkClass}>{link[0]}</Link>
                        </NavigationItem>
                    )
                })}
            </NavigationList>
        </>
    )
}

export default connect(Navigation)