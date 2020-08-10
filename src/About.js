import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const About = () => (
	<p>
    <center><h2>ABOUT PAGE</h2></center>
   <GridWrapper>
    	<p>This is the about page</p>
  	</GridWrapper>  
  </p>
)