import React from 'react'
import { Container } from 'react-bootstrap'

export default function Main() {
  return (
    <Container className="mt-3">
      <div className="d-flex justify-content-center row">
        <h1 className="heading">React Translator</h1>
        <div className="description mt-3">A simple translator app made with react and google translation API which translates and detects any language into any other language</div>
      </div>
      <div className="d-flex justify-content-between m-5" >
        <a className="btn primary" href="/translate" role="button">Translate Text</a>
        <a className="btn primary" href="/detect" role="button">Detect Lang</a>
			</div>
    </Container>
  )
}
