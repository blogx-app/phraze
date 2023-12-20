import { useNavigate } from "react-router-dom";
import { OutlinedTag } from "./styles";

export interface TagProps {
  children: React.ReactNode;
  toLink: string;
  color?: string;
}

const Tags = ({ children, toLink, color }: TagProps) => {
  const navigate = useNavigate();

  return (
    <OutlinedTag color={color} onClick={() => navigate(toLink)}>
      {children}
    </OutlinedTag>
  );
};

export default Tags;
