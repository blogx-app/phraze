import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Flex, Input, PhzPaper, Text } from "@phraze-app/ui";
import { useState } from "react";

const DEFAULT_COLORS = [
  "#E54D2E",
  "#E5484D",
  "#E93D82",
  "#D6409F",
  "#AB4ABA",
  "#8E4EC6",
  "#6E56CF",
  "#5B5BD6",
  "#3E63DD",
  "#0090FF",
  "#00A2C7",
  "#12A594",
  "#29A383",
  "#30A46C",
  "#46A758",
  "#A18072",
  "#978365",
  "#AD7F58",
];

const ColorButton = styled.button<{
  bgColor: React.CSSProperties["color"];
  selected: boolean;
}>`
  height: 2.75rem;
  width: 3rem;
  border: none;
  cursor: pointer;

  background-color: ${({ bgColor }) => bgColor};
  outline: ${({ selected }) => (selected ? "1px solid white" : "")};
`;

export const AccentColorContainer = () => {
  const [selectedColor, setSelectedColor] = useState(DEFAULT_COLORS[0]);
  const theme = useTheme();

  const onColorButtonClick = (event: any) => {
    const { colorId } = event.target.dataset;

    if (!colorId) return;
    setSelectedColor(colorId);
  };

  const handleColorChangeInput = (event: any) => {
    const value = event.target.value;

    if (value?.length < 1) {
      setSelectedColor("#");
      return;
    }

    // # + hex_code + alpha component (00-ff)
    if (value?.length <= 9) {
      setSelectedColor(event.target.value);
    }
  };

  return (
    <PhzPaper>
      <Box>
        <Text fontWeight="600" mb={1}>
          Accent color
        </Text>
        <Text textColor="textSubtle" fontWeight={300} fontSize={14}>
          Primary color used in your publication theme
        </Text>
        <Flex mt="1.25rem">
          <Box mr={1}>
            <Flex
              height="6rem"
              width="6rem"
              background={selectedColor}
              mr={2}
              margin="0 auto"
              alignItems="center"
              justifyContent="center"
            >
              {selectedColor?.toLocaleLowerCase()}
            </Flex>
            <Input
              value={selectedColor}
              onChange={handleColorChangeInput}
              style={{
                background: theme.colors.background,
                margin: "0 auto",
                marginTop: "0.25rem",
                textTransform: "lowercase",
              }}
              placeholder="Enter Hex"
            />
          </Box>
          <div
            style={{
              width: "2px",
              background: theme.colors.textGrey25,
              marginRight: "0.5rem",
              borderRadius: "1px",
            }}
          />
          <Box>
            <Flex
              flexWrap="wrap"
              gap="0.5rem"
              height="min-content"
              mb={2}
              onClick={onColorButtonClick}
            >
              {DEFAULT_COLORS.map((color) => (
                <ColorButton
                  selected={selectedColor === color}
                  key={color}
                  bgColor={color}
                  data-color-id={color}
                />
              ))}
            </Flex>
            <Text textColor="textSubtle" fontWeight={300} fontSize={14}>
              These colors are selected from{" "}
              <a
                style={{
                  color: theme.colors.primary,
                }}
                href="https://www.radix-ui.com/colors"
              >
                Radix Colors
              </a>
              , choose from these or enter your color manually.
            </Text>
          </Box>
        </Flex>
      </Box>
    </PhzPaper>
  );
};

export default AccentColorContainer;
