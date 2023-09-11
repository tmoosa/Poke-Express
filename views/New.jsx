import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div>
        <form action="/pokemon" method="post">
            <h1 style={{textAlign: 'center', fontWeight: 'bolder'}}>Create a New Pokemon </h1>
            Pokemon Name: <input type='text' name='name'/><br />
            Pokemon Pic: <input type='text' name='img'/><br />
            <input type='submit' />
        </form>
      </div>
    )
  }
}