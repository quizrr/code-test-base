import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';

import { margins, paddings, color, backgroundColor } from '../ui/utils';

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.spacing.baseUp8};
  ${({ textAlign }) => map(textAlign, val => `text-align: ${val};`)};

  ${props => color(props.color)};
  ${props => backgroundColor(props.backgroundColor)};
  ${props => margins(props)};
  ${props => paddings(props)};
`;

export default H1;
