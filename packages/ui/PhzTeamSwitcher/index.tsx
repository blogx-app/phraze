"use client";

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../PhzDialog";
import { Input } from "../Input";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../PhzSelect";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Label = styled.label``;

const groups = [
  {
    label: "Personal Account",
    teams: [
      {
        label: "Alicia Koch",
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
      {
        label: "Monsters Inc.",
        value: "monsters",
      },
    ],
  },
];

type Team = (typeof groups)[number]["teams"][number];

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface TeamSwitcherProps extends PopoverTriggerProps {}

export default function TeamSwitcher({ className }: TeamSwitcherProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false);
  const [selectedTeam, setSelectedTeam] = React.useState<Team>(
    groups[0].teams[0]
  );

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            role="combobox"
            aria-expanded={open}
            aria-label="Select a team"
            style={{
              minWidth: "200px",
              height: "2.25rem",
              background: theme.colors.background,
              color: theme.colors.foreground,
              // border: theme.borders.card,
            }}
          >
            <PhzAvatars
              size="20px"
              style={{
                marginRight: "0.5rem",
              }}
            />
            {selectedTeam.label}
            <CaretUpDown
              style={{
                marginLeft: "auto",
                height: "1rem",
                width: "1rem",
                flexShrink: 0,
                opacity: "0.5",
              }}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent style={{ minWidth: "200px", padding: "0" }}>
          <Command>
            <CommandList>
              <CommandInput placeholder="Search team..." />
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
                    onSelect={() => {
                      setOpen(false);
                      setShowNewTeamDialog(true);
                    }}
                    id="addding-botder"
                  >
                    <PlusCircle
                      size="1.25rem"
                      style={{
                        marginRight: "0.5rem",
                      }}
                    />
                    Create Team
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create team</DialogTitle>
          <DialogDescription>
            Add a new team to manage products and customers.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div
          // className="space-y-4 py-2 pb-4"
          >
            <div
            // className="space-y-2"
            >
              <Label htmlFor="name">Team name</Label>
              <Input id="name" placeholder="Acme Inc." />
            </div>
            <div
            // className="space-y-2"
            >
              <Label htmlFor="plan">Subscription plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">
                    <span
                    // className="font-medium"
                    >
                      Free
                    </span>{" "}
                    -{" "}
                    <span
                    // className="text-muted-foreground"
                    >
                      Trial for two weeks
                    </span>
                  </SelectItem>
                  <SelectItem value="pro">
                    <span
                    //  className="font-medium"
                    >
                      Pro
                    </span>{" "}
                    -{" "}
                    <span
                    // className="text-muted-foreground"
                    >
                      $9/month per user
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
            Cancel
          </Button>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
