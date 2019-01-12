//Composition is one of the most powerful and useful patterns in Emotion. You can compose styles together by interpolating value returned from css in another style block.
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const danger = css`
  color: red;
`

const base = css`
  background-color: darkgreen;
  color: turquoise;
`

export default function Composition() {
  return (
    <div
    css={css`
      ${base};
      background-color: #eee;
    `}
  >
  <style>
      {`
        .danger {
          color: red;
        }
        .base {
          background-color: lightgray;
          color: turquoise;
        }
      `}
      >
    </style>
    <p className="base danger">What color will this be?</p>
    <div css={base}>This will be turquoise</div>
    <div css={[danger, base]}>
      This will be also be turquoise since the base styles
      overwrite the danger styles.
    </div>
    <div css={[base, danger]}>This will be red</div>
  </div>
  )
}
