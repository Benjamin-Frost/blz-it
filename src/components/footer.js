import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="text-center">
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <p>Copyright &copy; WorldSkills Germany - BLZ IT</p>
          </Col>
          <Col xs={12} md={6}>
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
