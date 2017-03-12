require ('dotenv').config();
import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = ( {setLoggedIn} ) => {

  const responseGoogle = (res) => {
    if (res.err) {
      throw res.err;
    } else {
      const { tokenId, profileObj } = res;
      console.log( profileObj )
      setLoggedIn(profileObj)
    }
  }

  const client_id = "860669603492-us0ks2kc55468d6b7lrucpvot1942ght.apps.googleusercontent.com"

  return (
    <div>
      <GoogleLogin
        clientId={client_id}
        className="google-login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        buttonText="Login With Google"
      />
    </div>
  )
}

export default Login;


