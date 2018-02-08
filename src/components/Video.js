import React from 'react';

function Video() {

  return (
    <div className="container camera-feed">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <img alt="Camera feed" src='http://192.168.0.42:8888/camera' />
        </div>
      </div>
    </div>
  )
}

export default Video;
