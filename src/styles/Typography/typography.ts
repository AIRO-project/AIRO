import { css } from "styled-components";

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
    font-family: var(--font-secondary);
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 700;
    letter-spacing: 0.15px;
  `,
  subtitle2: css`
    font-family: var(--font-secondary);
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 600;
    letter-spacing: 0.15px;
  `,
  subtitle3: css`
    font-family: var(--font-secondary);
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 600;
    letter-spacing: 0.15px;
  `,
  subtitle4: css`
    font-family: var(--font-secondary);
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 400;
    letter-spacing: 0.15px;
  `,
  body: css`
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    line-height: 2.4rem;
    font-weight: 400;
  `,
  label1: css`
    font-family: var(--font-secondary);
    font-size: 1.4rem;
    line-height: 2.4rem;
    letter-spacing: 0.15px;
    font-weight: 700;
  `,
  label2: css`
    font-family: var(--font-secondary);
    font-size: 1.2rem;
    line-height: 2.4rem;
    letter-spacing: 0.15px;
    font-weight: 600;
  `,
  label3: css`
    font-family: var(--font-secondary);
    font-size: 1.2rem;
    font-weight: 400;
  `,
};

export default typography;
