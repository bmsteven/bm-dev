import React, { useState, useEffect } from "react";

const useStats = url => {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log("mounting");
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err);
        });
      setStats(data);
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return {
    stats,
    loading,
    error
  };
};

const Stats = ({ url }) => {
  const { stats, loading, error } = useStats(url);
  if (!stats && !error) {
    return <div className='container'>Loading...</div>;
  } else {
    return (
      <>
        <div className='statBlock'>
          confirmed:{" "}
          {stats.confirmed ? (
            <span>{stats.confirmed.value}</span>
          ) : (
            <span>Not recorded</span>
          )}
        </div>
        <div className='statBlock'>
          recovered:{" "}
          {stats.recovered ? (
            <span>{stats.recovered.value}</span>
          ) : (
            <span>Not recorded</span>
          )}
        </div>
        <div className='statBlock'>
          deaths:{" "}
          {stats.deaths ? (
            <span>{stats.deaths.value}</span>
          ) : (
            <span>Not recorded</span>
          )}
        </div>
      </>
    );
  }
};

export default Stats;
