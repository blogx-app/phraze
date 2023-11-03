import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Flex, PhzButton } from "@phraze-app/ui";
import ShowBlock from "./icon/ShowBlock";
import ShowList from "./icon/ShowList";

export enum ListingTypeEnum {
  Block = "BLOCK",
  Row = "ROW",
}

export interface PostSelectButtonContainerProps {
  selectedListingType: ListingTypeEnum;
}

export const Container = styled(Flex)`
  ${({ theme }) =>
    css({
      backgroundColor: theme.colors.backgroundContent,
      border: theme.borders.card,
      borderRadius: theme.radii.card,
    })}

  height: 48px;
  gap: 0.5rem;
  align-items: center;
  padding: 0.65rem;
`;

const ListingButton = styled(PhzButton)<{ selected: boolean }>`
  background: ${({ theme, selected }) =>
    selected ? theme.colors.background : theme.colors.backgroundContent};
  padding: 0 0.4rem;
`;

const PostSelectButtonContainer = ({
  selectedListingType,
}: PostSelectButtonContainerProps) => {
  return (
    <Container>
      <ListingButton selected={selectedListingType === ListingTypeEnum.Block}>
        <ShowBlock />
      </ListingButton>
      <ListingButton selected={selectedListingType === ListingTypeEnum.Row}>
        <ShowList />
      </ListingButton>
    </Container>
  );
};

export default PostSelectButtonContainer;
