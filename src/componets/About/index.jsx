import React from "react";
import styled from 'styled-components';

const AboutContainer = styled.div`
  
  h3{
    padding: 0;
    margin: 0;
  }
  h1{
    padding: 0;
    margin:0; 
  }
  p{
    width: 200px;
    padding-top: 10px;
    text-allign: center;
  }
  img{
    width: 300px;
  }
`;



function About() {
  return( 
    <AboutContainer>
      <div>
        <div>
          <h3>Let me introduce myself</h3>
        </div>
        <div>
          <h1>About Me</h1>
          <img src="/images/ProfilePic.jpg"/>
          <p><strong>I am a Full Stack student working out of Columbus Ohio. I love the unique challenges of making code work in specific ways.</strong></p>
        </div>
      </div>
    </AboutContainer>
  )
}

export default About;
