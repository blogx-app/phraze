import { useTheme } from "@emotion/react";
import Text from "@phraze-app/ui/Text";
import DomainTabs from "./DomainTabs";
import { DomainInfoContainer } from "./style";
import { StateTags } from "@phraze-app/ui";

const ManageDomainPage = () => {
  const theme = useTheme();

  return (
    <div>
      <DomainInfoContainer>
        <Text mb="10px" color={theme.colors.textWhite}>
          Custom domian status:{" "}
          <StateTags tagType="filled" type="published">
            Connected
          </StateTags>
        </Text>
        <Text color={theme.colors.textWhite}>
          Hosted at: {/* Make this an external link */}
          <Text fontWeight="normal" as="span" color={theme.colors.greyAAA}>
            https://demo-blog.blogx.app
          </Text>
        </Text>
      </DomainInfoContainer>
      <DomainTabs />
    </div>
  );
};

export default ManageDomainPage;
