import { MouseEventHandler } from "react";
import { styled } from "styled-components";

import Icon from "../../assets/svgs/Icon";
import Typography from "../../styles/Typography";

type UserVariants = "logged-in" | "info";

const Container = styled.button<{ $type: UserVariants }>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ $type }) =>
    $type === "info" ? "var(--color-white)" : "var(--color-grey-light-1)"};
  gap: ${({ $type }) => ($type === "info" ? "1.6rem" : ".8rem")};
`;

const ImageContainer = styled.div<{ $type: UserVariants }>`
  width: ${({ $type }) => ($type === "info" ? "6rem" : "4rem")};
  height: ${({ $type }) => ($type === "info" ? "6rem" : "4rem")};
  border-radius: 50%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

type UserProps = {
  type: UserVariants;
  imgSrc: string;
  name: string;
  email: string;
  onClick?: MouseEventHandler;
  imgAlt?: string;
};

/**
 * @prop `type` [string: "logged-in" | "info"];
 * @prop `imgSrc` [string] - the src path of the image;
 * @prop `name` [string] - the user's name;
 * @prop `email` [string] - the user's email;
 * @prop `onClick` [function] - onClick event handler function;
 * @porp `imgAlt` [string];
 */
function User({ type, imgSrc, name, email, onClick, imgAlt = "" }: UserProps) {
  return (
    <Container $type={type} onClick={onClick}>
      <ImageContainer $type={type}>
        <Image src={imgSrc} alt={imgAlt} />
      </ImageContainer>
      {type === "info" ? (
        <Info>
          <Typography tag="h1" tagStyle="heading1">
            {name}
          </Typography>
          <Typography tagStyle="body">{email}</Typography>
        </Info>
      ) : (
        <>
          <Typography tag="span" tagStyle="subtitle2">
            {name.split(" ")[0]}
          </Typography>
          <Icon name="chevron-filled" color="currentColor"></Icon>
        </>
      )}
    </Container>
  );
}

export default User;
