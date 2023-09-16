import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import {
  AppBarContainer,
  BreadcrumsNavlink,
  NavigationImageContainer,
} from "./style";
import { AppBarProps } from "./type";

const AppBar = ({ getNavigationBreadcrum }: AppBarProps) => {
  const location = useLocation();

  const { crumbs } = getNavigationBreadcrum(location.pathname);

  return (
    <AppBarContainer>
      <Box display="flex">
        <NavigationImageContainer src="/phraze_logo.webp" />
        {crumbs?.map((crumb, i) => (
          <span key={crumb.toLink}>
            <BreadcrumsNavlink
              end
              to={crumb.toLink}
              style={({ isActive }) =>
                isActive ? { color: "white" } : undefined
              }
            >
              {crumb.name}
            </BreadcrumsNavlink>
          </span>
        ))}
      </Box>
    </AppBarContainer>
  );
};

export default AppBar;
