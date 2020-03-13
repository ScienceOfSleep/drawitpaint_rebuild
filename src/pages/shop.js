import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {css} from "@emotion/core";
import Header from "../components/header";
import BgImage from "../components/bgimage";
import {graphql} from "gatsby";
import ShopCard from "../components/shopcard";

const Shop = ({data}) => (
    <Layout>
        <SEO title="Shop"/>
        <div
            css={css`
                  height: 80px;
                  background-color: #000000;
                  display: block;
                  box-sizing: border-box;
                `}
        >
            <Header/>
        </div>
        <section
            css={css`
              display: grid;
              grid-template-areas: 
              ". . ."
              ". mainTitle ."
              ". . ."
              ". . ."
              ;
              grid-template-columns: 1fr auto 3fr;
              grid-template-rows: 1fr 1fr 46px 1fr;
              height: calc(100vh - 80px);
              width: 100vw;
            `}
        >
            <BgImage fluid={data.landing.childImageSharp.fluid}/>
            <h1
                css={css`
                    color: #000000;
                    padding-top: 5rem;
                    text-align: left;
                    font-size: 3rem;
                    padding-bottom: 1.5rem;
                    grid-area: mainTitle;
                    max-width: 1120px;
                    margin: auto;
                    @media only screen and (min-width: 1120px) {
                    padding-bottom: 0;
                    font-size: 116px;
                    }
                  `}
            >
                Shop
            </h1>
        </section>

        <section
            css={css`
                  display: grid;
                  padding-top: 2rem;
                  grid-template-areas:
                  "card1"
                  "card2"
                  "card3"
                  "card4"
                  "card5"
                  "card6"
                  "card7"
                  "card8"
                  "card9"
                  ;
                  padding-left: .5rem;
                  padding-right: .5rem;
                  @media only screen and (min-width: 1120px) {
                    padding-left: 0;
                    padding-right: 0;
                    max-width: 1120px;
                    margin: auto;
                    grid-template-areas:
                    "card1 . card2 . card3"
                    "card4 . card5 . card6"
                    "card7 . card8 . card9"
                    ;
                    grid-template-columns: auto 1.5rem auto 1.5rem auto;
                  }
                `}
        >
            <ShopCard heading="Recruit: The Thinker" subheading="White" price="$445"
                      fluid={data.thinkerw.childImageSharp.fluid} area="card1"
                      to="http://4e5f374f.ngrok.io/product/recruit-the-thinker-white/"/>
            <ShopCard heading="Recruit: The Thinker" subheading="Clear" price="$495"
                      fluid={data.thinkerc.childImageSharp.fluid} area="card2"
                      to="http://4e5f374f.ngrok.io/product/recruit-the-thinker-clear/"/>
            <ShopCard heading="Recruit: The Thinker" subheading="Black" price="$495"
                      fluid={data.thinkerb.childImageSharp.fluid} area="card3"
                      to="http://4e5f374f.ngrok.io/product/recruit-the-thinker-black/"/>
            <ShopCard heading="Unique: The Hero" subheading="White" price="$745"
                      fluid={data.herow.childImageSharp.fluid} area="card4"
                      to="http://4e5f374f.ngrok.io/product/unique-the-hero-white/"/>
            <ShopCard heading="Unique: The Hero" subheading="Clear" price="$795"
                      fluid={data.heroc.childImageSharp.fluid} area="card5"
                      to="http://4e5f374f.ngrok.io/product/unique-the-hero-clear/"/>
            <ShopCard heading="Unique: The Hero" subheading="Black" price="$795"
                      fluid={data.herob.childImageSharp.fluid} area="card6"
                      to="http://4e5f374f.ngrok.io/product/unique-the-hero-black/"/>
            <ShopCard heading="Limitless: The Don" subheading="White" price="$1045"
                      fluid={data.donw.childImageSharp.fluid} area="card7"
                      to="http://4e5f374f.ngrok.io/product/limitless-the-don-white/"/>
            <ShopCard heading="Limitless: The Don" subheading="Clear" price="$1095"
                      fluid={data.donc.childImageSharp.fluid} area="card8"
                      to="http://4e5f374f.ngrok.io/product/limitless-the-don-clear/"/>
            <ShopCard heading="Limitless: The Don" subheading="Black" price="$1095"
                      fluid={data.donb.childImageSharp.fluid} area="card9"
                      to="http://4e5f374f.ngrok.io/product/limitless-the-don-black/"/>
        </section>
    </Layout>
);

export const query = graphql`
    query {
        landing: file(relativePath: { eq: "shoplanding.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        donw: file(relativePath: { eq: "donw.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 365) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        herow: file(relativePath: { eq: "herow.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 365) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        thinkerw: file(relativePath: { eq: "thinkerw.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 365) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        thinkerc: file(relativePath: { eq: "thinkerc.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 365) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        thinkerb: file(relativePath: { eq: "thinkerb.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 365) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        heroc: file(relativePath: { eq: "heroc.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 365) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        herob: file(relativePath: { eq: "herob.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 365) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        donc: file(relativePath: { eq: "donc.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 365) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        donb: file(relativePath: { eq: "donb.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 365) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

export default Shop