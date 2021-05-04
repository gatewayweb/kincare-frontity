import React from 'react'
import { Global, css, connect } from 'frontity';
import Switch from '@frontity/components/switch'
import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css';

import { fixCss } from '../helpers/css'
import styles from '../styles.css'
import Page from './layout/Page'
import Loading from './parts/Loading'
import Resources from './pages/Resources'

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
        <>
            <Global styles={css(fixCss(bootstrapCss))} />
            <Global styles={css(styles)} />
            <main>
                <Switch>
                    <Loading when={data.isFetching} />
                    <Page when={data.isPage || data.isPost} data={data} />
                    <Page when={data.isArchive} data={data} pageData={{ title: { rendered: 'Resources' } }} PageComponent={Resources} />
                </Switch>
            </main>
        </>
    )
}

export default connect(Root)