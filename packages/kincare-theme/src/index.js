import Root from './components'

export default {
  name: "kincare-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {
      beforeSSR: async ({ actions }) => {
        await actions.source.fetch("/contact-us")
      }
    }
  }
};
