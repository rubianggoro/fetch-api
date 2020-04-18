import React, { Component } from "react";
import axios from "axios";

class ClassDigimon extends Component {
  constructor() {
    super();
    this.state = {
      digimon: [],
    };
  }
  async componentDidMount() {
    // axios.get("https://digimon-api.herokuapp.com/api/digimon").then((res) => {
    //   this.setState({ digimon: res.data });
    // });

    // fetch("https://digimon-api.herokuapp.com/api/digimon")
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ digimon: data }));

    const getApi = await axios.get(
      "https://digimon-api.herokuapp.com/api/digimon"
    );
    const data = await getApi.data;
    this.setState({ digimon: data });

    // const getApi = await fetch("https://digimon-api.herokuapp.com/api/digimon");
    // const data = await getApi.json();
    // this.setState({ digimon: data });
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <h1>Ini Digimon</h1>
        <ul>
          {this.state.digimon.map((item, index) => {
            if (index < 10) {
              return <li key={index}>{item.name}</li>;
            }
          })}
        </ul>
      </div>
    );
  }
}
export default ClassDigimon;
