import React, { useEffect, useState } from "react";

const MainPage = () => {
  const [data, setData] = useState();

  const fetchPossibilities = async () => {
    await fetch("http://localhost:8000/getPossibilities").then((res) =>
      res.json().then((r) => setData(r.count))
    );
  };

  useEffect(() => {
    fetchPossibilities();
  }, []);

  return (
    <div>
      <h1>
        I CAN GENERATE <br />
        {data}
        <br /> IDEAS
      </h1>
    </div>
  );
};

export default MainPage;
