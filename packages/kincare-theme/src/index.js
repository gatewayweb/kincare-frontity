import Root from './components'

// Custom handler for ACF options
const acfOptionsHandler = {
  pattern: "theme-options",
  func: async ({ route, state, libraries }) => {
    // 1. Get ACF option page from REST API.
    const response = await libraries.source.api.get({
      endpoint: `/acf/v3/options/options`
    })
    const option = await response.json()

    // 2. Add data to `source`.
    const data = state.source.get(route)
    Object.assign(data, { ...option, isAcfOptionsPage: true })
  }
}

export default {
  name: "kincare-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  libraries: {
    source: {
      handlers: [acfOptionsHandler]
    }
  },
  actions: {
    theme: {
      beforeSSR: async ({ actions }) => {
        await Promise.all([
          actions.source.fetch("/contact-us"),
          actions.source.fetch("theme-options")
        ])
      }
    }
  }
}
