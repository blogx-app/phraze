import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Text } from "@phraze-app/ui";
import { useTheme } from "@emotion/react";
import { CardContainer } from "./styles";
import DraftsIcon from "./icon/DraftsIcon";
import RightIconCircular from "./icon/RightIconCircular";
import PublishedIcon from "./icon/PublishedIcon";
import ScheduledIcon from "./icon/ScheduledIcon";
import { routesName } from "../../route";

const CONTENT_CARDS = [
  {
    icon: DraftsIcon,
    contentType: "Drafts",
    navigateTo: "/posts?blogType=draft",
  },
  {
    icon: PublishedIcon,
    contentType: "Published",
    navigateTo: "/posts?blogType=published",
  },
  {
    icon: ScheduledIcon,
    contentType: "Scheduled",
    navigateTo: "/posts?blogType=scheduled",
  },
];

const ContentCards = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      {CONTENT_CARDS.map((card) => (
        <Fragment key={card.navigateTo}>
          <CardContainer flexDirection="column" py="8px">
            <Flex justifyContent="space-between" px="0.5rem">
              {<card.icon />}
              <span
                onClick={() => navigate(card.navigateTo)}
                style={{
                  cursor: "pointer",
                }}
              >
                <RightIconCircular />
              </span>
            </Flex>
            <Box color="#aaa" px="14px">
              <Text color={theme.colors.white} fontSize="2rem">
                8
              </Text>
              <Text>{card.contentType}</Text>
              <Text fontSize="10px" mt="4px">
                Last updated: 5 sec ago
              </Text>
            </Box>
          </CardContainer>
        </Fragment>
      ))}
    </>
  );
};

export default ContentCards;
