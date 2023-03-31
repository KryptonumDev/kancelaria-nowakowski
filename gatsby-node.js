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
                    title
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
        breadcrumbs: [
          {
            name: pageData.title,
            url: pageData.uri
          } 
        ]
      },
      ownerNodeId: pageData.id // Upgrade Gatsby cloud page render logic
    })
  }

  const createBlogInstance = async (POST_TEMPLATE_FILE_NAME, ARCHIVE_TEMPLATE_FILE_NAME, PAGE_ID) => {
    const { data: {
      wpPage: pageData,
      allWpPost: {
        totalCount: postsCount,
        nodes: posts
      },
      allWpCategory: {
        nodes: categories
      }
    } } = await graphql(`
        query getPageData ($id: String!){
            wpPage(id: {eq: $id})  {
                slug
                id
                uri
                title
            }
            allWpPost {
              totalCount
              nodes{
                slug
                id
                uri
                title
              }
            }
            allWpCategory(filter: {count: {gt: 0}}) {
              nodes {
                slug
                count
                id
                uri
                name
              }
            }
        }
    `, { id: PAGE_ID })

    //  Create blog page
    createPage({
      path: pageData.uri,
      component: path.resolve(`src/templates/${ARCHIVE_TEMPLATE_FILE_NAME}`),
      context: {
        id: pageData.id,
        slug: pageData.slug,
        uri: pageData.uri,
        page: 1,
        category: null,
        breadcrumbs: [
          {
            name: pageData.title,
            url: pageData.uri
          }
        ]
      },
      ownerNodeId: pageData.id
    })

    //  Create blog pagination
    if (postsCount > 12) {
      for (let i = 0; i < Math.ceil(postsCount / 12); i++) {
        let page = i + 2
        createPage({
          path: pageData.uri + page + '/',
          component: path.resolve(`src/templates/${ARCHIVE_TEMPLATE_FILE_NAME}`),
          context: {
            id: pageData.id,
            slug: pageData.slug,
            uri: pageData.uri,
            page: page,
            category: null,
            breadcrumbs: [
              {
                name: pageData.title,
                url: pageData.uri
              }
            ]
          },
          ownerNodeId: pageData.id
        })
      }
    }

    categories.forEach(categoryData => {
      //  Create category page
      createPage({
        path: categoryData.uri,
        component: path.resolve(`src/templates/${ARCHIVE_TEMPLATE_FILE_NAME}`),
        context: {
          id: pageData.id,
          slug: categoryData.slug,
          uri: categoryData.uri,
          page: 1,
          category: categoryData.name,
          breadcrumbs: [
            {
              name: pageData.title,
              url: pageData.uri
            },
            {
              name: categoryData.name,
              url: categoryData.uri
            }
          ]
        },
        ownerNodeId: categoryData.id
      })

      //  Create category pagination
      if (categoryData.count > 12) {
        for (let i = 0; i < Math.ceil(categoryData.count / 12); i++) {
          let page = i + 2
          createPage({
            path: categoryData.uri + page + '/',
            component: path.resolve(`src/templates/${ARCHIVE_TEMPLATE_FILE_NAME}`),
            context: {
              id: categoryData.id,
              slug: categoryData.slug,
              uri: categoryData.uri,
              page: page,
              category: categoryData.name,
              breadcrumbs: [
                {
                  name: pageData.title,
                  url: pageData.uri
                },
                {
                  name: categoryData.name,
                  url: categoryData.uri
                }
              ]
            },
            ownerNodeId: pageData.id
          })
        }
      }

      posts.forEach(el => {
        createPage({
          path: el.uri,
          component: path.resolve(`src/templates/${POST_TEMPLATE_FILE_NAME}`),
          context: {
            id: el.id,
            slug: el.slug,
            uri: el.uri,
            breadcrumbs: [
              {
                name: pageData.title,
                url: pageData.uri
              },
              {
                name: el.title,
                url: el.uri
              }
            ]
          },
          ownerNodeId: el.id
        })
      })

    })
  }

  // create pages  

  createPageInstance('homepage.jsx', 'cG9zdDoxOQ==')
  createPageInstance('kontakt.jsx', 'cG9zdDo0NA==')
  createPageInstance('specializacja-archiwum.jsx', 'cG9zdDo4Ng==')
  createPageInstance('wspolpraca.jsx', 'cG9zdDo3NA==')
  createPageInstance('polityka-prywatnosci.jsx', 'cG9zdDo3Nw==')
  createPageInstance('kancelaria.jsx', 'cG9zdDo3MQ==')
  createPageInstance('mapa-strony.jsx', 'cG9zdDoxNDc0')

  createBlogInstance('blog-post.jsx', 'blog.jsx', 'cG9zdDo4Mw==')

  // create specialisations 

  const { data: { allWpSpecjalizacja, arhive } } = await graphql(`
    query getSpecialisationData {
      arhive : wpPage(id: {eq: "cG9zdDo4Ng=="}){
        title
        uri
      }
      allWpSpecjalizacja  {
        nodes{
          slug 
          id
          uri
          title
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
        breadcrumbs: [
          { 
            name: arhive.title,
            url: arhive.uri
          },
          {
            name: el.title,
            url: el.uri
          }
        ]
      },
      ownerNodeId: el.id
    })
  })
} 