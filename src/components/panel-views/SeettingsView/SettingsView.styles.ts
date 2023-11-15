import styled from "styled-components";

export const StyledSignInView = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--color-white);

  h1 {
    align-self: flex-start;
  }

  img {
    width: 15rem;
    margin: 10rem 0 3.2rem 0;
  }

  p {
    max-width: 25.8rem;
    margin-bottom: 14rem;
  }
`;

export const StyledAboutButton = styled.a`
  cursor: pointer;
  margin-top: 4rem;
  transition: color 0.2s;

  &:hover {
    color: var(--color-grey-light-1);
  }
`;
