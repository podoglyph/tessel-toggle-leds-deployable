import React from 'react';
const API = 'http://192.168.0.42:8888';

function Video() {

  return (
    <div className="container camera-feed">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <img alt="Camera feed" src=`${API}/camera` />
        </div>
      </div>
    </div>
  )
}

export default Video;
