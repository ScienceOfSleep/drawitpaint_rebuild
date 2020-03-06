import React, {useEffect, useRef, useState} from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import {css} from "@emotion/core"
import styled from "@emotion/styled"
import Img from "gatsby-image";

const Header = () => {
    // determined if page has scrolled and if the view is on mobile
    const [scrolled, setScrolled] = useState(false);

    // change state on scroll
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 400;
            if (isScrolled !== scrolled) {
                setScrolled(!scrolled);
            }
        };
        document.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            // clean up the event handler when the component unmounts
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const data = useStaticQuery(graphql`
    query {
      whitelogo: file(relativePath: { eq: "whitelogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blacklogo: file(relativePath: { eq: "blacklogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);


    const StyledLink = styled(Link)`
      color: #ffffff;
      text-decoration: none;
      &[data-active='true']{
        color: #000000;
      }
  
      &.currentPage{
      border-bottom: 2px solid #ffffff;
        &[data-active='true']{
        border-bottom: 2px solid #000000;
        }
      }
    `;


    const ListLink = props => (
        <li css={css`
              display: inline-block;
              margin-left: 1rem;
            `}>
            <h5>
                <StyledLink
                    data-active={scrolled}
                    to={props.to}
                    activeClassName={'currentPage'}
                >
                    {props.children}
                </StyledLink>
            </h5>
        </li>
    );

    return (
        <header
            data-active={scrolled}
            css={css`
              background-color: transparent;
              z-index: 1;
              width: 100%;
              grid-area: navbar;
              &[data-active='true']{
                background-color: #ffffff;
                position: fixed;
                top: 0;
                left: 0;
                box-shadow: 1px 1px 1px #222;
                animation: moveDown 0.5s ease-in-out;
              }
              @keyframes moveDown {
                from {
                  transform: translateY(-5rem);
                }
                to {
                  transform: translateY(0rem);
                }
              }
            `}
        >
            <section
                css={css`
                      display: flex;
                      justify-content: space-between;
                      max-width: 1120px;
                      margin: auto;
                    `}
            >
                <div>
                    <div
                        data-active={scrolled}
                        css={css`
                                width: 110px;
                                &[data-active='true']{
                                  opacity: 0;
                                }
                              `}
                    >
                        <Link to="/">
                            <Img fluid={data.whitelogo.childImageSharp.fluid}/>
                        </Link>
                    </div>
                    <div
                        data-active={scrolled}
                        css={css`
                                width: 110px;
                                opacity: 0;
                                position: absolute;
                                top: 0;
                                &[data-active='true']{
                                  opacity: 1;
                                }
                              `}
                    >
                        <Link to="/">
                            <Img fluid={data.blacklogo.childImageSharp.fluid}/>
                        </Link></div>
                </div>
                <nav css={css`
                  display: flex;
                  justify-content: flex-start;
                  align-self: end;
                  padding-left: 1rem;
                  padding-bottom: 1rem;
                    @media only screen and (min-width: 40.063em) {
                      font-size: 1.5rem;
                      align-self: center;
                      margin-top: 1rem;
                    }
                    @media only screen and (min-width: 64.063em) {
                      justify-content: flex-end;
                      font-size: inherit;
                    }
                `}
                >
                    <ul css={css`padding-left: 0;`}>
                        <ListLink to="/" data-active={scrolled}>Home</ListLink>
                        <ListLink to="/features">Features</ListLink>
                        <ListLink to="/pastcustomers">Past Customers</ListLink>
                        <ListLink to="/shop">Shop</ListLink>
                        <ListLink to="/blog">Blog</ListLink>
                        <ListLink to="/cart">Cart</ListLink>
                        <ListLink to="/contact">Contact</ListLink>
                    </ul>
                </nav>
            </section>
        </header>
    )
};


export default Header
