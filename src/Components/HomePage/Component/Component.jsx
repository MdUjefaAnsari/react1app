import React from "react";
import { faAnchorCircleCheck, faAngry, faHouse, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

function Component() {
  const data = [
    {
      icon:faHouse,
      title:"Full Course",
      subtitle:"24 Hours Supports"
    }, {
      icon:faMoon,
      title:"React Js",
      subtitle:"Learn in Hourly"
    }, {
      icon:faAnchorCircleCheck,
      title:"I am Other",
      subtitle:"Come in"
    }, {
      icon:faAngry,
      title:"I a very angry",
      subtitle:"Make me happy"
    }
  ];
  const Column = ({ data }) => {
    return (
      <Col className="text-center p-5 shadow border my-2 mx-2 rounded-4 text-info bg-dark">
        <div className="icon-box py-5 rounded-circle shadow fs-1 border border-info bg-black">
          <FontAwesomeIcon icon={data.icon} />
        </div>
        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>
      </Col>
    );
  };
  return (
    <Container>
      <Row>
        {data.map((data, index) => {
          return <Column data={data} key={index} />;
        })}
      </Row>
    </Container>
  );
}

export default Component;
