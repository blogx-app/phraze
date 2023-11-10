import { Tag } from "@phosphor-icons/react";
import { Box, Flex, PhzButton, PhzPaper, Text } from "@phraze-app/ui";

export const BillingInfoContainer = () => {
  return (
    <PhzPaper>
      <Flex>
        <Box mr={2}>
          {/* Other icons - Confetti icons */}
          <Tag />
        </Box>
        <Box>
          <Text fontWeight={600} fontSize={1} mb={1}>
            {/* Other infos: You are on Super plan, hope you like it (or something from vercel) */}
            Your trail will end in 13 days
          </Text>
          <Text fontSize={1} textColor="textSubtle">
            {/* other subinfo - If you are facing any issue, please submit a feedback */}
            To continue using the premium services, please subscribe to a plan.
          </Text>
        </Box>
        {/* Other button - <TextButton>Submit feedback</TextButton> */}
        <PhzButton
          variant="primary"
          style={{
            justifySelf: "end",
            marginLeft: "auto",
          }}
        >
          Upgrade to Pro
        </PhzButton>
      </Flex>
    </PhzPaper>
  );
};

export default BillingInfoContainer;
