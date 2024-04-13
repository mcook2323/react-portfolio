import React from "react";
import styled from 'styled-components';

const AboutContainer = styled.div`
display: flex;
align-items: center;

@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
  p{
    font-size: 1.2rem;
  }

  img {
    margin-bottom: 20px;
  }
}
`;

const TextContainer = styled.div`
  width: 200px;
`;

function About() {
  return( 
    <AboutContainer>
      <img src="/images/ProfilePic.jpg" alt="Profile"/>
      <TextContainer>
        <h3>Let me introduce myself</h3>
        <h1>About Me</h1>
        <p><strong>I am a Full Stack student working out of Columbus Ohio. I love the unique challenges of making code work in specific ways.</strong></p>
      </TextContainer>
    </AboutContainer>
  )
}

export default About;
