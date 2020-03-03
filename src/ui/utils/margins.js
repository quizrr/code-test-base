import { m, mx, my, mt, mr, mb, ml } from 'styled-components-spacing';

export const margins = props =>
  [m(props.m)]
    .concat([mx(props.mx)])
    .concat([my(props.my)])
    .concat([mt(props.mt)])
    .concat([mr(props.mr)])
    .concat([mb(props.mb)])
    .concat([ml(props.ml)]);
