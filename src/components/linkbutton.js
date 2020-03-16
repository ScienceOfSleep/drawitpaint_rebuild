import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  color: ${props => props.fontColor || '#ffffff'};
  margin-top: ${props => props.marginTop || 'inherit'};
  text-decoration: none;
  background-color: #dd4c1b;
  border-radius: .75em;
  padding: .8em 1.25em;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 2px;
  grid-area: buttonLink;
  &:hover, &:focus{
    background-color: #417fb9;
  }
`;

const LinkButton = props => (
    <StyledLink to={props.to}>
        {props.content}
    </StyledLink>
);

export default LinkButton