import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import robotImg from "../images/qopiusRobot.jpg";

const getImages = graphql`
    {
      fixed: file(relativePath: {eq: "offerlane.jpg"}) {
        childImageSharp {
          fixed(width: 300, height: 400, grayscale: true ) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fluid: file(relativePath: {eq: "qopiusRobot.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
`

const Images = () => {

    const data = useStaticQuery(getImages)
    console.log('getImages: ', data)

    const {
        fixed: {
            childImageSharp: {
                fixed
            }
        },
        fluid: {
            childImageSharp: {
                fluid
            }
        }
    } = data

    return (
        <section className='images' >
            <article className='single-image' >
                <h3>basic image</h3>
                <img src={robotImg} alt='robotImage' width='100%' />
            </article>
            <article className='single-image' >
                <h3>fixed image/blur</h3>
                <Image fixed={fixed} />
            </article>
            <article className='single-image' >
                <h3>fluid image/svg</h3>
                <Image fluid={fluid} />
            </article>
        </section>
    )
}

export default Images
