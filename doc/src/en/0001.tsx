import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'

const MARK1 = `
Unfortunately, we have not yet provided you with English version.  
If you are interested in translating this document, you are welcome to submit merge request to us.
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
