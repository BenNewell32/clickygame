import React, { Component } from 'react';
import './Counter.css';

//had to move to to grid.js.... 
var count=0;
// function increaseCount(){
//   count=count+1;
//   console.log('count increased '+count)
//   document.getElementById('guesses').innerHTML=count;
// }

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="">
          <div id='counterdiv'>
          Counter:<div id='guesses'>{count}</div>
          </div>
        </div>
        <br>
        </br>
        {/* <button onClick={increaseCount} id='testbutton'>click</button> */}

      </div>
    );
  }
}

export default Counter;
