import styled from "@emotion/styled";
import { Box, Flex, Text } from "@phraze-app/ui";
import UpgradeDiamondIcon from "./icons/UpgradeDiamondIcon";
import { NavigationButton } from "./style";

const Container = styled(Flex)`
  margin: 1.5rem;
  background-color: #80808035;
  border-radius: 12px;
  flex-direction: column;

  gap: 0.5rem;
  text-align: center;

  justify-content: center;
  padding: 12px 12px;
`;

const UpgradeToPro = () => {
  return (
    <Container>
      <Flex justifyContent="center">
        <UpgradeDiamondIcon />
        <Text color="#bfff00" fontSize="1.25rem">
          Premium
        </Text>
      </Flex>
      <Text color="white" fontSize="0.75rem" px="0.5rem" mb="0.5rem">
        Upgrade your plan to get pro benefits and more...
      </Text>
      <NavigationButton bg="#bfff00">
        <Text fontSize="14px" color="#000" fontWeight="400">
          Upgrade to Pro
        </Text>
      </NavigationButton>
    </Container>
  );
};

export default UpgradeToPro;
