import React from "react";
import { useTheme } from "@emotion/react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { Box, Flex, Text } from "@phraze-app/ui";
import EditPencilIcon from "./icons/EditPencilIcon";

export interface NavigationItem {
  id: string;
  name: string;
  url: string;
}

interface NavigationViewCardProps {
  item: NavigationItem;
}

const EditIcon = () => {
  return (
    <Box
      p={1}
      borderRadius="2rem"
      border="1px solid #ffffffda"
      lineHeight="0"
      height="fit-content"
    >
      <EditPencilIcon />
    </Box>
  );
};

const NavigationViewCard = React.forwardRef(
  ({ item: { name, url }, ...rest }: NavigationViewCardProps, ref) => {
    const theme = useTheme();

    return (
      <Flex
        ref={ref as any}
        {...rest}
        // boxShadow={theme.shadows.card}
        border="1px solid rgb(39, 39, 42)"
        p={3}
        mt={3}
        borderRadius="8px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Text fontWeight={600} mb={2}>
            Display name:{" "}
            <Text fontWeight="normal" as="span">
              Something
            </Text>
          </Text>
          <Text fontWeight={600}>
            Url:{" "}
            <Text fontWeight="normal" as="span">
              Something
            </Text>
          </Text>
        </Box>
        <EditIcon />
      </Flex>
    );
  }
);

export default NavigationViewCard;
