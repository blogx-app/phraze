import { ListingTypeEnum } from "../PostsPageContainer/PostSelectButtonContainer";

export enum BlogPostStateEnum {
  Published = "published",
  Draft = "draft",
  Scheduled = "scheduled",
}

export interface TagsType {
  name: string;
  tagLink: string;
}

export interface AuthorInfoType {
  thumbnail: string;
  name: string;
}

export interface SinglePostProps {
  id: string | number;
  thumbnail: string;
  title: string;
  blogContent: string;
  tags: TagsType[];
  state: BlogPostStateEnum;
  authorInfo: AuthorInfoType;
  lastUpdatedTimestamp: number;
}

export interface PostsProps {
  posts: SinglePostProps[];
  listingType: ListingTypeEnum;
}
