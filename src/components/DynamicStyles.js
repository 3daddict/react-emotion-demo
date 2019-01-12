import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const dynamicStyle = props =>
  css`
    color: ${props.color};
  `;

const Container = styled.div`
  ${dynamicStyle};
`;

export default function DynamicStyles() {
  return (
    <div>
      <Container color="lightgreen">This is lightgreen.</Container>
    </div>
  );
}
