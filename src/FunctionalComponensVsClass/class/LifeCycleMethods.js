/*
Mounting Phase:
{
    constructor: Called when an instance of the component is created.
    render: Renders the component.
    componentDidMount: Invoked after the component is inserted into the DOM.
}

Updating Phase:
{
    shouldComponentUpdate: Decides if the component should re-render.
    render: Renders the updated component.
    componentDidUpdate: Invoked after the component updates.
}
Unmounting Phase:
{
    componentWillUnmount: Called just before the component is removed from the DOM.
}
*/

/*
 In a general sense, you'd use "componentDidMount" for tasks that should happen after the component is first rendered, and "componentDidUpdate" for actions that need to occur after each update. If you're cleaning up resources when a component is removed, "componentWillUnmount" is the go-to. It all depends on when you want certain tasks to happen in the component's lifecycle.
 */
/* Hoy en dia se usan hooks en vez de estos lifecycleMethods, pero hay momentos en donde se pueden usar tambien estas*/

 import React, { Component } from 'react';

 class UserProfile extends Component {
   constructor(props) {
     super(props);
     this.state = {
       userId: props.userId,
       userData: null,
     };
   }
 
   // componentDidMount: Fetch initial user data when the component mounts
   componentDidMount() {
     this.fetchUserData();
   }
 
   // componentDidUpdate: Update user data if the userId prop changes
   componentDidUpdate(prevProps, prevState) {
     if (prevProps.userId !== this.props.userId) {
       this.setState({ userId: this.props.userId }, () => {
         this.fetchUserData();
       });
     }
   }
 
   // componentWillUnmount: Cleanup any resources, subscriptions, etc.
   componentWillUnmount() {
     // You could unsubscribe from any subscriptions or clear resources here
     console.log("UserProfile component is about to unmount!");
   }
 
   // Fetch user data from an API
   fetchUserData() {
     const { userId } = this.state;
 
     fetch(`https://api.example.com/users/${userId}`)
       .then(response => response.json())
       .then(userData => {
         this.setState({ userData });
       })
       .catch(error => {
         console.error('Error fetching user data:', error);
       });
   }
 
   render() {
     const { userData } = this.state;
 
     if (!userData) {
       return <p>Loading user data...</p>;
     }
 
     return (
       <div>
         <h1>User Profile</h1>
         <p>Name: {userData.name}</p>
         <p>Email: {userData.email}</p>
         {/* Display other user details */}
       </div>
     );
   }
 }
 
 export default UserProfile;


 /*
 In this example:

componentDidMount: When the component first mounts, it fetches the initial user data.
componentDidUpdate: If the userId prop changes, it updates the component's state and fetches the corresponding user data.
componentWillUnmount: It logs a message when the component is about to unmount. You could use this to clean up any resources or subscriptions.

This scenario mimics a common use case where you want to fetch and display user data based on a provided userId. The lifecycle methods help manage the initialization, updates, and cleanup of the component
*/