export const state = () => ({
  blogPosts: [],
  pages: [],
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
  setPages(state, pages) {
    state.pages = pages;
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )
    let blogPosts = files.keys().map(key => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)

    let pageFiles = await require.context('~/assets/content/pages/', false, /\.json$/)
    console.log('index::pageFiles: pageFiles:', pageFiles);
    let pages = pageFiles.keys().map(key => {
      return key;
    })
  }
}
