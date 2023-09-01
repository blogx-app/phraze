import { Box, IconButton } from "@mui/material";
import { Button } from "ui";
import Text from "ui/Text";
import VisitSiteIcon from "../../assets/icons/VisitSiteIcon";
import UpgradeIcon from "../../assets/icons/UpgradeIcon";
import AnalyticsIcon from "./icons/AnalyticsIcon";
import PagesIcon from "./icons/PagesIcon";
import TagsIcon from "./icons/TagsIcon";
import LeadsIcon from "./icons/LeadsIcon";
import { NavigationNavLink } from "./style";
import PostsIconWrapper from "./PostsIconWrapper";
import React from "react";

export interface NavigationComponentProps {
  open: boolean;
}

const NavigationComponent = ({ open }: NavigationComponentProps) => {
  const NAVIGATIONS_ITEMS = [
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

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      paddingTop="1rem"
      alignItems="center"
      minHeight="75%"
    >
      <Button
        style={{
          background: "rgba(0, 204, 255, 0.85)",
          border: "none",
          padding: "0.5rem",
        }}
      >
        <VisitSiteIcon />
      </Button>
      <Box
        display="flex"
        flexDirection="column"
        gap="1rem"
        margin="0 auto"
        justifyContent="center"
        alignItems="center"
      >
        {NAVIGATIONS_ITEMS.map((item, i) => (
          <React.Fragment key={item.name + item.toLink}>
            {i === 1 && <PostsIconWrapper open={open} />}
            <NavigationNavLink
              to={item.toLink}
              key={`${item.name}-${item.toLink}-${i}`}
            >
              <IconButton>{item.icon}</IconButton>
              {open && <Text>{item.name}</Text>}
            </NavigationNavLink>
          </React.Fragment>
        ))}
      </Box>
      <Button
        style={{
          background: "rgba(0, 255, 102, 0.85)",
          border: "none",
          padding: "0.5rem",
        }}
      >
        <UpgradeIcon />
      </Button>
    </Box>
  );
};

export default NavigationComponent;
