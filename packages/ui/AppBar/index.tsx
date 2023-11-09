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

const AppBar = ({ getNavigationBreadcrum }: AppBarProps) => {
  const location = useLocation();
  const theme = useTheme();

  const { crumbs } = getNavigationBreadcrum(location.pathname);
  const lastItem = crumbs[crumbs.length - 1];

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
          <Flex key={crumb.toLink}>
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
