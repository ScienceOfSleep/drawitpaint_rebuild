import React from "react"
import {graphql, Link} from "gatsby"
import {css} from "@emotion/core"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BgImage from "../components/bgimage";
import ProductCard from "../components/productcard";

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
                  margin-bottom: 7rem;
                `}
            >
                <h1
                    css={css`
                      margin: auto;
                      color: #ffffff;
                      padding-top: 4rem;
                      padding-bottom: 6rem;
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
        `}
        >
            {/*EVERYTHING YOU NEED*/}
            <section
                css={css`
                display: grid;
                grid-template-areas: 
                "heading pic"
                "subheading pic"
                "para pic"
                ;
                grid-template-rows: 1fr 1fr;
                padding-top: 2.5rem;
                max-width: 1120px;
                margin: auto;
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
                            margin-left: 4rem;
                          `}
                />
            </section>

            {/*REVOLUTION*/}
            <section
                css={css`
                display: grid;
                grid-template-areas: 
                "pic heading"
                "pic para"
                ;
                grid-template-rows: 1fr 1fr;
                padding-top: 4rem;
                max-width: 1120px;
                margin: auto;
            `}
            >
                <h3
                    css={css`
                            grid-area: heading;
                            padding-top: 3rem;
                          `}
                >
                    A Revolution in Performance
                </h3>
                <p
                    css={css`
                    grid-area: para;
                  `}
                >
                    Our proprietary dry erase formulas are designed for performance, engineered for durability, and manufactured for quality, creating a functionality all our own.
                </p>
                <Img
                    fluid={data.revolution.childImageSharp.fluid}
                    css={css`
                            grid-area: pic;
                            width: 500px;
                            margin-right: 7rem;
                          `}
                />
            </section>

            {/*FEATURES*/}
            <section
                css={css`
                display: grid;
                grid-template-areas: 
                "heading1 heading1 heading2 heading2"
                "para1 para1 para2 para2"
                ". buttonLink buttonLink ."
                ;
                grid-template-rows: 1fr 1fr auto;
                grid-template-columns: 1fr auto auto 1fr;
                padding-top: 3rem;
                max-width: 1120px;
                margin: auto;
            `}
            >
                <h3
                    css={css`
                    grid-area: heading1;
                    padding-right: 2rem;
                  `}
                >
                    Distinctive Modern Look
                </h3>
                <p
                    css={css`
                    grid-area: para1;
                    padding-right: 2rem;
                  `}
                >
                    A sophisticated Self-Leveling and Self-Smoothing paint offers a clean, distinct, glass-like dry erase surface well-suited to a variety of modern businesses and workspaces.
                </p>
                <h3
                    css={css`
                    grid-area: heading2;
                    padding-left: 4rem;
                  `}
                >
                    Effortless For Everyone
                </h3>
                <p
                    css={css`
                    grid-area: para2;
                    padding-left: 4rem;
                    padding-bottom: 4rem;
                  `}
                >
                    Paint that work as hard as you. Simply Shake, Mix, and Roll for a professional glass-like finish.
                    These are just some of the ways we make dry erase better for people.
                </p>
                <LinkButton to="index" content="Learn More"/>
            </section>

            {/*PRODUCT PREVIEW*/}
            <section
                css={css`
                display: grid;
                grid-template-areas: 
                "heading subheading1"
                "heading para1"
                "heading subheading2"
                "heading para2"
                ". subheading3"
                ". para3"
                ;
                padding-top: 5rem;
                max-width: 1120px;
                margin: auto;
            `}
            >
                <h3
                    css={css`
                    grid-area: heading;
                  `}
                >
                    Complete Dry Erase Selection
                </h3>
                <h4
                    css={css`
                    grid-area: subheading1;
                    color: var(--brand-color);
                  `}
                >
                    Recruit: The Thinker
                </h4>
                <p
                    css={css`
                    grid-area: para1;
                    margin-top: 0;
                  `}
                >
                    For heavy usage in a medium sized business.
                </p>
                <h4
                    css={css`
                    grid-area: subheading2;
                    color: var(--brand-color);
                  `}
                >
                    Unique: The Hero
                </h4>
                <p
                    css={css`
                    grid-area: para2;
                    margin-top: 0;
                  `}
                >
                    For heavy usage in a business or warehouse setting.
                </p>
                <h4
                    css={css`
                    grid-area: subheading3;
                    color: var(--brand-color);
                  `}
                >
                    Limitless: The Don
                </h4>
                <p
                    css={css`
                    grid-area: para3;
                    margin-top: 0;
                  `}
                >
                    For heavy usage in large facilities with exposure to chemicals.
                </p>
            </section>
            <section
                css={css`
                      display: grid;
                      grid-template-areas:
                      "card1 card2 card3"
                      ;
                      grid-template-columns: 1fr 1fr 1fr;
                      padding-top: 2rem;
                      max-width: 1120px;
                      margin: auto;
                    `}
            >
                <ProductCard heading="Recruit: The Thinker" subheading="White" price="$445"
                             fluid={data.thinkerw.childImageSharp.fluid} area="card1"/>
                <ProductCard heading="Unique: The Hero" subheading="White" price="$745"
                             fluid={data.herow.childImageSharp.fluid} area="card2"/>
                <ProductCard heading="Limitless: The Don" subheading="White" price="$1045"
                             fluid={data.donw.childImageSharp.fluid} area="card3"/>
            </section>

            <nav
                css={css`
                      display: flex;
                      justify-content: center;
                      padding-top: 1rem;
                      padding-bottom: 2.5rem;
                    `}
            >
                <LinkButton to="shop" content="Shop All Our Products"/>
            </nav>

            {/*WHITEBOARD BANNER*/}
            <Img fluid={data.whiteboardbanner.childImageSharp.fluid}/>

            {/*CREATE THE EXACT SPACE YOU WANT*/}
            <section
                css={css`
                display: grid;
                grid-template-areas: 
                "pic heading"
                "pic para"
                ;
                grid-template-rows: 1fr 1fr;
                padding-top: 8rem;
                max-width: 1120px;
                margin: auto;
            `}
            >
                <h3
                    css={css`
                    grid-area: heading;
                  `}
                >
                    Create The Exact Space You Want
                </h3>
                <p
                    css={css`
                    grid-area: para;
                  `}
                >
                    Choose Recruit: The Thinker a Professional formula, Unique: The Hero a Commercial formula or Limitless: The Don an Industrial formula. ColorHD micro paint pigments in White or Black for deep saturation or Clear.
                </p>
                <Img
                    fluid={data.spaceyouwant.childImageSharp.fluid}
                    css={css`
                grid-area: pic;
                width: 500px;
                margin-right: 1rem;
              `}
                />
            </section>

            {/*PAST CUSTOMERS*/}
            <section
                css={css`
                  padding-top: 8rem;
                  max-width: 1120px;
                  margin: auto;
                `}
            >
                <h3>Some Of Our Past Customers</h3>
                <Img fluid={data.customers.childImageSharp.fluid}/>
                <nav
                    css={css`
                          display: flex;
                          justify-content: center;
                        `}
                >
                    <LinkButton to="pastcustomers" content="Learn More"/>
                </nav>
            </section>
        </main>

        {/*BLUE AND WHITE BAR*/}
        <section
            css={css`
                background-color: var(--alt-brand-color);
                margin-top: 3rem;
                margin-bottom: 3rem;
                `}
        >
            <section
                css={css`
                display: grid;
                grid-template-areas: 
                "copy copy ."
                "copy copy buttonLink"
                "copy copy ."
                ;
                grid-template-rows: 1fr auto 1fr;
                max-width: 1120px;
                margin: auto;
                padding-top: 2rem;
                padding-bottom: 2rem;
            `}
            >
                <section
                    css={css`
                      grid-area: copy;
                      display: flex;
                      flex-flow: column nowrap;
                    `}
                >
                    <h3
                        css={css`
                    grid-area: heading;
                    color: #ffffff;
                    font-size: 36px;
                    font-weight: 300;
                  `}
                    >
                        An Aesthetic All Its Own
                    </h3>
                    <h4
                        css={css`
                          grid-area: subheading;
                          color: #ffffff;
                          margin-top: 0;
                        `}
                    >
                        With a modern and distinct glass-like finish.
                    </h4>
                    <p
                        css={css`
                    grid-area: para;
                    color: #ffffff;
                    margin-top: 0;
                  `}
                    >
                        It’s no wonder it has been added to the idea generation hubs of many business professionals,
                        manufacturers, and researchers across America.
                    </p></section>
                <Link
                    to="shop"
                    css={css`
                            text-decoration: none;
                            background-color: var(--alt-brand-color);
                            color: #ffffff;
                            border: solid 2px #ffffff;
                            border-radius: .75em;
                            padding: .8em 1.25em;
                            cursor: pointer;
                            font-weight: 700;
                            font-size: 15px;
                            letter-spacing: 2px;
                            grid-area: buttonLink;
                            &:hover, &:focus{
                              background-color: #ffffff;
                              color: #000000;
                        `}
                >
                    Get Dry Erase Paint Now
                </Link>
            </section>
        </section>

        {/*CONTACT*/}
        <section
            css={css`
                display: grid;
                grid-template-areas: 
                ". heading heading heading ."
                ". subheading subheading subheading ."
                ". para para para ."
                ". . buttonLink . ."
                ;
                grid-template-columns: 1fr 1fr auto 1fr 1fr;
            `}
        >
            <h3
                css={css`
                    grid-area: heading;
                    margin: auto;
                  `}
            >
                Keep In Touch
            </h3>
            <p
                css={css`
                      grid-area: subheading;
                      margin: auto;
                    `}
            >
                hello@drawitpaint.com
            </p>
            <p
                css={css`
                    grid-area: para;
                    margin: auto;
                  `}
            >
                +1 855-437-2948
            </p>
            <LinkButton to="index" content="Contact Us"/>
        </section>
    </Layout>
);

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
`;

export default IndexPage
