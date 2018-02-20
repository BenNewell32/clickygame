import React, { Component } from 'react';
import './Grid.css';
import funcs from './Character.js';
// import Character from './Character.js';

console.log(funcs);

function renderCharacter(i){
  return( 
    <funcs.Character 
      value={i}
      characters = {funcs.characters[i]}
    />
  )
}

class Grid extends Component {

  constructor(props){
    super(props);
    this.state = {
      characters: Array(1).fill(funcs.characters),
      squaresstate: Array(12).fill(null)
    }
  }

  render() {
    return (
      <div>
        <div className="gridSystem container">
          <div className="row">
            <div id='img0' className="col">
              {renderCharacter(0)}
            </div>
            <div id='img1' className="col">
              {renderCharacter(1)}
            </div>
            <div id='img2' className="col">
              {renderCharacter(2)}
            </div>
            <div id='img3' className="col">
              {renderCharacter(3)}
            </div>
          </div>
          <br></br>
          <div className="row">
            <div id='img4' className="col">
              {renderCharacter(4)}
            </div>
            <div id='img5' className="col">
              {renderCharacter(5)}
            </div>
            <div id='img6' className="col">
              {renderCharacter(6)}
            </div>
            <div id='img7' className="col">
              {renderCharacter(7)}  
            </div>
          </div>
          <br></br>
          <div className="row">
            <div id='img8' className="col">
              {renderCharacter(8)}  
            </div>
            <div id='img9' className="col">
              {renderCharacter(9)}
            </div>
            <div id='img10' className="col">
              {renderCharacter(10)}
            </div>
            <div id='img11' className="col">
              {renderCharacter(11)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
