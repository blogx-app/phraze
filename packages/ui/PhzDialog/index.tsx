import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./PhzDialog.Components";
import { PhzDialogProps } from "./type";

export const PhzDialog = ({
  open,
  title,
  description,
  children,
  footerComponent,
  triggerComponent,
  onOpenChange,
}: PhzDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{triggerComponent}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>{footerComponent}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PhzDialog;
export * from "./PhzDialog.Components";
