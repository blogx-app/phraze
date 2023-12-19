import * as DialogPrimitive from "@radix-ui/react-dialog";
import styled from "@emotion/styled";

export const StyledDialogOverlay = styled(DialogPrimitive.Overlay)({
  position: "fixed",
  inset: "0px",
  zIndex: 1200,
  backdropFilter: "blur(4px)",
});

export const StyledDialogContent = styled(DialogPrimitive.Content)(
  {
    position: "fixed",
    left: "calc(100vw - 66%)",
    top: "calc(100vh - 66%)",
    zIndex: 1202,
    display: "grid",
    width: "100%",
    maxWidth: "32rem",
    transform: "translateX(-50%, -50%)",
    gap: "4px",
  },
  ({ theme }) => ({
    border: theme.borders.card,
    background: theme.colors.background,
  })
);

export const StyledDialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;

  padding: 1rem;
  padding-top: 1.25rem;

  border-bottom: ${({ theme }) => theme.borders.input};

  color: ${({ theme }) => theme.colors.accentForeground};
`;

export const StyledDialogDescription = styled(DialogPrimitive.Description)(
  ({ theme }) => ({
    fontSize: "14px",
    color: theme.colors.textSubtle,
  })
);
