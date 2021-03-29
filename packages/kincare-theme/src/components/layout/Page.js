import React from 'react'
import { connect } from 'frontity'

import Header from './Header'
import Loading from '../parts/Loading'

import Home from '../pages/Home'
import Services from '../pages/Services'
import Resources from '../pages/Resources'
import Testimonials from '../pages/Testimonials'
import Contact from '../pages/Contact'

const Page = ({ state }) => {
    const data = state.source.get(state.router.link)
    
    function renderPage() {
        switch(data.link) {
            case '/': return <Home data={data} />
            case '/services/': return <Services data={data} />
            case '/resources/': return <Resources data={data} />
            case '/testimonials/': return <Testimonials data={data} />
            case '/contact-us/': return <Contact data={data} />
        }
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <Header data={data} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {data.isFetching && <Loading /> }
                    {data.isPage && renderPage()}
                </div>
            </div>
        </>
    )
}

export default connect(Page)