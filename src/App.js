// import logo from './logo.svg';

import './App.css';
import app from './firebase.init';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';  
import { useState } from 'react';

const auth= getAuth(app)

function App() {
  const [user,setUser]= useState({})
  const provider = new GoogleAuthProvider();
  
  const handleGoogleSignIn =()=>{
    signInWithPopup(auth,provider)
    .then(result=>{
      const user= result.user;
      setUser(user)
      console.log(user)
    })
    .catch(error=>{
      console.error('error',error)
    })
  }
  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
      setUser({})
    })
    .catch(error=>{
      setUser({})
    })
  }
  const githubProvider = new GithubAuthProvider()
  const handleGithubSingIn=()=>{
    signInWithPopup(auth,githubProvider)
    .then(result=>{
      const user= result.user
      setUser(user)
      console.log(user)
    })
    .catch(error=>{
      console.error(error)
    })
  }
 
  return (
    <div className="App">
      {
        user.uid?<button onClick={handleSignOut}>sing-Out</button> : 
        <>
        <button onClick={handleGoogleSignIn} >Google Sing In</button>
        <button onClick={handleGithubSingIn} >Github-log-In</button>

        </>
      }
       
        
    
    <h3>Name of the user: {user.displayName}</h3>
    <h4> email: {user.email}</h4>
    <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
