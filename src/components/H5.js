import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';

import {
  margins,
  paddings,
  color,
  backgroundColor,
  fontSize,
} from '../ui/utils';

const H5 = styled.h5`
  ${({ textAlign }) => map(textAlign, val => `text-align: ${val};`)};

  ${props => fontSize(props.fontSize)};
  ${props => color(props.color)};
  ${props => backgroundColor(props.backgroundColor)};
  ${props => margins(props)};
  ${props => paddings(props)};
`;

H5.defaultProps = {
  fontSize: 'baseUnit',
};

export default H5;
