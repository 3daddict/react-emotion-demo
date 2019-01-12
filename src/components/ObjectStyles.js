import React from 'react'
import styled from '@emotion/styled'

const H1 = styled.h1(
    {
      fontSize: 20
    },
    props => ({ color: props.color })
 )

export default function ObjectStyles() {
  return (
    <div>
      <H1 color="lightgreen">This is lightgreen.</H1>
    </div>
  )
}
