import { Navbar, Container, Nav } from "react-bootstrap"


export default function MainNavbar({styles}){
  return (
    <div>
      <Navbar className={styles} fixed="top" >
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link className="me-3" href="#home">Work</Nav.Link>
              <Nav.Link className="me-3" href="#link">About</Nav.Link>
              <Nav.Link className="me-3" href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
