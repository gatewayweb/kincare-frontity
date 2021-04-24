import React from 'react'
import { connect } from 'frontity'
import Link from '@frontity/components/link'

import logo from '../../img/logo.png'
import Navigation from '../parts/Navigation'
import Hero from '../parts/Hero'

const Header = ({ page, state }) => {

    return (
        <header
            className={`container-fluid d-flex flex-column kc-header ${page && page.acf && page.acf.hero ? 'kc-hero' : ''}`}
            style={{ backgroundImage:page && page.acf && page.acf.hero ? `url(${page.acf.hero.background_image})` : ''}}
        >
            <div className="container d-flex flex-column flex-grow-1">
                <div className="row header-content">
                    <div className="col col-12 col-md-3">
                        <Link link='/'><img className="site-logo" src={logo} /></Link>
                    </div>
                    <div className="col col-12 col-md-9 d-flex align-items-center justify-content-end">
                        <Navigation />
                    </div>
                </div>
                {page && page.acf && page.acf.hero ?
                    <div className="row flex-grow-1 align-items-center hero-content">
                        <Hero hero={page.acf.hero} />
                    </div> :
                    <></>
                }
            </div>
        </header>
    )
}

export default connect(Header)