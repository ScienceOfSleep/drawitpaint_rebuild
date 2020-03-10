import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {css} from "@emotion/core";
import Header from "../components/header";
import {Link} from "gatsby";

const Blog = ({data}) => (
    <Layout>
        <SEO title="Blog"/>
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
            max-width: 1120px;
            margin: auto;
            `}
        >
            <h1>Blog</h1>
            <h2>From Tips & Tricks to Inspiration and everything in
                between. Our blog articles help you make the most
                out of your dry erase surfaces.</h2>
            {/*    <section*/}
            {/*        css={css`*/}
            {/*              display: flex;*/}
            {/*              flex-flow: row wrap;*/}
            {/*              justify-content: center;*/}
            {/*            `}*/}
            {/*    >*/}
            {/*        {data.allWordpressPost.edges.map(({ node }) => (*/}
            {/*            <article*/}
            {/*                key={node.id}*/}
            {/*                css={css`*/}
            {/*                        border: 4px solid var(--alt-brand-color);*/}
            {/*                        border-radius: .75rem;*/}
            {/*                        max-width: 300px;*/}
            {/*                        padding: .5rem;*/}
            {/*                        margin: 1rem;*/}
            {/*                        box-shadow: var(--shadow-color) 3px 3px;*/}
            {/*                    `}*/}
            {/*            >*/}
            {/*                <Link*/}
            {/*                    to={node.slug}*/}
            {/*                    css={css`*/}
            {/*                            text-decoration: none;*/}
            {/*                            color: #000000;*/}
            {/*                        `}*/}
            {/*                >*/}
            {/*                    <section>*/}
            {/*                        <h4*/}
            {/*                            css={css`*/}
            {/*                                    font-size: 1.1em;*/}
            {/*                                    color: var(--brand-color);*/}
            {/*                                    font-weight: bolder;*/}
            {/*                                `}>*/}
            {/*                            {node.title}*/}
            {/*                        </h4>*/}
            {/*                        <p css={css`grid-area: cardExcerpt`} dangerouslySetInnerHTML={{ __html: node.excerpt }} />*/}
            {/*                    </section>*/}
            {/*                </Link>*/}
            {/*            </article>*/}
            {/*        ))}*/}
            {/*    </section>*/}
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

// export const query = graphql`
//     query {
//         allWordpressPost(
//             sort: { fields: [date], order: DESC}
//             )
//         {
//             edges {
//                 node {
//                     title
//                     excerpt
//                     slug
//                     id
//                     categories {
//                         name
//                     }
//                 }
//             }
//         }
//     }
// `

export default Blog