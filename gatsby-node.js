const path = require(`path`)

exports.createPages = async ({
  graphql,
  actions: { createPage }
}) => {
  const createPageInstance = async (TEMPLATE_FILE_NAME, PAGE_ID) => {
    const { data: { wpPage: pageData } } = await graphql(`
            query getPageData ($id: String!){
                wpPage(id: {eq: $id})  {
                    slug
                    id
                    uri
                }
            }
        `, { id: PAGE_ID })

    createPage({
      path: pageData.uri,
      component: path.resolve(`src/templates/${TEMPLATE_FILE_NAME}`),
      context: {
        id: pageData.id, // Gatsby GraphQL page id - not the same as WP page id
        slug: pageData.slug, // Page slug from wordpress example : 'o-tworzeniu-wiki'
        uri: pageData.uri, // Page url from wordpress example : '/blog/post/o-tworzeniu-wiki/'
      },
      ownerNodeId: pageData.id // Upgrade Gatsby cloud page render logic
    })
  }

  // create pages 

  createPageInstance('homepage.jsx', 'cG9zdDoxOQ==')
  createPageInstance('kontakt.jsx', 'cG9zdDo0NA==')
  createPageInstance('specializacja-archiwum.jsx', 'cG9zdDo4Ng==')
  createPageInstance('wspolpraca.jsx', 'cG9zdDo3NA==')
  createPageInstance('polityka-prywatnosci.jsx', 'cG9zdDo3Nw==')
  createPageInstance('kancelaria.jsx', 'cG9zdDo3MQ==')
  createPageInstance('blog.jsx', 'cG9zdDo4Mw==')

  // create specialisations

  const { data: { allWpSpecjalizacja } } = await graphql(`
    query getSpecialisationData {
      allWpSpecjalizacja  {
        nodes{
          slug
          id
          uri
        }
      }
    }
  `)

  allWpSpecjalizacja.nodes.forEach(el => {
    createPage({
      path: el.uri,
      component: path.resolve(`src/templates/specializacja.jsx`),
      context: {
        id: el.id,
        slug: el.slug,
        uri: el.uri,
      },
      ownerNodeId: el.id
    })
  })

  // create posts

  const { data: { allWpPost } } = await graphql(`
    query getSpecialisationData {
      allWpPost  {
        nodes{
          slug
          id
          uri
        }
      }
    }
  `)

  allWpPost.nodes.forEach(el => {
    createPage({
      path: el.uri, // TODO: change url basis
      component: path.resolve(`src/templates/blog-post.jsx`),
      context: {
        id: el.id,
        slug: el.slug,
        uri: el.uri,
      },
      ownerNodeId: el.id
    })
  })

}