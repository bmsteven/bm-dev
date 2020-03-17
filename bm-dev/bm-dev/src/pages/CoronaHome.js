import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageData from "../components/coronaImage";
import Stats from "../components/Stats";

//images
import Hero from "../images/hero.svg";
import Cough from "../images/cough.svg";
import Fever from "../images/fever.svg";
import Breath from "../images/breath.svg";

const Emergency = () => {
  return (
    <div className='emergency'>
      <div className='container'>
        <div className='left'>Unajihisi una dalili za COVID-19?</div>
        <div className='right'>
          <span>
            piga: <a href='tel:0800110124'>0800110124</a>
            <span> au</span>
          </span>
          <span>
            piga: <a href='tel:0800110125'>0800110125</a>
          </span>
        </div>
      </div>
    </div>
  );
};

const Source = () => {
  return (
    <div className='source'>
      <div className='container'>
        <div className='left'>
          <h2>
            Huu ukurasa unatoa taarifa juu ya ugonjwa wa COVID-19, dalili na
            namna ya kujikinga na ugonjwa wa <span>COVID-19</span>
          </h2>
          <p>
            taarifa zote zinatoka moja kwa moja kutoka Chuo Kikuu cha John
            Hopkins kilichopo Marekani.
          </p>
          <a
            href='https://covid19.mathdro.id/api'
            target='_blank'
            rel='noopener noreferrer'
          >
            Source
          </a>
        </div>
        <div className='right'>
          <img src={Hero} alt='' />
        </div>
      </div>
    </div>
  );
};

// const Comparison = () => {

// }

const CoronaHome = () => {
  useEffect(() => {
    document.title = `COVID-19 - coronavirus pandemic updates`;
  });
  return (
    <main>
      <Emergency />
      <Source />
      <div className='stats' id='facts'>
        <div className='container'>
          <h1>Taarifa</h1>
          <div className='world facts'>
            <p>Hii ni taarifa ya COVID-19 ya dunia yote</p>
            <Stats url='https://covid19.mathdro.id/api' />
          </div>
          <div className='tz facts'>
            <p>Taarifa za tanzania juu ya corona virus</p>
            <Stats url='https://covid19.mathdro.id/api/countries/tz' />
          </div>
          <Link to='/all-countries'>View all countries</Link>
        </div>
      </div>
      <div className='symptoms' id='symptoms'>
        <div className='container'>
          <h2>Dalili kuu za corona</h2>
          <p></p>
          <div className='showcase'>
            <article>
              <img src={Fever} alt='' />
              <h2>Homa na Joto la mwili kupanda</h2>
            </article>
            <article>
              <img src={Cough} alt='' />
              <h2>Kikohozi kikavu na mafua</h2>
            </article>
            <article>
              <img src={Breath} alt='' />
              <h2>Upumuaji wa shida</h2>
            </article>
          </div>
        </div>
      </div>
      <Emergency />
      <div className='corona-map'>
        <ImageData />
      </div>
    </main>
  );
};

export default CoronaHome;
