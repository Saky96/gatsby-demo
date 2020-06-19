import React from 'react'
import { graphql } from "gatsby";
import Layout from '../components/Layout'
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"

const examples = ({ data }) => {

    const { site: { info: { author } } } = data

    return (
        <Layout>
            Examples page
            <Header />
            <h1>Author: {author}</h1>
            <HeaderStatic />
        </Layout>
    )
}

export const data = graphql`
query PageQuery {
    site {
        info:siteMetadata {
        author
        data
        description
        person {
            age
            name
        }
        title
        }
    }
}
`

export default examples
