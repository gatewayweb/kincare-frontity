import React from 'react'
import { connect, Head } from 'frontity'

import Header from './Header'

import Home from '../pages/Home'
import Services from '../pages/Services'
import Resources from '../pages/Resources'
import Testimonials from '../pages/Testimonials'
import Contact from '../pages/Contact'

const Page = ({ state, data }) => {
    const page = state.source[data.type][data.id]
    
    function renderPage() {
        switch(data.link) {
            case '/': return <Home data={data} page={page} />
            case '/services/': return <Services data={data} page={page} />
            case '/resources/': return <Resources data={data} />
            case '/testimonials/': return <Testimonials data={data} />
            case '/contact-us/': return <Contact data={data} />
        }
    }

    return (
        <>
            <Head><title>{page.title.rendered} | KinCare at Home</title></Head>
            <div className={`${page && page.acf && page.acf.hero ? '' : 'container'}`}>
                <div>
                    <Header data={data} page={page} />
                </div>
            </div>
            <div>
                <div>
                    {data.isPage && renderPage()}
                </div>
            </div>
        </>
    )
}

export default connect(Page)