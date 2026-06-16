import * as React from "react";

/**
 * Text input / textarea for Art Avenue forms — trade enquiries, newsletter,
 * checkout. Hairline box with an uppercase micro-label and bronze focus ring.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase micro-label shown above the field. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — replaces hint and turns the field terracotta. */
  error?: string;
  /** Show a bronze asterisk after the label. */
  required?: boolean;
  /** Render a multi-line textarea instead of an input. */
  multiline?: boolean;
}

export function Input(props: InputProps): JSX.Element;
