import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { GithubLogo } from "@phosphor-icons/react";
import { Box, Flex, Input, PhzButton, Text } from "@phraze-app/ui";
import { NavigationImageContainer } from "@phraze-app/ui/AppBar/style";
import { routesName } from "../../route";

const ContinueWithLine = styled.div`
  width: 100%;
  border: 0.5px solid ${({ theme }) => theme.colors.textSubtle};

  height: 0;
`;

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Flex
        backgroundImage="url(/signup-side-image.webp)"
        backgroundSize="cover"
        style={{ filter: "grayscale(1)" }}
        flexDirection="column"
        minWidth="50%"
        height="100%"
        backgroundColor="#151611da"
        justifyContent="space-between"
        px={4}
        py={5}
      >
        <img
          style={{ height: "24px", width: "fit-content" }}
          src="/phraze_full_logo.webp"
        />
        <div>
          <Text fontSize="1.25rem" mb={2} lineHeight={1.35}>
            "Some blah blah someone said about the company and we are putting it
            here to gain some legitamacy."
          </Text>
          <Text>Anonymous</Text>
        </div>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minWidth="50vw"
      >
        <NavigationImageContainer src="/phraze_logo.webp" />
        <Text fontSize="1.5rem" fontWeight={600} mt={1} mb={2}>
          Create an account
        </Text>
        <Text color="textSubtle" mb={3} fontSize="14px">
          Enter your email below to create your account
        </Text>
        <Box width="21rem">
          <Input
            placeholder="name@example.com"
            style={{ marginBottom: "0.5rem" }}
          />
          <PhzButton
            variant="primary"
            style={{ width: "100%", minHeight: "2.5rem" }}
          >
            Sign Up with Email
          </PhzButton>
          <PhzButton
            variant="secondary"
            style={{ width: "100%", minHeight: "2.5rem" }}
            mt={2}
            onClick={() => navigate(routesName.login)}
          >
            Log into your account
          </PhzButton>

          <Flex my="1.25rem" alignItems="center" gap="8px">
            <ContinueWithLine />
            <Text
              color="textSubtle"
              fontSize="10px"
              style={{ whiteSpace: "nowrap" }}
            >
              OR CONTINUE WIITH
            </Text>
            <ContinueWithLine />
          </Flex>

          <PhzButton
            variant="secondary"
            style={{ width: "100%", minHeight: "2.5rem" }}
          >
            <GithubLogo size={16} style={{ marginRight: "0.25rem" }} />
            Github
          </PhzButton>

          <Box
            fontSize="12px"
            style={{
              width: "100%",
              minHeight: "2.5rem",
              border: "none",
              wordBreak: "break-word",
              whiteSpace: "break-spaces",
            }}
            color="textSubtle"
            textAlign="center"
            mt={3}
            px={4}
          >
            By clicking continue, you agree to our Terms of Service and Privacy
            Policy.
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
