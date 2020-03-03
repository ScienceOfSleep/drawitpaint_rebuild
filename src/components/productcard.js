import React from "react"
import Img from "gatsby-image"
import {css} from "@emotion/core"

const ProductCard = (props) => {
    return <section
        css={css`
              display: grid;
              grid-template-areas:
              "pic"
              "heading"
              "subheading"
              "price"
              ;
              grid-area: ${props.area};
              margin-left: .25rem;
              margin-right: .25rem;
              &:first-of-type{
                margin-left: 0;
                margin-right: .5rem;
              }
              &:last-of-type{
                margin-right: 0;
                margin-left: .5rem;
              }
            `}
    >
        <Img fluid={props.fluid}/>
        <h4
            css={css`
                  grid-area: heading;
                `}
        >
            {props.heading}
        </h4>
        <h5
            css={css`
                  grid-area: subheading;
                `}
        >
            {props.subheading}
        </h5>
        <h4
            css={css`
                  grid-area: price;
                `}
        >
            {props.price}
        </h4>
    </section>
};

export default ProductCard