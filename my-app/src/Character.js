import React, { Component } from 'react';
// import increaseCount from './Counter.css';
// import Grid from './Grid.js';

//identify characters
var prepCharacters = [
  ['Ale Garza','Ninja Boy, Deadpool, Supergirl, Teen Titans', 'http://planetcomicon.com/wp-content/uploads/2018/01/AleGarza.jpeg'],
  ['Frank Cho' , 'Wonder Woman, Harley Quinn, Liberty Meadows','http://planetcomicon.com/wp-content/uploads/2017/11/FrankCho.jpg'],
  ['Jason Aaron' , 'Scalped, Star Wars, Southern Bastards, Thor','http://planetcomicon.com/wp-content/uploads/2017/09/jason_aaron.jpg'],
  ['Neal Adams','Green Lantern/Green Arrow, Deadman, Batman','http://planetcomicon.com/wp-content/uploads/2018/01/Neal-Adams1.jpg'],
  ['Arthur Adams','Monkeyman and O’Brian, X-Men, Avengers','http://planetcomicon.com/wp-content/uploads/2017/12/arthur-adams.jpg'],
  ['Jim Cummings','Official Voice for Winnie the Pooh and Tigger, Darkwing Duck','http://planetcomicon.com/wp-content/uploads/2017/12/Jim-Cummings-Headshot.jpg'],
  ['Amy “Lita” Dumas','WWE Hall of Fame Wrestler','http://planetcomicon.com/wp-content/uploads/2017/09/LitaDumas.jpg'],
  ['Amy Jo Johnson','Power Rangers, Felicity','http://planetcomicon.com/wp-content/uploads/2017/09/AmyJJ-e1512794349696.jpg'],
  ['Mathew Lewis','Harry Potter, Ripper Street, Happy Valley','http://planetcomicon.com/wp-content/uploads/2017/10/MatthewLewis-e1510017536944.jpg'],
  ['Michael Rooker','The Walking Dead, Guardians of the Galaxy','http://planetcomicon.com/wp-content/uploads/2017/09/Michael-Rooker_Done-1-e1507229176368.jpg'],
  ['Sean Schemmel','Dragonball Z','http://planetcomicon.com/wp-content/uploads/2017/09/Sean_Schemmel-e1509657695693.jpg'],
  ['Charles Martinet','Voice of Mario and Luigi','http://planetcomicon.com/wp-content/uploads/2017/09/4013-e1509655085170.jpg']
]

//randomize characters
var characters=[];
var randomNum;
var item;
function randomizeCharacters(){
    prepCharacters.forEach(()=>{
      randomNum=Math.floor(Math.random()*prepCharacters.length);
      item = prepCharacters[randomNum];
      if (prepCharacters[randomNum]===item){
        prepCharacters.splice(randomNum,1)
      }
      characters.push(item);
    }
  )
}
randomizeCharacters();
randomizeCharacters();
randomizeCharacters();
randomizeCharacters();

function Randomize(){
characters=[];
randomizeCharacters();
randomizeCharacters();
randomizeCharacters();
randomizeCharacters();
console.log(characters);
}

// how can i move this to Counter.js?
var count=0;
function increaseCount(){
  count=count+1;
  console.log('count increased '+count)
  document.getElementById('guesses').innerHTML=count;
  if (count===12){
    document.getElementById('result').innerHTML='You win!';
    count=-1;
  }
}

function gameOver(){
  document.getElementById('result').innerHTML='Game over. Click to play again.';
  count=-1;
}

//Create Character Component
class Character extends Component {
  constructor(props){
    super(props);
    this.state={
      value:'false'
    }
  }
  render() {
    return (
      <div>
        <button style={{width: '150px', height: '200px'}}
          onClick={()=>{
            if (this.state.value==='true'){
              gameOver();
            };
            this.setState({value:'true'}); 
            increaseCount();
            Randomize();
          }} 
          className="face">
          <img 
          style={{width: '130px', height: '140px'}}
          src={this.props.characters[2]} 
          alt=''/>
          {this.props.characters[0]}
          <br></br>
          <h4>{this.props.characters[1]}</h4>
        </button>
      </div>
    );
  }
}

//group functions for export
const funcs = {
  characters,
  Character
}

export default funcs;
