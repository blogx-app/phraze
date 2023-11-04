import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Flex, Text, PhzButton } from "@phraze-app/ui";
import UpgradeDiamondIcon from "./icons/UpgradeDiamondIcon";
import { routesName } from "../../route";

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
  const navigate = useNavigate();

  const onClickUpgradeToPro = () => {
    navigate(routesName.billingsAndPlan);
  };

  return (
    <Container>
      <Flex justifyContent="center" alignItems="center" gap="0.25rem">
        <UpgradeDiamondIcon />
        <Text color="#bfff00da" fontSize="1.25rem">
          Premium
        </Text>
      </Flex>
      <Text color="white" fontSize="0.75rem" px="0.5rem" mb="0.5rem">
        Upgrade your plan to get pro benefits and more...
      </Text>
      <PhzButton variant="primary" onClick={onClickUpgradeToPro}>
        Upgrade to Pro
      </PhzButton>
    </Container>
  );
};

export default UpgradeToPro;
