import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='logo'>
          <h1>
            <Link to='/'>COVID-19</Link>
          </h1>
        </div>
        <div className='burger'>
          <span></span>
        </div>
        <ul>
          <li>
            <Link to='/#'>Nyumbani</Link>
          </li>
          <li>
            <Link to='/#facts'>Taarifa</Link>
          </li>
          <li>
            {/* <Link to='/corona-updates'>Statistics</Link> */}
          </li>
          <li>
            <Link to='/#symptoms'>Dalili</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
