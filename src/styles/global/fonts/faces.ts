import { css } from "styled-components";

import FiraSansBold from "/fonts/FiraSans-Bold.woff2";
import SourceSansProBold from "/fonts/SourceSansPro-Bold.woff2";
import SourceSansProSemiBold from "/fonts/SourceSansPro-SemiBold.woff2";
import SourceSansProRegular from "/fonts/SourceSansPro-Regular.woff2";

const fontFaces = css`
  @font-face {
    font-family: "FiraSans";
    src: url(${FiraSansBold}) format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "SourceSansPro";
    src: url(${SourceSansProBold}) format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "SourceSansPro";
    src: url(${SourceSansProSemiBold}) format("woff2");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "SourceSansPro";
    src: url(${SourceSansProRegular}) format("woff2");
    font-weight: 400;
    font-style: normal;
  }
`;

export default fontFaces;
