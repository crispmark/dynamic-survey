//this file is responsible for displaying the survey and updating the visuals
//according to responses creation and interaction
import React from 'react';
import ReactDOM from 'react-dom';

var Survey = React.createClass({

  //initial destination, location, and transportation are "none"
  getInitialState: function(){
    return {
      destination: "none",
      location: "none",
      transportation: "none"
    };
  },

  //set the destination to the new selection
  setDestination: function(event) {
    this.setState({destination: event.target.value});
  },

  //set the location to the new selection
  setLocation: function(event) {
    this.setState({location: event.target.value});
  },

  render: function() {
    var destination = this.state.destination;
    var locImgSrc = getLocationImage(this.state.location);
    if (locImgSrc) {
      var locImg = (<img src={locImgSrc}/>)
    }

    return(
      <div id={destination}>
        {locImg}
        <div className="surveyText">
          <p>I want to plan<span>
            <select onChange={this.setDestination}>
              <option value="none"></option>
              <option value="romance">a romantic getaway</option>
              <option value="adventure">an adventure</option>
              <option value="cruise">a cruise</option>
            </select>
          </span></p>
          <p>where I stay<span>
            <select onChange={this.setLocation}>
              <option value="none"></option>
              <option value="downtown">downtown</option>
              <option value="beach">on the beach</option>
              <option value="tent">in a tent</option>
            </select>
          </span></p>
          <p>and arrive by<span>
            <select>
              <option value="none"></option>
              <option value="plane">plane.</option>
              <option value="train">train.</option>
              <option value="boat">boat.</option>
            </select>
          </span></p>
        </div>
      </div>
    );
  }
});

//returns the image source for the provided location
function getLocationImage(location) {
  switch(location) {
    case "downtown":
    return "/images/skyscraper.png"
    case "beach":
    return "/images/palmtree.png"
    case "tent":
    return "/images/tent.png"
  }
}

// adds calculator to DOM
ReactDOM.render(<Survey />, document.getElementById('container'));
