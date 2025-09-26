import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "px-5 py-3 rounded-lg shadow font-mono text-sm transition",
  {
    variants: {
      variant: {
        primary: "bg-black text-white hover:bg-neutral-900",
        outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
