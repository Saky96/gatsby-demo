import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
query FirstQuery{
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

const Header = () => {
    const {
        site: {
            info: {
                person: { name, age },
                title
            }
        }
    } = useStaticQuery(getData)
    // console.log(`Query data: `, data)
    return (
        <div>
            {/* <h1>
                {data.site.siteMetadata.person.name}
            </h1>
            <h1>
                {data.site.siteMetadata.person.age}
            </h1> */}
            <h1>
                {title}
            </h1>
            <h1>
                {name}
            </h1>
            <h1>
                {age}
            </h1>
        </div>
    )
}

export default Header
