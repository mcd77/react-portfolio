import React from 'react';
import logo from './../images/chris.jpg'; 
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {LinkContainer} from 'react-router-bootstrap'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Projects = () =>{
  return (
    <div>
      <Container className="mb-3">
        <Card className="mb-3">
        <Card.Body>
              <Card.Title className="mb-4 text-center">
                <b>React Apps ⚛️</b>
              </Card.Title>
              <Card.Title  className="mb-2 lg">
                React eCommerce Shop front-end
              </Card.Title>
              <Card.Text className="mb-2 ">
                This project utilizes React Router DOM, Redux, Bootstrap, and React-toastify to create an e-Commerce shop front-end.  
              </Card.Text>
              <LinkContainer to="/projects"  onClick={() => {window.open("https://chrisssssssssssssssssss.github.io/react-redux-shop/","_blank")}}>
                <Button variant="success" className="mb-5" >Live Version</Button>
              </LinkContainer>
              <span> </span>
              <LinkContainer  to="/projects"  onClick={() => {window.open("https://github.com/chrisssssssssssssssssss/react-redux-shop","_blank")}}>
                <Button className="mb-5" variant="primary" >GitHub repo</Button>
              </LinkContainer>   
              <Card.Title className="mb-2">
                React form
              </Card.Title>
              <Card.Text>
               This project is a multi-step form using React
              </Card.Text>
              <LinkContainer to="/projects"  onClick={() => {window.open("https://chrisssssssssssssssssss.github.io/react-redux-form/","_blank")}}>
                <Button variant="success" className="mb-2" >Live Version</Button>
              </LinkContainer>
              <span> </span>
              <LinkContainer  to="/projects"  onClick={() => {window.open("https://github.com/chrisssssssssssssssssss/react-redux-form","_blank")}}>
                <Button className="mb-2" variant="primary" >GitHub repo</Button>
              </LinkContainer>   
        </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
export default Projects;