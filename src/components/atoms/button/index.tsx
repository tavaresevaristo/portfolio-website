import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./variants";
import { type VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
}

export const Button = ({
  href,
  variant,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {children}
    </Link>
  );
};
