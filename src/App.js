import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    cards: [],
    showAnswer: false
  }

  componentDidMount() {
    fetch('https://mighty-wildwood-67431.herokuapp.com/cards')
      .then(response => response.json())
      .then(cards => this.setState({ cards }))
  }

  showAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer })
  }

  createCards = () => {
    return this.state.cards.map(card => {
      return <div className="card" key={card.id}>
        <img src="https://gocode.academy/wp-content/uploads/2018/06/javascript-logo.png" alt="javascript-logo" className="javascript-logo" />
        <h2>Question {card.id}: </h2>
        <p>{card.prompt}</p>
        <button onClick={this.showAnswer}>Show Answer</button>
        {this.state.showAnswer ?
          <div>
            <h2>Answer:</h2>
            <p>{card.response}</p>
          </div>
          : null
        }
      </div>
    })
  }

  render() {
    console.log(this.state.showAnswer)
    return (

      <div className="card-container">
        {this.createCards()}
      </div>

    )
  }
}

export default App;
