import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {

    render() {
        return (
            <div>
                <button className = "btn btn-warning btn-sm m-3" 
                onClick={this.props.onReset}>Reset</button>

                { this.props.counters.map(counter => 
                <Counter
                key={counter.id}
                onDelete={this.props.onDelete} 
                counter={counter}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement} />)}
            </div>
        )
    }
}

export default Counters;