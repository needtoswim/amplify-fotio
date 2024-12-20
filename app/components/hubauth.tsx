'use client'
import { Hub } from 'aws-amplify/utils';
import SaveUser from '../lib/localstore'

interface User {
  username: string;
  userid: string;
  email: string;
}

  Hub.listen('auth', ({ payload }) => {
    let eventType: string = "No Event"
    console.log('payload.event',payload.event)
    switch (payload.event) {
      case 'signedIn':
        eventType = "Signed In"
        const currentUser: User = {
          "username": payload.data.username,
          "userid": payload.data.userId,
          "email": payload.data.loginId
        };
        console.log("Sign in user", currentUser)
        SaveUser(currentUser)
               
        break;
      case 'signedOut':
        eventType = "Signed Out"
         console.log('user have been signedOut successfully.');
        // console.log('SignedOut Payload', payload)
        break;
      case 'tokenRefresh':
        eventType = "Token Refresh"
        console.log('auth tokens have been refreshed.');
        break;
      case 'tokenRefresh_failure':
        eventType = "Token Refresh Failure"
        console.log('failure while refreshing auth tokens.');
        break;
      case 'signInWithRedirect':
        eventType = "Sign In with Redirect"
        console.log('signInWithRedirect API has successfully been resolved.');
        break;
      case 'signInWithRedirect_failure':
        eventType = "Sign In with Redirect Failure"
        console.log('failure while trying to resolve signInWithRedirect API.');
        break;
      
    }
    
  });
  

