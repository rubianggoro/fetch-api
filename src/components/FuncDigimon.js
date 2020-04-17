import React, { useState } from "react";
import axios from "axios";

const FuncDigimon = () => {
  const [digimon, setDigimon] = useState([]);

  React.useEffect(() => {
    axios
      .get("https://digimon-api.herokuapp.com/api/digimon")
      .then((res) => {
        setDigimon(res.data);
      })
      .catch((eror) => {
        console.log(eror);
      });
  }, []);

  return (
    <div>
      <h1>Gambar Digimon</h1>
      {digimon.map((item, index) => (
        <img key={index} src={item.img} />
      ))}
    </div>
  );
};

export default FuncDigimon;
