export const state = () => ({
  blogPosts: [],
  pages: [],
  portfolioItems: [],
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
  setPages(state, pages) {
    state.pages = pages
  },
  setPortfolioItems(state, items) {
    state.portfolioItems = items
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    // blog
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


    // pages
    let pageFiles = await require.context('~/assets/content/pages/', false, /\.json$/)
    let pages = pageFiles.keys().map(key => {
      let res = pageFiles(key);
      res.page = key.replace('./', '').replace('.json', '');
      return res;
    })
    await commit('setPages', pages)


    // // portfolioItems
    // let portfolioItems = await require.context('~/assets/content/portfolio/', false, /\.json$/)
    // // console.log('index::portfolioItems: portfolioItems:', portfolioItems);
    // let items = portfolioItems.keys().map(key => {
    //   console.log('index::paktest: key:', key);
    //   let res = portfolioItems(key);
    //   console.log('index::paktest: res:', res);
    //   res.page = key.replace('./', '').replace('.json', '');
    //   return res;
    // })
    // await commit('setPortfolioItems', items)
  }
}
