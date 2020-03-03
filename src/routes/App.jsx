import React from 'react';

import Block from '../components/Block';
import H1 from '../components/H1';
import H2 from '../components/H2';
import H3 from '../components/H3';
import H4 from '../components/H4';
import H5 from '../components/H5';
import P from '../components/P';

const App = () => (
  <Block p="baseUnit">
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <H5>Heading 5</H5>
    <P>This here is a standard paragraph of text.</P>
  </Block>
);

export default App;
