import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  AppBarContainer,
  BreadcrumsNavlink,
  NavigationImageContainer,
} from "./style";
import { AppBarProps } from "./type";
import PhzTeamSwitcher from "../PhzTeamSwitcher";
import Text from "../Text";
import { Flex } from "../Box";
import PhzButton from "../PhzButton";
import { CaretLeft } from "@phosphor-icons/react";

const AppBar = ({
  getNavigationBreadcrum,
  showUnauthSidebar,
  hideAppbar = false,
}: AppBarProps) => {
  const { pathname } = useLocation();
  const theme = useTheme();

  const { crumbs = [] } =
    hideAppbar || showUnauthSidebar(pathname)
      ? {}
      : getNavigationBreadcrum?.(pathname);

  if (showUnauthSidebar(pathname)) {
    return (
      <AppBarContainer style={{ margin: "1rem 5rem", border: "none" }}>
        <PhzButton
          variant="secondary"
          style={{ width: "fit-content", border: "none" }}
        >
          <CaretLeft size={16} style={{ marginRight: "4px" }} />
          Back
        </PhzButton>
      </AppBarContainer>
    );
  }

  return (
    <AppBarContainer>
      <Box display="flex" alignItems="center">
        <NavigationImageContainer src="/phraze_logo.webp" />
        <Text
          color={theme.colors.textGrey25}
          mx={2}
          fontSize="1.25rem"
          fontStyle="italic"
          pr={2}
        >
          /
        </Text>
        <PhzTeamSwitcher />
        {crumbs?.map((crumb, i) => (
          <Flex key={crumb.toLink + i}>
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
          </Flex>
        ))}
      </Box>
    </AppBarContainer>
  );
};

export default AppBar;
