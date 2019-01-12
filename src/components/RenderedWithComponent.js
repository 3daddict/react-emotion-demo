import React from 'react'
import styled from '@emotion/styled'

const Section = styled.section`
  background: #333;
  color: #eee;
  text-align: center;
`
// this component has the same styles as Section but it renders an aside
const Aside = Section.withComponent('aside')

export default function RenderedWithComponent() {
  return (
    <div>
        <Section>This is a section</Section>
        <Aside>This is an an aside</Aside>
    </div>
  )
}
