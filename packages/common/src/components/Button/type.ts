type ButtonType = "default" | "primary" | "success" | "warning" | "danger";

type ButtonSize = "large" | "normal" | "small" | "mini";

export interface ButtonProps {
  type: ButtonType;
  size: ButtonSize;
}
