import * as React from "react";

/**
 * Primary call-to-action button for Art Avenue. Letterspaced uppercase label,
 * near-square corners, slow luxe hover. Use `ghost` for inline text links with
 * an arrow, `secondary` for outline CTAs on light surfaces.
 *
 * @startingPoint section="Forms" subtitle="CTA button — 4 variants, 3 sizes" viewport="700x160"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "accent" | "ghost";
  /** Size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Invert borders/colors for placement on dark (espresso) surfaces. */
  onDark?: boolean;
  /** Render as an anchor with this href instead of a button. */
  href?: string;
  /** Icon node rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label (animates right on hover for `ghost`). */
  iconRight?: React.ReactNode;
  /** Stretch to fill the container width. */
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
