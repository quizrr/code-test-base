import { css } from 'styled-components';
import { map } from 'styled-components-breakpoint';

export const fontSize = fs => css`
  ${({ theme }) => map(fs, val => `font-size: ${theme.spacing[val]};`)};
`;
