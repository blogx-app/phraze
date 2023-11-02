import { Flex, PhzPaper, Text } from "@phraze-app/ui";
import NavigationReorder from "@phraze-app/ui/NavigationReorder";
import React from "react";

const NavigationSettingsPage = () => {
  return (
    <Flex gap="1rem" maxWidth="48rem">
      <PhzPaper width="50%">
        <Text fontWeight={600}>Primary Navigation</Text>
        <NavigationReorder<{ id: string; value: string }>
          initialItems={[
            { id: "name", value: "name" },
            { id: "work", value: "work" },
            { id: "pink", value: "pink" },
            { id: "blue", value: "blue" },
          ]}
          DraggableComponent={React.forwardRef(
            ({ item: { value }, ...rest }, fRef) => (
              <div {...rest} ref={fRef as any}>
                {value}
              </div>
            )
          )}
        />
      </PhzPaper>
      <PhzPaper width="50%">
        <Text fontWeight={600}>Secondary Navigation</Text>
        <NavigationReorder<{ id: string; value: string }>
          initialItems={[
            { id: "name", value: "name" },
            { id: "work", value: "work" },
            { id: "pink", value: "pink" },
            { id: "blue", value: "blue" },
          ]}
          DraggableComponent={React.forwardRef(
            ({ item: { value }, ...rest }, fRef) => (
              <div {...rest} ref={fRef as any}>
                {value}
              </div>
            )
          )}
        ></NavigationReorder>
      </PhzPaper>
    </Flex>
  );
};

export default NavigationSettingsPage;
