import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook,FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const liStyle={
    listStyleType:"none"
  }
  return (
    <footer className="bg-light py-3 ">
      <Container className='d-flex '>
        <div style={{width:"400px"}}>
        <ul className='d-flex justify-content-between' style={liStyle}>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
          <li><a href='#'>Terms of Use</a></li>
          <li><a href='#'>Privacy Policy</a></li>
        </ul>
        <p className="mb-0">© Your Website 2024. All Rights Reserved.</p>
        </div>
        <div style={{marginLeft:"800px"}}>
        <FaFacebook size={"30"} className="text-primary"/>
        <FaTwitter size={"30"} className="text-primary"/>
        <FaInstagram size={"30"} className="text-primary"/>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
