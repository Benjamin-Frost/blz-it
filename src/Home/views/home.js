import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";

import wsgLogo from "../../assets/img/wsg.png";
import aeg from "../../assets/img/aeg.jpg";
import headerDivider from "../../assets/img/header-divider.svg";

function Home() {
  return (
    <div>
      <Jumbotron className="bg-gradient position-relative">
        <Container className="text-white pb-xl">
          <Image
            src={wsgLogo}
            fluid
            width="300"
            className="mx-auto d-block mb-5"
          />
          <h1 className="text-center">
            WorldSkills Germany Bundes
            <wbr />
            leistungszentren im IT-Bereich
          </h1>
          <h5 className="text-justify px-2 pt-3">
            Die WorldSkills Germany - Bundesleistungszentren haben die Aufgabe,
            zusätzlich zu den Trainings nach WorldSkills-Prinzipien für eine
            möglichst breite Teilnehmerschaft auch die zukünftigen Mitglieder
            der deutschen Nationalmannschaft und somit Teilnehmer an
            internationalen Wettbewerben zu trainieren. Sie werden pro
            Skill-Disziplin exklusiv nur einmal ernannt. Die Ernennung erfolgt
            durch die Skills-Paten (Verbände, Unternehmen, Institutionen)
            gemeinsam mit WorldSkills Germany.
          </h5>
        </Container>
        <div className="header-divider">
          <Image src={headerDivider} />
        </div>
      </Jumbotron>
      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="h1 text-center">Unsere Standorte</h2>
          </Col>
        </Row>
        <Row className="my-4 py-4">
          <Col xs={12} md={6} className="order-last order-md-first">
            <h3>Skill08 &amp; Skill09 – AEG</h3>
            <p className="text-justify">
              Für die Softwarentwicklung-Skills, Skill08 – Mobile App
              Development und Skill09 – IT-Software Solutions for Business, ist
              das{" "}
              <a
                href="https://aeg-nb.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Albert-Einstein-Gymnasium Neubrandenburg
              </a>{" "}
              das Bundesleistungszentrum.
            </p>
            <Button
              href="/skill08"
              variant="outline-dark"
              size="lg"
              className="rounded-pill"
            >
              Zu Skill 08
            </Button>
            <Button
              href="/skill09"
              variant="outline-dark"
              size="lg"
              className="rounded-pill ml-3"
            >
              Zu Skill 09
            </Button>
          </Col>
          <Col
            xs={12}
            md={6}
            className="order-first order-md-last mb-4 mb-md-0"
          >
            <Image src={aeg} rounded fluid />
          </Col>
        </Row>
        <Row className="my-4 py-4">
          <Col xs={12} md={6} className="order-first mb-4 mb-md-0">
            <Image src={aeg} rounded fluid />
          </Col>
          <Col xs={12} md={6} className="order-last">
            <h3>Skill39 – MMBbS</h3>
            <p className="text-justify">
              Die{" "}
              <a
                href="https://www.mmbbs.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Multi Media Berufsbildende Schule Hannover
              </a>{" "}
              ist das Bundesleistungszentrum für den Skill39 – IT - Network
              Systems Administration.
            </p>
            <Button
              href="https://www.worldskillsgermany.com/de/wettbewerbe/leistungszentren/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-dark"
              size="lg"
              className="rounded-pill"
            >
              Zu Skill 39
            </Button>
          </Col>
        </Row>
      </Container>
      <footer className="bg-light">
        <Container>
          <p>Test</p>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
