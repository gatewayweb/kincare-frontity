import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'

import logo from '../../img/logo.png'
import hcaLogo from '../../img/home-care-alliance.png'

const stripLink = (string) => {
    return string.replace(/\//ig, '')
}

const formatPhone = (phoneNumber) => {
    let match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/)

    return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phoneNumber
}

const Footer = ({ state }) => {
    
    const options = state.source.get('theme-options')
    const { contact_info } = options.acf
    
    const StyledFooter = styled.footer`
        padding:3rem 0;
        .copy-bottom {
            color:${state.theme.colors.mediumGray};
            font-size:0.9rem;
            text-transform:uppercase;
            letter-spacing:1px;
        }
        .contact-links-bottom {
            a {
                display:inline-block;
                border-radius:8px;
                border:1px solid ${state.theme.colors.lightGray};
                color:${state.theme.colors.mediumGray};
                font-size:1.2rem;
                padding:1rem 1.5rem;
                margin:0 0.5rem;
                transition:all 250ms;
                @media (min-width: 992px) {
                    font-size:1.4rem;
                }
                &:hover {
                    border-color:${state.theme.colors.mediumGray};
                }
            }
        }
    `

    const NavigationList = styled.ul`
        list-style:none;
        padding:2rem 0;
        li {
            display:inline-block;
            a {
                color:${state.theme.colors.mediumGray};
                font-size:0.9rem;
                text-transform:uppercase;
                padding:0.5rem 0.5rem;
                display:inline-block;
                letter-spacing:1px;
                &:hover {
                    color:${state.theme.colors.darkGray};
                }
            }
        }
        @media (min-width: 992px) {
            padding:0;
        }
    `

    return (
        <StyledFooter>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-6 col-lg-2 d-flex justify-content-center justify-content-lg-start">
                        <img className="img-fluid mb-5 mb-lg-0" src={logo} />
                    </div>
                    <div className="col col-12 col-lg-8 text-center order-last order-lg-0">
                        <h3>Care in the comfort of your own home.</h3>
                        <NavigationList>
                            {state.theme.menu.map(link => {
                                // console.log(stripLink(state.router.link), stripLink(link[1]))
                                let linkClass = stripLink(link[1]) === stripLink(state.router.link) ? 'active' : ''
                                return (
                                    <li key={link[0]} onClick={() => toggleMobileMenu()}>
                                        <Link link={link[1]} className={linkClass}>{link[0]}</Link>
                                    </li>
                                )
                            })}
                        </NavigationList>
                        <div className="mt-3 contact-links-bottom">
                            <Link className="mb-4 mb-md-0" link={`tel:+1-${contact_info.phone}`}>{formatPhone(contact_info.phone)}</Link>
                            <Link link={`mailto:${contact_info.email}`}>{contact_info.email}</Link>
                        </div>
                        <div className="mt-4 copy-bottom">
                            Copyright &copy; Kincareathome.com All Rights Reserved.
                        </div>
                    </div>
                    <div className="col col-6 col-lg-2 d-flex justify-content-end">
                        <img className="img-fluid mb-5 mb-lg-0" src={hcaLogo} />
                    </div>
                </div>
            </div>
        </StyledFooter>
    )
}

export default connect(Footer)