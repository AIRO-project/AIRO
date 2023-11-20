import styled from "styled-components";

export const StyledDeviceForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  color: var(--color-white);
`;

export const FormButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  align-self: flex-end;
  margin-top: 2rem;
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FormFlex = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FormLocationButton = styled.div`
  cursor: pointer;
  width: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;

  &:hover svg {
    fill: var(--color-grey-light-1);
  }
`;

export const FormLabel = styled.label``;
