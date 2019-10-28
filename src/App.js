import React from 'react';
import './App.css';

import Card from './components/Card'
import CardContainer from './components/CardContainer';

class App extends React.Component {
  state = {
    cards: []
  }

  componentDidMount() {
    fetch('https://mighty-wildwood-67431.herokuapp.com/cards')
      .then(response => response.json())
      .then(cards => this.setState({ cards }))
  }


  createCards = () => {
    return this.state.cards.map(card => {
      return <Card key={card.id} card={card} />
    })
  }

  render() {
    return (
      <div>
        <CardContainer cards={this.state.cards} />
      </div>

    )
  }
}

export default App;
