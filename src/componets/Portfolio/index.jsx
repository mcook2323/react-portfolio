import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PortfolioContainer = styled.div`
  padding-top: 15%; 
  padding-bottom: 10%;
`;

const Heading = styled.h1`
  margin-top: 0;
`;

const CustomCard = styled(Card)`
  &:hover {
    transform: translateY(-5px); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  }
`;
const CustomLink = styled.a`
  color: black; 
`;

function Portfolio() {
  return (
    <PortfolioContainer>
      <Heading>Projects</Heading>
      <Row>
        <Col md={4} className="mb-4">
          <CustomCard>
            <Card.Img variant="top" src="/images/weather.jpg" alt="weather image" />
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <Card.Text>
                <CustomLink href='https://mcook2323.github.io/weather-dashboard/' target='_blank'>Live Link</CustomLink><br></br>
                <CustomLink href='https://github.com/mcook2323/weather-dashboard' target='_blank'>Github</CustomLink>
              </Card.Text>
            </Card.Body>
          </CustomCard>
        </Col>
        <Col md={4} className="mb-4">
          <CustomCard>
            <Card.Img variant="top" src="/images/noteTaking.jpg" alt="Note Taking" />
            <Card.Body>
              <Card.Title>Note Taker</Card.Title>
              <Card.Text>
              <CustomLink href='https://note-taker23-de0287693503.herokuapp.com/' target='_blank'>Live Link</CustomLink><br></br>
                <CustomLink href='https://github.com/mcook2323/note-taker' target='_blank'>Github</CustomLink>
              </Card.Text>
            </Card.Body>
          </CustomCard>
        </Col>
        <Col md={4} className="mb-4">
          <CustomCard>
            <Card.Img variant="top" src="/images/Calendar.jpg" alt="Card image" />
            <Card.Body>
              <Card.Title>Calendar Project</Card.Title>
              <Card.Text>
              <CustomLink href='https://mcook2323.github.io/calendar-project/' target='_blank'>Live Link</CustomLink><br></br>
                <CustomLink href='https://github.com/mcook2323/calendar-project' target='_blank'>Github</CustomLink>
              </Card.Text>
            </Card.Body>
          </CustomCard>
        </Col>
        <Col md={4} className="mb-4">
          <CustomCard>
            <Card.Img variant="top" src="/images/Crypto.jpg" alt="Crypto" />
            <Card.Body>
              <Card.Title>CryptoMania</Card.Title>
              <Card.Text>
              <CustomLink href='https://hokage-216.github.io/the-A-team/' target='_blank'>Live Link</CustomLink><br></br>
                <CustomLink href='https://github.com/hokage-216/the-A-team' target='_blank'>Github</CustomLink>
              </Card.Text>
            </Card.Body>
          </CustomCard>
        </Col>
        <Col md={4} className="mb-4">
          <CustomCard>
            <Card.Img variant="top" src="/images/Password.jpg" alt="Password" />
            <Card.Body>
              <Card.Title>Password Generator</Card.Title>
              <Card.Text>
              <CustomLink href='https://mcook2323.github.io/password-generator/' target='_blank'>Live Link</CustomLink><br></br>
                <CustomLink href='https://github.com/mcook2323/password-generator' target='_blank'>Github</CustomLink>
              </Card.Text>
            </Card.Body>
          </CustomCard>
        </Col>
        <Col md={4} className="mb-4">
          <CustomCard>
            <Card.Img variant="top" src="/images/Quiz.jpg" alt="Quiz" />
            <Card.Body>
              <Card.Title>Quiz Code</Card.Title>
              <Card.Text>
              <CustomLink href='https://mcook2323.github.io/quiz-code/' target='_blank'>Live Link</CustomLink><br></br>
                <CustomLink href='https://github.com/mcook2323/quiz-code' target='_blank'>Github</CustomLink>
              </Card.Text>
            </Card.Body>
          </CustomCard>
        </Col>
      </Row>
    </PortfolioContainer>
  );
}

export default Portfolio;
