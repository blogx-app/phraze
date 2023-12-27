import { useTheme } from "@emotion/react";
import { PlusCircle } from "@phosphor-icons/react";
import { Box, Flex, Input, PhzButton } from "@phraze-app/ui";
import PhzDialog from "@phraze-app/ui/PhzDialog";
import { useState } from "react";

const AddTagsDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();

  console.log({ openDialog });
  const onClickAddTag = () => {
    setOpenDialog((open) => !open);
  };

  return (
    <PhzDialog
      open={openDialog}
      onOpenChange={onClickAddTag}
      title="Add Tags"
      footerComponent={
        <Flex p={3} pt={0} justifyContent="flex-end" gap="0.75rem">
          <PhzButton variant="secondary">Cancel</PhzButton>
          <PhzButton variant="primary">Add Tags</PhzButton>
        </Flex>
      }
      triggerComponent={
        <PhzButton variant="primary">
          <PlusCircle
            size={22}
            color={theme.colors.background}
            style={{ marginRight: "4px" }}
            weight="light"
          />
          Add Tags
        </PhzButton>
      }
    >
      <Box p={3}>
        <Input placeholder="Tag name..." />
      </Box>
    </PhzDialog>
  );
};

export default AddTagsDialog;
