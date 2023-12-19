"use client";

import * as React from "react";
import styled from "@emotion/styled";
import { DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Dialog, DialogContent } from "../PhzDialog/PhzDialog.Components";

const StyledCommanPrimitive = styled(CommandPrimitive)(
  {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: "6px",
  },
  ({ theme }) => ({
    background: theme.colors.popover,
    color: theme.colors.popoverForeground,
  })
);

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <StyledCommanPrimitive ref={ref} {...props} />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent
        style={{
          overflow: "hidden",
          padding: 0,
        }}
      >
        <Command
        // className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
        >
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

// const CommandDialog = CommandPrimitive.Dialog;

const StyledCommandInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const StyledCommandInput = styled(CommandPrimitive.Input)(
  {
    display: "flex",
    width: "100%",
    borderRadius: "8px",
    padding: "0.75rem 0",
    fontSize: "14px",
    outline: "none",
    border: "none",
  },
  ({ theme }) => ({
    color: theme.colors.foreground,
    background: theme.colors.transparent,
    "::placeholder": {
      color: theme.colors.textSubtle,
    },

    ":disabled": {
      cursor: "not-allowed",
      opacity: "0.5",
    },
  })
);

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <StyledCommandInputWrapper cmdk-input-wrapper="">
    <MagnifyingGlass style={{ marginRight: "0.5rem" }} />
    <StyledCommandInput ref={ref} {...props} />
  </StyledCommandInputWrapper>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    // className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    // className="py-6 text-center text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const StyledCommandGroup = styled(CommandPrimitive.Group)`
  overflow: hidden;
  padding: 0.25rem;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 12px;

  [cmdk-group-heading] {
    padding: 6px 0.5rem;
  }
`;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <StyledCommandGroup ref={ref} {...props} />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    // className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const StyledCommandItem = styled(CommandPrimitive.Item)`
  position: relative;
  display: flex;
  cursor: default;
  user-select: none;
  align-items: center;
  border-radius: 4px;
  padding: 4px 0.5rem;
  font-size: 14px;
  font-weight: 500;
  outline: none;

  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;

  [aria-selected] {
    background: pink;
    color: blue;
    opacity: 0.12;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accentForeground};
  }

  data-[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <StyledCommandItem
    ref={ref}
    // aria-selected:bg-accent
    // aria-selected:text-accent-foreground
    // data-[disabled]:pointer-events-none
    // data-[disabled]:opacity-50
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const StyledCommandShortcut = styled.span`
  margin-left: auto;
  font-size: 8px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.textSubtle};
`;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return <StyledCommandShortcut {...props} />;
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
