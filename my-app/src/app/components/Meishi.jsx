import React from "react";

import styled from 'styled-components';

// ------------------ SVG -------------------
  import qr_svg from './svg/qrcode_logo_2.svg';
  import link_svg from './svg/icon_stamp_web_link.svg';
  import insta_svg from './svg/icon_stamp_instagram.svg';
  import phone_svg from './svg/icon_stamp_telephone.svg';
  import mail_svg from './svg/icon_stamp_email.svg';
// ----------- end of SVG -------------------
//
// ------------ Variables -------------------
  import {color_blue} from './variables/colors.js'
  import {color_gray_letter} from './variables/colors.js'
  import {color_gray_shadow} from './variables/colors.js'
  import {color_white} from './variables/colors.js'
  
  const max_width = '550px';
// ----- end of Variables -------------------
//
// --------------- Styles -------------------
  const StyledDiv = styled.div`
    border: 1px solid ${color_white};
    box-sizing: border-box;
    background-color: ${color_white};
    margin: 0;
    display: grid;
    grid-template-areas:
    'up up up'
    'upL qrcode upR'
    'downL info downR'
    'down down down';
    grid-template-rows: 1fr min-content min-content 1fr;
    grid-template-columns: 1fr min-content 1fr;  
    @media screen and (max-width: ${max_width}) {
      grid-template-columns: 1fr 100% 1fr;  
    }
    @media screen and (min-width: ${max_width}) {
      min-width: 100vw;
      min-height: 100vh;
    }
  `;

  const StyledUpBG = styled.div`
    grid-area: up;
    background-color: ${color_blue};
    box-shadow: 0px 5px ${color_blue};
    @media screen and (max-width: ${max_width}) {
      background-color: ${color_blue};
      box-shadow: 0px 0px ${color_blue};
    }
  `;

  const StyledUpLBG = styled.div`
    grid-area: upL;
    display:flex;
    background-color: ${color_blue};
    @media screen and (max-width: ${max_width}) {
      background-color: ${color_blue};
    }
  `;

  const StyledUpRBG = styled.div`
    grid-area: upR;
    display:flex;
    background-color: ${color_blue};
    @media screen and (max-width: ${max_width}) {
      background-color: ${color_blue};
    }
  `;

  const WhiteLine = styled.div`
    background-color: ${color_white};
    height: 18px;
    align-self: flex-end;
    width:100%;
    box-shadow: 0px 5px ${color_white};
    @media screen and (max-width: ${max_width}) {
      height: 0px;
      box-shadow: 0px 0px ${color_white};
    }
  `;

  const QRCode = styled.div`
    grid-area: qrcode;
    display: flex;
    height: min-content;
    justify-content: center;
    border-top: 1px solid ${color_gray_shadow};
    border-left: 1px solid ${color_gray_shadow};
    border-right: 1px solid ${color_gray_shadow};
    box-shadow: 8px 8px ${color_gray_shadow};
    background-color: ${color_blue};
    @media screen and (max-width: ${max_width}) {
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      box-shadow: 0px 0px;
    }
    & > img {
      align-self: end;
      width: 422px;
      @media screen and (max-width: ${max_width}) {
        width: 100%;
      }
    }
  `;

  const Info = styled.div`
    grid-area: info;
    display:flex;
    justify-content: center;
    align-content: flex-start;
    border-bottom: 1px solid ${color_gray_shadow};
    border-left: 1px solid ${color_gray_shadow};
    border-right: 1px solid ${color_gray_shadow};
    box-shadow: 8px 5px ${color_gray_shadow};
    background-color: ${color_white};
    height: min-content;
    @media screen and (max-width: ${max_width}) {
      border-bottom: 0px;
      border-left: 0px;
      border-right: 0px;
      box-shadow: 0px 0px;
    }
    & > ul {
      & > li {
        & > div {
          align-content: center;
          position: relative;
          padding: 2% 0px 0px 10%;
          & > a {
            & > img {
              width: 11%;
              margin: 0px 6% 0px 0px;
              display: inline-block;
              vertical-align: middle;
            }
          }
          & > p {
            display: inline-block;
            color: ${color_gray_letter};
            font-family: goudosi;
            font-size: 2em;
            @media screen and (max-width: ${max_width}) {
              font-size: 7.7vw;
            }
            font-style: italic;
            vertical-align: middle;
            & > a {
              color: ${color_gray_letter};
              text-decoration: none;
            }
          }
        }      
      }
    }
  `;
// -------- end of Styles -------------------

class Meishi extends React.Component{ 

  render () {
  return(
    <StyledDiv>
      <StyledUpBG/>
      <StyledUpLBG>
        <WhiteLine/>
      </StyledUpLBG>
      <StyledUpRBG>
        <WhiteLine/>
      </StyledUpRBG>
      <QRCode>
        <img src={qr_svg} alt='qr code with logo' className='qrcode'/>
      </QRCode>
      <Info>
        <ul>
          <li>
            <div>
              <a href="https://api.whatsapp.com/send?phone=5521967099963" target="_blank" rel="noopener noreferrer"><img src={phone_svg} alt='phone icon' className='phone'/></a>
              <p><a href="https://api.whatsapp.com/send?phone=5521967099963" target="_blank" rel="noopener noreferrer">(21) 96709 9963</a></p>
            </div>
          </li>
          <li>
            <div>
              <a href="mailto:studio@mkashima.com" target="_blank" rel="noopener noreferrer"><img src={mail_svg} alt='email icon' className='email' /></a>
              <p><a href="mailto:studio@mkashima.com" target="_blank" rel="noopener noreferrer">studio@mkashima.com</a></p>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.instagram.com/mkashima/" target="_blank" rel="noopener noreferrer"><img src={insta_svg} alt='instagram icon' className='insta'/></a>
              <p><a href="https://www.instagram.com/mkashima/" target="_blank" rel="noopener noreferrer">@mkashima</a></p>
            </div>
          </li>
          <li>
            <div>
              <a href="http://www.mkashima.com" target="_blank" rel="noopener noreferrer"><img src={link_svg} alt='weblink icon' className='weblink'/></a>
              <p><a href="http://www.mkashima.com" target="_blank" rel="noopener noreferrer">www.mkashima.com</a></p>
            </div>
          </li>
          <li><div></div></li>
          <li><div></div></li>
          <li><div></div></li>
        </ul>
      </Info>
    </StyledDiv>
  );
  }
}

export default Meishi;