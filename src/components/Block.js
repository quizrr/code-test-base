import PropTypes from 'prop-types';
import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';

import { margins, paddings, backgroundColor } from '../ui/utils';

const Block = styled.div`
  ${({ display }) => map(display, val => `display: ${val};`)};
  ${({ position }) => (position ? `position: ${position}` : null)};

  ${({ flex }) => (flex ? `flex: ${flex}` : null)};
  ${({ alignItems }) => map(alignItems, val => `align-items: ${val};`)}
  ${({ justifyContent }) =>
    map(justifyContent, val => `justify-content: ${val};`)};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};

  ${({ height }) => (height ? `height: ${height}` : null)};
  ${({ overflow }) => (overflow ? `overflow: ${overflow}` : null)};

  ${props => backgroundColor(props.backgroundColor)};
  ${props => margins(props)};
  ${props => paddings(props)};
`;

function ifDisplayFlex(props, propName, componentName) {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.display !== 'flex' && props[propName]) {
    return new Error(
      `Trying to set ${propName}: ${props[propName]} on a non flex ${componentName}`,
    );
  }

  return null;
}

Block.propTypes = {
  display: PropTypes.string,
  position: PropTypes.string,
  flex: PropTypes.string,
  alignItems: ifDisplayFlex,
  justifyContent: ifDisplayFlex,
  flexWrap: ifDisplayFlex,
  flexDirection: ifDisplayFlex,
  backgroundColor: PropTypes.string,
};

export default Block;
