import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";

import wsgLogo from "../../assets/img/wsg.png";

function Skill09() {
  return (
    <div>
      <Jumbotron className="bg-gradient">
        <Container className="text-white text-center">
          <Row>
            <Col xs={12} md={6}>
              <Image
                src={wsgLogo}
                fluid
                width="300"
                className="mx-auto d-block"
              />
            </Col>
            <Col xs={12} md={6} className="align-self-center">
              <h1 className="display-1 mb-0">Skill 09</h1>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <h1 class="display-4">Software Development for Business</h1>
              <h3>
                Die besten jungen Softwareentwickler Deutschlands werden gesucht
              </h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Skill09;
