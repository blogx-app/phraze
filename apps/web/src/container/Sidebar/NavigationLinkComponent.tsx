import { useMatch } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { DotOutline, type Icon } from "@phosphor-icons/react";
import { Box, Flex, Text } from "@phraze-app/ui";
import { NavigationNavLink } from "./style";

interface NavigationLinkComponentProps {
  name: string;
  toLink: string;
  StartIcon?: Icon;
  EndIcon?: Icon;
  onEndIconClick?: (e: any) => void;
}

const renderIcon = (
  Icon: Icon,
  color: string,
  props: any = {
    size: 20,
    weight: "light",
  }
) => <Icon {...props} color={color} />;

const NavigationLinkComponent = ({
  name,
  toLink,
  StartIcon,
  EndIcon,
  onEndIconClick,
}: NavigationLinkComponentProps) => {
  const isMatch = useMatch(toLink);
  const theme = useTheme();
  const color = isMatch ? theme.colors.foreground : theme.colors.textSubtle;

  return (
    <NavigationNavLink to={toLink}>
      <Flex alignItems="center" justifyContent="space-between" width="100%">
        <Flex alignItems="center">
          {StartIcon ? (
            <Box p={1} lineHeight={0} pr={2}>
              {renderIcon(StartIcon, color, {
                size: 20,
                weight: "light",
              })}
            </Box>
          ) : (
            // Used as spacer
            <>
              <Box width={10} />
              <DotOutline size={12} />
              <Box width={10} />
            </>
          )}
          <Text fontSize={14} fontWeight={isMatch ? 500 : 300} color={color}>
            {name}
          </Text>
        </Flex>
        {EndIcon && (
          <Box onClick={onEndIconClick}>
            {renderIcon(EndIcon, color, {
              size: 20,
              weight: "light",
            })}
          </Box>
        )}
      </Flex>
    </NavigationNavLink>
  );
};

export default NavigationLinkComponent;
