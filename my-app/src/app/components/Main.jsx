import React from "react";
import styled from 'styled-components';
import { 
  Route, 
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";


import { Product, About, Contact, Food, Portrait, Navigation, ScrollToTop } from ".";

// ------------ Variables -------------------
  import {color_blue} from './variables/colors.js'
  import {color_white} from './variables/colors.js'
  
  import {nav_width} from './variables/sizes.js'
  import {nav_height} from './variables/sizes.js'
  import {screen_size_sm as mobile_screen} from './variables/sizes.js'
// ----- end of Variables -------------------
//
// --------------- Styles -------------------
  const StyledDiv = styled.div`
    box-sizing: border-box;
    background-color: ${color_white};
    margin: 0;
    display: grid;
    height: 100%;
    grid-template-areas:
    'navigation page';
    @media screen and (min-width: ${mobile_screen}){
      grid-template-columns: ${nav_width} 1fr;
    }
    @media screen and (max-width: ${mobile_screen}) {
      grid-template-areas:
        'navigation'
        'page';
      grid-template-rows: ${nav_height} 1fr;
    }
  `;

  const Content = styled.div`
    grid-area: page;
    box-sizing: border-box;
    margin: 0;
    height: 100%;
    z-index: 1;
  `;

  const Background = styled.div`
    grid-area: page;
    display: grid;
    box-sizing: border-box;
    background-color: ${color_white};
    margin: 0;
    height: 100%;
    grid-template-areas:
      'blue'
      'white';
    grid-template-rows: 'min-content 1fr';

    & div {
      box-sizing: border-box;
      margin: 0;
    }
    & div.blue {
      grid-area: blue;
      background-color: ${color_blue};
      height: 220px;
    }
    & div.white {
      grid-area: white;
      background-color: ${color_white};
    }

    @media screen and (max-width: ${mobile_screen}){
      visibility: hidden;
    }
  `;
// -------- end of Styles -------------------

class Main extends React.Component {

  render() {
    return (
      <StyledDiv>

        <Background>
          <div className="blue" />
          <div className="white" />
        </Background>

        <Content>
          <ScrollToTop>
          <Switch>
            <Route path={`${this.props.match.path}product`}>
              <Product/>
            </Route>
            <Route path={`${this.props.match.path}about`}>
              <About />
            </Route>
            <Route path={`${this.props.match.path}contact`}>
              <Contact />
            </Route>
            <Route path={`${this.props.match.path}portrait`}>
              <Portrait />
            </Route>
            <Route path={`${this.props.match.path}food`}>
              <Food/>
            </Route>
            <Route path="">
              <Redirect to="/food" />
            </Route>
          </Switch>
          </ScrollToTop>
        </Content>

        <Navigation/>

      </StyledDiv>
    );
  }
}

export default withRouter(Main);