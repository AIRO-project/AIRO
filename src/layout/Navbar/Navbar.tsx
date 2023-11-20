import { useDispatch, useSelector } from "react-redux";

import {
  StyledNavbar,
  StyledNavbarActions,
  StyledNavbarLogo,
} from "./Navbar.styles";

import Logo from "/src/assets/svgs/airo-logo.svg";
import Typography from "/src/styles/Typography";
import Button from "/src/components/ui/Button";
import { toggleSidePanel } from "/src/state/slices/sidePanelSlice";
import User from "/src/components/ui/User";
import { selectUser } from "/src/state/slices/userSlice";
import SearchBar from "/src/components/SearchBar/SearchBar";
import Switch from "/src/components/form/Switch/Switch";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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
        <SearchBar />
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
