//this file is responsible for displaying the survey and updating the visuals
//according to responses creation and interaction
import React from 'react';
import ReactDOM from 'react-dom';

var Survey = React.createClass({

  // initial expression is empty
  getInitialState: function(){
    return {
    };
  },

  render: function() {
    return(
      <div>
        <p>I want to plan a <span>
          <select>
            <option value="none"></option>
            <option value="romance">romantic getaway</option>
            <option value="wedding">wedding</option>
            <option value="cruise">cruise</option>
          </select>
        </span></p>
        <p>where I stay <span>
          <select>
            <option value="none"></option>
            <option value="downtown">downtown</option>
            <option value="beach">on the beach</option>
            <option value="tent">in a tent</option>
          </select>
        </span></p>
        <p>and arrive by <span>
          <select>
            <option value="none"></option>
            <option value="plane">plane</option>
            <option value="train">train</option>
            <option value="boat">boat</option>
          </select>
        </span>.</p>
      </div>
    );
  }
});

// adds calculator to DOM
ReactDOM.render(<Survey />, document.getElementById('container'));
