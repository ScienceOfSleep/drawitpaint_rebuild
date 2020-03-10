import React from "react"
import Img from "gatsby-image"
import {css} from "@emotion/core"
import LinkButton from "./linkbutton";

const ShopCard = (props) => {
    return <section
        css={css`
              display: grid;
              grid-template-areas:
              "pic pic pic"
              "heading heading heading"
              "subheading subheading subheading"
              "price . buttonLink"
              ;
              grid-template-columns: 1fr 1fr auto;
              grid-area: ${props.area};
              padding-bottom: 1.5rem;
              //margin-left: .25rem;
              //margin-right: .25rem;
              //&:first-of-type{
              //  margin-left: 0;
              //  margin-right: .5rem;
              //}
              //&:last-of-type{
              //  margin-right: 0;
              //  margin-left: .5rem;
              //}
            `}
    >
        <Img fluid={props.fluid} css={css`grid-area: pic`}/>
        <h4
            css={css`
                  grid-area: heading;
                  text-align: left;
                  color: ${props => props.color || "#000000"};
                `}
        >
            {props.heading}
        </h4>
        <h5
            css={css`
                  grid-area: subheading;
                  margin-top: 0;
                  color: ${props => props.color || "#000000"};
                `}
        >
            {props.subheading}
        </h5>
        <h4
            css={css`
                  grid-area: price;
                  color: var(--brand-color);
                  text-align: left;
                `}
        >
            {props.price}
        </h4>
        <LinkButton to={props.to} content="Buy"/>
    </section>
};

export default ShopCard