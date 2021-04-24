import React from 'react'
import { Global, css, connect } from 'frontity';
import Switch from '@frontity/components/switch'
import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css';

import styles from '../styles.css'
import Page from './layout/Page'
import { fixCss } from '../helpers/css'
import Loading from './parts/Loading'

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
        <>
            <Global styles={css(fixCss(bootstrapCss))} />
            <Global styles={css(styles)} />
            <main>
                <Switch>
                    <Loading when={data.isFetching} />
                    <Page when={data.isPage} data={data} />
                </Switch>
            </main>
        </>
    )
}

export default connect(Root)