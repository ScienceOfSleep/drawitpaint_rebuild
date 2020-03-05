import React, {useEffect, useRef, useState} from "react"
import {Link} from "gatsby"
import {css} from "@emotion/core"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  color: var(--strong-font);
  font-weight: ${props => props.fontWeight || 'normal'};
  text-decoration: none;
  
  &.currentPage{
  border-bottom: 2px solid #000000;
  }
`;


const ListLink = props => (
    <li css={css`
      display: inline-block;
      margin-left: 1rem;
    `}>
        <h5>
            <StyledLink
                to={props.to}
                activeClassName={'currentPage'}
            >
                {props.children}
            </StyledLink>
        </h5>
    </li>
);


const Header = () => {
    // determined if page has scrolled and if the view is on mobile
    const [scrolled, setScrolled] = useState(false);

    // change state on scroll
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
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

    return (
        <header
            data-active={scrolled}
            css={css`
              background-color: transparent;
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
            <nav css={css`
                  display: flex;
                  justify-content: flex-start;
                  grid-area: navbar;
                  align-self: end;
                  padding-left: 1rem;
                  padding-bottom: 1rem;
                  max-width: 1120px;
                  margin: auto;
                    @media only screen and (min-width: 40.063em) {
                      font-size: 1.5rem;
                      align-self: center;
                      margin-top: 1rem;
                    }
                    @media only screen and (min-width: 64.063em) {
                      justify-content: flex-end;
                      padding-right: 4rem;
                      font-size: inherit;
                    }
                `}
            >
                <ul css={css`padding-left: 0`}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/features">Features</ListLink>
                    <ListLink to="/pastcustomers">Past Customers</ListLink>
                    <ListLink to="/shop">Shop</ListLink>
                    <ListLink to="/blog">Blog</ListLink>
                    <ListLink to="/cart">Cart</ListLink>
                    <ListLink to="/contact">Contact</ListLink>
                </ul>
            </nav>
        </header>
    )
};


export default Header
