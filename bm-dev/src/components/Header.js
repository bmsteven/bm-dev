import React from 'react';

//dependencies
import { Link } from "react-router-dom"
import { FaYoutube, FaTwitter, FaFacebookF, FaGithub, FaInstagram } from "react-icons/all"

//images
import logo from "../images/logo.png"
import dp from "../images/dp.png"

//styles
import "../styles/components/header/header.css"

//top-navigation bar
const TopNav = () => {
    return (
      <nav className="top-nav">
        <div className="top-nav-container container">
          <div className="burger">
            <span></span>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="bm-dev logo" />
            </Link>
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
      </nav>
    );
}

//main-navigation bar
const MainNav = () => {
    return (
      <nav className="main-nav">
        <div className="container main-nav-container">
          <ul>
            <li>
              <Link to="/" className="active">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

//banner
const Banner = () => {
    return (
      <div className="banner">
        <div className="container">
          <div className="profile-details">
            <div className="image-container">
              <img src={dp} alt="dp" />
            </div>
            <div className="name-container">
              <h1>Benedict Steven</h1>
            </div>
          </div>
          <div className="site-details">
            <div className="header">
              <h1>Welcome to my site</h1>
            </div>
            <div className="site-description">
                <p>
                    Secondary line text Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nam massa quam. Secondary line text Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Nam massa quam.
                    Secondary line text Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nam massa quam.
                </p>
                <a href="#subscribe" className="btn-primary">Subscribe to my newsletter</a>
            </div>
          </div>
        </div>
      </div>
    );
}

const Header = () => {
    return (
        <header className="header-container">
                <TopNav/>
                <MainNav/>
                <Banner/>
        </header>
    );
}

export default Header;
