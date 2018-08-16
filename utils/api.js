import Prismic from 'prismic-javascript'

const posts = async params => {
  try {
    const API = await Prismic.api(process.env.API_URL)
    const response = await API.query(Prismic.Predicates.at('document.type', 'post'), {
      orderings: '[my.post.date desc]',
      ...params
    })
    return response
  } catch (error) {
    return error
  }
}

const post = async slug => {
  try {
    const API = await Prismic.api(process.env.API_URL)
    const response = await API.query(Prismic.Predicates.at('my.post.uid', slug))
    return response.results[0]
  } catch (error) {
    return error
  }
}

const sponsors = async params => {
  try {
    const API = await Prismic.api(process.env.API_URL)
    const response = await API.query(Prismic.Predicates.at('document.type', 'sponsor'), {
      ...params
    })

    return response
  } catch (error) {
    return error
  }
}

const banners = async params => {
  try {
    const API = await Prismic.api(process.env.API_URL)
    const response = await API.query(Prismic.Predicates.at('document.type', 'banner'), {
      ...params
    })

    return response
  } catch (error) {
    return error
  }
}

const video = async () => {
  try {
    const API = await Prismic.api(process.env.API_URL)
    const response = await API.query(Prismic.Predicates.at('document.type', 'video'))

    return response.results[0]
  } catch (error) {
    return error
  }
}

const featured = async () => {
  try {
    const API = await Prismic.api(process.env.API_URL)
    const response = await API.getSingle('featured', {
      fetchLinks: ['post.title', 'post.image', 'post.resume']
    })

    return response
  } catch (error) {
    return error
  }
}

export { posts, post, sponsors, video, featured, banners }
