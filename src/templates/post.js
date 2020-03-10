import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby";
import SEO from "../components/seo";
import Img from "gatsby-image";
import {css} from "@emotion/core";

export default ({data}) => {
    return (
        <Layout>
            {/*{data.allWordpressPost.edges.map(({ node }) =>*/}
            {/*    <section key={node.id}>*/}
            {/*        <SEO title={node.title} description={node.content} />*/}

            {/*        <h1>{node.title}</h1>*/}

            {/*        <section*/}
            {/*            css={css`*/}
            {/*                  grid-area: mainCopy;*/}
            {/*                  padding-right: 1rem;*/}
            {/*                  padding-left: 1rem;*/}
            {/*                  align-self: center;*/}
            {/*                  h4{*/}
            {/*                  padding-top: .5rem;*/}
            {/*                  }*/}
            {/*                  @media only screen and (min-width: 64.063em) {*/}
            {/*                  padding-right: 4rem;*/}
            {/*                  padding-left: 0;*/}
            {/*                  }*/}
            {/*                `}*/}
            {/*            dangerouslySetInnerHTML={{ __html: node.content }}*/}
            {/*        />*/}

            {/*    </section>*/}
            {/*)}*/}
        </Layout>
    )
}

// export const query = graphql`
//     query($slug: String!) {
//         allWordpressPost(filter: {slug: {eq: $slug}})
//         {
//             edges {
//                 node {
//                     title
//                     excerpt
//                     content
//                     slug
//                 }
//             }
//         }
//     }
// `