import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch
} from "react-router-dom";

import { Meishi, Main } from "./components";

// ---------------- Fonts -------------------
  import GlobalFonts from './components/fonts/fonts';
// --------- end of Fonts -------------------
//
// ------------ Variables -------------------
  import {color_gray_letter} from './components/variables/colors.js'
  import {color_white} from './components/variables/colors.js'
  import {screen_size_sm as mobile_screen} from './components/variables/sizes.js';
// ----- end of Variables -------------------
//
// --------------- Styles -------------------
  const GlobalStyle = createGlobalStyle`
    html {
      width: 100%;
      height: 100%;
      scrollbar-width: none;
      margin: 0px; 
      padding: 0px;
      background-color: ${color_white};

      @media screen and (max-width: ${mobile_screen}){
        overflow-x: hidden;
      }
    }

    body {   
      background-color: ${color_white};
      width: 100%;
      height: 100%;
      margin: 0px;
      padding: 0px;
      /* Firefox 64 */
      overflow: -moz-scrollbars-none;
      scrollbar-width: none;
      /* Hide scrollbar for IE and Edge */
      -ms-overflow-style: none;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    body::-webkit-scrollbar {
      display: none;
      width: 0;
    }

    ul {
      list-style-type:none;
    }

    * {
      position: relative;
      margin: 0;
      padding: 0;
    }

    div {
      height: 100%;
      width: 100%;
    }
    
    h1 {
      color: ${color_gray_letter};
      font-family: goudosi;
      font-style: italic;
      font-weight: normal;
    }

    h3 {
      color: ${color_gray_letter};
      font-family: goudosi;
      font-style: italic;
      font-weight: normal;
    }

    p {
      color: ${color_gray_letter};
      font-family: goudosi;
      font-style: italic;
    }

    a {
      color: ${color_gray_letter};
      font-family: goudosi;
      font-style: italic;
      text-decoration: none;
    }
  `;
// -------- end of Styles -------------------

class App extends Component {
  render() {
    return(
      <div>
        <GlobalFonts/>
        <GlobalStyle/>
        <Router>
          <Switch>
            <Route path="/meishi">
              <Meishi />
            </Route>
            <Route path="">
              <Main />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;