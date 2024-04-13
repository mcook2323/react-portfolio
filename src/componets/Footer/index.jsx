import React from "react";
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #262626;
  padding: 0;
`;

const Content = styled.div`
  text-align: center;
  color: #fff;
`;

function Footer() {
  return (
    <FooterContainer>
      <Content>
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="" target="_blank" rel="noreferrer">
            Matt Cook
          </a>
          .
        </p>
        <hr />
        <p>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="" target="_blank" rel="noreferrer">
            Something
          </a>
        </p>
      </Content>
    </FooterContainer>
  );
}

export default Footer;
