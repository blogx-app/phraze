import "./Button.css";
import { ReactNode } from "react";
import { joinClasses } from "lib";

export function Button({
  "data-test-id": dataTestId,
  children,
  className,
  onClick,
  disabled,
  small,
  title,
  style,
}: {
  "data-test-id"?: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  small?: boolean;
  title?: string;
  style?: Record<string, string | number>;
}): JSX.Element {
  return (
    <button
      disabled={disabled}
      className={joinClasses(
        "Button__root",
        disabled && "Button__disabled",
        small && "Button__small",
        className
      )}
      onClick={onClick}
      title={title}
      aria-label={title}
      style={{
        ...{
          border: "1px solid black",
          fontWeight: "bold",
          padding: "10px 20px",
          borderRadius: "8px",
        },
        ...style,
      }}
      {...(dataTestId && { "data-test-id": dataTestId })}
    >
      {children}
    </button>
  );
}
