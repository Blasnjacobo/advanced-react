/* eslint-disable no-unused-expressions */
/*
Local state in React refers to the internal data storage specific to a component. In class components, you can declare and manage state using the this.state object. It's information that's local to that particular component and can be changed over time. 
For instance, you might use local state to track user input in a form or manage the visibility of a component.
*/


import React, { Component } from 'react';

/ Tracking user input in a form using local state /

export class InputTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleInputChange}
        />
        <p>User Input: {this.state.userInput}</p>
      </div>
    );
  }
}


/*
El método render() es fundamental en los componentes de React, ya que es el encargado de definir qué debe representarse en el DOM en función del estado actual del componente. Si no tienes el método render(), tu componente no funcionará correctamente.

En React, el método render() se ejecuta automáticamente cuando el estado del componente cambia y cuando el componente se monta por primera vez. Este método devuelve un árbol de elementos React (usualmente JSX) que será renderizado en el DOM.
*/

/ Visibility of a component /


export class VisibilityManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  toggleVisibility = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>Toggle Visibility</button>
        {this.state.isVisible && <p>This component is visible!</p>}
      </div>
    );
  }
}

