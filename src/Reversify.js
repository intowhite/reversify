import React, { Component } from 'react';
import 'whatwg-fetch';

class Reversify extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
      reverse: null,
      dismissResults: false
    };
  }
  sendReq() {
    fetch('http://localhost:4000/reversify/' + this.state.word)
      .then(function (response) {
        return (response.status === 200 ? response.text() : '');
      })
      .then(response => 
        this.setState({reverse : response})
      );
  }
  handleChange = (event) => {
    this.setState({word:event.target.value}, function(){
      this.sendReq();
    });
  }
  render() {
    return (
      <div className={'Reversify ' + this.props.className}>
        <div className="Reversify-results input-results">
          {this.state.reverse ? 'Reverse of "' + this.state.word + '" > "' + this.state.reverse + '"' : 'What string would you like to reverse?'}
        </div>
        <div className="Reversify-input input-group">
          <input type="text" value={this.state.word} onChange={this.handleChange} />
          <button onClick={() => this.sendReq()}>Reversify</button>
        </div>
      </div>
    )
  }
}

export default Reversify;