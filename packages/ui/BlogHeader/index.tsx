import { HeaderInputComponent } from "./styles";

export const BlogHeader = () => {
  return (
    <div>
      <HeaderInputComponent
        contentEditable={true}
        placeholder="Blog Title"
        spellCheck={true}
      />
    </div>
  );
};

export default BlogHeader;
