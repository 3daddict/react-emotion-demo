import React from "react";
//Needed to add /macro to access the babel-plugin-emotion .babelrc file not loading for some reason
import styled from '@emotion/styled/macro'

const Child = styled.div`
  color: red;
`;

const Parent = styled.div`
  ${Child} {
    color: green;
  }
`;

export default function TargetAnotherComponent() {
  return (
    <div>
      <Parent>
        <Child>green</Child>
      </Parent>
      <Child>red</Child>
    </div>
  );
}
