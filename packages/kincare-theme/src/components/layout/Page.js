import React from 'react'
import { connect, Head } from 'frontity'

import Header from './Header'
import Footer from './Footer'

import Home from '../pages/Home'
import Services from '../pages/Services'
import Resources from '../pages/Resources'
import Testimonials from '../pages/Testimonials'
import Contact from '../pages/Contact'
import Careers from '../pages/Careers'

const Page = ({ state, data }) => {
    const page = state.source[data.type][data.id]
    
    function renderPage() {
        switch(data.link) {
            case '/': return <Home data={data} page={page} />
            case '/services/': return <Services data={data} page={page} />
            case '/resources/': return <Resources data={data} page={page} />
            case '/testimonials/': return <Testimonials data={data} page={page} />
            case '/careers/': return <Careers data={data} page={page} />
            case '/contact-us/': return <Contact data={data} page={page} />
        }
    }

    return (
        <>
            <Head><title>{page.title.rendered} | KinCare at Home</title></Head>
            <div className={`${page && page.acf && page.acf.hero ? '' : 'container'}`}>
                <Header data={data} page={page} />
            </div>
            {data.isPage && renderPage()}
            <Footer />
        </>
    )
}

export default connect(Page)