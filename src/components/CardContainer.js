import React from 'react'

import Card from './Card'

class CardContainer extends React.Component {

    createCards = () => {
        return this.props.cards.map(card => {
            return <Card key={card.id} card={card} />
        })
    }

    render() {
        return (
            <div className="card-container">
                {this.createCards()}
            </div>
        )
    }
}

export default CardContainer;
