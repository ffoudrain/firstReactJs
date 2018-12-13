import React, { Component } from 'react';
//test
class Customers extends Component {
  constructor(){
    super();
    this.state = {
      customers: []
    }

  }

  componentDidMount(){
    fetch('/api/customers')
    .then(res=>res.json())
    .then(customers => this.setState({customers}, () => console.log('Customers fetched', customers)))
  }


  render() {
    return (
      <div>
        <h2>Customers</h2>
          {this.state.customers.map(customers =>
            <ul key={customers.id}>
              <li>{customers.firstName}</li>
              <li>{customers.lastName}</li>
            </ul>
          )}
      </div>
    );
  }
}

export default Customers;
