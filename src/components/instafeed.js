import React from "react";
import {graphql, Link, useStaticQuery} from "gatsby";
import {css} from "@emotion/core"
import useInstagram from "../hooks/useinstagram";
import Image from "gatsby-image"

const InstaFeed = () => {
    const instaPhotos = useInstagram();
    return <section
        css={css`
          border-top: 1px solid #000000;
          border-bottom: 1px solid #000000;
          margin-bottom: 2rem;
          grid-area: insta;
          padding: 1rem .5rem 2rem;
          @media only screen and (min-width: 1120px) {
          padding-left: 0;
          padding-right: 0;
          }
        `}
    >
        <h3
            css={css`
                  text-align: center;
                `}
        >
            The Latest From @DrawItPaint
        </h3>
        <div
            css={css`
                  display: flex;
                  justify-content: space-between;
                  flex-flow: wrap;
                  padding-top: 1rem;
                `}
        >
            {instaPhotos.map(photo => (
                <a
                    key={photo.id}
                    href={`https://www.instagram.com/drawitpaint/`}
                    css={css`
                      margin: 0.5rem;
                      width: 300px;
                      transition: 200ms box-shadow linear;
                      text-decoration: none;
                      border: 2px solid #ffffff;
                      background-color: #dd4c1b;
                      padding: 0.5rem;
                      border-radius: .25rem;
                      box-shadow: #dd4c1b 0 0 0 10px;
                      margin-top: 20px;
                      margin-bottom: 20px;
                      display: grid;
                      grid-template-areas:
                      "pic pic pic"
                      "para para para"
                      ". buttonLink ."
                      ;
                    `}
                >
                    <Image
                        fluid={photo.fluid}
                        alt={photo.caption}
                        css={css`
                          width: 100%;
                          border-radius: .25rem;
                          grid-area: pic;
                          
                          *{
                            margin-top: 0;
                          }
                        `}
                    />
                    <p
                        css={css`
                              text-align: justify;
                              text-align-last: center;
                              color: #ffffff;
                              font-weight: 600;
                            `}
                    >
                        {photo.caption.slice(0, 145)} . . . (Continued on IG)
                    </p>
                    <a
                        href="https://www.instagram.com/drawitpaint/"
                        css={css`
                            text-decoration: none;
                            background-color: #dd4c1b;
                            color: #ffffff;
                            border: solid 2px #ffffff;
                            border-radius: .75em;
                            padding: .8em 1.25em;
                            cursor: pointer;
                            font-weight: 700;
                            font-size: 15px;
                            letter-spacing: 2px;
                            grid-area: buttonLink;
                            margin-top: .5rem;
                            max-height: 49px;
                            align-self: end;
                            &:hover, &:focus{
                              background-color: #ffffff;
                              color: #000000;
                        `}
                    >
                        Watch
                    </a>
                </a>
            ))}
        </div>
    </section>
};

export default InstaFeed