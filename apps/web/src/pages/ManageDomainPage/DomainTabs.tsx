import Box from "@mui/material/Box";
import { DomainButton } from "./style";
import DomainInput from "./DomainInputWrapper";
import Text from "ui/Text";
import { Tabs } from "ui/Tabs";

export default function DomainTabs() {
  return (
    <Box sx={{ bgcolor: "background.paper", width: 500 }}>
      <Tabs
        tabLabels={["Main Domain", "Sub Domain"]}
        tabPanels={[
          <>
            <DomainInput placeholder="example.com" />
            <Text m="0.5rem 0 1rem 0">
              Your blog will be hosted at: https://...
            </Text>
            <DomainButton>Confirm</DomainButton>
          </>,
          <>
            <DomainInput placeholder="blog.example.com" />
            <Text m="0.5rem 0 1rem 0">
              Your blog will be hosted at: https://...
            </Text>
            <DomainButton>Confirm</DomainButton>
          </>,
        ]}
      />
    </Box>
  );
}
