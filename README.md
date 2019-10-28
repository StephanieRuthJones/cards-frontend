# Practice React App

**PART I: Red to Green**

1. In console, cd into cards-frontend project and run "npm install" in command line

2. Refactor App component into class component, then initialize state with "cards" as a key set to an empty array.

***Why do we need to change the App component from a functional to a class component?***

3. Fetch data from:  <https://mighty-wildwood-67431.herokuapp.com/cards>

4. Set state with data from fetch

***Look up setState() method. What does it do?***

5. Create a function called createCards that iterates over the cards array in state and creates a card for each card object.

```javascript
<div className="card" key={card.id}>
    <img src="https://gocode.academy/wp-content/uploads/2018/06/javascript-logo.png" alt="javascript-logo" className="javascript-logo" />
    <h2>Question # card id number goes here: </h2>
    <p>question prompt goes here</p>
    <h2>Answer:</h2>
    <p>correct response goes here</p>
</div>
```

***Why do we use curly braces to reference "card.id"?***

6. Call function in return() method

```javascript
<div className="card-container">
    {this.createCards()}
</div>
```

***Why do we need the "this" keyword before calling the createCards() function?***

**PART II: Refactor**

1. Create a components directory in the src directory

2. Create a CardContainer.js file in the components directory.

3. Create a stateful CardContainer component in the new js file. Import / export in the appropriate places. 

4. Move App state to CardContainer, including fetch and setState. Ensure UI looks the same as before refactor.

5. Create a stateful Card component. Take appropriate code from CardContainer and put into Card component. Import /export in the appropriate places. Pass props from CardContainer to Card component.

***CHALLENGE: Add a button to the card under the question that conditionally renders the "Answer" portion of card using a boolean, "showAnswer" in Card component state and a function that sets state based on a button click.***

[EOF]
