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
    <h2>Question # \*card id number goes here\*: </h2>
    <p>\*question goes here\*</p>
    <h2>Answer:</h2>
    <p>\*correct response goes here\*</p>
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

1. Create a components folder

2. Create a Card component. Take code from App and put into Card component.

3. Refactor createCards function to pass necessary props to Card component.

4. Create CardContainer component.

5. Take code from App and put it in the container component. Include the createCards function and holds cards data in state.


[EOF]
