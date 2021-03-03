import React from 'react';
import styled from 'styled-components';

// ------------------ SVG -------------------
  import x_svg from './svg/button_x.svg';
  import left_arrow_svg from './svg/arrow_left.svg';
  import right_arrow_svg from './svg/arrow_right.svg';
// ----------- end of SVG -------------------
//
// ------------ Variables -------------------
  import {color_white, color_gray_shadow} from './variables/colors.js';
  import {nav_height, nav_width, screen_size_xs} from './variables/sizes.js';
  import {screen_size_s as s, screen_size_m as m} from './variables/sizes.js';
  import {screen_size_sm as mobile_screen} from './variables/sizes.js'
// ----- end of Variables -------------------
//
// --------------- Styles -------------------
  const Image = styled.img`
    box-sizing: border-box;
    box-shadow: 8px 7px ${color_gray_shadow};
    background-color: ${color_white};
    width:100%;
    user-drag: none; 
    user-select: none;
    -webkit-touch-callout:none;
  `;

  const BigImage = styled.img`
    object-fit: contain;
    @media screen and (max-width: ${mobile_screen}) {
      max-height: ${props => props.maxHeight};
      max-width: calc(80vw);
    }
    @media screen and (min-width: ${mobile_screen}) {
      max-height: calc(90vh);
      max-width: 100%;      
    }
    align-self: center;
    user-drag: none; 
    user-select: none;
    -webkit-touch-callout:none;
  `;

  BigImage.defaultProps = {
    maxHeight: `calc( 70 * ((100vh - ${nav_height}) / 100))`,
  }

  const StyledX = styled.img`
    position: absolute;
    bottom: 5px;
    right: -35px;
    width: 30px;
    height: 30px;
    z-index: 15;
    @media screen and (max-width: ${screen_size_xs}){
      right: -30px;
      width: 25px;
      height: 25px;
    }
  `;

  const Left = styled.div`
    grid-area: a1;

    display: block;
    width: calc((100vw - ${nav_width}) / 10);
    @media screen and (max-width: ${mobile_screen}) {
      width: 10vw
    }

    .arrow {
      right: 20px;

      position: absolute;
      top: 50%;
      width: 30px;
      z-index: 15;
      
      @media screen and (max-width: ${s}) {
        right: 5px;
        width: 15px;
      }
      @media screen and (max-width: ${m}) {
        right: 10px;
        width: 20px;
      }
    }
  `;

  const Right = styled.div`
    grid-area: a3;

    display: block;
    width: calc((100vw - ${nav_width}) / 10);
    @media screen and (max-width: ${mobile_screen}) {
      width: 10vw
    }

    .arrow {
      left: 20px;

      position: absolute;
      top: 50%;
      width: 30px;
      z-index: 15;
      
      @media screen and (max-width: ${s}) {
        left: 5px;
        width: 15px;
      }
      @media screen and (max-width: ${m}) {
        left: 10px;
        width: 20px;
      }
    }
  `;

  const WallCover = styled.div`
    display: grid;
    position: fixed;
    @media screen and (min-width: ${mobile_screen}){
      width: calc(100vw - ${nav_width});
      height: 100vh;
      left:${nav_width};
      top:0px;
    }

    background-color: rgba(0,0,0,0.6);
    z-index:2;
    justify-content: center;
    grid-template-areas:
      'a1 a2 a3';

    @media screen and (max-width: ${mobile_screen}) {
      width: 100vw;
      height: ${props => props.height};
      left: 0px;
      top: ${props => props.top};
    }
  `;

  WallCover.defaultProps = {
    top: nav_height,
    height: `calc(100vh - ${nav_height})`,
  }

  const FlexVertical = styled.div`
    grid-area: a2;
    display: flex;
    flex-direction: column;
    max-width: calc(( 100vw - ${nav_width} - 10% ));
    @media screen and (max-width: ${mobile_screen}) {
      max-width: 90vw;
    }
  `;

  const Top = styled.div`
    @media screen and (max-width: ${mobile_screen}) {
      min-height: ${props => props.minHeight};
    }
  `;

  Top.defaultProps = {
    minHeight: `calc( 15 * ((100vh - ${nav_height}) / 100))`,
  }

  const BlankBottom = styled.div`
    @media screen and (max-width: ${mobile_screen}) {
      min-height: ${props => props.minHeight};
    }
  `;  

  BlankBottom.defaultProps = {
    minHeight: `calc( 15 * ((100vh - ${nav_height}) / 100))`,
  }
// -------- end of Styles -------------------

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      number: this.props.image.number,
    };
  }

  handleOpenClick = () => { this.setState({isOpen: true}); }

  handleCloseClick = () => { this.setState({isOpen: false}); }

  handlePrevious = () => {
    this.props.getPrevious(this.state.number);
    this.setState({isOpen: false});
  }

  handleNext = () => {
    this.props.getNext(this.state.number);
    this.setState({isOpen: false});
  }
  
  render(){
    return(
      <div>
        <div>
          <Image onClick={this.handleOpenClick} className={this.props.cn} src={this.props.image.name} alt={`${this.props.image.number}`}></Image>
        </div>
        {this.state.isOpen && (
          <WallCover  top={this.props.navIsVisible ? nav_height : '0px'}
                      height={this.props.navIsVisible ? `calc(100vh - ${nav_height})` : '100vh'}>
            <Left>
              {this.props.notFirst && (
                <img onClick={this.handlePrevious} className='arrow' src={left_arrow_svg}  alt='arrow to previous'/>
              )}
            </Left>
            <FlexVertical>
              <Top minHeight={this.props.navIsVisible ? `calc( 15 * ((100vh - ${nav_height}) / 100))` : '10vh'}>
                <StyledX onClick={this.handleCloseClick} src={x_svg} alt='click to close big image'/>
              </Top>
              <BigImage src={this.props.image.g}
                        alt={`${this.props.image.number}`}
                        maxHeight={this.props.navIsVisible ? `calc( 70 * ((100vh - ${nav_height}) / 100))` : '80vh'} 
                        />
              <BlankBottom minHeight={this.props.navIsVisible ? `calc( 15 * ((100vh - ${nav_height}) / 100))` : '10vh'}/>
            </FlexVertical>
            <Right>
              {this.props.notLast && (
                <img onClick={this.handleNext} className='arrow' src={right_arrow_svg} alt='arrow to next'/>
              )}
            </Right>
          </WallCover>
        )}
      </div>
)}}

export default Modal;