import { createGlobalStyle } from "styled-components";

import colors  from "./colors";
import  fonts  from "./fonts";
import fontFaces from "./fonts/faces";
import globalReset from "./reset";

export default createGlobalStyle`
    ${fontFaces}
    ${fonts}
    ${colors}
    ${globalReset}
`;
