import { p, px, py, pt, pr, pb, pl } from 'styled-components-spacing';

export const paddings = props =>
  [p(props.p)]
    .concat([px(props.px)])
    .concat([py(props.py)])
    .concat([pt(props.pt)])
    .concat([pr(props.pr)])
    .concat([pb(props.pb)])
    .concat([pl(props.pl)]);
