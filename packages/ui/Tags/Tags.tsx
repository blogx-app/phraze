import { useNavigate } from "react-router-dom";
import { OutlinedTag } from "./styles";

export interface TagProps {
  children: React.ReactNode;
  toLink: string;
}

const Tags = ({ children, toLink }: TagProps) => {
  const navigate = useNavigate();

  return <OutlinedTag onClick={() => navigate(toLink)}>{children}</OutlinedTag>;
};

export default Tags;
