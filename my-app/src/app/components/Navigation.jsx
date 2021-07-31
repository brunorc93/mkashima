import React from "react";

// take a look:
// import React, { Suspense, lazy } from "react"
// maybe it is usefull for not loading all the different routes until they are clicked or maybe it is just not nescessary

import styled from 'styled-components';
import { 
  Link,
  withRouter,
} from "react-router-dom";

// ------------------ SVG -------------------
  import hamburguer_svg from './svg/button_menu.svg';
  import insta_svg from './svg/icon_stamp_instagram.svg';
  import bullet_svg from './svg/bullet.svg';
  import logo_svg from './svg/logo.svg';
// ----------- end of SVG -------------------
//
// ------------ Variables -------------------
  import {color_red} from './variables/colors.js'
  import {color_blue} from './variables/colors.js'
  import {color_gray_shadow} from './variables/colors.js'
  import {color_white} from './variables/colors.js'

  import {nav_width} from './variables/sizes.js'
  import {nav_height} from './variables/sizes.js'
  import {screen_size_sm as mobile_screen} from './variables/sizes.js'
  import {screen_size_sm_number as mobile_screen_n} from './variables/sizes.js'
  import {nav_move_treshold as nav_move} from './variables/sizes.js'
// ----- end of Variables -------------------
//
// --------------- Styles -------------------
  const StyledDiv = styled.div`
    position: fixed;
    grid-area: navigation;
    box-sizing: border-box;
    margin: 0;
    height: 100%;
    display: grid;
    grid-template-areas:
    'hero'
    'menu'
    'blank-bottom';
    grid-template-rows: min-content min-content 1fr;

    @media screen and (max-width: ${mobile_screen}) {
      grid-template-areas:
        'hero' 
        'menu';
      height: max-content;
      z-index:10;
      top: ${props => props.topPosition};
      visibility: ${props => props.visibility};
    }
  `;

  StyledDiv.defaultProps = {
    topPosition: '0px',
    visibility: 'visible',
  }

  const Logo = styled.div`
    grid-area: hero;
    display: grid;
    box-sizing: border-box;
    @media screen and (min-width: ${mobile_screen}) {
      border-right: 1px solid ${color_gray_shadow};
      box-shadow: 8px 7px ${color_gray_shadow};
      grid-template-areas:
      'blank-top'
      'logo'
      'name'
      'job-title';
      grid-template-rows: 1fr min-content min-content min-content;
    }
    background-color: ${color_blue};
    margin: 0px;
    @media screen and (min-width: ${mobile_screen}) {
      width: ${nav_width};
      max-width: ${nav_width};
    }
    .logo {
      grid-area: logo;
    }
    .name {
      grid-area: name;
    }
    .jobtitle{
      grid-area: job-title;
    }
    @media screen and (max-width: ${mobile_screen}) {
      width: 100vw;
      border-bottom: 1px solid ${color_gray_shadow};
      height: ${nav_height};
      grid-template-areas:
        'logo name blank-side'
        'logo job-title blank-side';
      grid-template-columns: max-content min-content 1fr;

      .name {
        justify-content: start;
        height: calc( 6 * ( ${nav_height} / 10 ));
      }
    }
  `;

  const BlueDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-self: center;
    @media screen and (min-width: ${mobile_screen}) {
      max-width: 48%;
      justify-content: center;
    }
    @media screen and (max-width: ${mobile_screen}) {
      justify-content: start;
    }
    & > img {
      max-width: 100%;
      @media screen and (min-width: ${mobile_screen}) {
      }
      @media screen and (max-width: ${mobile_screen}) {
        max-height: calc( 50 * ( ${nav_height} / 100 ) );
        align-self: center;
        padding-left: calc( 12.5 * ( ${nav_height} / 100 ) );
      }
    }
    & > h1 {
      color: ${color_red};
      font-size: 215%;
      @media screen and (max-width: ${mobile_screen}) {
        font-size: 255%;
        padding-left: 4%;
        transform: translateY(18px);
      }
    }
    & > h3 {
      @media screen and (min-width: ${mobile_screen}) {
        padding-bottom: 10px;
      }
      font-size: 155%;
      @media screen and (max-width: ${mobile_screen}) {
        font-size: 120%;
        align-self: start;
        padding-left: 5%;
        transform: translateY(-18px);
      }
    }
  `;

  const BlankTop = styled.div`
    grid-area: blank-top;
    box-sizing: border-box;
    margin: 0;
    @media screen and (max-width: ${mobile_screen}) {
      grid-area: blank-side;
      height: ${nav_height};
      width: 100%;
    }
    .hamburguer{
      @media screen and (min-width: ${mobile_screen}) {
        grid-area: hamburguer;
        visibility: collapse;
        width: 0px;
        height: 0px;
      }
      @media screen and (max-width: ${mobile_screen}) {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 40px;
        right: calc( 12.5 * ( ${nav_height} / 100 ) );
      }
    }
    @media screen and (min-width: ${mobile_screen}) {
      min-height: 25px;
      display: grid;
      grid-template-areas:
        'hamburguer'
        'nothing1'
        'nothing2';
      grid-template-rows:
        min-content min-content min-content;
      }
    }
  `;

  const Menu = styled.div`
    grid-area: menu;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-color: ${color_white};
    margin: 0;
    
    @media screen and (min-width: ${mobile_screen}) {
      width: ${nav_width};
      border-right: 1px solid ${color_gray_shadow};
      box-shadow: 8px 6px ${color_gray_shadow};
    }

    
    @media screen and (max-width: ${mobile_screen}) {
      width: 100vw;
      z-index: 10;
    }
    
    @media screen and (max-width: ${mobile_screen}) {
      border-bottom: 1px solid ${color_gray_shadow};
      & > div.empty {
        max-width: 100%;
        height: 5px;
      }
      & > ul {
        max-width: 80%;
        & > li {
          display: block;
          min-height: 40px;
          width: 100%;
          & > div.img {
            visibility: collapse;
            text-align: center;
            width: 100%;
            margin: 0px 0px 0px 0px;
            height: 0px;
            & > a {
              max-width: 100%;
              & > img {
                max-width: 17%;
              }
            }
          }
          & > a {
            font-size: 140%;
            max-width: 100%;
            & > div.regular {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              min-height: 40px;
              border: 1px solid ${color_gray_shadow};
              box-shadow: 4px 3px ${color_gray_shadow};
              margin: 10px 0px;
              & > img {
                height: 11px;
                padding-left: 0px;
                padding-right: 3px;
                width: 11px;
                transform: translateY(3px);
              }
            }
          }
        }
        .imgli {
          min-height: 10px;
        }
      }
    }

    @media screen and (min-width: ${mobile_screen}) {
      & > div.empty {
        max-width: 100%;
        height: 24px;
      }
      & > ul {
        max-width: 45%;
        & > li {
          max-width: 100%;
          & > div.img {
            text-align: center;
            width: 100%;
            margin: 52px 0px;
            & > a {
              max-width: 100%;
              & > img {
                max-width: 20%;
              }
            }
          }
          & > a {
            font-size: 120%;
            max-width: 100%;
            & > div.regular {
              display: block;
              text-align: left;
              width: 100%;
              border: 1px solid ${color_gray_shadow};
              box-shadow: 4px 3px ${color_gray_shadow};
              margin: 18px 0px;
              & > p {
                display: inline-block;
              }
              & > img {
                height: 10px;
                padding-left: 16px;
                padding-right: 6px;
              }
            }
          }
        }
      }
    }
  `;

  const BlankBottom = styled.div`
    border-right: 1px solid ${color_gray_shadow};
    box-shadow: 8px 5px ${color_gray_shadow};
    grid-area: blank-bottom;
    box-sizing: border-box;
    background-color: ${color_white};
    height: 100%;
    margin: 0;
    
    width: ${nav_width};
  `;
// -------- end of Styles -------------------

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuIsOpen: false,
      navIsVisible: true,
      prevScrollpos: window.pageYOffset,
    };
  }

  handleClick = () => {
    this.setState({menuIsOpen: !this.state.menuIsOpen});
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;

    let visible = this.state.navIsVisible;

    if (visible){
      visible = (prevScrollpos > currentScrollPos) || (currentScrollPos <= 120);
    } else {
      visible = (prevScrollpos > currentScrollPos+nav_move) || (currentScrollPos <= 120);
    }
    
    this.setState({
      navIsVisible: visible,
      prevScrollpos: currentScrollPos,
    });
  };

  resetOpenState = () => {
    this.setState({menuIsOpen: false});
  }

  componentDidMount() {
    window.addEventListener('resize', this.resetOpenState.bind(this));
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resetOpenState.bind(this));
    window.removeEventListener("scroll", this.handleScroll);
  }

  render(){
    return(
      <StyledDiv visibility={this.state.navIsVisible ? 'visible' : 'hidden'}
                 topPosition={this.state.navIsVisible ? '0px' : `-${8+nav_height}`}
      >
        <Logo>
          <BlankTop>
            <img onClick={this.handleClick} className='hamburguer' src={hamburguer_svg} alt='hamburguer menu button' />
          </BlankTop>
          <BlueDiv className='logo'>
            <img src={logo_svg} alt='logo' className='logo'/>
          </BlueDiv>
          <BlueDiv className='name'>
            <h1> mkashima </h1> 
          </BlueDiv>
          <BlueDiv className='jobtitle'>
            <h3> fotografia </h3>
          </BlueDiv>
        </Logo>
        {( this.state.menuIsOpen || (window.innerWidth>=mobile_screen_n) ) && (
          <Menu>
            <div className="empty"></div>
            <ul>
              <li>
                <Link to={`${this.props.match.url}food`} onClick={this.resetOpenState}>
                  <div className="regular">
                    <img src={bullet_svg} alt='list bullet icon'/>
                    <p>alimentos</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`${this.props.match.url}product`} onClick={this.resetOpenState}>
                  <div className="regular">
                    <img src={bullet_svg} alt='list bullet icon'/>
                    <p>produto</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`${this.props.match.url}portrait`} onClick={this.resetOpenState}>
                  <div className="regular">
                    <img src={bullet_svg} alt='list bullet icon'/>
                    <p>retrato</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`${this.props.match.url}about`} onClick={this.resetOpenState}>
                  <div className="regular">
                    <img src={bullet_svg} alt='list bullet icon'/>
                    <p>sobre</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={`${this.props.match.url}contact`} onClick={this.resetOpenState}>
                  <div className="regular">
                    <img src={bullet_svg} alt='list bullet icon'/>
                    <p>contato</p>
                  </div>
                </Link>
              </li>
              <li className="imgli">
                <div className="img">
                  <a href="https://www.instagram.com/mkashima/" target="_blank" rel="noopener noreferrer" onClick={this.resetOpenState}><img src={insta_svg} alt='instagram icon' className='insta'/></a>
                </div>
              </li>
            </ul>
          </Menu>
        )}
        <BlankBottom>
        </BlankBottom>
      </StyledDiv>
    );
  }
}

export default withRouter(Navigation);