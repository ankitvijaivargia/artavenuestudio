import * as React from "react";

/**
 * Letterspaced uppercase section label — the recurring eyebrow above headings.
 *
 * @startingPoint section="Core" subtitle="Section eyebrow label" viewport="700x120"
 */
export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  /** Color tone. @default "accent" */
  tone?: "accent" | "muted" | "on-dark";
  /** Show a hairline rule (leading; trailing too when centered). */
  rule?: boolean;
  /** Center the label (and balance rules on both sides). */
  center?: boolean;
  /** Element tag. @default "div" */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
