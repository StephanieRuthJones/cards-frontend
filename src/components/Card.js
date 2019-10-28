import React from 'react'

class Card extends React.Component {
    state = {
        showAnswer: false
    }

    setShowAnswer = () => {
        this.setState({ showAnswer: !this.state.showAnswer })
    }

    render() {
        const { card } = this.props
        const { setShowAnswer } = this
        const { showAnswer } = this.state
        
        return (
            <div className="card">
                <img src="https://gocode.academy/wp-content/uploads/2018/06/javascript-logo.png" alt="javascript-logo" className="javascript-logo" />
                <h2>Question {card.id}: </h2>
                <p>{card.prompt}</p>
                <button onClick={setShowAnswer}>Show Answer</button>
                {showAnswer ?
                    <div>
                        <h2>Answer:</h2>
                        <p>{card.response}</p>
                    </div>
                    : null
                }
            </div>
        )
    }
}


export default Card