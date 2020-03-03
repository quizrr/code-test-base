import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';

import { color, margins, paddings, fontSize } from '../ui/utils';

const P = styled.p`
  ${({ display }) => map(display, val => `display: ${val};`)};
  ${({ flex }) => (flex ? `flex: ${flex}` : null)};
  ${({ textAlign }) => map(textAlign, val => `text-align: ${val};`)};
  margin-bottom: ${({ theme }) => theme.spacing.baseUnit};
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'inherit')};

  ${props => color(props.color)};
  ${props => margins(props)};
  ${props => paddings(props)};
  ${props => fontSize(props.fontSize)};

  strong {
    font-weight: bold;
  }
`;

export default P;
