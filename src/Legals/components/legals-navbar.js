import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function LegalsNavbar() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">Zur Startseite</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default LegalsNavbar;
