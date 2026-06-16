import * as React from "react";

/**
 * Styled select control — matches Input with a thin custom caret. Use for
 * collection sorting, filter facets, and form pickers.
 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Uppercase micro-label shown above the field. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  required?: boolean;
  /** Convenience options; alternatively pass <option> children. */
  options?: Array<string | { value: string; label: string }>;
}

export function Select(props: SelectProps): JSX.Element;
