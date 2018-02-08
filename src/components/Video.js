import React, { Component } from 'react';

function Video() {
  let vidData = ''

  return (
    <div className="container camera-feed">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <img src='https://65.128.75.135:42222/camera' />
        </div>
      </div>
    </div>
  )
}

export default Video;
