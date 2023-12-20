import { Box, Flex, Input, PhzButton, Text } from "@phraze-app/ui";
import { NavigationImageContainer } from "@phraze-app/ui/AppBar/style";

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
        <Input
          placeholder="name@example.com"
          style={{ minWidth: "21rem", marginBottom: "0.5rem" }}
        />
        <PhzButton
          variant="primary"
          style={{ minWidth: "21rem", minHeight: "2.5rem" }}
        >
          Sign In with Email
        </PhzButton>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
