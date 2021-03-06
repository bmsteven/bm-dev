import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Statistics from "../components/Statistics";

const Countries = () => {
  const [countr, setCountr] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://covid19.mathdro.id/api/countries")
        .then(res => res.json())
        .catch(err => console.error(err));
      setCountr(data);
    };
    fetchData();
  }, []);
  return countr;
};

// const Country = () => {
//   const [count, setCount] = useState();
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetch("https://covid19.mathdro.id/api/countries")
//         .then(res => res.json())
//         .catch(err => console.error(err));
//       setCount(data);
//     };
//     fetchData();
//   }, []);
//   return count;
// };

const NavBar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='logo'>
          <h1>
            <Link to='/'>COVID-19</Link>
          </h1>
        </div>
        {/* <div className='burger'>
          <span></span>
        </div> */}
        <ul>
          <li>
            <Link to='/'>Nyumbani</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const AllCountries = () => {
  const countr = Countries();
  console.log(countr);
  // const count = Country();
  // console.log(count);
  useEffect(() => {
    document.title = `All countries COVID-19 - coronavirus pandemic updates`;
  });
  return (
    <>
      <NavBar />
      <main>
        <div className='allcountries'>
          <div className='container'>
            <ul>
              <li>Country</li>
              {!countr ? (
                <span>Loading</span>
              ) : (
                <>
                  {Object.entries(countr.countries).map(([country, code]) => {
                    return <li key={country}>{country}</li>;
                  })}
                </>
              )}
            </ul>
            <ul>
              <li>
                <span>Confirmed</span>
                <span>Recovered</span>
                <span>Positive</span>
                <span>Deaths</span>
              </li>
              <li>
                {/* {Object.entries(countr.countries).map(([country, code]) => {
                  return (
                    <Statistics
                      url={`https://covid19.mathdro.id/api/countries/${country}`}
                      key={country}
                    />
                  );
                })} */}
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default AllCountries;
