import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby";
import SEO from "../components/seo";
import {css} from "@emotion/core";
import Header from "../components/header";

export default ({data}) => {
    return (
        <Layout>
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
            {data.allWordpressPost.edges.map(({node}) =>
                <section
                    key={node.id}
                >
                    <SEO title={node.title} description={node.content}/>


                    <section
                        css={css`
                              display: flex;
                              flex-flow: column;
                              padding-bottom: 4rem;
                              img, figure{
                                order: 0;
                                position: absolute;
                                width: 100%;
                                z-index: -1;
                                height: calc(100vh - 80px);
                              }
                              h2{
                              padding-top: 15vh;
                              color: #ffffff;
                              font-size: 69px;
                              font-weight: bold;
                              }
                              p{
                              padding-top: .75rem;
                              padding-right: .5rem;
                              &:first-of-type{
                                padding-top: 50vh;
                                padding-left: .5rem;
                              }
                              }
                              @media only screen and (min-width: 1120px) {
                                h2{
                                  max-width: 1120px;
                                  margin: auto;
                                  padding-top: 30vh;
                                }
                                p{
                                  max-width: 1120px;
                                  margin: auto;
                                  &:first-of-type{
                                    padding-top: 55vh;
                                  }
                                }
                              }
                            `}
                        dangerouslySetInnerHTML={{__html: node.content}}
                    />

                </section>
            )}
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        allWordpressPost(filter: {slug: {eq: $slug}})
        {
            edges {
                node {
                    title
                    excerpt
                    content
                    slug
                }
            }
        }
    }
`;