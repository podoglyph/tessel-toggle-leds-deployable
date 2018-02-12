import React, { Component } from 'react';
import axios from 'axios';
import ledIndicators from './include/ledIndicators.js';
import ledToggleAll from './include/ledToggleAll.js';
const API = 'http://192.168.0.42:8888/leds/';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedOn: false,
      isAmberOn: false,
      isGreenOn: false,
      isBlueOn: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.allLeds = this.allLeds.bind(this);
  }

  handleClick(event) {
    let button = event.target;
    let ledIndex = button.getAttribute('data-led');
    let stateSelector = button.getAttribute('data-color');
    let key = `is${stateSelector}On`;

    axios.get(API + ledIndex)
      .then(({ data })=> {
      	console.log(data.on);
        this.setState({
          [key]: data.on
        });
      })
      .catch((err)=> {})
  }

  allLeds(event) {
    let button = event.target;
    let newStatus = button.getAttribute('data-led');
    let updateStatus = null;
    let ledIndex = null;

    if (newStatus === 'All On') {
      ledIndex = 6;
      updateStatus = true;
    } else if (newStatus === 'Reset') {
      ledIndex = 5;
      updateStatus = false;
    } else {
      console.log("Something went wrong.");
    }

    axios.get(API + ledIndex)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          isRedOn: updateStatus,
          isAmberOn: updateStatus,
          isGreenOn: updateStatus,
          isBlueOn: updateStatus
        });
      })
      .catch((err)=> {})
  }

  render() {
    return (
      <div className="container">
        <div className="row row-toggle">
          <div className="col-lg-6 col-lg-offset-3">
            { ledIndicators }
          </div>
        </div>
        <div className="row row-onoff">
          <div className="col-md-12">
            { ledToggleAll }
          </div>
        </div>
      </div>
    )
  }
}

export default Switch;
