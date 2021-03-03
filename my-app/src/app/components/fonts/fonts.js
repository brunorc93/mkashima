import { createGlobalStyle } from 'styled-components';

// Fonts
import goudosi_otf from './Goudosi.otf';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: Goudosi;
    src: url(${goudosi_otf}) format("opentype");
    font-weight: normal;
    font-style: italic;
  }
`;

export default GlobalFonts;
