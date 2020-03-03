import { css } from 'styled-components';
import { map } from 'styled-components-breakpoint';

export const borderRadius = br => css`
  ${({ theme }) => map(br, val => `border-radius: ${theme.spacing[val]};`)};
`;
