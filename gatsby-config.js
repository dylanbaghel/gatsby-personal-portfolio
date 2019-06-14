/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Abhishek Baghel',
    author: 'Abhishek Baghel',
    email: 'baghelabhi39@gmail.com',
    facebook: 'https://www.facebook.com/techpuran',
    twitter: 'https://www.twitter.com/techpuran',
    github: 'https://www.github.com/dylanbaghel'
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
}
