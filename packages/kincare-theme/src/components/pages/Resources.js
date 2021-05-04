import React from 'react'

import HeaderPattern from '../parts/HeaderPattern'
import ContentContainer from '../parts/ContentContainer'

const Resources = ({ data, page }) => {
    return (
        <>
            <HeaderPattern />
            <ContentContainer>
                <div className="container">
                    <div className="row">
                        <div className="col col-12">
                            <h1>Resources</h1>
                        </div>
                    </div>
                    <div className="row">
                    {data.items.map((item) => {
                        return (
                        <div className="col col-12 col-md-6 col-lg-4" key={item.id}>
                            {item.type} – {item.id} – {item.link}
                        </div>
                        )
                    })}
                    </div>
                </div>
            </ContentContainer>
        </>
    )
}

export default Resources