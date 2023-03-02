import React from 'react';
import logo from './../images/chris.jpg'; 
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import {LinkContainer} from 'react-router-bootstrap'


const Home = () =>{

  const slideImages = [
    'https://user-images.githubusercontent.com/126714281/222319643-1731a61f-f4f2-4901-95b4-ed662f7a571b.png',
    'https://user-images.githubusercontent.com/126714281/222320174-fe8e7028-4bb4-4f8d-bdae-ca1e7247fa20.png',
    'https://user-images.githubusercontent.com/126714281/222320602-637a7248-a43b-4da7-83c5-c6ac54049be5.png'
  ];

  return (
    <div>
      <Container className="mb-3">
        <Card className="mb-3">
        <Card.Body className="text-center">
              <Image className="mb-3" style={{"width":"175px", "height":"175px"}} src={logo} roundedCircle />
              <Card.Title>
                <b>Hello, I'm Chris!</b> <span className="wave">👋</span>
              </Card.Title>
              <Card.Text>
               I'm a self-motivated developer with a focus on JavaScript and Python development.
               I am always interested to remote US work-from-home opportunities. Feel free to reach out!
               <br/>
               <a href="https://github.com/chrisssssssssssssssssss" target="_blank">Github @chrisssssssssssssssssss</a>
              </Card.Text>
              
        </Card.Body>
        </Card>
        <Card className="mb-3">
        <Card.Body>
              <Card.Title>
               <b>Education</b>
              </Card.Title>
              <Card.Text>
               Associates of Arts in Computer Information Science (2017) 
              </Card.Text>
              <Card.Title>
               <b>Programming Languages</b>
              </Card.Title>
              <Card.Text>
               JavaScript, Python, Java, Swift
              </Card.Text>
              <Card.Title>
               <b>Tech Skills</b>
              </Card.Title>
              <Card.Text>
               ReactJS, Linux, Git, Shopify Liquid
              </Card.Text>
              <Card.Title>
               <b>Skills</b>
              </Card.Title>
              <Card.Text>
               Organization, Lifelong learner, Communication, Teamwork & Collaboration
              </Card.Text>
              <Card.Title>
               <b>Location</b>
              </Card.Title>
              <Card.Text>
               Kansas, USA 
              </Card.Text>
        </Card.Body>
        </Card>
        <Card  className="mb-3 text-center">
        <Card.Body >
        <h3 style={{marginBottom: "1" + 'em'}}>Check out some of my recent projects!</h3>
        <Slide duration={1234} transitionDuration={1234} arrows={false} easing="ease" className="mb-3 text-center">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
        </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
export default Home;