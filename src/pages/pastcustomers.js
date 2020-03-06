import React from "react";
import {css} from "@emotion/core";
import Img from "gatsby-image";
import {graphql} from "gatsby";

import LinkButton from "../components/linkbutton";
import BgImage from "../components/bgimage";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";


const PastCustomers = ({data}) => (
    <Layout>
        <SEO title="Customers"/>
        {/*LANDING SHOT*/}
        <section
            css={css`
              display: grid;
              grid-template-areas:
              "navbar navbar navbar" 
              "mainTitle mainTitle mainTitle"
              ". buttonLink ."
              ". . ."
              ;
              grid-template-columns: 1fr auto 1fr;
              grid-template-rows: auto 2fr 46px 1fr;
              height: 100vh;
              width: 100vw;
            `}
        >
            <Header/>
            <BgImage fluid={data.landing.childImageSharp.fluid}/>

            <h1
                css={css`
                      margin: auto auto 0;
                      color: #ffffff;
                      padding-top: 5rem;
                      text-align: center;
                      grid-area: mainTitle;
                    `}
            >
                Every Possibility
            </h1>

            <LinkButton
                to="shop"
                content="Get Dry Erase Paint Now"
                marginTop="0"
            />
        </section>

        {/*COPY*/}
        <section
            css={css`
              padding: 2rem .5rem;
              @media only screen and (min-width: 1120px) {
                display: flex;
                max-width: 1120px;
                margin: 5rem auto auto;
                }
            `}
        >
            <p
                css={css`
                font-size: 20px;
                @media only screen and (min-width: 1120px) {
                    margin-right: 5rem;
                  }
                `}
            >
                We have a dry erase paint for every surface, setting and industry, because we believe your creativity
                should never be confined. See what people are saying about us and how some of the most influential and
                innovative companies have chosen us to take their success to the next level.
            </p>
            <p
                css={css`
                  font-size: 20px;
                  font-weight: bold;
                  border-top: 2px solid #000000;
                  margin-top: 2rem;
                  @media only screen and (min-width: 1120px) {
                    margin-top: inherit;
                    border-top: 0;
                    border-left: solid 2px #000000;
                    padding-left: 1rem;
                  }
                `}
            >
                Already a Draw It Paint customer? Get an additional 10% off your next order so that you can utilize more
                space and continue to thrive.
            </p>
        </section>

        {/*PAST CUSTOMERS*/}
        <section
            css={css`
                  padding-top: 2rem;
                  @media only screen and (min-width: 1120px) {
                    padding-top: 7rem;
                    max-width: 1120px;
                    margin: auto;
                  }
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

        {/*PAINT BUCKET*/}
        <section
            css={css`
              display: grid;
              grid-template-areas:
              ". . . ."
              ". copy copy ."
              ". buttonLink . ."
              ". . . ."
              ;
              grid-template-columns: .5rem auto 1fr 1fr;
              grid-template-rows: 1fr auto auto 2rem;
              padding-top: 2rem;
              @media only screen and (min-width: 1120px) {
                grid-template-areas: 
                ". copy copy . "
                ". buttonLink . . "
                ". . . ."
                ". . . ."
                ;
                grid-template-columns: 1fr auto 1fr 3fr;
                grid-template-rows: auto 46px 1fr;
                padding-top: 5rem;
              }
            `}
        >
            <BgImage fluid={data.solutions.childImageSharp.fluid} columnEnd="5" rowEnd="5"/>
            <section
                css={css`
                  grid-area: copy;
                  display: flex;
                  flex-flow: column nowrap;
                  padding-top: 5rem;
                  padding-bottom: 3rem;
                  @media only screen and (min-width: 1120px) {
                    padding-bottom: 1rem;
                  }
                `}
            >
                <h3
                    css={css`
                    `}
                >
                    Dry Erase Solutions
                </h3>
                <p
                    css={css`
                      font-size: 24px;
                    `}
                >
                    From personal projects to industrial workplaces, our dry erase paints work hard so you don’t have
                    to. Reinvent your spaces and give you and your team the ability to collaborate and create without
                    borders.
                </p>
            </section>

            <LinkButton
                to="shop"
                content="Shop Our Products"
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
        landing: file(relativePath: { eq: "pastcustomerslandingimage.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

export default PastCustomers