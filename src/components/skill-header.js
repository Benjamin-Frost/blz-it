import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";

import wsgLogo from "../assets/img/wsg.png";
import headerDivider from "../assets/img/header-divider.svg";

function SkillHeader(props) {
  return (
    <Jumbotron className="bg-gradient position-relative rounded-0">
      <Container className="text-white text-center pb-xl">
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
            <h1 className="display-1 mb-0">Skill {props.skillNumber}</h1>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col>
            <h1 className="display-4">{props.skillName}</h1>
            <h2>{props.skillDescription}</h2>
          </Col>
        </Row>
      </Container>
      <div className="header-divider">
        <Image src={headerDivider} />
      </div>
    </Jumbotron>
  );
}

export default SkillHeader;
