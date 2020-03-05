import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {css} from "@emotion/core";
import BgImage from "../components/bgimage";
import LinkButton from "../components/linkbutton";
import {graphql} from "gatsby";
import Img from "gatsby-image";

const Contact = ({data}) => (
    <Layout>
        <SEO title="Contact"/>
        {/*LANDING SHOT*/}
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
            <BgImage fluid={data.landing.childImageSharp.fluid}/>

            <h1
                css={css`
                      margin: auto auto 0;
                      color: #ffffff;
                      padding-top: 5rem;
                      grid-area: mainTitle;
                    `}
            >
                Innovation In Our Lab. <br/> Performance In Your World
            </h1>

            <LinkButton
                to="shop"
                content="Buy Now"
                marginTop="0"
            />
        </section>
    </Layout>
);

export const query = graphql`
    query {
        customers: file(relativePath: { eq: "customers.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        solutions: file(relativePath: { eq: "dryerasesolutionsphoto.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        landing: file(relativePath: { eq: "featureslanding.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;


export default Contact