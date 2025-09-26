import { buttonVariants } from "./variants";
import { type VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
}
