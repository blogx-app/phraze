import { HeaderInput, DescriptionInput } from "./styles";

// replace with a resizeable textarea
export const BlogHeader = () => {
  // const autosize = (ev: any) => {
  //   const { target: el } = ev || {};

  //   el.style.cssText = "-moz-box-sizing:content-box";
  //   el.style.cssText = "height:" + el.scrollHeight + "px !important";
  // };

  return (
    <div>
      <HeaderInput
        // onKeyDown={autosize}
        placeholder="Write a rock solid title"
      />
      <DescriptionInput
        // onKeyDown={autosize}
        placeholder="Write a description as clear as sky"
      />
    </div>
  );
};

export default BlogHeader;
