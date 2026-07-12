import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-subtle font-body text-xs font-medium uppercase tracking-[1.5px] transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold disabled:pointer-events-none disabled:opacity-50 disabled:bg-brand-sand disabled:text-brand-graphite disabled:border-none",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-onyx text-brand-ivory hover:bg-brand-charcoal hover:text-brand-gold",
        secondary:
          "bg-brand-ivory text-brand-onyx hover:bg-brand-linen hover:text-brand-gold border border-brand-sand",
        outline:
          "border border-brand-onyx text-brand-onyx bg-transparent hover:bg-brand-onyx hover:text-brand-ivory",
        ghost: "hover:bg-brand-linen hover:text-brand-gold",
        link: "text-brand-onyx underline-offset-4 hover:text-brand-gold hover:underline",
        icon: "hover:bg-brand-linen hover:text-brand-gold rounded-full p-2",
        goldGradient: "bg-gradient-to-r from-brand-antiqueGold via-brand-gold to-brand-deepAmber text-brand-ivory hover:opacity-90 shadow-sm",
      },
      size: {
        default: "h-[52px] px-6 py-4",
        sm: "h-[44px] px-4",
        lg: "h-[60px] px-8",
        icon: "h-10 w-10 p-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? (React.Fragment as unknown as React.ElementType) : "button"; // Quick workaround for Radix Slot if needed later
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
