import { useTheme } from "@emotion/react";
import Text from "@phraze-app/ui/Text";
import { Tabs } from "@phraze-app/ui/Tabs";
import DomainInput from "./DomainInputWrapper";
import { PhzButton, PhzPaper } from "@phraze-app/ui";

export default function DomainTabs() {
  const theme = useTheme();

  return (
    <PhzPaper style={{ maxWidth: 500 }}>
      <Tabs
        tabLabels={["Main Domain", "Sub Domain"]}
        tabPanels={[
          <>
            <DomainInput placeholder="example.com" />
            <Text
              m="0.5rem 0 1rem 0.5rem"
              color={theme.colors.textAAA}
              fontSize="12px"
              fontWeight="bold"
            >
              Your blog will be hosted at: https://...
            </Text>
            <PhzButton variant="primary">Confirm</PhzButton>
          </>,
          <>
            <DomainInput placeholder="blog.example.com" />
            <Text
              m="0.5rem 0 1rem 0.5rem"
              color={theme.colors.textAAA}
              fontSize="12px"
              fontWeight="bold"
            >
              Your blog will be hosted at: https://...
            </Text>
            <PhzButton variant="primary">Confirm</PhzButton>
          </>,
        ]}
      />
    </PhzPaper>
  );
}
