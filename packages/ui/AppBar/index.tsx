import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  AppBarContainer,
  BreadcrumsNavlink,
  NavigationImageContainer,
} from "./style";
import { AppBarProps } from "./type";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";

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
      <Popover>
        <PopoverTrigger>Click here</PopoverTrigger>
        <PopoverContent>This is the conten</PopoverContent>
      </Popover>
    </AppBarContainer>
  );
};

export default AppBar;
