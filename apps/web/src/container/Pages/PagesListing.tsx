import { Flex, PostStateType } from "@phraze-app/ui";
import PageItem from "./PageItem";

const pages = [
  {
    pageTitle: "Test page 2",
    pageState: PostStateType.published,
    createdAt: "12/12/12",
  },
  {
    pageTitle:
      "Some very very long page name that we do not need for something betters",
    pageState: PostStateType.published,
    createdAt: "12/12/12",
  },
  {
    pageTitle: "Some long enough page name for now fasfas",
    pageState: PostStateType.published,
    createdAt: "12/12/12",
  },
];

export const PagesListing = () => {
  return (
    <Flex width="48rem" flexWrap="wrap" gap="1rem" mt={3}>
      {pages.map(({ pageTitle, pageState, createdAt }) => (
        <PageItem
          key={pageTitle + createdAt}
          pageState={pageState}
          pageTitle={pageTitle}
          createdAt={createdAt}
        />
      ))}
    </Flex>
  );
};

export default PagesListing;
