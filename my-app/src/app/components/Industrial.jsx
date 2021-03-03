import React from "react";
import styled from 'styled-components';

import Gallery from './Gallery';

// --------------- Images -------------------
  import image1 from  './images/industrial/p/image_l1_c1.jpg';
  import image2 from  './images/industrial/p/image_l1_c2.jpg';
  import image3 from  './images/industrial/p/image_l1_c3.jpg';
  import image4 from  './images/industrial/p/image_l2_c1.jpg';
  import image5 from  './images/industrial/p/image_l2_c2.jpg';
  import image6 from  './images/industrial/p/image_l2_c3.jpg';
  import image7 from  './images/industrial/p/image_l3_c1.jpg';
  import image8 from  './images/industrial/p/image_l3_c2.jpg';
  
  import image1g from  './images/industrial/g/image_l1_c1.jpg';
  import image2g from  './images/industrial/g/image_l1_c2.jpg';
  import image3g from  './images/industrial/g/image_l1_c3.jpg';
  import image4g from  './images/industrial/g/image_l2_c1.jpg';
  import image5g from  './images/industrial/g/image_l2_c2.jpg';
  import image6g from  './images/industrial/g/image_l2_c3.jpg';
  import image7g from  './images/industrial/g/image_l3_c1.jpg';
  import image8g from  './images/industrial/g/image_l3_c2.jpg';
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
const imagesIndustrial = [ 
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
  {
    name:image4,
    g: image4g,
    number:4,
  },
  {
    name:image5,
    g: image5g,
    number:5,
  },
  {
    name:image6,
    g: image6g,
    number:6,
  },
  {
    name:image7,
    g: image7g,
    number:7,
  },
  {
    name:image8,
    g: image8g,
    number:8,
  }
];

class Industrial extends React.Component{

  render() {
    return(
      <StyledDiv>
        <HorizontalHolder>
          <BlankSide/>
          <Gallery images={imagesIndustrial}/>
        </HorizontalHolder>
        <Blank/>
      </StyledDiv>
    );
  }
}

export default Industrial;