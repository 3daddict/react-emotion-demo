import React from 'react'
import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'

const H1 = styled('h1', {
    shouldForwardProp: prop =>
      isPropValid(prop) && prop !== 'color'
  })(props => ({
    color: 'hotpink'
  }))

export default function PropFowarding() {
  return (
    <div>
      <H1 color="lightgreen">This is lightgreen.</H1>
    </div>
  )
}
