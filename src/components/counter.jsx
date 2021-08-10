import React, { Component } from 'react'

class Counter extends Component {

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    getClassesBadge() {
        let classes = "badge m-3 badge-";
        classes += this.props.counter.value === 0 ? "dark" : "info";
        return classes;
    }

    render() {
        
        return (
        <div>
            <button className="btn btn-danger btn-sm m-3" onClick={() => this.props.onDelete(this.props.counter.id) }>Delete</button>
            <button onClick={() => this.props.onDecrement(this.props.counter) } className='btn btn-success btn-sm pr-2 mr-4'>-</button>
            <span> { this.props.counter.title} </span>
            <span className={ this.getClassesBadge() }>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter) } className='btn btn-success btn-sm ml-2'>+</button>
        </div>
        )
    }
}

export default Counter;