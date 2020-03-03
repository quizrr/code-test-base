import { map } from 'styled-components-breakpoint';

export const maxWidths = ({ maxWidth = {} }) =>
  map(maxWidth, val => `max-width: ${val};`);
