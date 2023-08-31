import { Box } from "@mui/material";
import { Input } from "ui";
import Text from "ui/Text";

// TODO - Make seperate page for Social Sharing and enable message sharing on a given platform
// like what we had to use package in indiagold for social sharing
// Make sure this does not impact SEO of the page.
const SocialSharing = () => {
  return (
    <Box
      height="fit-content"
      border="1px solid black"
      borderRadius="12px"
      mb="1rem"
      minWidth="24rem"
    >
      <Box borderBottom="1px solid black">
        <Text fontWeight="bold" p="12px 0 8px 16px">
          Social Sharing
        </Text>
      </Box>
      <Box p="12px">
        <Input
          ContainerProps={{
            mb: "0.5rem",
          }}
          label="Facebook"
          helperText="Link to your Facebook page"
        />
        <Input
          label="X (formely Twitter)"
          helperText="Link to your X (formely Twitter) account"
        />
        <Input label="Linkedin" helperText="Link to your Linkedin page" />
        <Input label="Github" helperText="Link to your Github page" />
      </Box>
    </Box>
  );
};

export default SocialSharing;
