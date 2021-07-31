import React from "react";
import styled from 'styled-components';

// ------------------ SVG -------------------
  import bullet_svg from './svg/bullet.svg';
// ----------- end of SVG -------------------
//
// ------------ Variables -------------------
  import {screen_size_sm as mobile_screen} from './variables/sizes.js';
  import {screen_size_m as m} from './variables/sizes.js';
  import {color_gray_shadow} from './variables/colors.js';
  import {color_white} from './variables/colors.js';
// ----- end of Variables -------------------
//
// --------------- Images -------------------
  import image from  './images/about/me.jpg';
// -------- end of Images -------------------
//
// --------------- Styles -------------------
  const StyledDiv = styled.div`
    display: flex;
    @media screen and (min-width: ${mobile_screen}){
      height: min-content;
    }
    @media screen and (max-width: ${mobile_screen}){
      flex-direction: column-reverse;
      width: 100vw;
    }
  `;

  const ImageWrapper = styled.div`
    display: flex;
    padding: 20px;
    & > img {
      box-shadow: 8px 7px ${color_gray_shadow};
    }
    @media screen and (min-width: ${mobile_screen}){
      & > img {
        max-width: 100%;
      }
      width: auto;
      align-self: start;
      justify-self: start;
      align-content: center;
      justify-content: center;
    }
    @media screen and (max-width: ${mobile_screen}){
      max-width: 90vw;
      height: auto;
      align-self: center;
      justify-self: center;
      align-content: center;
      justify-content: center;
      & > img {
        width: 100%;
      }
    }
  `;

  const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${color_white};
    box-shadow: 8px 7px ${color_gray_shadow};
    border: 1px solid ${color_gray_shadow};
    text-align: justify;
    & > p {
      font-size: 1.15em;
      margin: 10px 10px 0px 10px;
    }
    @media screen and (min-width: ${m}){
      & > p {
        font-size: 1.15em;
      }
    }
    @media screen and (max-width: ${m}){
      & > p {
        font-size: 0.9em;
      }
    }
    @media screen and (min-width: ${mobile_screen}){
      height: 100%;
      max-width: 350px;
    }
    @media screen and (max-width: ${mobile_screen}){
      & > p {
        font-size: 1.15em;
      }
      max-width: 100%;
    }
    & > p {  
      .bullet { 
        & > img {
          height: 10px;
          width: 10px;
          padding-left: 5px;
    }}}
  `

  const TextWrapperWrapper = styled.div`
    align-self: center;
    @media screen and (max-width: ${mobile_screen}){
      padding: 20px 20px 0px 20px;
      max-width: 90vw;
      height: min-content;
    }
    @media screen and (min-width: ${mobile_screen}){
      padding: 20px 20px 20px 0px;
      align-self: start;
    }
  `;
// -------- end of Styles -------------------

function About() {
  return(
    <StyledDiv>
      <ImageWrapper>
        <img src={image} alt='photographer Maisa Kashima' />
      </ImageWrapper>
      <TextWrapperWrapper>
        <TextWrapper>
          <p>Oie, me chamo <strong>Maisa Kashima</strong>, sou fotógrafa! :)</p>
          
          <p>Com uma bagagem multicultural eu mergulho de cabeça em projetos que envolvem fotografia e personalidade.</p>
          
          <p>Atendendo à marcas com ensaios em estúdio ou no local. Atualmente em Curitiba, podendo trabalhar em multi-localidades.</p>

          <p>O meu foco é fotografia de alimentos e produtos, me conte um pouco sobre a sua empresa e eu ficarei animadíssima em poder ajudar a elevar a imagem da sua marca!</p>

          <p>Além de fotografia, também trabalho com design gráfico desde 2010 e sou formada em Engenharia Elétrica na UFRJ. Estou constantemente à procura de expandir meus conhecimentos e de portas abertas para novas experiências.<span className='bullet'>
            <img src={bullet_svg} alt='list bullet icon'/> </span> </p>
          <p />
        </TextWrapper>
      </TextWrapperWrapper>
    </StyledDiv>
  );
}

export default About;