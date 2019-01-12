import React from 'react'
import styled from '@emotion/styled'

const Basic = ({ className }) => (
  <div className={className}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto, itaque enim eius facilis odio.
  </div>
)

const Fancy = styled(Basic)`
  color: hotpink;
  background-color: #eee;
  padding: 20px 0;
  margin: 15px auto;
  text-align: center;
`
const Sassy = ({ className }) => (
    <div className={className}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam velit praesentium ducimus totam esse enim temporibus, eligendi maiores culpa nostrum hic inventore beatae minima placeat!</p>
    </div>
)

const AnotherComponent = styled(Sassy)`
    p {
        font-weight: 600;
        background-color: grey;
        color: orange;
    }
`

export default function StyleAnyComponent() {
  return (
    <div>
      <Fancy />
      <AnotherComponent />
    </div>
  )
}
