import React from "react";
import styled from 'styled-components';

import Gallery from './Gallery';

// --------------- Images -------------------
  import image1 from  './images/food/p/image_l1_c1.jpg';
  import image2 from  './images/food/p/image_l1_c2.jpg';
  import image3 from  './images/food/p/image_l1_c3.jpg';
  import image4 from  './images/food/p/image_l2_c1.jpg';
  import image5 from  './images/food/p/image_l2_c2.jpg';
  import image6 from  './images/food/p/image_l2_c3.jpg';
  import image7 from  './images/food/p/image_l3_c1.jpg';
  import image8 from  './images/food/p/image_l3_c2.jpg';
  import image9 from  './images/food/p/image_l3_c3.jpg';
  import image10 from './images/food/p/image_l4_c1.jpg';
  import image11 from './images/food/p/image_l4_c2.jpg';
  import image12 from './images/food/p/image_l4_c3.jpg';
  import image13 from './images/food/p/image_l5_c1.jpg';
  import image14 from './images/food/p/image_l5_c2.jpg';
  import image15 from './images/food/p/image_l5_c3.jpg';
  import image16 from './images/food/p/image_l6_c1.jpg';
  import image17 from './images/food/p/image_l6_c2.jpg';
  import image18 from './images/food/p/image_l6_c3.jpg';
  import image19 from './images/food/p/image_l7_c1.jpg';
  import image20 from './images/food/p/image_l7_c2.jpg';
  import image21 from './images/food/p/image_l7_c3.jpg';
  import image22 from './images/food/p/image_l8_c1.jpg';
  import image23 from './images/food/p/image_l8_c2.jpg';
  import image24 from './images/food/p/image_l8_c3.jpg';
  import image25 from './images/food/p/image_l9_c1.jpg';
  import image26 from './images/food/p/image_l9_c2.jpg';
  import image27 from './images/food/p/image_l9_c3.jpg';
  import image28 from './images/food/p/image_l10_c1.jpg';
  import image29 from './images/food/p/image_l10_c2.jpg';
  import image30 from './images/food/p/image_l10_c3.jpg';
  import image31 from './images/food/p/image_l11_c1.jpg';
  import image32 from './images/food/p/image_l11_c2.jpg';
  import image33 from './images/food/p/image_l11_c3.jpg';
  import image34 from './images/food/p/image_l12_c1.jpg';
  import image35 from './images/food/p/image_l12_c2.jpg';
  import image36 from './images/food/p/image_l12_c3.jpg';
  import image37 from './images/food/p/image_l13_c1.jpg';
  import image38 from './images/food/p/image_l13_c2.jpg';
  

  import image41 from './images/food/p/image_l14_c2.jpg';
  
  import image1g from  './images/food/g/image_l1_c1.jpg';
  import image2g from  './images/food/g/image_l1_c2.jpg';
  import image3g from  './images/food/g/image_l1_c3.jpg';
  import image4g from  './images/food/g/image_l2_c1.jpg';
  import image5g from  './images/food/g/image_l2_c2.jpg';
  import image6g from  './images/food/g/image_l2_c3.jpg';
  import image7g from  './images/food/g/image_l3_c1.jpg';
  import image8g from  './images/food/g/image_l3_c2.jpg';
  import image9g from  './images/food/g/image_l3_c3.jpg';
  import image10g from './images/food/g/image_l4_c1.jpg';
  import image11g from './images/food/g/image_l4_c2.jpg';
  import image12g from './images/food/g/image_l4_c3.jpg';
  import image13g from './images/food/g/image_l5_c1.jpg';
  import image14g from './images/food/g/image_l5_c2.jpg';
  import image15g from './images/food/g/image_l5_c3.jpg';
  import image16g from './images/food/g/image_l6_c1.jpg';
  import image17g from './images/food/g/image_l6_c2.jpg';
  import image18g from './images/food/g/image_l6_c3.jpg';
  import image19g from './images/food/g/image_l7_c1.jpg';
  import image20g from './images/food/g/image_l7_c2.jpg';
  import image21g from './images/food/g/image_l7_c3.jpg';
  import image22g from './images/food/g/image_l8_c1.jpg';
  import image23g from './images/food/g/image_l8_c2.jpg';
  import image24g from './images/food/g/image_l8_c3.jpg';
  import image25g from './images/food/g/image_l9_c1.jpg';
  import image26g from './images/food/g/image_l9_c2.jpg';
  import image27g from './images/food/g/image_l9_c3.jpg';
  import image28g from './images/food/g/image_l10_c1.jpg';
  import image29g from './images/food/g/image_l10_c2.jpg';
  import image30g from './images/food/g/image_l10_c3.jpg';
  import image31g from './images/food/g/image_l11_c1.jpg';
  import image32g from './images/food/g/image_l11_c2.jpg';
  import image33g from './images/food/g/image_l11_c3.jpg';
  import image34g from './images/food/g/image_l12_c1.jpg';
  import image35g from './images/food/g/image_l12_c2.jpg';
  import image36g from './images/food/g/image_l12_c3.jpg';
  import image37g from './images/food/g/image_l13_c1.jpg';
  import image38g from './images/food/g/image_l13_c2.jpg';


  import image41g from './images/food/g/image_l14_c2.jpg';
