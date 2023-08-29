import { Box } from "@mui/material";
import SunIcon from "./icon/SunIcon";
import { AppBarContainer, BreadcrumsNavlink } from "./style";
import { AppBarProps } from "./type";
import { NavLink, useLocation } from "react-router-dom";
import Text from "../Text";

// TODO - Add a better theme toggle button, or maybe not ;)
const AppBar = ({ getNavigationBreadcrum }: AppBarProps) => {
  const location = useLocation();

  const { pageName, crumbs } = getNavigationBreadcrum(location.pathname);

  return (
    <AppBarContainer>
      <Box>
        {/* <Text fontSize="1.25rem" fontWeight="bold" as="span" mr="1rem">
          {pageName}
        </Text> */}
        {crumbs?.map((crumb, i) => (
          <>
            {i !== 0 && <span>{" / "}</span>}
            <BreadcrumsNavlink to={crumb.toLink}>
              {crumb.name}
            </BreadcrumsNavlink>
          </>
        ))}
      </Box>
      <div className="bell-icon">
        <SunIcon />
      </div>
    </AppBarContainer>
  );
};

export default AppBar;
