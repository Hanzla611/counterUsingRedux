import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../_actions/counterActions';

class Counter extends Component {
    constructor(props) {
        super(props)
    

        // this.state = {
        //      counterValue: 0
        // }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        // this.setState({
        //     counterValue: this.state.counterValue + 1
        // })
        this.props.add(10);
    }

    decrement(){
        // this.setState({
        //     counterValue: this.state.counterValue - 1
        // })
        this.props.subtract(5);
    }
    
    render() {
            // const { counterValue } = this.state;
        return (
            <div>
                <div>Value: {this.props.count}</div>
                <div>
                    <button onClick={this.increment}>Incremnet +</button>
                    <button onClick={this.decrement}>Decrement -</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      add: (value) => {
        dispatch(incrementCounter(value))
      },
      subtract: (value)=> {
        dispatch(decrementCounter(value))
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps )(Counter)
