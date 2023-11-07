import { createGlobalStyle } from "styled-components";

import colors from "./colors";
import fonts from "./fonts";
import fontFaces from "./fonts/faces";
import globalReset from "./reset";
import shadows from "./shadows";

export default createGlobalStyle`
    ${fontFaces}
    ${fonts}
    ${colors}
    ${globalReset}
    ${shadows}
`;
