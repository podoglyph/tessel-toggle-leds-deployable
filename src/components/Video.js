import React from 'react';
import Time from './Time.js';
import Temperature from './Temperature.js';

const API = 'http://192.168.0.42:8888/camera';

function Video() {

  return (
    <div className="container camera-feed">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <div className="image-overlay">
            <div className="image-overlay-data">
              <Time />
              <Temperature />
              <img alt="Camera feed" src={API} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video;
