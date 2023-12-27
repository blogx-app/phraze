import { DialogProps } from "@radix-ui/react-dialog";
import React from "react";

export interface PhzDialogProps {
  open: boolean;
  title: string;
  description?: string;
  children: React.ReactNode;
  footerComponent: React.ReactNode;
  /**
   * use <DialogTrigger> inside this component.
   */
  triggerComponent: React.ReactNode;
  onOpenChange: DialogProps["onOpenChange"];
}
