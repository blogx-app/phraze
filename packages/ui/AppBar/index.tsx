import Text from "../Text";
import BellIcon from "./icon/BellIcon";
import { AppBarContainer } from "./style";

const AppBar = () => {
  return (
    <AppBarContainer>
      <Text fontSize="1.25rem" fontWeight="bold">
        Home
      </Text>
      <div className="bell-icon">
        <BellIcon />
      </div>
    </AppBarContainer>
  );
};

export default AppBar;
