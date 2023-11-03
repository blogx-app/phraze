import React from "react";
import { useTheme } from "@emotion/react";
import { Box, IconButton } from "@mui/material";
import Text from "@phraze-app/ui/Text";
import VisitSiteIcon from "../../assets/icons/VisitSiteIcon";
import AnalyticsIcon from "./icons/AnalyticsIcon";
import PagesIcon from "./icons/PagesIcon";
import TagsIcon from "./icons/TagsIcon";
import LeadsIcon from "./icons/LeadsIcon";
import { NavigationNavLink } from "./style";
import PostsIconWrapper from "./PostsIconWrapper";
import { Flex, PhzButton } from "@phraze-app/ui";

const NAVIGATIONS_ITEMS: {
  name: string;
  icon: React.ReactNode;
  toLink: string;
}[] = [
  {
    name: "Analytics",
    icon: <AnalyticsIcon />,
    toLink: "/analytics",
  },
  {
    name: "Pages",
    icon: <PagesIcon />,
    toLink: "/pages",
  },
  {
    name: "Tags",
    icon: <TagsIcon />,
    toLink: "/tags",
  },
  {
    name: "Leads",
    icon: <LeadsIcon />,
    toLink: "/leads",
  },
];

export interface NavigationComponentProps {
  open: boolean;
}

const NavigationComponent = ({ open }: NavigationComponentProps) => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      paddingTop="1rem"
      alignItems="center"
      minHeight="75%"
      width={open ? "100%" : undefined}
    >
      <PhzButton bg="#bfff00da" width="100%">
        <Flex alignItems="center" gap="0.25rem">
          <VisitSiteIcon />
          Visit Site
        </Flex>
      </PhzButton>
      <Box
        display="flex"
        flexDirection="column"
        gap="0.5rem"
        margin="0 auto"
        marginTop="12px"
        justifyContent="center"
        alignItems={open ? "flex-start" : "center"}
        width={open ? "100%" : undefined}
      >
        {NAVIGATIONS_ITEMS.map((item, i) => (
          <React.Fragment key={item.name + item.toLink}>
            {i === 1 && <PostsIconWrapper open={open} />}
            <NavigationNavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      background: theme.colors.transparent,
                      border: theme.borders.card,
                      fontWeight: "bold",
                    }
                  : {}
              }
              to={item.toLink}
              key={`${item.name}-${item.toLink}-${i}`}
            >
              <IconButton>{item.icon}</IconButton>
              {open && (
                <Text fontSize="14px" color={theme.colors.textWhite}>
                  {item.name}
                </Text>
              )}
            </NavigationNavLink>
          </React.Fragment>
        ))}
      </Box>
      {/* <NavigationButton bg="rgba(0, 255, 102, 0.85)" open={open}>
        <UpgradeIcon />
        {open && (
          <Text fontSize="1rem" color="white" fontWeight="bold">
            Upgrade
          </Text>
        )}
      </NavigationButton> */}
    </Box>
  );
};

export default NavigationComponent;
