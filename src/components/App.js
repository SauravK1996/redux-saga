import React from 'react';
import {connect} from 'react-redux';
import {getUserRequest, createUserRequest, deleteUserRequest, usersError} from '../actions/usersActions';
import UsersList  from './UsersList';
import NewUserForm from './NewUserForm';
import {Alert} from 'reactstrap';


class App extends React.Component {
  constructor(props){
    super(props);

    this.props.getUserRequest();
  }

  handleSubmit = ({firstName, lastName}) => {
    //console.log(firstName, lastName);
    this.props.createUserRequest({
      firstName,
      lastName
    });
  };

  handleDeleteUserClick = (userId) => {
    this.props.deleteUserRequest(userId); 
  }

  handleCloseAlert = () => {
    this.props.usersError({
      error: ''
    });
  };

  render(){
    const users = this.props.users;
    return (
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        <Alert color="danger" isOpen={!!this.props.users.error} toggle={this.handleCloseAlert}>
          {this.props.users.error}
        </Alert>
        <NewUserForm onSubmit={this.handleSubmit} />
        <UsersList onDeleteUser={this.handleDeleteUserClick} users={users.items}/>
      </div>
    );
  }
}

export default connect(({users}) => ({users}),{
  getUserRequest,
  createUserRequest,
  deleteUserRequest,
  usersError
})(App);
