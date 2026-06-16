import * as React from "react";

/**
 * Immersive category / collection tile — full-bleed image with a gradient
 * scrim, serif title and arrow CTA. Powers "Signature Collections" and
 * "Shop by Room" grids.
 *
 * @startingPoint section="Commerce" subtitle="Immersive category tile" viewport="520x360"
 */
export interface CollectionTileProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Background image URL. Omit for a warm placeholder gradient. */
  image?: string;
  /** Uppercase eyebrow above the title. */
  eyebrow?: string;
  /** Serif title. */
  title?: string;
  /** CTA label. @default "Explore" */
  cta?: string;
  /** Scrim + text tone. @default "dark" */
  tone?: "dark" | "light";
  href?: string;
}

export function CollectionTile(props: CollectionTileProps): JSX.Element;
