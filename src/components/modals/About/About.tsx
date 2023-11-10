import {
  StyledAboutContainer,
  StyledAboutContent,
  StyledAboutLogo,
  StyledShareButton,
  StyledTopBar,
} from "./About.styles";
import Icon from "../../../assets/svgs/Icon";
import Logo from "../../../assets/svgs/airo-logo.svg";
import Typography from "../../../styles/Typography";
import Button from "../../ui/Button";

type Props = {
  buttonHandler: () => void;
};

function About(props: Props) {
  return (
    <StyledAboutContainer>
      <StyledTopBar>
        <StyledAboutLogo>
          <img src={Logo} />
          <Typography tag="span" tagStyle="label3">
            by Grid Dynamics
          </Typography>
        </StyledAboutLogo>

        <StyledShareButton href="https://github.com/AIRO-project/AIRO">
          <Icon
            name="external-link"
            width="2.4rem"
            height="2.4rem"
            color="var(--color-primary)"
          />
        </StyledShareButton>
      </StyledTopBar>

      <StyledAboutContent>
        <Typography tag="h1" tagStyle="heading1">
          Hi there!
        </Typography>

        <Typography>
          Let us introduce the AIRO by Grid Dynamics – the application’s ready
          to share with you the overall and parametrical information about the
          air condition in the selected area.
          <br />
          <br />
          It is the platform for collaboration. Users could add their own
          devices to share air condition statistics in their areas with other
          people.
          <br />
          <br />
          The goal of the application is to highlight the condition of our
          common environment and think about where we are now and what we would
          bring to new generations.
        </Typography>

        <Button onClick={props.buttonHandler} width="26rem">
          Ok, got it!
        </Button>
      </StyledAboutContent>
    </StyledAboutContainer>
  );
}

export default About;
