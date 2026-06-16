import * as React from "react";

/**
 * Small uppercase status/category label for product and editorial cards.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "outline" */
  variant?: "solid" | "tint" | "outline" | "accent" | "on-image";
  /** Show a leading dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
