import React from 'react';

function Resume() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Resume</h1>
      <div style={contentStyle}>
        <p>Download my resume:</p>
        <a href="/images/Resume - Google Docs.pdf" download style={linkStyle}>Download PDF</a>
      </div>
    </div>
  )
}

const containerStyle = {
  border: '2px solid #ccc',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '400px', 
  margin: 'auto', 
};

const titleStyle = {
  marginBottom: '20px',
  textAlign: 'center', 
};

const contentStyle = {
  textAlign: 'center',
};

const linkStyle = {
  textDecoration: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  backgroundColor: 'darkgreen',
  color: '#fff',
};

export default Resume;
