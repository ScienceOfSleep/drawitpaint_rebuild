import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BgImage from "../components/bgimage";

import LinkButton from "../components/linkbutton";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />


        <section
        css={css`
              display: grid;
              grid-template-areas: 
              "mainTitle mainTitle mainTitle"
              ". buttonLink ."
              ". . ."
              ;
              grid-template-columns: 1fr auto 1fr;
              grid-template-rows: 2fr 46px 1fr;
              height: 100vh;
              width: 100vw;
            `}
    >
            <BgImage fluid={data.landingpage.childImageSharp.fluid}/>

            <title
            css={css`
                  grid-area: mainTitle;
                  display: flex;
                  flex-flow: column nowrap;
                  margin-bottom: 175px;
                `}
        >
            <h1
                css={css`
                      margin: auto;
                      color: #ffffff;
                      padding-bottom: .75em;
                    `}
            >
                Every Possibility
            </h1>
            <h2
                css={css`
                      margin: auto;
                      color: #ffffff;
                    `}
            >
                Behold Your Best Work
            </h2>
        </title>

        <LinkButton
            to="shop"
            content="Get Dry Erase Paint Now"
        />
    </section>


  <main
    css={css`
          margin: auto;
          max-width: 1120px;
          padding-top: 1rem;
        `}
  >
    <section
        css={css`
                display: grid;
                grid-template-areas: 
                "heading pic"
                "subheading pic"
                "para pic"
                ;
                grid-template-rows: 1fr 1fr;
            `}
    >


      <h3
        css={css`
          grid-area: heading;
        `}
      >
          Everything You Need
      </h3>
      <h4
        css={css`
          grid-area: subheading;
        `}
      >
          Draw It Paint is an example of the belief that the details are not details; they make the product.
      </h4>
      <p
          css={css`
          grid-area: para;
        `}
      >
          Generously sized at 100 square feet or more, Draw It Paint features the highest quality materials to fit your needs. Our nine robust formulas can be applied directly onto ANY smooth surface for a smoother and flawless modern finish. Finely formulated options for your thinkspace in a professional, commercial or industrial capacity and performance beyond the leading brand in paint and surpassing traditional porcelain-steel and glass dry erase. Now available in new performance and color options.
      </p>
      <Img
          fluid={data.everything.childImageSharp.fluid}
          css={css`
                grid-area: pic;
                width: 500px;
                margin-left: 1rem;
              `}
      />
    </section>

      <h3>A Revolution in Performance</h3>
      <p>
          Our proprietary dry erase formulas are designed for performance, engineered for durability, and manufactured for quality, creating a functionality all our own.
      </p>
      <Img fluid={data.revolution.childImageSharp.fluid}/>

      <h3>Distinctive Modern Look</h3>
      <p>
          A sophisticated Self-Leveling and Self-Smoothing paint offers a clean, distinct, glass-like dry erase surface well-suited to a variety of modern businesses and workspaces.
      </p>
      <h3>Effortless For Everyone</h3>
      <p>
          Paint that work as hard as you. Simply Shake, Mix, and Roll for a professional glass-like finish. These are just some of the ways we make dry erase better for people.
      </p>
      <LinkButton to="index" content="Learn More"/>

      <h3>Complete Dry Erase Selection</h3>
      <h4>Recruit: The Thinker</h4>
      <p>For heavy usage in a medium sized business.</p>
      <h4>Unique: The Hero</h4>
      <p>For heavy usage in a business or warehouse setting.</p>
      <h4>Limitless: The Don</h4>
    <div>
        <Img fluid={data.thinkerw.childImageSharp.fluid}/>
        <Img fluid={data.herow.childImageSharp.fluid}/>
        <Img fluid={data.donw.childImageSharp.fluid}/>
    </div>
      <LinkButton to="shop" content="Shop All Our Products"/>

      <Img fluid={data.whiteboardbanner.childImageSharp.fluid}/>

      <h3>Create The Exact Space You Want</h3>
      <p>
        Choose Recruit: The Thinker a Professional formula, Unique: The Hero a Commercial formula or Limitless: The Don an Industrial formula. ColorHD micro paint pigments in White or Black for deep saturation or Clear.
      </p>
      <Img fluid={data.spaceyouwant.childImageSharp.fluid}/>

    <h3>Some Of Our Past Customers</h3>
    <Img fluid={data.customers.childImageSharp.fluid}/>
    <LinkButton to="pastcustomers" content="See More"/>

    <h3>An Aesthetic All Its Own</h3>
    <h4>With a modern and distinct glass-like finish.</h4>
    <p>
      It’s no wonder it has been added to the idea generation hubs of many business professionals, manufacturers, and researchers across America.
    </p>
    <LinkButton to="shop" content="Get Dry Erase Paint Now"/>
    <h3>Keep In Touch</h3>
    <p>hello@drawitpaint.com</p>
    <p>+1 855-437-2948</p>
    <LinkButton to="index" content="Contact Us"/>
      </main>
  </Layout>
)

export const query = graphql`
    query {
        customers: file(relativePath: { eq: "customers.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        revolution: file(relativePath: { eq: "arevolutioninperformance.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        spaceyouwant: file(relativePath: { eq: "createthespaceyouwant.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        donw: file(relativePath: { eq: "donw.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        whiteboardbanner: file(relativePath: { eq: "drawitwhiteboarddemobanner.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        everything: file(relativePath: { eq: "everythingyouneed.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        herow: file(relativePath: { eq: "herow.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        landingpage: file(relativePath: { eq: "landingpagephoto.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        thinkerw: file(relativePath: { eq: "thinkerw.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default IndexPage
