import { Box } from "@phraze-app/ui";
import { BillingInfoContainer } from "../../container/BillingAndPlan";

const BillingAndPlansPage = () => {
  return (
    <Box maxWidth="48rem">
      <BillingInfoContainer />
      {/* @TODO - Should we put delete blog container here? */}
    </Box>
  );
};

export default BillingAndPlansPage;
