import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';

import { margins, paddings, color, backgroundColor } from '../ui/utils';

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.spacing.baseUp6};
  ${({ textAlign }) => map(textAlign, val => `text-align: ${val};`)};

  ${props => color(props.color)};
  ${props => backgroundColor(props.backgroundColor)};
  ${props => margins(props)};
  ${props => paddings(props)};
`;

H2.defaultProps = {
  color: 'blueDark',
};

export default H2;
