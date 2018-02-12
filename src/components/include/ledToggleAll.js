import React from 'react';

const toggleAll = ['All On', 'Reset'];

const ledToggleAll = toggleAll.map((status, index) => {
  return (
    <div className="led-indicator col-md-6" key={index}>
      <button onClick={this.allLeds} className="led-button led-reset" data-led={status}>
        {status}
      </button>
    </div>
  )
});

export default ledToggleAll;
