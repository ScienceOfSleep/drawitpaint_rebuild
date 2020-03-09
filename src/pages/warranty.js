import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {graphql, Link} from "gatsby";
import {css} from "@emotion/core";
import Header from "../components/header";
import BgImage from "../components/bgimage";
import Img from "gatsby-image"
import LinkButton from "../components/linkbutton";

const Warranty = ({data}) => (
    <Layout>
        <SEO title="Warranty"/>
        <section
            css={css`
              display: grid;
              grid-template-areas:
              "navbar navbar navbar" 
              ". . ."
              "mainTitle mainTitle mainTitle"
              ". . ."
              ;
              grid-template-columns: 1fr auto 1fr;
              grid-template-rows: auto 1fr 1fr 3fr;
              height: 100vh;
              width: 100vw;
            `}
        >
            <Header/>
            <BgImage fluid={data.landing.childImageSharp.fluid}/>

            <h1
                css={css`
                      margin: 0 auto;
                      color: #ffffff;
                      text-align: center;
                      grid-area: mainTitle;
                      padding-top: 3rem;
                    `}
            >
                Shipping & Warranty
            </h1>

        </section>
        <section
            css={css`
                  padding-top: 2rem;
                  display: grid;
                  grid-template-areas:
                  ". icon ."
                  ". copy."
                  ". buttonLink ."
                  ;
                  grid-template-columns: 1fr auto 1fr;
                  padding-right: .5rem;
                  padding-left: .5rem;
                  @media only screen and (min-width: 1120px) {
                    padding-left: 0;
                    padding-right: 0;
                    grid-template-areas:
                    "icon . . . ."
                    "copy copy copy copy copy"
                    ". . buttonLink . ."
                    ;
                    grid-template-columns: 206px 1fr auto 1fr 206px;
                    max-width: 1120px;
                    margin: auto;
                  }
                `}
        >
            <Img
                fixed={data.shipping.childImageSharp.fixed}
                css={css`
                      grid-area: icon;
                      margin: auto;
                      @media only screen and (min-width: 1120px) {
                        margin: 0;
                      }
                    `}
            />
            <section
                css={css`
                      display: flex;
                      flex-flow: column;
                      grid-area: copy;
                      padding-bottom: 2rem;
                      padding-top: 1rem;
                      h4{
                      font-weight: bold;
                      }
                    `}
            >
                <h3>
                    Priority Shipping
                </h3>
                <p>
                    Arrive within 2 days to US domestic and 3 days for International customers.
                </p>
                <h4>
                    Priority courier shipping
                </h4>
                <p>
                    Draw It Paint is the only whiteboard paint that ships with a first class priority courier. This
                    means your Draw It product will be handled with care and will arrive within 48 hours to customers in
                    the United States, including Alaska and Hawaii. To our Draw It friends overseas, it may take up to
                    72 hours.<br/>
                    You will receive a tracking number to track and trace exactly the whereabouts of your Draw It
                    product. A signature verification will be required to receive the product. Also, your customer
                    service representative will contact you on the day the product can be expected, in case you forget.
                    The First Class Priority courier service is a flat rate for all international and domestic customers
                    purchasing Draw It Paint products. Delivery times can be disrupted by customs and local taxes may be
                    required.
                </p>
            </section>
            <LinkButton to="/terms" content="More Details"/>
        </section>
        <section
            css={css`
                  padding-top: 2rem;
                  display: grid;
                  grid-template-areas:
                  ". icon ."
                  ". copy."
                  ". buttonLink ."
                  ;
                  grid-template-columns: 1fr auto 1fr;
                  padding-right: .5rem;
                  padding-left: .5rem;
                  @media only screen and (min-width: 1120px) {
                    padding-left: 0;
                    padding-right: 0;
                    grid-template-areas:
                    "icon . . . ."
                    "copy copy copy copy copy"
                    ". . buttonLink . ."
                    ;
                    grid-template-columns: 206px 1fr auto 1fr 206px;
                    max-width: 1120px;
                    margin: auto;
                  }
                `}
        >
            <Img
                fixed={data.warranty.childImageSharp.fixed}
                css={css`
                      grid-area: icon;
                      margin: auto;
                    `}
            />
            <section
                css={css`
                      display: flex;
                      flex-flow: column;
                      grid-area: copy;
                      padding-bottom: 2rem;
                      padding-top: 1rem;
                      h4{
                      font-weight: bold;
                      }
                    `}
            >
                <h3>
                    Warranty For 10 Years
                </h3>
                <p>
                    All products sold under the Draw It Paint brand are backed by our floor to ceiling warranty.
                </p>
                <h4>
                    10 year floor to ceiling performance warranty
                </h4>
                <p>
                    Draw It Paint products are backed by a performance warranty that will guarantee effortless wipes for
                    10 years, as well as its physical integrity. As a Draw It Paint customer, call us with any question
                    or concern and experience exemplary customer service.
                    You will receive a tracking number to track and trace exactly the whereabouts of your Draw It
                    product. A signature verification will be required to receive the product. Also, your customer
                    service representative will contact you on the day the product can be expected, in case you forget.
                    The First Class Priority courier service is a flat rate for all international and domestic customers
                    purchasing Draw It Paint products. Delivery times can be disrupted by customs and local taxes may be
                    required.
                </p>
                <h4>
                    100% Satisfaction Guarantee
                </h4>
                <p>
                    Our 100% customer satisfaction guarantee means exactly that. As a Draw It customer, you can expect
                    great customer service and product performance. Sometimes, the scope of your whiteboard project may
                    change, and if a product exchange is required just give us a call! Once the product is received with
                    a verified signature, our 10 year performance warranty will be here for all your needs.
                </p>
                <h4>
                    ORDER CHANGES, EXCHANGES, AND RETURNS:
                </h4>
                <p>
                    We want to make sure all of our customers are happy.<br/>
                    Any order changes can be made free of charge before the order is fulfilled and shipped. Changes made
                    after the order is fulfilled and shipped may incur a shipping and a processing fee. The 10 year
                    floor to ceiling warranty will commence once the order is delivered with a signature or automated
                    receipt. Sale is final upon delivery.
                </p>
                <h4>
                    Do you need to change your order?
                </h4>
                <p>
                    Not a problem, we want to make sure you get the right product for your project. We can change your
                    order for you, just let us know!
                </p>
                <h4>
                    Do you need to exchange your order?
                </h4>
                <p>
                    Don’t worry, we are here to help. If you need to exchange your order, make sure to keep the package
                    unopened and just let us know! Only unopened packages can be exchanged and there may be shipping
                    charges, but we will do the best we can to keep all the costs down!
                </p>
                <h4>
                    Do you need to return your order?
                </h4>
                <p>
                    Your can project change and we totally understand. Let us know and we will refund your order right
                    away. You may incur a shipping fee, but we will do our best to keep all the costs down. The 10 year
                    floor to ceiling warranty will commence once the order is delivered with a signature or automated
                    receipt. Sale is final upon delivery.
                </p>
            </section>
            <LinkButton to="/terms" content="More Details"/>
        </section>
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
                "copy copy copy"
                ". buttonLink ."
                ;
                grid-template-columns: 1fr auto 1fr;
                padding: 2rem .5rem;
                @media only screen and (min-width: 1120px) {
                  padding-left: 0;
                  padding-right: 0;
                  grid-template-areas: 
                  "copy . ."
                  "copy . buttonLink"
                  "copy . ."
                  ;
                  grid-template-columns: 2fr 1fr auto;
                  grid-template-rows: 1fr auto 1fr;
                  max-width: 1120px;
                  margin: auto;
                  }
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
                        Didn't find what you were looking for?
                    </h3>
                    <p
                        css={css`
                                color: #ffffff;
                                margin-top: 1rem;
                                margin-bottom: 1.5rem;
                                text-align: center;
                                @media only screen and (min-width: 1120px) {
                                  text-align: left;
                                }
                              `}
                    >
                        Shoot us a message and we will get back to you right away. If it is a great topics we may even
                        write an article about it!
                    </p>
                </section>
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
                    Get In Touch
                </Link>
            </section>
        </section>
    </Layout>
);

export const query = graphql`
    query {
        landing: file(relativePath: { eq: "shippinglanding.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        shipping: file(relativePath: { eq: "shipping.png" }) {
            childImageSharp {
                fixed(width:206) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        warranty: file(relativePath: { eq: "warranty.png" }) {
            childImageSharp {
                fixed(width:132) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

export default Warranty