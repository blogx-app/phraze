import SunIcon from "./icon/SunIcon";
import Text from "../Text";
import { AppBarContainer } from "./style";

// Add a better theme toggle button
const AppBar = () => {
  return (
    <AppBarContainer>
      <Text fontSize="1.25rem" fontWeight="bold">
        Home
      </Text>
      <div className="bell-icon">
        <SunIcon />
      </div>
    </AppBarContainer>
  );
};

export default AppBar;
