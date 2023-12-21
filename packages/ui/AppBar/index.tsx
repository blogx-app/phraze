import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  AppBarContainer,
  BreadcrumsNavlink,
  NavigationImageContainer,
} from "./style";
import { AppBarProps } from "./type";
import Text from "../Text";
import { Flex } from "../Box";

const AppBar = ({
  getNavigationBreadcrum,
  getMatchedRoute,
  showUnauthSidebar,
  blogSwitcher,
  hideAppbar = false,
  isHomeMode,
}: AppBarProps) => {
  const { pathname } = useLocation();
  const theme = useTheme();

  const { crumbs = [] } =
    hideAppbar || showUnauthSidebar(pathname)
      ? {}
      : getNavigationBreadcrum?.(pathname);

  if (showUnauthSidebar(pathname)) {
    return <></>;
  }

  return (
    <AppBarContainer>
      <Box display="flex" alignItems="center">
        <NavigationImageContainer src="/phraze_logo.webp" />
        {!isHomeMode && (
          <>
            <Text
              color={theme.colors.textGrey25}
              mx={2}
              fontSize="1.25rem"
              fontStyle="italic"
              pr={2}
            >
              /
            </Text>
            {blogSwitcher}
            {crumbs &&
              crumbs?.map((crumb, i) => (
                <Flex key={crumb?.toLink + i}>
                  <BreadcrumsNavlink
                    end
                    to={getMatchedRoute(crumb?.toLink)}
                    style={({ isActive }) =>
                      isActive
                        ? { color: theme.colors.foreground }
                        : { color: theme.colors.textSubtle }
                    }
                  >
                    {crumb.name}
                  </BreadcrumsNavlink>
                </Flex>
              ))}
          </>
        )}
      </Box>
    </AppBarContainer>
  );
};

export default AppBar;
