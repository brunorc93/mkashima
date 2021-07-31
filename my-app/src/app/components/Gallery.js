import React from "react";
import styled from 'styled-components';

import Modal from './Modal';

// ------------------ SVG -------------------
import up_arrow_svg from './svg/arrow_up.svg';
// ----------- end of SVG -------------------
//
// ------------ Variables -------------------
  import {screen_size_sm as mobile_screen} from './variables/sizes.js'
  import {screen_size_sm_number as mobile_screen_n} from './variables/sizes.js'
  import {nav_move_treshold as nav_move} from './variables/sizes.js'
// ----- end of Variables -------------------
//
// --------------- Styles -------------------
  const StyledGallery = styled.div`
    height: min-content;
    align-items: start;
    box-sizing: border-box;
    @media screen and (min-width: ${mobile_screen}) {
      width:100%;
      display: grid;
      grid-template-areas: 'c1 c2 c3';
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: ${mobile_screen}) {
      margin-top: 6px;
    }

    #c1 {
      grid-area:c1;
    }

    #c2 {
      grid-area:c2;
    }

    #c3{
      grid-area:c3;
    }
  `;

  const ImageHolder = styled.div`
    float: top;
    box-sizing: border-box;
    margin-top: calc(1vw + 5px);
    width: 100%;
    padding-right: calc(1vw + 5px);
    height: min-content;
  `;

  const UpArrowWrapper = styled.div`
    position: fixed;
    bottom: 0px;
    right: 0px;
    width: 40px;
    height: 40px;
    z-index: 20;
    visibility: ${props => props.visibility};
    @media screen and (max-width: ${mobile_screen}){
      width: 60px;
      height: 60px;
    }
  `;

  UpArrowWrapper.defaultProps = {
    visibility: 'visible',
  }
