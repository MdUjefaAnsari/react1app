import {
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Skill() {
  const data = [
    {
      icon: faCheckCircle,
      title: "Benefits of Learning from",
      subtitle: "100% project based learning",
      paragraph:
        "We build more than 2 time better than other company which is very special for us.",
    },
    {
        icon: faCheckCircle,
      subtitle: "Video Access Timing",
      paragraph:
        "We build more than 2 time better than other company which is very special for us.",
    },
    {
      icon: faCheckCircle,
      subtitle: "Live Call Supports",
      paragraph:
        "We build more than 2 time better than other company which is very special for us.",
    },{
      icon: faCheckCircle,
      subtitle: "High Chance of Selection",
      paragraph:
        "We build more than 2 time better than other company which is very special for us.",
    }
  ];
  const Column = ({ data }) => {
    return (
      <>
          <h2>{data.title}</h2>
          <div className="box">
            <div className="my-2 text">
              <FontAwesomeIcon icon={data.icon} className="me-2 fs-2 text-primary" />
              <span className="fs-5">{data.subtitle}</span>
            </div>
            <p>{data.paragraph}</p>
          </div>
        
      </>
    );
  };


  const Image = ({ data }) => {
    return (
      <>
       <div >
       <img className="border border-light rounded-circle img-fluid fluid shadow img-rounded"
          src="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg"
          alt=""
        />
       </div>
      </>
    );
  };
  return (
    <Container className="bg-light shadow py-5">
      <Row>
        <Col className="py-3 m-2">
          <Row >
            {data.map((data, index) => {
              return <Column data={data} key={index} />;
            })}
          </Row>
        </Col>
        <Col>
          <Row >
            <Image />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Skill;
