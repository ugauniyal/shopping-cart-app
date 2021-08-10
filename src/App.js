import React, { Component } from 'react'
import './App.css';
import Counters from './components/counters';
import AddCounter from './components/AddCounter';
import Navbar from './components/navbar';

class App extends Component {

state = {
    counters: [
        {id: 1, title:'eggs', value: 3},
        {id: 2, title:'cheese', value: 1},
        {id: 3, title:'eggplant', value: 0},
        {id: 4, title:'cornflakes', value: 0}
    ]
};

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
}

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters });
}

handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters })
}

handleDecrement = (counter) => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};

  if (counters[index].value > 0) {
    counters[index].value--;
  }

  else if (counters[index].value < 0) {
    counters[index].value = 0;
  }

  this.setState({ counters })
}

  render() {
  return (
    <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <AddCounter />
        <Counters counters={this.state.counters} 
        onReset={this.handleReset} 
        onDelete={this.handleDelete} 
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}/>
      </main>
    </React.Fragment>
  )};
};

export default App;
