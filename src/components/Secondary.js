import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addName, addPlace } from '../_actions/secondaryActions';

 class Secondary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(e){
        const { value, name } = e.target;
        console.log(value);
        console.log(name);
        if(name === 'fname'){
            this.props.addName(value);
        }

        if(name === 'place'){
            this.props.addPlace(value);
        }

    }
    
    render() {
        const { name, place } = this.props.secondary;
        return (
            <div>
                <h2>Name::{name}</h2>
                <h2>Place::{place}</h2>
                <div>
                <input
                    type='text'
                    placeholder='Insert Name'
                    name='fname'
                    onChange={this.handleOnChange}
                />
                </div>
                <div>
                <input
                    type='text'
                    name='place'
                    placeholder='Insert Place'
                    onChange={this.handleOnChange}
                />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        secondary: state.secondary
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addName: (value) => {
        dispatch(addName(value))
      },
      addPlace: (value)=> {
        dispatch(addPlace(value))
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps )(Secondary)