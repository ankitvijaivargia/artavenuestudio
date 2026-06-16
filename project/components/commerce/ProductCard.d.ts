import * as React from "react";

/**
 * Editorial product card with a tall 4:5 image, slow hover zoom, serif name
 * and quiet price. Composes into collection grids and "Pair With" rails.
 *
 * @startingPoint section="Commerce" subtitle="Editorial product card" viewport="360x520"
 */
export interface ProductCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Product image URL. Omit to render a warm placeholder block. */
  image?: string;
  /** Optional badge node (e.g. <Badge>New</Badge>) pinned top-left. */
  badge?: React.ReactNode;
  /** Small uppercase category/eyebrow above the name. */
  category?: string;
  /** Product name (serif). */
  name?: string;
  /** Price string, pre-formatted (e.g. "₹ 1,48,000"). */
  price?: string;
  /** Secondary note next to price (e.g. "Made to order"). */
  note?: string;
  /** Show the hover "save" heart. @default true */
  favorite?: boolean;
  href?: string;
}

export function ProductCard(props: ProductCardProps): JSX.Element;
