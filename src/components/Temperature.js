import React, { Component } from 'react';
import axios from 'axios';

const API = 'http://192.168.0.42:8888/temperature';

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTempF: null,
      currentTempC: null
    }
  }

  componentDidMount() {
    setInterval( () => {
      axios.get(API)
        .then(({ data }) => {
          console.log(data);
          this.setState({
            currentTempF: data.degreesF.toFixed(1),
            currentTempC: data.degreesC.toFixed(1)
          });
        })
        .catch((err)=> {})
    },3000)
  }

  render() {
    return (
      <div className="overlay-temp">
        <span className="overlay-temp-C">{ this.state.currentTempC }&#8451;</span><br />
        <span className="overlay-temp-F">{ this.state.currentTempF }&#8457;</span>
      </div>

    );
  }
}

export default Temperature;
