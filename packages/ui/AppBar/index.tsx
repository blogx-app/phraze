import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  AppBarContainer,
  BreadcrumsNavlink,
  NavigationImageContainer,
} from "./style";
import { AppBarProps } from "./type";
import TeamSwitcher from "../PhzTeamSwitcher";

const AppBar = ({ getNavigationBreadcrum }: AppBarProps) => {
  const location = useLocation();
  const theme = useTheme();

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
                isActive
                  ? { color: theme.colors.foreground }
                  : { color: theme.colors.textSubtle }
              }
            >
              {crumb.name}
            </BreadcrumsNavlink>
          </span>
        ))}
      </Box>
      <TeamSwitcher />
    </AppBarContainer>
  );
};

export default AppBar;
