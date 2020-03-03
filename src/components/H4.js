import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';

import {
  margins,
  paddings,
  color,
  backgroundColor,
  fontSize,
} from '../ui/utils';

const H4 = styled.h4`
  ${({ textAlign }) => map(textAlign, val => `text-align: ${val};`)};

  ${props => fontSize(props.fontSize)};
  ${props => color(props.color)};
  ${props => backgroundColor(props.backgroundColor)};
  ${props => margins(props)};
  ${props => paddings(props)};
`;

H4.defaultProps = {
  fontSize: 'baseUp2',
  color: 'coral',
};

export default H4;