// -------- end of Styles -------------------

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    // refs
      this.ref0 = React.createRef()
      this.ref1 = React.createRef()
      this.ref2 = React.createRef()
      this.ref3 = React.createRef()
      this.ref4 = React.createRef()
      this.ref5 = React.createRef()
      this.ref6 = React.createRef()
      this.ref7 = React.createRef()
      this.ref8 = React.createRef()
      this.ref9 = React.createRef()
      this.ref10 = React.createRef()
      this.ref11 = React.createRef()
      this.ref12 = React.createRef()
      this.ref13 = React.createRef()
      this.ref14 = React.createRef()
      this.ref15 = React.createRef()
      this.ref16 = React.createRef()
      this.ref17 = React.createRef()
      this.ref18 = React.createRef()
      this.ref19 = React.createRef()
      this.ref20 = React.createRef()
      this.ref21 = React.createRef()
      this.ref22 = React.createRef()
      this.ref23 = React.createRef()
      this.ref24 = React.createRef()
      this.ref25 = React.createRef()
      this.ref26 = React.createRef()
      this.ref27 = React.createRef()
      this.ref28 = React.createRef()
      this.ref29 = React.createRef()
      this.ref30 = React.createRef()
      this.ref31 = React.createRef()
      this.ref32 = React.createRef()
      this.ref33 = React.createRef()
      this.ref34 = React.createRef()
      this.ref35 = React.createRef()
      this.ref36 = React.createRef()
      this.ref37 = React.createRef()
      this.ref38 = React.createRef()
      this.ref41 = React.createRef()
    // refs - end
    this.state = {
      columns: null,
      count: 0,
      navIsVisible: true,
      prevScrollpos: window.pageYOffset,
      upArrowIsVisible: false,
    };
  }

  getNext = (info) => {
    if (info<this.state.count){
      let next = info+1;
      if (next === 39) next = next + 2;
      this[`ref${next}`].current.handleOpenClick();
      this.setState({isOpen: false});
    }
  }

  getPrevious = (info) => {
    if (info>1){
      let previous = info-1;
      if (previous === 40) previous = previous - 2;
      this[`ref${previous}`].current.handleOpenClick();
      this.setState({isOpen: false});
    }
  }

  updateColumns() {
    if (window.innerWidth>=mobile_screen_n) {
      this.setState({columns: 3})
    } else {
      this.setState({columns: 1})
    }
  }

  updateCount() {
    this.setState({count: this.props.images.length});
  }

  componentDidMount() {
    this.updateColumns();
    this.updateCount();
    window.addEventListener('resize', this.updateColumns.bind(this));
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateColumns.bind(this));
    window.removeEventListener("scroll", this.handleScroll);
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
    const upArrowIsVisible = (currentScrollPos>120);
    
    this.setState({
      navIsVisible: visible,
      prevScrollpos: currentScrollPos,
      upArrowIsVisible: upArrowIsVisible,
    });
  };

  handleUpArrowClick = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (this.state.columns===3) ? (
      <StyledGallery>
        <div id='c1'>
          {this.props.images.map(image => {
            if (image.number%3 === 1) {
              let notLast = true;
              if (image.number === this.state.count){
                notLast = false;
              }
              let notFirst = true;
              if (image.number === 1) {
                notFirst = false;
              }
              return  <ImageHolder key={image.number} >
                        <Modal  
                                    getNext={this.getNext} 
                                    getPrevious={this.getPrevious}  
                                    cn="img" 
                                    notLast={notLast}
                                    notFirst={notFirst}
                                    ref={this[`ref${image.number}`]}
                                    image={image}/>
                      </ImageHolder>
            } else {
              return null;
            }
          })}
        </div>
        <div id='c2'>
          {this.props.images.map(image => {
            if (image.number%3 === 2) {
              let notLast = true;
              if (image.number === this.state.count){
                notLast = false;
              }
              if (image.name === 41)
              {
                notLast = false;
              }
              let notFirst = true;
              if (image.number === 1) {
                notFirst = false;
              }
              return  <ImageHolder key={image.number} >
                        <Modal  
                                    getNext={this.getNext} 
                                    getPrevious={this.getPrevious}  
                                    cn="img" 
                                    notLast={notLast}
                                    notFirst={notFirst}
                                    ref={this[`ref${image.number}`]}
                                    image={image}/>
                      </ImageHolder>
            } else {
              return null;
            }
          })}
        </div>
        <div id='c3'>
          {this.props.images.map(image => {
            if (image.number%3 === 0) {
              let notLast = true;
              if (image.number === this.state.count){
                notLast = false;
              }
              let notFirst = true;
              if (image.number === 1) {
                notFirst = false;
              }
              return  <ImageHolder key={image.number} >
                        <Modal  
                                    getNext={this.getNext} 
                                    getPrevious={this.getPrevious}  
                                    cn="img" 
                                    notLast={notLast}
                                    notFirst={notFirst}
                                    ref={this[`ref${image.number}`]}
                                    image={image}/>
                      </ImageHolder>
            } else {
              return null;
            }
          })}
        </div>
      </StyledGallery>
    ) : (
      <StyledGallery>
        {this.props.images.map(image => {
          let notLast = true;
          if (image.number === this.state.count){
            notLast = false;
          }
          let notFirst = true;
          if (image.number === 1) {
            notFirst = false;
          }
          return  <ImageHolder key={image.number} >
                    <Modal  
                        getNext={this.getNext} 
                        getPrevious={this.getPrevious} 
                        cn="img" 
                        notLast={notLast}
                        notFirst={notFirst}
                        ref={this[`ref${image.number}`]}
                        navIsVisible={this.state.navIsVisible}
                        image={image}/>
          </ImageHolder>
        })}
        <UpArrowWrapper onClick={this.handleUpArrowClick} visibility={this.state.upArrowIsVisible ? 'visible' : 'hidden'}>
          <img src={up_arrow_svg} alt='move back up'/>
        </UpArrowWrapper>
      </StyledGallery>
    )
  }
}

export default Gallery;