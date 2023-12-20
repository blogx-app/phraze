import styled from "@emotion/styled";
import { GithubLogo } from "@phosphor-icons/react";
import { Box, Flex, Input, PhzButton, Text } from "@phraze-app/ui";
import { NavigationImageContainer } from "@phraze-app/ui/AppBar/style";

const ContinueWithLine = styled.div`
  width: 100%;
  border: 0.5px solid ${({ theme }) => theme.colors.textSubtle};

  height: 0;
`;

const LoginPage = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 8rem)"
    >
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <NavigationImageContainer src="/phraze_logo.webp" />
        <Text fontSize="1.5rem" fontWeight={600} mt={1} mb={2}>
          Welcome Back
        </Text>
        <Text color="textSubtle" mb={3}>
          Enter your email to sign in to your account
        </Text>
        <Box minWidth="21rem">
          <Input
            placeholder="name@example.com"
            style={{ marginBottom: "0.5rem" }}
          />
          <PhzButton
            variant="primary"
            style={{ width: "100%", minHeight: "2.5rem" }}
          >
            Sign In with Email
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

          <PhzButton
            variant="secondary"
            style={{ width: "100%", minHeight: "2.5rem", border: "none" }}
            color="textSubtle"
            mt={2}
          >
            Don't have an account? Sign Up
          </PhzButton>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
