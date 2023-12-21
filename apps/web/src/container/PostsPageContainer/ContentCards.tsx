import { Fragment } from "react";
import { Box, Flex, Text } from "@phraze-app/ui";
import { useTheme } from "@emotion/react";
import { CardContainer } from "./styles";
import DraftsIcon from "./icon/DraftsIcon";
import PublishedIcon from "./icon/PublishedIcon";
import RightIconCircular from "./icon/RightIconCircular";
import ScheduledIcon from "./icon/ScheduledIcon";
import { routesName } from "../../route";
import useAppNavigation from "../../hooks/useAppNavigation";

const ContentCards = () => {
  const theme = useTheme();
  const navigate = useAppNavigation({
    blogName: "acme",
  });

  const CONTENT_CARDS = [
    {
      icon: DraftsIcon,
      contentType: "Drafts",
      navigateTo: routesName.postDraft,
    },
    {
      icon: PublishedIcon,
      contentType: "Published",
      navigateTo: routesName.postPublished,
    },
    {
      icon: ScheduledIcon,
      contentType: "Scheduled",
      navigateTo: routesName.postScheduled,
    },
  ];

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
