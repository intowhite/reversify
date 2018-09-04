import React, { Component } from 'react';

class Restful extends Component {
  constructor() {
    super();
    this.state = {
      url: 'http://localhost:4000/restful',
      response: null,
      success: null,
      loading: false,
      status: null
    };
  }
  sendReq(method) {
    this.setState({loading: true});
    // Simulate a bit of time so you can see the animation
    setTimeout(() => {
      fetch(this.state.url,{
        method: method
      })
      .then(response =>
        {
          this.setState({status: response.status});
          return (response.status === 200 ? response.text() : method + ' Fail - invalid URL or method!');
        }
      )
      .then(response =>
        this.setState({
          response: response,
          success: this.state.status === 200 ? true : false,
          loading: false
        })
      )
      .catch(error => 
        this.setState({
          response: method + ' Fail - invalid URL or method!',
          success: false,
          loading: false,
          status: 404
        })
      );
    }, 830)
  }
  handleChange = (event) => {
    this.setState({url:event.target.value});
  }
  render() {
    return (
      <div className={(this.state.loading ? 'loading Restful ' : "Restful ") + this.props.className}>
        <div className={
          'Restful-results input-results ' +
          (this.state.loading ? 'loading ' : ' ') +
          (this.state.status === 200 && this.state.success === true ? 'Restful-success ' : ' ') +
          (this.state.status && this.state.success === false ? 'Restful-fail ' : ' ')
          }>
          {this.state.response ? this.state.response : 'Make a request!'}
        </div>
        <div className='Resful-input input-group'>
          <input type="text" value={this.state.url} onChange={this.handleChange} />
          <div className="Restful-switch">
            <button onClick={() => this.sendReq('GET')}>GET</button>
            <button onClick={() => this.sendReq('POST')}>POST</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Restful;