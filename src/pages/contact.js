import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {css} from "@emotion/core";
import BgImage from "../components/bgimage";
import LinkButton from "../components/linkbutton";
import {graphql} from "gatsby";
import Img from "gatsby-image";
import ContactForm from "../components/contactform";

const Contact = ({data}) => (
    <Layout>
        <SEO title="Contact"/>
        {/*LANDING SHOT*/}
        <section
            css={css`              
              height: 66vh;
              width: 100vw;
              display: grid;
              grid-template-areas: 
              ". . ."
              "mainTitle mainTitle mainTitle"
              ". . ."
              ;
              grid-template-rows: 1fr auto 1fr;    
            `}
        >
            <BgImage fluid={data.contact.childImageSharp.fluid}/>

            <h1
                css={css`          
                      margin: auto auto 0;
                      color: #ffffff;
                      grid-area: mainTitle;
                    `}
            >
                Contact Us
            </h1>

        </section>
        <section
            css={css`
            display: grid;
            grid-template-areas:
            "contact"
            "addresses"
            "form"
            ;
            padding-top: 2rem;
            @media only screen and (min-width: 1120px) {
              grid-template-areas:
              "addresses . contact . form";
              grid-template-columns: 1fr 3rem 1fr 3rem 1fr;
              max-width: 1120px;
              margin: auto;
              }
            `}
        >
            <section
                css={css`
                grid-area: addresses;
                display: grid;
                grid-template-areas:
                  ". heading ."
                  ". para1 ."
                  ". para2 ."
                  ". para3 ."
                  ". para4 ."
                ;
                grid-template-columns: 1fr auto 1fr;
                @media only screen and (min-width: 1120px) {
                  grid-template-areas:
                  "heading"
                  "para1"
                  "para2"
                  "para3"
                  "para4"
                  ;
                  }
                `}
            >
                <h3
                    css={css`
                    grid-area: heading;
                  `}
                >
                    Offices
                </h3>
                <p
                    css={css`
                      grid-area: para1;
                      line-height: 1.3em;
                      font-weight: 100;
                    `}
                >
                    13701 24th ST E <br/>
                    Sumner, WA 98390 <br/>
                    USA
                </p>
                <p
                    css={css`
                      grid-area: para2;
                      line-height: 1.3em;
                      font-weight: 100;
                      padding-top: 1rem;
                    `}
                >
                    26 Walter Jones BLVD<br/>
                    El Paso, TX 79906<br/>
                    USA
                </p>
                <p
                    css={css`
                      grid-area: para3;
                      line-height: 1.3em;
                      font-weight: 100;
                      padding-top: 1rem;
                    `}
                >
                    10326 Bluegrass PKWY<br/>
                    Louisville, KY 40299<br/>
                    USA
                </p>
                <p
                    css={css`
                      grid-area: para4;
                      line-height: 1.3em;
                      font-weight: 100;
                      padding-top: 1rem;
                    `}
                >
                    966 Boulder BLVD<br/>
                    Stony Plain, AB T7Z0E6<br/>
                    Canada
                </p>
            </section>
            <section
                css={css`
                grid-area: contact;
                display: grid;
                grid-template-areas: 
                ". heading1 heading1 heading1 ."
                ". subheading1 subheading1 subheading1 ."
                ". heading2 heading2 heading2 ."
                ". subheading2 subheading2 subheading2 ."
                ". heading3 heading3 heading3 ."
                ". . buttonLink . ."
                ;
                grid-template-columns: 1fr 1fr auto 1fr 1fr;
                padding-bottom: 2rem;
            `}
            >
                <h3
                    css={css`
                    grid-area: heading1;
                    margin: auto;
                  `}
                >
                    Phone
                </h3>
                <p
                    css={css`
                      grid-area: subheading1;
                      margin: auto;
                    `}
                >
                    +1 855-437-2948
                </p>
                <h3
                    css={css`
                    grid-area: heading2;
                    margin: auto;
                    padding-top: 1rem;
                  `}
                >
                    Email
                </h3>
                <p
                    css={css`
                      grid-area: subheading2;
                      margin: auto;
                    `}
                >
                    hello@drawitpaint.com
                </p>
                <h3
                    css={css`
                    grid-area: heading3;
                    margin: auto;
                    padding-bottom: 1rem;
                    padding-top: 1rem;
                  `}
                >
                    Let's Chat
                </h3>
                <LinkButton to="/contact" content="Chat With Us"/>
            </section>
            <ContactForm/>
        </section>
    </Layout>
);

export const query = graphql`
    query {
        contact: file(relativePath: { eq: "contactbanner.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;


export default Contact