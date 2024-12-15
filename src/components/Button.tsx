import { cva } from "class-variance-authority";

const buttonStyles = cva(["hover:bg-secondary-hover", "transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-grey-100"],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
});

export function Button() {
  return <button />;
}
