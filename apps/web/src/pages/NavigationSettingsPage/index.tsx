import { Flex, PhzPaper, Text } from "@phraze-app/ui";
import NavigationReorder from "@phraze-app/ui/NavigationReorder";
import NavigationViewCard, {
  NavigationItem,
} from "../../container/Navigation/NavigationViewCard";
import { useTheme } from "@emotion/react";

const NavigationSettingsPage = () => {
  const theme = useTheme();

  return (
    <Flex gap="1rem" maxWidth="48rem">
      <PhzPaper width="50%">
        <Text fontWeight={600} mb={1}>
          Primary Navigation
        </Text>
        <Text color={theme.colors.textSubtle} fontSize="12px">
          Rearrange or edit links are needed
        </Text>
        <NavigationReorder<NavigationItem>
          initialItems={[
            { id: "name", name: "name", url: "nre things" },
            { id: "name-2", name: "name", url: "nre things" },
          ]}
          DraggableComponent={NavigationViewCard}
        />
      </PhzPaper>
      <PhzPaper width="50%">
        <Text fontWeight={600} mb={1}>
          Secondary Navigation
        </Text>
        <Text color={theme.colors.textSubtle} fontSize="12px">
          Rearrange or edit links are needed
        </Text>
        <NavigationReorder<NavigationItem>
          initialItems={[
            { id: "name", name: "name", url: "nre things" },
            { id: "name-2", name: "name", url: "nre things" },
          ]}
          DraggableComponent={NavigationViewCard}
        />
      </PhzPaper>
    </Flex>
  );
};

export default NavigationSettingsPage;
