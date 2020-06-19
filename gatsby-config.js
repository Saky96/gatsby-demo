/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby tutorial',
    description: 'random description',
    author: 'Saksham Saigal',
    data: ['item1', 'item2'],
    person: { name: 'Rahul', age: 44 }
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `9gn5in85acyz`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        // accessToken: `e_MH4UC8M6KXVGMc7aYocLnfTyXo2DmumqjZcngeNTk`,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}
