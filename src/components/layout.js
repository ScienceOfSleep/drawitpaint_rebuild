/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core";

import Footer from "./footer";

const Layout = ({ children }) => {


  return (
    <>
        <Global styles={css`
        :root{
          --shadow-color: #A8AFB5;
          --brand-color: #dd4c1b;
          --alt-brand-color: #417fb9;
        }
         *{
          box-sizing: border-box;
          margin: 0;
          }
        html,
        body{
          margin: 0;
          padding: 0;
          color: var(--font);
          font-family: "Poppins", "Roboto Light", Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 1.4;
        }
        /*  remove margin for main div that gatsby mounts into */
        > div{
        margin-top: 0;
        }
        p{
        font-size: 16px;
        line-height: 2em;
        font-weight: 400;
        color: var(--font);
        text-align: justify;
        grid-area: para;
          @media only screen and (min-width: 1120px) {
            text-align: left;
          }

        }
        h1{
        font-weight: bold;
        font-size: 4rem;
        @media only screen and (min-width: 1120px) {
          font-size: 116px;
          text-transform: capitalize;
          letter-spacing: 3px;
          }
        }
        h2{
          font-weight: 400;
          font-size: 28px;
          color: var(--font);
        }
        h3{
          font-size: 48px;
          font-weight: 600;
          line-height: 1.3em;
          color: var(--font);
          text-align: center;
          grid-area: heading;
          @media only screen and (min-width: 1120px) {
            text-align: left;
          }
        }
        h4{
          font-size: 20px;
          font-weight: 500;
          line-height: 1.66em;
          color: var(--font);
          text-align: center;
          grid-area: heading;
          @media only screen and (min-width: 1120px) {
            text-align: left;
          }
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
        + * {
        margin-top: 0.5rem;
        }
        }
        strong{
        color: var(--font);
        }
        li{
        margin-top: 0.25rem;
        }
`}/>
        <div>
            <main>{children}</main>
            <Footer/>
        </div>
    </>
  )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout
