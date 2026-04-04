import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost" | "outline" | "gold";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-95";

    const variants = {
      default:
        "bg-primary text-primary-foreground hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 focus:ring-primary",
      secondary:
        "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 hover:border-muted-foreground/30 focus:ring-secondary",
      ghost:
        "hover:bg-white/10 hover:text-foreground focus:ring-primary",
      outline:
        "border border-border bg-transparent hover:bg-white/5 hover:border-primary focus:ring-primary",
      gold: "bg-amber-500 text-black hover:bg-amber-400 focus:ring-amber-500",
    };

    const sizes = {
      default: "h-11 px-6 py-2",
      sm: "h-9 px-4 text-sm",
      lg: "h-12 px-8 text-lg",
      xl: "h-14 px-10 text-xl",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };