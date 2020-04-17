import React, { Component } from "react";
import axios from "axios";

class ClassDigimon extends Component {
  constructor() {
    super();
    this.state = {
      digimon: [],
    };
  }
  componentDidMount() {
    axios.get("https://digimon-api.herokuapp.com/api/digimon").then((res) => {
      const digi = res.data;
      this.setState({ digimon: digi });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Ini Digimon</h1>
        <ul>
          {this.state.digimon.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ClassDigimon;
