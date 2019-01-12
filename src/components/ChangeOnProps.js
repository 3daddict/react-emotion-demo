import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  color: ${props => (props.primary ? "hotpink" : "blue")};
`;

const Container = styled.div(props => ({
  display: "flex",
  flexDirection: props.column && "column"
}));

export default function ChangeOnProps() {
  return (
    <Container column>
      <Button>This is a regular button.</Button>
      <Button primary>This is a primary button.</Button>
    </Container>
  );
}
