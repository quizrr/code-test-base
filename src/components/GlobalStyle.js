import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import NexaBold from '../assets/fonts/nexa/nexa-bold.otf';
import RobotoRegular from '../assets/fonts/roboto/Roboto-Regular.ttf';
import RobotoBold from '../assets/fonts/roboto/Roboto-Bold.ttf';
import { breakpoints } from '../ui/utils';

const GlobalStyle = createGlobalStyle`
    ${reset};

    @font-face {
      font-family: 'nexa-bold';
      src: url(${NexaBold});
    }

    @font-face {
      font-family: 'roboto';
      src: url(${RobotoRegular});
      font-weight: ${({ theme }) => theme.fontWeights.normal};
    }

    @font-face {
      font-family: 'roboto';
      src: url(${RobotoBold});
      font-weight: ${({ theme }) => theme.fontWeights.bold};
    }

    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    html {
      font-size: 16px;

      @media (min-width: ${breakpoints.tablet}px) {
        font-size: 18px;
      }
    }

    html,
    body,
    #app {
      height: 100%;
      overflow: hidden;

      @media print {
        overflow: auto;
        height: auto;
      }
    }

    #portal-root {
      height: 100%;
    }

    #app {
      display: flex;
      flex-direction: column;
    }

    body {
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.white};
      font-family: ${({ theme }) => theme.fontFamily.base};
      font-size: ${({ theme }) => theme.spacing.baseUnit};
      font-weight: ${({ theme }) => theme.fontWeights.normal};
      line-height: 1.3;
      -webkit-font-smoothing: antialiased;
      overscroll-behavior: none;
    }

    img,
    iframe {
      display: block;
      width: 100%;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.blueDark};

      &:hover {
        text-decoration: underline;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${({ theme }) => theme.fontFamily.heading};
    }

    svg {
      display: block;
    }
`;

export default GlobalStyle;
