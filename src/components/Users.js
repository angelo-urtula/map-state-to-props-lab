import React, { Component } from 'react';
// add any needed imports here
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user) => <li>{user.username}</li>)}
          {this.props.total}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, total: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
