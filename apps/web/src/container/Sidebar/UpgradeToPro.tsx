import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Flex, Text, PhzButton } from "@phraze-app/ui";
import { SketchLogo } from "@phosphor-icons/react";
import UpgradeDiamondIcon from "./icons/UpgradeDiamondIcon";
import { routesName } from "../../route";
import { useTheme } from "@emotion/react";

const Container = styled(Flex)`
  margin: 1.5rem;
  /* background-color: #80808035; */
  border: ${({ theme }) => theme.borders.card};
  border-radius: 12px;
  flex-direction: column;

  gap: 0.5rem;
  text-align: center;

  justify-content: center;
  padding: 12px 12px;
`;

const UpgradeToPro = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const onClickUpgradeToPro = () => {
    navigate(routesName.billingsAndPlan);
  };

  return (
    <Container>
      <Flex justifyContent="center" alignItems="center" gap="0.25rem">
        <SketchLogo color={theme.colors.primary} size={32} weight="light" />
        <Text color="#bfff00da" fontSize="1.25rem">
          Premium
        </Text>
      </Flex>
      <Text color="white" fontSize="0.75rem" px="0.5rem" mb="0.5rem">
        Upgrade your plan to get pro benefits and more
      </Text>
      <PhzButton variant="primary" onClick={onClickUpgradeToPro}>
        Upgrade to pro
      </PhzButton>
    </Container>
  );
};

export default UpgradeToPro;
