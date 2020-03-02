import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //max-width: none;
  //z-index: -1;
  //height: 100vh; // or whatever
  //display: grid;
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 4;
  z-index: -1;
  //
  //// Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  //& > img {
  //  object-fit: cover !important; // or whatever
  //  object-position: 0% 0% !important; // or whatever
  //  font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill
`

export default BgImage