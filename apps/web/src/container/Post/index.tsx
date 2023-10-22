import PostRowView from "./PostRowView";
import { PostsContainer } from "./styles";
import { BlogPostStateEnum, PostsProps, SinglePostProps } from "./types";

const singlePost = {
  id: "something",
  thumbnail:
    "https://images.squarespace-cdn.com/content/v1/62c32effd8601c2f49f1728b/3b96767b-aab5-4224-ae6e-26626312f724/20220303_Omage-6.jpg",
  title: "This is a test",
  blogContent: "this is just a test. no need to panic",
  tags: [
    {
      name: "Figma",
      tagLink: "/figma",
    },
    {
      name: "Figma2",
      tagLink: "/figma",
    },
    {
      name: "Figma22",
      tagLink: "/figma",
    },
  ],
  state: BlogPostStateEnum.Published,
  authorInfo: {
    thumbnail: "something",
    name: "Sanjib Sah",
  },
  lastUpdatedTimestamp: 12323213,
};

const allPosts: SinglePostProps[] = [singlePost, singlePost, singlePost];

const Post = ({ posts = allPosts, listingType }: PostsProps) => {
  // TODO - remove the line below
  posts = allPosts;

  return (
    <PostsContainer>
      {posts.map((post, i) => (
        <PostRowView key={`${post.id}-${i}`} post={post} />
      ))}
    </PostsContainer>
  );
};

export default Post;
