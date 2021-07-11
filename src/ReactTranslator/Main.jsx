import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub, faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Main() {
  return (
    <>
      <Container className="mt-5 top mx-2">
        <div className="d-flex justify-content-center row">
          <h1 className="heading">React Translator</h1>
          <div className="description">A simple translator app made with react and google translation API which translates and detects any language into any other language...</div>
        </div>
        <div className="d-flex justify-content-between mt-3" >
          <a className="btn primary" href="/translate" role="button">Translate Text</a>
          <a className="btn primary" href="/detect" role="button">Detect Lang</a>
        </div>
      </Container>
      <Container>
      <Navbar bg="transparent" fixed="bottom" variant="light">
        <Navbar.Brand >
          <strong style={{color: "#66fcf1", letterSpacing: "0.2rem"}}>Niku419</strong>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="https://github.com/niku419"><FontAwesomeIcon  icon={faGithub} /></Nav.Link>
          <Nav.Link href="https://linkedin.com/niku_419"><FontAwesomeIcon  icon={faLinkedinIn} /></Nav.Link>
          <Nav.Link href="https://instagram.com/_niku_419"><FontAwesomeIcon  icon={faInstagram} /></Nav.Link>
          <Nav.Link href="https://www.facebook.com/profile.php?id=100069976086066"><FontAwesomeIcon icon={faFacebookF} /></Nav.Link>
        </Nav>
        {/* <Form inline>
          <Nav className="mr-auto"> 
            <Nav.Link>made for Hiku<FontAwesomeIcon color="#8d0101" icon={faHeart} /></Nav.Link>
          </Nav> 
        </Form>*/}
      </Navbar>
    </Container>
  </>
  )
}