// -------- end of Images -------------------
//
// --------------- Styles -------------------
  const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const HorizontalHolder = styled.div`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
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
const imagesFood = [ 
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
  },
  {
    name:image9,
    g: image9g,
    number:9,
  },
  {
    name:image10,
    g: image10g,
    number:10,
  },
  {
    name:image11,
    g: image11g,
    number:11,
  },
  {
    name:image12,
    g: image12g,
    number:12,
  },
  {
    name:image13,
    g: image13g,
    number:13,
  },
  {
    name:image14,
    g: image14g,
    number:14,
  },
  {
    name:image15,
    g: image15g,
    number:15,
  },
  {
    name:image16,
    g: image16g,
    number:16,
  },
  {
    name:image17,
    g: image17g,
    number:17,
  },
  {
    name:image18,
    g: image18g,
    number:18,
  },
  {
    name:image19,
    g: image19g,
    number:19,
  },
  {
    name:image20,
    g: image20g,
    number:20,
  },
  {
    name:image21,
    g: image21g,
    number:21,
  },
  {
    name:image22,
    g: image22g,
    number:22,
  },
  {
    name:image23,
    g: image23g,
    number:23,
  },
  {
    name:image24,
    g: image24g,
    number:24,
  },
  {
    name:image25,
    g: image25g,
    number:25,
  },
  {
    name:image26,
    g: image26g,
    number:26,
  },
  {
    name:image27,
    g: image27g,
    number:27,
  },
  {
    name:image28,
    g: image28g,
    number:28,
  },
  {
    name:image29,
    g: image29g,
    number:29,
  },
  {
    name:image30,
    g: image30g,
    number:30,
  },
  {
    name:image31,
    g: image31g,
    number:31,
  },
  {
    name:image32,
    g: image32g,
    number:32,
  },
  {
    name:image33,
    g: image33g,
    number:33,
  },
  {
    name:image34,
    g: image34g,
    number:34,
  },
  {
    name:image35,
    g: image35g,
    number:35,
  },
  {
    name:image36,
    g: image36g,
    number:36,
  },
  {
    name:image37,
    g: image37g,
    number:37,
  },
  {
    name:image38,
    g: image38g,
    number:38,
  },
  {
    name:image41,
    g: image41g,
    number:41,
  }
];

class Food extends React.Component {

  render() {
    return(
      <StyledDiv>
        <HorizontalHolder>
          <BlankSide/>
          <Gallery images={imagesFood}/>
        </HorizontalHolder>
        <Blank/>
      </StyledDiv>
    );
  }
}

export default Food;