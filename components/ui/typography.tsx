import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function H1({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-normal leading-[1.1]", className)}
      {...props}
    />
  );
}

export function H2({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("font-display text-3xl md:text-[42px] font-light tracking-normal leading-[1.1]", className)}
      {...props}
    />
  );
}

export function H3({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-display text-2xl md:text-[28px] font-light tracking-normal leading-[1.2]", className)}
      {...props}
    />
  );
}

export function BodyLarge({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("font-body text-base font-light leading-[1.6]", className)} {...props} />;
}

export function Body({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("font-body text-sm font-light leading-[1.6]", className)} {...props} />;
}

export function Caption({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("font-body text-xs font-light leading-[1.6]", className)} {...props} />;
}

export function Overline({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("font-body text-[10px] font-medium tracking-[1.5px] uppercase leading-[1.3]", className)}
      {...props}
    />
  );
}
