import Text from "ui/Text";
import DomainTabs from "./DomainTabs";
import { DomainInfoContainer } from "./style";

const ManageDomainPage = () => {
  return (
    <div>
      <DomainTabs />
      <DomainInfoContainer>
        <Text fontWeight="bold" mb="0.5rem">
          Current Status:{" "}
          <Text as="span" fontWeight="normal">
            Not connected
          </Text>
        </Text>
        <Text fontWeight="bold">
          Hosted at:{" "}
          <Text fontWeight="normal" as="span">
            https://demo-blog.blogx.app
          </Text>
        </Text>
      </DomainInfoContainer>
    </div>
  );
};

export default ManageDomainPage;
