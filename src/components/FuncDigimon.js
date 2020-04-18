import React, { useState, useEffect } from "react";
import axios from "axios";

const FuncDigimon = () => {
  const [digimon, setDigimon] = useState([]);

  useEffect(() => {
    // axios
    //   .get("https://digimon-api.herokuapp.com/api/digimon")
    //   .then((res) => {
    //     setDigimon(res.data);
    //   })
    //   .catch((eror) => {
    //     console.log(eror);
    //   });

    // fetch("https://digimon-api.herokuapp.com/api/digimon")
    //   .then((res) => res.json())
    //   .then((data) => setDigimon(data));

    const getApi = async () => {
      const res = await axios.get(
        "https://digimon-api.herokuapp.com/api/digimon"
      );
      setDigimon(res.data);
    };
    getApi();

    // const getApi = async () => {
    //   const res = await fetch("https://digimon-api.herokuapp.com/api/digimon");
    //   const json = await res.json();
    //   setDigimon(json);
    // };
    // getApi();
  }, []);

  return (
    <div>
      <h1>Gambar Digimon</h1>
      {digimon.map((item, index) => {
        if (index < 10) {
          return <img key={index} src={item.img} alt="img" />;
        }
      })}
    </div>
  );
};

export default FuncDigimon;
