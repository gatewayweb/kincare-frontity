import React from 'react'
import { Global, css, styled } from 'frontity';
import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css';

import styles from '../styles.css'
import Page from './layout/Page'
import { fixCss } from '../helpers/css'

const Main = styled.main`
    padding:0;
`

const Root = () => {
    return (
        <>
            <Global styles={css(styles)} />
            <Global styles={css(fixCss(bootstrapCss))} />
            <Main>
                <Page />
            </Main>
        </>
    )
}

export default Root