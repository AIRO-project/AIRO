import styled from "styled-components";

export const StyledAboutContainer = styled.div`
  width: 64rem;
  display: flex;
  flex-direction: column;
`;

export const StyledAboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  padding: 6.4rem 0;
  width: 40rem;
  gap: 3.2rem;
  color: var(--color-white);
`;

export const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const StyledAboutLogo = styled.div`
  & img {
    width: 8.25rem;
    margin-bottom: 0.2rem;
  }

  color: var(--color-grey-light-2);
`;

export const StyledShareButton = styled.a`
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
`;
