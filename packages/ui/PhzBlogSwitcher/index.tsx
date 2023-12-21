"use client";

import { useTheme } from "@emotion/react";
import * as React from "react";
import { CaretUpDown, Check, PlusCircle } from "@phosphor-icons/react";

import { PhzAvatars } from "../PhzAvatars";
import Button from "../PhzButton";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../Command";
import { DialogTrigger } from "../PhzDialog/PhzDialog.Components";
import PhzDialog from "../PhzDialog";
import { Input } from "../Input";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { Box, Flex } from "../Box";

const groups = [
  {
    label: "Personal Account",
    teams: [
      {
        label: "Michael Scott",
        value: "personal",
      },
    ],
  },
  {
    label: "Teams",
    teams: [
      {
        label: "Acme Inc.",
        value: "acme-inc",
      },
    ],
  },
];

type Team = (typeof groups)[number]["teams"][number];

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface TeamSwitcherProps extends PopoverTriggerProps {
  onClickHandler: (value: string) => JSX.Element;
}

// @TODO - Add clear search button when no value is found
export default function PhzBlogSwitcher({
  className,
  onClickHandler,
}: TeamSwitcherProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false);
  const [selectedTeam, setSelectedTeam] = React.useState<Team>(
    groups[0].teams[0]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          aria-label="Select a team"
          style={{
            height: "2.25rem",
            background: theme.colors.background,
            color: theme.colors.foreground,
            outline: "none",
            padding: 0,
          }}
        >
          <PhzAvatars
            size="20px"
            style={{
              marginRight: "0.5rem",
            }}
            name={selectedTeam.label}
          />
          {selectedTeam.label}
          <CaretUpDown
            style={{
              marginLeft: "0.5rem",
              height: "1rem",
              width: "1rem",
              flexShrink: 0,
              opacity: "0.5",
            }}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent style={{ padding: "0" }}>
        <Command>
          <CommandList>
            <CommandInput placeholder="Search blog..." />
            <CommandEmpty>No team found.</CommandEmpty>
            {groups.map((group) => (
              <CommandGroup key={group.label} heading={group.label}>
                {group.teams.map((team) => (
                  <CommandItem
                    key={team.value}
                    onSelect={() => {
                      setSelectedTeam(team);
                      setOpen(false);
                    }}
                  >
                    <PhzAvatars
                      size="20px"
                      style={{
                        marginRight: "0.5rem",
                        lineHeight: 1,
                      }}
                      name={team.label}
                    />
                    {team.label}
                    <Check
                      style={{
                        height: "1rem",
                        width: "1rem",
                        marginLeft: "auto",
                        opacity: selectedTeam.value === team.value ? 1 : 0,
                      }}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup
              style={{
                borderTop: theme.borders.card,
              }}
            >
              <DialogTrigger asChild>
                <CommandItem
                  onSelect={(props) => {
                    setOpen(false);
                    setShowNewTeamDialog(true);
                    onClickHandler(props);
                  }}
                  id="addding-botder"
                >
                  <PlusCircle
                    size="1.25rem"
                    style={{
                      marginRight: "0.5rem",
                    }}
                  />
                  Create Blog
                </CommandItem>
              </DialogTrigger>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
