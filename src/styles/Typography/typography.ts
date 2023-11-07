import { css } from "styled-components";

const subtitle = css`
  font-family: var(--font-secondary);
  line-height: 2.4rem;
  letter-spacing: 0.15px;
`;
const label = css`
  font-family: var(--font-secondary);
  line-height: 2.4rem;
  letter-spacing: 0.15px;
`;

const typography = {
  heading1: css`
    font-family: var(--font-primary);
    font-size: 2.4rem;
    line-height: 2.4rem;
    font-weight: 700;
    letter-spacing: 0.15px;
  `,
  heading2: css`
    font-family: var(--font-primary);
    font-size: 1.4rem;
    font-weight: 700;
  `,
  subtitle1: css`
    ${subtitle}
    font-size: 1.6rem;
    font-weight: 700;
  `,
  subtitle2: css`
    ${subtitle}
    font-size: 1.6rem;
    font-weight: 600;
  `,
  subtitle3: css`
    ${subtitle}
    font-size: 1.4rem;
    font-weight: 600;
  `,
  subtitle4: css`
    ${subtitle}
    font-size: 1.4rem;
    font-weight: 400;
  `,
  body: css`
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    line-height: 2.4rem;
    font-weight: 400;
  `,
  label1: css`
    ${label}
    font-size: 1.4rem;
    font-weight: 700;
  `,
  label2: css`
    ${label}
    font-size: 1.2rem;
    font-weight: 600;
  `,
  label3: css`
    font-family: var(--font-secondary);
    font-size: 1.2rem;
    font-weight: 400;
  `,
};

export default typography;
