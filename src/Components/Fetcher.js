import React from 'react';
import axios from 'axios';

class Fetcher extends React.Component {
  constructor(props){
    super();
    this.state = {
      quote: "",
      character:"",
      image: "",
      characterDirection: false
    }
  }

  componentDidMount = () => {
    axios.get ("https://quests.wilders.dev/simpsons-quotes/quotes")
    .then(
      response => {
        const quotes = response.data[0].quote;
        const characters = response.data[0].character;
        const images = response.data[0].image;
        const charactersDirection = response.data[0].characterDirection;

        this.setState({
          quote: quotes,
          character: characters,
          image: images,
          characterDirection: charactersDirection,
        })
      }
    )
  }
  
  render(){
    return(
      <div>
        <p>{this.state.character}</p>
        <img src= {this.state.image}/>
        <p>{this.state.quote}</p>
        <p>{this.state.characterDirection}</p>
        <button type="button" onClick={this.componentDidMount}>
          click Me
        </button>
      </div>
    )
  }
  
}

export default Fetcher;