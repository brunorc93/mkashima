import React from "react";
import styled from 'styled-components';

import Gallery from './Gallery';

// --------------- Images -------------------
  import image1 from  './images/portrait/p/image_l1_c1.jpg';
  import image2 from  './images/portrait/p/image_l1_c2.jpg';
  import image3 from  './images/portrait/p/image_l1_c3.jpg';

  import image1g from  './images/portrait/g/image_l1_c1.jpg';
  import image2g from  './images/portrait/g/image_l1_c2.jpg';
  import image3g from  './images/portrait/g/image_l1_c3.jpg';
// -------- end of Images -------------------
//
// --------------- Styles -------------------
  const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: min-content;
`;

const HorizontalHolder = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  height: min-content;
`;

const BlankSide = styled.div`
  width: calc(1vw + 5px);
  min-width: 10px;
`;

const Blank = styled.div`
  height: calc(1vw + 5px);
  min-height: 10px;
`
// -------- end of Styles -------------------
const imagesPortrait = [ 
    {
      name: image1,
      g: image1g,
      number:1,
    },
    {
      name: image2,
      g: image2g,
      number:2,
    },
    {
      name:image3,
      g: image3g,
      number:3,
    },
  ];

class Industrial extends React.Component{

    render() {
      return(
        <StyledDiv>
          <HorizontalHolder>
            <BlankSide/>
            <Gallery images={imagesPortrait}/>
          </HorizontalHolder>
          <Blank/>
        </StyledDiv>
      );
    }
  }
  
  export default Industrial;