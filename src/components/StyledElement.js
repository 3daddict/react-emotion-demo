import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  text-align: center;
  color: turquoise;
`

export default function StyledElement() {
  return (
    <div>
      <Button>This my StyledElement component.</Button>
    </div>
  )
}
