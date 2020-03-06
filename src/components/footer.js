import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import {css} from "@emotion/core"
import styled from "@emotion/styled";
import Img from "gatsby-image";

import ContactForm from "./contactform";

const Footer = () => {
    const FootLink = styled(Link)`
    text-decoration: none;
    color: #000000;
    font-size: 14px;
    font-weight: 500;
    grid-area: ${props => props.area || ''};
    
    &:first-of-type{
      padding-right: 1rem;
    }
    `;

    const data = useStaticQuery(graphql`
    query {
      blacklogo: file(relativePath: { eq: "blacklogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

    return <footer
        css={css`
          padding-top: 2rem;
          padding-bottom: 2rem;
          display: grid;
          grid-template-areas:
          ". form ."
          ". social ."
          ". nav ."
          ;
          grid-template-columns: 1fr auto 1fr;
          @media only screen and (min-width: 1120px) {
            grid-template-areas:
            "nav . social . form"
            ;
            grid-template-columns: 300px 1fr 300px 1fr 300px;
            max-width: 1120px;
            margin: auto;
          }
        `}
    >
        <nav
            css={css`
                  display: grid;
                  grid-area: nav;
                  grid-template-areas:
                  "logo logo"
                  "link1 link5"
                  "link2 link6"
                  "link3 link7"
                  "link4 link8"
                  "copy copy"
                  ;
                `}
        >
            <div
                css={css`
                  width: 110px;
                  grid-area: logo;
                `}
            >
                <Link to="/">
                    <Img fluid={data.blacklogo.childImageSharp.fluid}/>
                </Link>
            </div>

            <FootLink to="/pastcustomers" area="link1">Past Customers</FootLink>
            <FootLink to="/features" area="link2">Features</FootLink>
            <FootLink to="/shop" area="link3">Shop</FootLink>
            <FootLink to="/blog" area="link4">Blog</FootLink>

            <FootLink to="/terms" area="link5">Terms</FootLink>
            <FootLink to="/warranty" area="link6">Warranty & Shipping</FootLink>
            <FootLink to="/cart" area="link7">Cart</FootLink>
            <FootLink to="/contact" area="link8">Blog</FootLink>

            <p
                css={css`
                      font-size: 10px;
                      color: #54595f;
                      grid-area: copy;
                    `}
            >
                © {new Date().getFullYear()} Draw It Paint All rights reserved
            </p>
        </nav>
        <section
            css={css`
                  grid-area: social;
                  padding-bottom: 1.5rem;
                  @media only screen and (min-width: 1120px) {
                    padding-top: 4rem;
                  }
                `}
        >
            <h4
                css={css`
                  text-align: center;
                  font-weight: bold;
                `}
            >
                Check us out on social media
            </h4>
            <h4
                css={css`
                  text-align: center;
                  color: var(--brand-color);
                `}
            >
                Follow us @drawitpaint
            </h4>
            <p
                css={css`
                  text-align: center;
                `}
            >
                800 5th Ave Suite 101567,<br/>Seattle, WA 98104, USA
            </p>
            <p
                css={css`
                  text-align: center;
                `}
            >
                +1 855-437-2948
            </p>
        </section>
        <ContactForm/>
    </footer>
};

export default Footer