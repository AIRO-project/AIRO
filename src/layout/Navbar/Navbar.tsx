import { useDispatch, useSelector } from "react-redux";

import {
  StyledNavbar,
  StyledNavbarActions,
  StyledNavbarLogo,
  StyledSearchBar,
  StyledSearchBarInput,
  StyledSearchButton,
} from "./Navbar.styles";

import Icon from "/src/assets/svgs/Icon";
import Logo from "/src/assets/svgs/airo-logo.svg";
import Typography from "/src/styles/Typography";
import Switch from "/src/components/form/Switch/Switch";
import Button from "/src/components/ui/Button";
import { toggleSidePanel } from "/src/state/slices/sidePanelSlice";
import { RootState } from "/src/state/store";
import User from "/src/components/ui/User";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleToggleSidePanel = () => {
    dispatch(toggleSidePanel());
  };

  return (
    <StyledNavbar>
      <StyledNavbarLogo>
        <a href="/">
          <img src={Logo} alt="airo-logo" />
        </a>
        <Typography tagStyle="label3" tag="span">
          by Grid Dynamics
        </Typography>
      </StyledNavbarLogo>
      <StyledNavbarActions>
        <Typography tagStyle="label2" tag="span">
          Voronoi clasterization
        </Typography>
        <Switch value="Voronoi clasterization" handleChange={() => {}} />
        <StyledSearchBar>
          <StyledSearchButton>
            <Icon name="filter" height="12px" width="12px" />
          </StyledSearchButton>
          <StyledSearchBarInput placeholder="Type address..." />
          <StyledSearchButton>
            <Icon
              name="search"
              height="18px"
              width="18px"
              color="var(--color-grey-light-2)"
            />
          </StyledSearchButton>
        </StyledSearchBar>
      </StyledNavbarActions>

      {user.isLoggedIn ? (
        <User
          type="logged-in"
          imgSrc={user.userImg!}
          name={user.userName!}
          email={user.userEmail!}
          onClick={handleToggleSidePanel}
        />
      ) : (
        <Button width="120px" onClick={handleToggleSidePanel}>
          Sign in
        </Button>
      )}
    </StyledNavbar>
  );
}
export default Navbar;
