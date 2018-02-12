import React from 'react';

const leds = ['Red', 'Amber', 'Green', 'Blue'];

const ledIndicators = leds.map((led, index) => {
  return (
    <div className="led-indicator col-md-3" key={index}>
      <button onClick={this.handleClick} className="led-button led-reset" id={led} data-led={index} data-color={led}>
        {`this.state.is${led}On` ? 'ON' : 'OFF'}
      </button>
    </div>
  )
});

export default ledIndicators;
