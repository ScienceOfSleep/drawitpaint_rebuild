import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {css} from "@emotion/core";
import Img from "gatsby-image";
import {graphql} from "gatsby";
import BgImage from "../components/bgimage";
import LinkButton from "../components/linkbutton";
import ProductCard from "../components/productcard";

const Features = ({data}) => (
    <Layout>
        <SEO title="Features"/>

        {/*LANDING SHOT*/}
        <section
            css={css`
              display: grid;
              grid-template-areas: 
              "mainTitle mainTitle mainTitle"
              ". buttonLink ."
              ". . ."
              ;
              grid-template-columns: 1fr auto 1fr;
              grid-template-rows: 2fr 46px 1fr;
              height: 100vh;
              width: 100vw;
            `}
        >
            <BgImage fluid={data.landing.childImageSharp.fluid}/>

            <h1
                css={css`
                      margin: auto;
                      color: #ffffff;
                      padding-top: 5rem;
                      grid-area: mainTitle;
                      font-size: 72px;
                      text-align: center;
                    `}
            >
                Innovation In Our Lab. <br/> Performance In Your World
            </h1>

            <LinkButton
                to="shop"
                content="Buy Now"
                marginTop="0"
            />
        </section>

        {/*AHEAD OF THE CURVE*/}
        <section
            css={css`
                display: grid;
                grid-template-areas: 
                "heading pic"
                "para pic"
                ;
                padding-top: 2.5rem;
                max-width: 1120px;
                margin: auto;
            `}
        >
            <h3
                css={css`
                          grid-area: heading;
                        `}
            >
                Technology ahead of the curve
            </h3>
            <p
                css={css`
                          grid-area: para;
                        `}
            >
                Our manufacturing facilities and experience in specialty paint production has shaped the development of
                our forward-thinking features. With over 18 years of development for our 3 dry erase formulas, you can
                write easily knowing that your Draw it Paint surface will work just as hard as you do, if not
                harder. </p>
            <Img
                fluid={data.curve.childImageSharp.fluid}
                css={css`
                            grid-area: pic;
                            width: 500px;
                            margin-left: 4rem;
                          `}
            />
        </section>

        <section
            css={css`
                display: grid;
                grid-template-areas: 
                "pic ."
                "pic para"
                "pic ."
                ;
                grid-template-rows: 1fr auto 1fr;
                padding-top: 4rem;
                max-width: 1120px;
                margin: auto;
            `}
        >
            <p
                css={css`
                    grid-area: para;
                  `}
            >
                Uniquely designed to surpass all paints, traditional porcelain-steel, and glass dry erase options, we
                provide a competitive advantage to coordinate your senses and utilize yourself fully to find that simple
                solution to solve that complex problem.
            </p>
            <Img
                fluid={data.curve2.childImageSharp.fluid}
                css={css`
                            grid-area: pic;
                            width: 500px;
                            margin-right: 7rem;
                          `}
            />
        </section>

        {/*BLUE BAR*/}
        <section
            css={css`
                background-color: var(--alt-brand-color);
                margin-top: 3rem;
                margin-bottom: 3rem;
                `}
        >
            <section
                css={css`
                max-width: 1120px;
                margin: auto;
                display: grid;
                grid-template-areas:
                ". heading ."
                "para para para"
                ;
                grid-template-columns: 1fr auto 1fr;
                padding-top: 2rem;
            `}
            >
                <h3
                    css={css`
                        grid-area: heading;
                        color: #ffffff;
                        margin: auto;
                      `}
                >
                    Premium Dry Erase Paints
                </h3>
                <p
                    css={css`
                            grid-area: para;
                            color: #ffffff;
                            max-width: 500px;
                            margin: auto;
                            text-align: center;
                          `}
                >
                    A performance selection that continue to deliver an elevated experience of productivity and helps
                    organizations achieve their strategic goals
                </p>
            </section>

            {/*White Icons*/}
            <section
                css={css`
                max-width: 1120px;
                margin: auto;
                display: grid;
                grid-template-areas:
                ". icon1 . icon2 . icon3 ."
                ". heading1 . heading2 . heading3 ."
                ". para1 . para2 . para3 ."
                ;
                grid-template-columns: 1fr 210px 1fr 210px 1fr 210px 1fr;
                grid-template-rows: 180px auto 1fr;
                padding-top: 2rem;
                padding-bottom: 3rem;
            `}
            >
                {/*1*/}
                <Img
                    fluid={data.whiteicon1.childImageSharp.fluid}
                    css={css`
                            grid-area: icon1;
                            width: 209px;
                        `}
                />
                <h4
                    css={css`
                          color: #ffffff;
                          grid-area: heading1;
                          text-align: center;
                        `}
                >
                    Limitless
                </h4>
                <p
                    css={css`
                          color: #ffffff;
                          grid-area: para1;
                          font-weight: lighter;
                          line-height: 1.3;
                          text-align: justify;
                          text-align-last: center;
                        `}
                >
                    Innovation and teamwork thrive in high-performing workplaces because they know that effective
                    cooperation nurtures new ideas best.
                </p>
                {/*2*/}
                <Img
                    fluid={data.whiteicon2.childImageSharp.fluid}
                    css={css`
                            grid-area: icon2;
                            width: 209px;
                        `}
                />
                <h4
                    css={css`
                          color: #ffffff;
                          grid-area: heading2;
                          text-align: center;
                        `}
                >
                    Vetted Formulas
                </h4>
                <p
                    css={css`
                          color: #ffffff;
                          grid-area: para2;
                          font-weight: lighter;
                          line-height: 1.3em;
                          text-align: justify;
                          text-align-last: center;
                        `}
                >
                    When it comes to our dry erase paints, we control all factors of production. Keeping quality high
                    and creation even higher.
                </p>
                {/*3*/}
                <Img
                    fluid={data.whiteicon3.childImageSharp.fluid}
                    css={css`
                            grid-area: icon3;
                            width: 209px;
                        `}
                />
                <h4
                    css={css`
                          color: #ffffff;
                          grid-area: heading3;
                          text-align: center;
                        `}
                >
                    Unrivalled Longevity
                </h4>
                <p
                    css={css`
                          color: #ffffff;
                          grid-area: para3;
                          font-weight: lighter;
                          line-height: 1.3em;
                          text-align: justify;
                          text-align-last: center;
                        `}
                >
                    With 18+ years of development and testing, we can guarantee excellent performance and effortless
                    wipes for any Draw It Paint surface for the next 10 years.
                </p>
            </section>
        </section>
        <h3
            css={css`
                  text-align: center;
                `}
        >
            Tools For Success
        </h3>
        <p
            css={css`
                  text-align: center;
                `}
        >
            Equip yourself to do great things – so your business will, too. Our <br/>
            diverse paint portfolio has what you need to achieve your goals.
        </p>

        {/*ORANGEICONS*/}
        <section
            css={css`
                  max-width: 1120px;
                  margin: auto;
                  display: grid;
                  grid-template-areas:
                  "icon1 . icon2 . icon3 . icon4"
                  "icon5 . icon6 . icon7 . icon8"
                  ;
                  grid-template-columns: auto 1rem auto 1rem auto 1rem auto;
                `}
        >
            {/*1*/}
            <section
                css={css`
                      grid-area: icon1;
                      display: grid;
                      grid-template-areas:
                      "icon"
                      "heading"
                      "para"
                      ;
                      grid-template-rows: 140px auto 1fr;
                    `}
            >
                <Img fixed={data.orangeicon1.childImageSharp.fixed} css={css`grid-area: icon`}/>
                <h4
                    css={css`
                          grid-area: heading;
                        `}
                >
                    Emulsification Process
                </h4>
                <p
                    css={css`
                          grid-area: para;
                        `}
                >
                    Fusing of coats for the smoothest surface possible
                </p>

            </section>
            {/*2*/}
            <section
                css={css`
                      grid-area: icon2;
                      display: grid;
                      grid-template-areas:
                      "icon"
                      "heading"
                      "para"
                      ;
                      grid-template-rows: 140px auto 1fr;
                    `}
            >
                <Img fixed={data.orangeicon2.childImageSharp.fixed} css={css`grid-area: icon`}/>
                <h4
                    css={css`
                          grid-area: heading;
                        `}
                >
                    Self Levelling/ Self Smoothing
                </h4>
                <p
                    css={css`
                          grid-area: para;
                        `}
                >
                    Adjusts to the surface, correcting minor imperfections and textures for you
                </p>

            </section>
            {/*3*/}
            <section
                css={css`
                      grid-area: icon3;
                      display: grid;
                      grid-template-areas:
                      "icon"
                      "heading"
                      "para"
                      ;
                      grid-template-rows: 140px auto 1fr;
                    `}
            >
                <Img fixed={data.orangeicon3.childImageSharp.fixed} css={css`grid-area: icon`}/>
                <h4
                    css={css`
                          grid-area: heading;
                        `}
                >
                    Abrasion Resistance
                </h4>
                <p
                    css={css`
                          grid-area: para;
                        `}
                >
                    If it doesn’t break the wall, it won’t break our paint
                </p>

            </section>
            {/*4*/}
            <section
                css={css`
                      grid-area: icon4;
                      display: grid;
                      grid-template-areas:
                      "icon"
                      "heading"
                      "para"
                      ;
                      grid-template-rows: 140px auto 1fr;
                    `}
            >
                <Img fixed={data.orangeicon4.childImageSharp.fixed} css={css`grid-area: icon`}/>
                <h4
                    css={css`
                          grid-area: heading;
                        `}
                >
                    Chemical Resistance
                </h4>
                <p
                    css={css`
                          grid-area: para;
                        `}
                >
                    Wipe harsh chemicals off just as easily as you do with marker marks
                </p>

            </section>
            {/*5*/}
            <section
                css={css`
                      grid-area: icon5;
                      display: grid;
                      grid-template-areas:
                      "icon"
                      "heading"
                      "para"
                      ;
                      grid-template-rows: 140px auto 1fr;
                    `}
            >
                <Img fixed={data.orangeicon5.childImageSharp.fixed} css={css`grid-area: icon`}/>
                <h4
                    css={css`
                          grid-area: heading;
                        `}
                >
                    Simple Maintenance
                </h4>
                <p
                    css={css`
                          grid-area: para;
                        `}
                >
                    Wipe away with ease without chemicals or spray cleaners
                </p>

            </section>
            <section
                css={css`
                      grid-area: icon6;
                      display: grid;
                      grid-template-areas:
                      "icon"
                      "heading"
                      "para"
                      ;
                      grid-template-rows: 140px auto 1fr;
                    `}
            >
                <Img fixed={data.orangeicon6.childImageSharp.fixed} css={css`grid-area: icon`}/>
                <h4
                    css={css`
                          grid-area: heading;
                        `}
                >
                    Pinpoint Clarity
                </h4>
                <p
                    css={css`
                          grid-area: para;
                        `}
                >
                    UVForceTM & ColorHDTM pigments for vibrancy & contrast
                </p>

            </section>
            <section
                css={css`
                      grid-area: icon7;
                      display: grid;
                      grid-template-areas:
                      "icon"
                      "heading"
                      "para"
                      ;
                      grid-template-rows: 140px auto 1fr;
                    `}
            >
                <Img fixed={data.orangeicon7.childImageSharp.fixed} css={css`grid-area: icon`}/>
                <h4
                    css={css`
                          grid-area: heading;
                        `}
                >
                    Endurance Tested
                </h4>
                <p
                    css={css`
                          grid-area: para;
                        `}
                >
                    Made for durability with UltraStrengthTM & StrongAdhesionTM
                </p>

            </section>
            <section
                css={css`
                      grid-area: icon8;
                      display: grid;
                      grid-template-areas:
                      "icon"
                      "heading"
                      "para"
                      ;
                      grid-template-rows: 140px auto 1fr;
                    `}
            >
                <Img fixed={data.orangeicon8.childImageSharp.fixed} css={css`grid-area: icon`}/>
                <h4
                    css={css`
                          grid-area: heading;
                        `}
                >
                    True Connection
                </h4>
                <p
                    css={css`
                          grid-area: para;
                        `}
                >
                    Fusing of coats for the smoothest surface possible
                </p>

            </section>

        </section>

    </Layout>
);

export const query = graphql`
    query {
        curve: file(relativePath: { eq: "aheadofthecurve.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        curve2: file(relativePath: { eq: "aheadofthecurve2.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        landing: file(relativePath: { eq: "featureslanding.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        whiteicon1: file(relativePath: { eq: "featurewhite1.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        whiteicon2: file(relativePath: { eq: "featurewhite2.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        whiteicon3: file(relativePath: { eq: "featurewhite3.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        orangeicon1: file(relativePath: { eq: "orangeicon1.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        orangeicon2: file(relativePath: { eq: "orangeicon2.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        orangeicon3: file(relativePath: { eq: "orangeicon3.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        orangeicon4: file(relativePath: { eq: "orangeicon4.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        orangeicon5: file(relativePath: { eq: "orangeicon5.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        orangeicon6: file(relativePath: { eq: "orangeicon6.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        orangeicon7: file(relativePath: { eq: "orangeicon7.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        orangeicon8: file(relativePath: { eq: "orangeicon8.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;


export default Features