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
          <a href="https://github.com/mcook2323" target="_blank" rel="noreferrer">
            Matt Cook
          </a>
          .
        </p>
        <hr />
        <p>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="https://stackoverflow.com/?newreg=532d27c0694f4960bc48c5e98e9b7756" target="_blank" rel="noreferrer">
            Stack Overflow
          </a>
        </p>
      </Content>
    </FooterContainer>
  );
}

export default Footer;
