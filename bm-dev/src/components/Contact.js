import React from 'react';

//dependencies
import {
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaInstagram
} from "react-icons/all";

//styles
import "../styles/components/contact/contact.css"


const Contact = () => {
    return (
      <div className="contact" id="subscribe">
        <div className="container">
          <div className="subscribe">
            <form netlify>
              <label htmlFor="email">
                <input type="email" placeholder="Enter your email address" />
                <button type="submit" className="btn-primary">Subscribe to my newsletter</button>
              </label>
            </form>
          </div>
          <div className="social-media">
            <a href="http://www.youtube.com/">
              <FaYoutube className="icon" />
            </a>
            <a href="http://www.twitter.com/">
              <FaTwitter className="icon" />
            </a>
            <a href="http://www.facebook.com/">
              <FaFacebookF className="icon" />
            </a>
            <a href="http://www.github.com/">
              <FaGithub className="icon" />
            </a>
            <a href="http://www.instagram.com/">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </div>
    );
}

export default Contact;
