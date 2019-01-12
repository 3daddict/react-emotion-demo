/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Component } from 'react';
import StyledElement from './components/StyledElement';
import ChangeOnProps from './components/ChangeOnProps';
import StyleAnyComponent from './components/StyleAnyComponent';
import RenderedWithComponent from './components/RenderedWithComponent';
import TargetAnotherComponent from './components/TargetAnotherComponent';
import ObjectStyles from './components/ObjectStyles';
import PropFowarding from './components/PropFowarding';
import DynamicStyles from './components/DynamicStyles';
import Composition from './components/Composition';


class App extends Component {
  render() {
    return (
      <div>
          <StyledElement />
          <ChangeOnProps />
          <StyleAnyComponent />
          <RenderedWithComponent />
          <TargetAnotherComponent />
          <ObjectStyles />
          <PropFowarding />
          <DynamicStyles />
          <hr />
          <Composition />
      </div>
    );
  }
}

export default App;
