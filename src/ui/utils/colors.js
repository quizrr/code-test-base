import { css } from 'styled-components';
import { map } from 'styled-components-breakpoint';

export const siteColors = {
  white: '#ffffff',
  black: '#000000',
  grayLight: '#f4f4f4',
  grayDark: '#cccccc',
  grayDarker: '#777777',

  blueDark: '#252d90',
  blueDarker: '#150456',

  orange: '#F46C40',

  coral: '#FA937B',
  coralLight: '#FFBB98',

  green: '#66BC93',
  red: '#ED6964',

  disabled: '#cccccc',
  action: '#FA937B',
  transparent: 'transparent',
};

export const backgroundColor = c => css`
  ${({ theme }) =>
    map(
      c,
      val =>
        `background-color: ${
          val ? theme.colors[val] : theme.colors.transparent
        };`,
    )};
`;

export const color = c => css`
  color: ${({ theme }) => (c ? theme.colors[c] : theme.colors.baseFont)};
`;
