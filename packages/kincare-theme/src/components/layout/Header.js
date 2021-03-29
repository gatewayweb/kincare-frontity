import React, { useEffect, useState } from 'react'
import { connect } from 'frontity'

import logo from '../../img/logo.png'
import Navigation from '../parts/Navigation'
import Hero from '../parts/Hero'

const Header = ({ data, state }) => {

    const [page, setPage] = useState({})

    useEffect(() => {
        if(!data.isFetching) {
            setPage(state.source[data.type][data.id])
        }
    }, [ data.isFetching, data.id ])

    return (
        <header
            className={`d-flex flex-column kc-header ${page && page.acf && page.acf.hero ? 'kc-hero' : ''}`}
            style={{ backgroundImage:page && page.acf && page.acf.hero ? `url(${page.acf.hero.background_image})` : ''}}
        >
            <div className="row px-5 hero-content">
                <div className="col">
                    <img src={logo} />
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <Navigation />
                </div>
            </div>
            {page && page.acf && page.acf.hero ?
                <div className="row flex-grow-1 align-items-center hero-content">
                    <Hero hero={page.acf.hero} />
                </div> :
                <></>
            }
        </header>
    )
}

export default connect(Header)